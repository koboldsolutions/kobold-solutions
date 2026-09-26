import { useTranslation } from 'react-i18next';
import ServiceCards from '@/components/Common/ServiceCards';

export default function ServicesSection({ lightMode }) {
  const { t } = useTranslation('common');
  return (
    <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <h6 className="ks-label mb-10">{t('services.label')}</h6>
          <h2 className="ks-heading">{t('services.heading')}</h2>
        </div>
        <div className="row"><ServiceCards lightMode={lightMode} /></div>
      </div>
    </section>
  );
}
