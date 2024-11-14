"use client"; // Indicates that this component is a client component in Next.js

// Importing necessary libraries and components
import * as React from "react"; // Importing React for building components
import * as LabelPrimitive from "@radix-ui/react-label"; // Importing Label component from Radix UI
import { Slot } from "@radix-ui/react-slot"; // Importing Slot component from Radix UI
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"; // Importing hooks and types from react-hook-form for form management

import { cn } from "@/lib/utils"; // Importing a utility function for conditional class names
import { Label } from "@/components/ui/label"; // Importing a custom Label component

const Form = FormProvider; // Aliasing FormProvider for easier access

// Defining the context value type for FormField
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName; // Field name in the form
};

// Creating a context for FormField
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue // Initializing with an empty object
);

// Creating a FormField component that wraps the Controller from react-hook-form
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props // Spreading props to pass to the Controller
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      {" "}
      {/* Providing the field name to context */}
      <Controller {...props} />{" "}
      {/* Rendering the Controller with the provided props */}
    </FormFieldContext.Provider>
  );
};

// Custom hook to use the FormField context
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext); // Accessing the FormField context
  const itemContext = React.useContext(FormItemContext); // Accessing the FormItem context
  const { getFieldState, formState } = useFormContext(); // Getting form state from the context

  const fieldState = getFieldState(fieldContext.name, formState); // Getting the state of the specific field

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>"); // Error if used outside of FormField
  }

  const { id } = itemContext; // Getting the id from FormItem context

  return {
    id, // Returning the id
    name: fieldContext.name, // Returning the field name
    formItemId: `${id}-form-item`, // Constructing the form item ID
    formDescriptionId: `${id}-form-item-description`, // Constructing the form description ID
    formMessageId: `${id}-form-item-message`, // Constructing the form message ID
    ...fieldState, // Spreading the field state
  };
};

// Defining the context value type for FormItem
type FormItemContextValue = {
  id: string; // ID for the form item
};

// Creating a context for FormItem
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue // Initializing with an empty object
);

// Creating a FormItem component to wrap form controls
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId(); // Generating a unique ID for the form item

  return (
    <FormItemContext.Provider value={{ id }}>
      {" "}
      {/* Providing the ID to context */}
      <div ref={ref} className={cn("space-y-2", className)} {...props} />{" "}
      {/* Rendering the div with spacing */}
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem"; // Setting display name for debugging

// Creating a FormLabel component for labeling form controls
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField(); // Accessing error state and form item ID

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)} // Applying error styling if there's an error
      htmlFor={formItemId} // Linking the label to the form item
      {...props} // Spreading the rest of the props onto the Label component
    />
  );
});
FormLabel.displayName = "FormLabel"; // Setting display name for debugging

// Creating a FormControl component to wrap form inputs
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField(); // Accessing necessary IDs and error state

  return (
    <Slot
      ref={ref}
      id={formItemId} // Setting the ID for the form control
      aria-describedby={
        !error
          ? `${formDescriptionId}` // Describing the control if no error
          : `${formDescriptionId} ${formMessageId}` // Describing the control with error message if there's an error
      }
      aria-invalid={!!error} // Indicating if the control is invalid
      {...props} // Spreading the rest of the props onto the Slot component
    />
  );
});
FormControl.displayName = "FormControl"; // Setting display name for debugging

// Creating a FormDescription component for additional information about the form control
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField(); // Accessing the form description ID

  return (
    <p
      ref={ref}
      id={formDescriptionId} // Setting the ID for the description
      className={cn("text-sm text-muted-foreground", className)} // Applying styling
      {...props} // Spreading the rest of the props onto the paragraph
    />
  );
});
FormDescription.displayName = "FormDescription"; // Setting display name for debugging

// Creating a FormMessage component for displaying error messages
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField(); // Accessing error state and form message ID
  const body = error ? String(error?.message) : children; // Determining the message to display

  if (!body) {
    return null; // Returning null if there's no message to display
  }

  return (
    <p
      ref={ref}
      id={formMessageId} // Setting the ID for the message
      className={cn("text-sm font-medium text-destructive", className)} // Applying error styling
      {...props} // Spreading the rest of the props onto the paragraph
    >
      {body} // Displaying the message
    </p>
  );
});
FormMessage.displayName = "FormMessage"; // Setting display name for debugging

// Exporting all components and hooks for use in other parts of the application
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
