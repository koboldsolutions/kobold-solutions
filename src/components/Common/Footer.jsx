import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
//= Data
import  {ScrollTrigger}  from "gsap/dist/ScrollTrigger.js";
import prefix from '@/common/prefix';
function Footer({ lightMode, subBg }) {

  const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (document.body.clientWidth > 991) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
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
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Address</h6>
                </div>
                <div className="text">
                  <p>Santa Cruz, Bolivia</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Contacto</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a >info@koboldsolutions.com</a>
                  </p>
                  <h5>
                    <a >+591 755 21 925</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a >Facebook</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
                <li>
                  <a >LinkedIn</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Subscríbete</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Ingresa tu correo electrónico" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <a className="logo icon-img-100" >
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
  )
}

export default Footer