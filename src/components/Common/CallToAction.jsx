import { useTranslation } from 'react-i18next';
import ActionLink from './ActionLink';

export default function CallToAction() {
  const { t } = useTranslation('common');
  return (
    <section className="ks-cta section-padding">
      <div className="container ks-cta__row">
        <h2 className="ks-heading">{t('callToAction.idea')}<br /><span className="ks-accent">{t('callToAction.consult')}</span></h2>
        <ActionLink href="/contact">{t('callToAction.contact')}</ActionLink>
      </div>
    </section>
  );
}
