import { match } from '@formatjs/intl-localematcher';

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
];

export function getPreferredLanguage(acceptLanguage: string) {
  const supported = languages.map(lang => lang.code);
  const default_language = 'en';

  try {
    return match(acceptLanguage, supported as string[], default_language);
  } catch (error) {
    return default_language;
  }
}

export async function translateText(text: string, targetLang: string) {
  try {
    const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GOOGLE_TRANSLATE_API_KEY}`,
      },
      body: JSON.stringify({
        q: text,
        target: targetLang,
      }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}