import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
function ContactForm() {
const { t, i18n, ready } = useTranslation('common');
    // Estado para manejar si las traducciones están cargadas
    const [translationsLoaded, setTranslationsLoaded] = useState(false);
  
    useEffect(() => {
      // Verificamos que las traducciones se hayan cargado correctamente
      if (ready) {
        setTranslationsLoaded(true);
      }
    }, [ready]);
  
    if (!translationsLoaded) {
     
    }


  return (
    <section className="contact-crev section-padding ks-contact-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="ks-label mb-10">{t('contact-form.title')}</h6>
              <h2 className="ks-heading">{t('contact-form.slogan')}<br /> <span className="ks-accent">{t('contact-form.slogan2')}</span></h2>
              <p className="ks-copy mt-10">{t('contact-form.description')}</p>
              <div className="phone mt-30 underline">
                <Link target="_blank" href="https://wa.me/59175521925?text=Estoy%20interesado%20en%20sus%20servicios%20de%20Tecnologia!">+591 755 21 925</Link>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <Link target="_blank" href="https://www.facebook.com">Facebook</Link>
                </li>
                <li className="mr-30">
                <Link target="_blank" href="https://www.x.com">X</Link>
                </li>
                <li className="mr-30">
                <Link target="_blank" href="https://www.linkedin.com">LinkedIn</Link>
                </li>
                <li>
                <Link target="_blank" href="https://instagram.com">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
          <iframe className="ks-contact-map" title={t('footer.location')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949.7522618902294!2d-63.196563130368524!3d-17.79127189894788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e81b97e70887%3A0xce8a4799d783c476!2sBarasea%2018%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1sen!2sbo!4v1700252115280!5m2!1sen!2sbo" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <div className="full-width">
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Nombre"
                        required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Correo Electrónico" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Título" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Mensaje" rows="4" required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-md butn-bord radius-30">
                        <span className="text">Hablemos</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div> */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm