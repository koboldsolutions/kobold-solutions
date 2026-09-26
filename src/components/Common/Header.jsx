import { useId } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ActionLink from './ActionLink';
import CubeComponent from './Three/CubeComponent';
import prefix from '@/common/prefix';
import styles from './Header.module.css';

function Arrow({ diagonal = false }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header({ lightMode }) {
  const { t } = useTranslation('common');
  const circleId = useId();

  return (
    <header className={`header-creative ${styles.hero}`}>
      <div className="container ontop">
        <div className={styles.scene}>
          <CubeComponent />
        </div>
        <div className={styles.content}>
          <p className={`ks-label ${styles.eyebrow}`}>{t('hero.eyebrow')}</p>
          <h1 className={`ks-display ${styles.title}`}>
            <span>{t('hero.title')}</span>
            <span className="ks-accent">{t('hero.accent')}</span>
          </h1>
          <p className={`ks-copy ${styles.description}`}>{t('hero.description')}</p>
          <div className={styles.actions}>
            <ActionLink href="/contact">{t('hero.contact')}</ActionLink>
            <Link href="/services" className={styles.services}>
              <span className={styles.circle} aria-hidden="true">
                <svg className={styles.ring} viewBox="0 0 160 160">
                  <defs>
                    <path id={circleId} d="M80,18a62,62 0 1,1 0,124a62,62 0 1,1 0,-124" />
                  </defs>
                  <text><textPath href={`#${circleId}`} textLength="380" lengthAdjust="spacing">{t('circle')}</textPath></text>
                </svg>
                <span className={styles.circleCenter}><Arrow /></span>
              </span>
              <span className={styles.servicesLabel}>{t('hero.services')}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" style={{ backgroundImage: `url(${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png)` }} />
    </header>
  );
}
