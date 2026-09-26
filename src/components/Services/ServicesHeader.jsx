import { useTranslation } from 'react-i18next';
import PageHeader from '@/components/Common/PageHeader';

export default function ServicesHeader() {
  const { t } = useTranslation('common');
  return <PageHeader eyebrow={t('services.subtitle')} title={t('services.titleLead')} accent={t('services.titleAccent')} description={t('services.description')} />;
}
