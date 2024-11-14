"use client"; // Indicates that this component is a client component in Next.js

import * as React from "react"; // Importing the React library for building components
import * as RechartsPrimitive from "recharts"; // Importing all exports from the Recharts library

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class name merging

// Define available themes with their corresponding CSS selectors
const THEMES = { light: "", dark: ".dark" } as const;

// Type definition for chart configuration
export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode; // Optional label for the chart item
    icon?: React.ComponentType; // Optional icon component for the chart item
  } & (
    | { color?: string; theme?: never } // Either a color or a theme
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  ); // Or a theme with colors
};

// Type definition for the context properties
type ChartContextProps = {
  config: ChartConfig; // Chart configuration
};

// Creating a context for the chart configuration
const ChartContext = React.createContext<ChartContextProps | null>(null);

// Custom hook to use the Chart context
function useChart() {
  const context = React.useContext(ChartContext); // Accessing the Chart context

  // Throwing an error if the hook is used outside of a ChartContainer
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context; // Returning the context
}

// ChartContainer component definition using React.forwardRef
const ChartContainer = React.forwardRef<
  HTMLDivElement, // Type of the ref (HTMLDivElement)
  React.ComponentProps<"div"> & {
    // Props type for the component
    config: ChartConfig; // Chart configuration
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]; // Children props for ResponsiveContainer
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId(); // Generating a unique ID for the chart
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`; // Creating a chart ID

  return (
    <ChartContext.Provider value={{ config }}>
      {" "}
      {/* Providing the chart configuration */}
      <div
        data-chart={chartId} // Setting a data attribute for the chart ID
        ref={ref} // Ref for the outer div
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className // Merging additional class names
        )}
        {...props} // Spreading other props
      >
        <ChartStyle id={chartId} config={config} />{" "}
        {/* Applying chart styles */}
        <RechartsPrimitive.ResponsiveContainer>
          {" "}
          {/* Responsive container for the chart */}
          {children} {/* Rendering child components */}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart"; // Setting display name for debugging

// ChartStyle component to apply dynamic styles based on the chart configuration
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  // Filtering color configurations from the provided config
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  );

  // Return null if no color configurations are found
  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES) // Generating CSS styles for each theme
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    // Determine the color based on the theme or fallback to the color property
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null; // Return CSS variable for the color
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

// ChartTooltip component from Recharts for displaying tooltips
const ChartTooltip = RechartsPrimitive.Tooltip;

// ChartTooltipContent component to customize the tooltip's content
const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean; // Option to hide the label
      hideIndicator?: boolean; // Option to hide the indicator
      indicator?: "line" | "dot" | "dashed"; // Type of indicator to display
      nameKey?: string; // Key for the name in the payload
      labelKey?: string; // Key for the label in the payload
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot", // Default indicator type
      hideLabel = false, // Default to not hiding the label
      hideIndicator = false, // Default to not hiding the indicator
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart(); // Accessing the chart configuration from context

    // Memoizing the tooltip label to optimize performance
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null; // Return null if label is hidden or no payload
      }

      const [item] = payload; // Destructuring the first item from payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`; // Determine the key for the label
      const itemConfig = getPayloadConfigFromPayload(config, item, key); // Get the configuration for the item
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label // Get the label from config or fallback to the label prop
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)} // Format the label if a formatter
            is provided
          </div>
        );
      }

      if (!value) {
        return null; // Return null if no value is found
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>; // Return the label
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null; // Return null if tooltip is not active or no payload
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"; // Determine if the label should be nested

    return (
      <div
        ref={ref} // Ref for the tooltip container
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className // Merging additional class names
        )}>
        {!nestLabel ? tooltipLabel : null}{" "}
        {/* Render the tooltip label if not nested */}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`; // Determine the key for the item
            const itemConfig = getPayloadConfigFromPayload(config, item, key); // Get the configuration for the item
            const indicatorColor = color || item.payload.fill || item.color; // Determine the color for the indicator

            return (
              <div
                key={item.dataKey} // Unique key for each item
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center" // Adjust layout based on indicator type
                )}>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload) // Use formatter if provided
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon /> // Render the icon if available
                    ) : (
                      !hideIndicator && ( // Render the indicator if not hidden
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot", // Dot indicator style
                              "w-1": indicator === "line", // Line indicator style
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed", // Dashed indicator style
                              "my-0.5": nestLabel && indicator === "dashed", // Adjust margin for nested labels
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor, // Set background color for the indicator
                              "--color-border": indicatorColor, // Set border color for the indicator
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center" // Adjust alignment based on nesting
                      )}>
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}{" "}
                        {/* Render nested label if applicable */}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}{" "}
                          {/* Display item label */}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}{" "}
                          {/* Format and display the item value */}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip"; // Setting display name for debugging

const ChartLegend = RechartsPrimitive.Legend; // Chart legend component from Recharts

// ChartLegendContent component to customize the legend's content
const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean; // Option to hide the icon in the legend
      nameKey?: string; // Key for the name in the payload
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, // Destructuring props
    ref
  ) => {
    const { config } = useChart(); // Accessing the chart configuration from context

    if (!payload?.length) {
      return null; // Return null if no payload is provided
    }

    return (
      <div
        ref={ref} // Ref for the legend container
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3", // Adjust padding based on vertical alignment
          className // Merging additional class names
        )}>
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`; // Determine the key for the item
          const itemConfig = getPayloadConfigFromPayload(config, item, key); // Get the configuration for the item

          return (
            <div
              key={item.value} // Unique key for each item
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}>
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon /> // Render the icon if available and not hidden
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color, // Set background color for the legend item
                  }}
                />
              )}
              {itemConfig?.label} {/* Display item label */}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegend"; // Setting display name for debugging

// Helper function to extract item configuration from a payload
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined; // Return undefined if payload is not an object
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined; // Extracting the payload from the item if it exists

  let configLabelKey: string = key; // Initialize the key for configuration lookup

  // Check if the key exists in the payload and is a string
  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string; // Update the key if found
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string; // Update the key if found in the nested payload
  }

  // Return the configuration for the key if it exists in the config
  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]; // Fallback to the original key if not found
}

export {
  ChartContainer, // Exporting the ChartContainer component
  ChartTooltip, // Exporting the ChartTooltip component
  ChartTooltipContent, // Exporting the ChartTooltipContent component
  ChartLegend, // Exporting the ChartLegend component
  ChartLegendContent, // Exporting the ChartLegendContent component
  ChartStyle, // Exporting the ChartStyle component
};
