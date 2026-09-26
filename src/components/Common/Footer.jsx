import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import prefix from '@/common/prefix';

export default function Footer() {
  const { t } = useTranslation('common');
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(footerRef.current.querySelector('.footer-container'), { yPercent: -30 }, {
        yPercent: 0, ease: 'none', scrollTrigger: { trigger: footerRef.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
      });
    });
    return () => media.revert();
  }, []);

  return (
    <footer ref={footerRef} className="ks-site ks-footer">
      <div className="footer-container">
        <div className="container ks-footer__grid">
          <div>
            <Link href="/" className="ks-footer__brand" aria-label="Kobold Solutions">
              <img src={`${prefix}/dark/assets/imgs/koboldlogo.png`} alt="Kobold Solutions" />
            </Link>
            <p className="ks-copy">{t('footer.tagline')}</p>
          </div>
          <div>
            <h2 className="ks-label">{t('footer.address')}</h2>
            <p className="ks-copy">{t('footer.location')}</p>
          </div>
          <div>
            <h2 className="ks-label">{t('footer.contact')}</h2>
            <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
            <a className="ks-footer__phone" target="_blank" rel="noreferrer" href="https://wa.me/59175521925">{t('footer.phone')}</a>
          </div>
          <div>
            <h2 className="ks-label">{t('footer.social')}</h2>
            <ul className="rest ks-footer__social">
              {[
                ['facebook', 'https://www.facebook.com/share/1cpjN7oJJ4/'], ['x', 'https://www.x.com'],
                ['linkedin', 'https://www.linkedin.com/company/kobold-solutions-es'], ['instagram', 'https://www.instagram.com/koboldsolutions_es?stkn=MTBtcXU0aWQyYngwOQ=='],
              ].map(([name, href]) => <li key={name}><a href={href} target="_blank" rel="noreferrer">{t(`footer.${name}`)}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="ks-footer__bottom"><div className="container"><p>© {new Date().getFullYear()} Kobold Solutions</p></div></div>
      </div>
    </footer>
  );
}
