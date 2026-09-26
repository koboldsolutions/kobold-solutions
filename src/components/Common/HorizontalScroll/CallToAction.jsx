import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ActionLink from '../ActionLink';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import prefix from '@/common/prefix';

function CallToAction({ lightMode }) {
  const { t, ready } = useTranslation('common'); // Asume que las traducciones están en el namespace 'common'

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Verifica si las traducciones están listas
  
  return (
    <div className="panel call-action-center sub-bg">
      <div className="container mt-60">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="sec-lg-head text-center">
              <h6 className="ks-label mb-10">{t('contact.title')}</h6>
              <h2 className="ks-heading">
                <span>{t('contact.help_question')}</span>
                <br />
                <span className="ks-accent">{t('contact.schedule_call')}</span>
              </h2>
              <ActionLink href="/contact" className="mt-40">{t('contact.contact_button')}</ActionLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern bg-img" data-background={`${prefix}/dark/assets/imgs/patterns/graph.png`}></div>
    </div>
  );
}

export default CallToAction;
