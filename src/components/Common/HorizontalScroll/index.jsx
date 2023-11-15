import React, { useEffect, useLayoutEffect, useState } from 'react';
//= Components
import Intro from './Intro';
import Awards from './Awards';
import CallToAction from './CallToAction';
import { gsap } from 'gsap';
import  ScrollTrigger  from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);




function HzScroll({ lightMode }) {

  const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;

    
    useIsomorphicLayoutEffect(() => {
      if (document.body.clientWidth > 991) {
        console.log("innerwidth document", document.body.clientWidth)
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".thecontainer",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
          }
        });
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    function handleResize() {
      if (document.body.clientWidth < 991 && document.querySelector('.thecontainer').style.maxHeight) {
        console.log("innerw", window.innerWidth)
        location.reload();
      } else if (document.body.clientWidth > 991 && !document.querySelector('.thecontainer').style.maxHeight) {
        console.log("innerw", window.innerWidth)
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".thecontainer",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
          }
        });
      }
    }

  return (

    <section className="thecontainer ontop">
      <Awards  />
      <Intro  />
      
      <CallToAction  />
    </section>
  )
}

export default HzScroll