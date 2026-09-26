import { useTranslation } from 'react-i18next';
import PageHeader from '@/components/Common/PageHeader';

export default function ContactHeader() {
  const { t } = useTranslation('common');
  return <PageHeader eyebrow={t('contact-page.title')} title={t('contact-page.slogan')} accent={t('contact-page.slogan2')} description={t('contact-page.description')} />;
}
