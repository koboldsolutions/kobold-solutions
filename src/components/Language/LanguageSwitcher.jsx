import { useRouter } from 'next/router';
import Image from 'next/image';

function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const handleLanguageChange = (lng) => {
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (
    <div className="pt-20 flex gap-2 items-center">
      {locales.map((lng) => (
        <button
          key={lng}
          onClick={() => handleLanguageChange(lng)}
          disabled={locale === lng}
          className={`border-none bg-transparent p-0 opacity-80 hover:opacity-100 transition ${
            locale === lng ? 'ring ring-blue-500 rounded-full' : ''
          }`}
        >
          <Image
            src={`/flags/${lng}.png`}
            alt={lng === 'es' ? 'Español' : 'English'}
            width={30}
            height={30}
            title={lng === 'es' ? 'Español' : 'English'}
          />
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
