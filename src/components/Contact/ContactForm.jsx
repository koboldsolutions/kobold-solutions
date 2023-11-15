import React from 'react';

function ContactForm() {
  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl mb-10">Contacto</h6>
              <h2 className="fz-50">Despejamos<br /> tus dudas.</h2>
              <p className="fz-15 mt-10">¿Listo para hacer realidad tu proyecto? Ya sea para colaborar o simplemente para charlar, ¡estamos aquí para escucharte!</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="#0">+1 755 21 925</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="#0">Facebook</a>
                </li>
                <li className="mr-30">
                  <a href="#0">Twitter</a>
                </li>
                <li className="mr-30">
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm