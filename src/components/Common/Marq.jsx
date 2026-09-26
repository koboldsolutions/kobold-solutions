import { useTranslation } from 'react-i18next';

export default function Marq() {
  const { t } = useTranslation('common');
  const labels = t('marquee', { returnObjects: true });
  return (
    <section className="serv-marq main-colorbg2">
      <div className="container-fluid ontop sub-bg rest pt-20 pb-20">
        <div className="row"><div className="col-12">
          <div className="main-marq light-text"><div className="slide-har st1">
            {[0, 1].map((copy) => <div className="box non-strok" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
              {labels.map((label) => <div className="item" key={label}>
                <h4 className="d-flex align-items-center"><span>{label}</span><span className="fz-50 ml-50 stroke icon" aria-hidden="true">*</span></h4>
              </div>)}
            </div>)}
          </div></div>
        </div></div>
      </div>
    </section>
  );
}
