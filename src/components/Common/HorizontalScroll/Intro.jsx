import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Intro() {
  const { t } = useTranslation('common'); // Usa 'common' o el namespace de tus traducciones
 

  return (
    <div className="panel o-hidden intro-pan sub-bg">
      <div className="container o-hidden rest mt-60">
        <div className="row mb-80 rest">
          <div className="col-lg-7 rest valign">
            <div className="main-marq lrg">
              <div className="slide-har st1">
                <div className="box pb-20">
                  <div className="item">
                    <h4>{t('intro.client_focus')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('intro.innovation')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('intro.transparency')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('intro.empowerment')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('intro.autonomy')}</h4>
                  </div>
                  <div className="item">
                    <h4>{t('intro.collaboration')}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
