import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '@/common/i18n';

const languageNames = { es: 'Español', en: 'English' };

function LanguageSwitcher() {
  const { i18n } = useTranslation('common');
  const selectedLocale = i18n.resolvedLanguage || 'es';

  const handleLanguageChange = (lng) => {
    if (lng === selectedLocale) return;
    i18n.changeLanguage(lng);
  };

  return (
    <label className="language-switcher">
      <span className="language-switcher__label">
        {selectedLocale === 'es' ? 'Idioma' : 'Language'}
      </span>
      <span className="language-switcher__control">
        <select
          className="language-switcher__select"
          value={selectedLocale}
          onChange={(event) => handleLanguageChange(event.target.value)}
        >
          {supportedLanguages.map((lng) => (
            <option key={lng} value={lng} lang={lng}>
              {languageNames[lng] || lng}
            </option>
          ))}
        </select>
        <svg className="language-switcher__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    </label>
  );
}

export default LanguageSwitcher;
