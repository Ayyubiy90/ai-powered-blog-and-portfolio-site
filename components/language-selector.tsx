'use client'

import { useState } from 'react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Language, languages } from '@/lib/translations'
import { Globe } from 'lucide-react'

interface LanguageSelectorProps {
  onLanguageChange: (language: Language) => void
  currentLanguage?: string
}

export function LanguageSelector({ 
  onLanguageChange,
  currentLanguage = 'en'
}: LanguageSelectorProps) {
  const [selected, setSelected] = useState(
    languages.find(lang => lang.code === currentLanguage) || languages[0]
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 text-sm rounded-md border bg-background hover:bg-accent">
        <Globe className="h-4 w-4" />
        <span>{selected.flag}</span>
        <span>{selected.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center gap-2"
            onClick={() => {
              setSelected(language)
              onLanguageChange(language)
            }}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
