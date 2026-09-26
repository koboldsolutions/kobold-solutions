import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function MarketingMeta({ page }) {
  const { t } = useTranslation('common');
  return (
    <Head>
      <title>{t(`meta.${page}.title`)}</title>
      <meta name="description" content={t(`meta.${page}.description`)} key="description" />
      <meta property="og:title" content={t(`meta.${page}.title`)} key="og:title" />
      <meta property="og:description" content={t(`meta.${page}.description`)} key="og:description" />
    </Head>
  );
}
