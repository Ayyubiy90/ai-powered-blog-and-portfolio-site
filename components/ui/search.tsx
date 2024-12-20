import { Input } from "@/components/ui/input"
import { Search as SearchIcon } from "lucide-react"

interface SearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function Search({ value, onChange, placeholder = "Search posts..." }: SearchProps) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-8"
      />
    </div>
  )
}
