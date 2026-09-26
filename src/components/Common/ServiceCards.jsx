import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { services } from '@/common/services';
import prefix from '@/common/prefix';

export default function ServiceCards({ lightMode = false, compact = false }) {
  const { t } = useTranslation('common');
  return services.map(({ id, icon }) => (
    <div className="col-lg-4 col-md-6" key={id} data-service={id}>
      <div className={compact ? 'item-serv md-mb50' : 'serv-item md-mb50 radius-10'}>
        <div className={compact ? 'd-flex align-items-center pb-20 mb-30 bord-thin-bottom' : ''}>
          <div className={compact ? 'mr-30' : 'mb-40'}>
            <div className={compact ? 'icon-img-50' : 'icon-img-60'}>
              <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/${icon}`} alt="" />
            </div>
          </div>
          <h3 className={`ks-card-title ${compact ? '' : 'mb-30 pb-30 bord-thin-bottom'}`}>{t(`offerings.${id}.title`)}</h3>
        </div>
        <p className="ks-copy">{t(`offerings.${id}.summary`)}</p>
        {compact && <Link href={`/services/#${id}`} className="ks-text-link mt-40">
          <span>{t('see-more')}</span><span aria-hidden="true">↗</span>
        </Link>}
      </div>
    </div>
  ));
}
