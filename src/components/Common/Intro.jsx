import ServiceCards from './ServiceCards';
import prefix from '@/common/prefix';
import { useTranslation } from 'react-i18next';

function Intro({ lightMode }) {
  const { t } = useTranslation('common'); // `ready` indica si las traducciones están cargadas
  
  
   
   
  return (
    <section className="about section-padding main-bg">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="about-circle-crev md-hide">
              <div className="circle-button">
                <div className="rotate-circle fz-16 ls1 text-u">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900">  {t('circle-two')} </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <div className="half-circle-img">
                <img src={`${prefix}/dark/assets/imgs/landing/ofidigital.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont sec-lg-head">
              <h6 className="ks-label mb-20">{t('about.label')}</h6>
              <h2 className="ks-heading">
                <span className="sideup-text"><span className="">{t('about.title')}</span></span>
              </h2>
              <div className="row">
                <div className="col-lg-12">
                  <div className="text mt-20">
                    <p className="ks-copy">{t('about.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg mt-100 justify-content-center">
          <ServiceCards lightMode={lightMode} compact />
        </div>
      </div>
    </section>
  );
}

export default Intro;
