import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
//= Data
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import prefix from '@/common/prefix';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';  // Importa el hook

function Footer({ lightMode, subBg }) {

  const { t, i18n} = useTranslation('common');  // Usa el hook para obtener las traducciones

  const useIsomorphicLayoutEffect = typeof window !== "undefined"
    ? useLayoutEffect
    : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (document.body.clientWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set('.footer-container', { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

 
  

  return (
    <footer className={subBg ? 'sub-bg pt-80' : ''}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-4">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>{t('footer.address')}</h6>  {/* Usamos el hook de traducción */}
                </div>
                <div className="text">
                  <p>{t('footer.location')}</p>  {/* Usamos el hook de traducción */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>{t('footer.contact')}</h6>  {/* Usamos el hook de traducción */}
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a>{t('footer.email')}</a>  {/* Usamos el hook de traducción */}
                  </p>
                  <h5>
                    <Link target="_blank" href="https://wa.me/59175521925?text=Estoy%20interesado%20en%20sus%20servicios%20de%20Tecnologia!">
                      {t('footer.phone')}  {/* Usamos el hook de traducción */}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>{t('footer.social')}</h6>  {/* Usamos el hook de traducción */}
              </div>
              <ul className="rest social-text">
                <li>
                  <Link target="_blank" href="https://www.facebook.com">{t('footer.facebook')}</Link>  {/* Usamos el hook de traducción */}
                </li>
                <li>
                  <Link target="_blank" href="https://www.x.com">{t('footer.x')}</Link>  {/* Usamos el hook de traducción */}
                </li>
                <li>
                  <Link target="_blank" href="https://www.linkedin.com">{t('footer.linkedin')}</Link>  {/* Usamos el hook de traducción */}
                </li>
                <li>
                  <Link target="_blank" href="https://instagram.com">{t('footer.instagram')}</Link>  {/* Usamos el hook de traducción */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <a className="logo icon-img-100">
                  <img src={`${prefix}/dark/assets/imgs/koboldlogo02.png`} alt="logo" />
                </a>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">© 2023 Kobold Solutions <span className="underline"></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
