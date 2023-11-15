import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function BlogHeader() {
  useEffect(() => {
    parallaxie('.bg-img.parallaxie', 0.4);
  }, []);

  return (
    <header className="page-header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0"><span>Marketing</span></a>
                <span> , </span>
                <a href="#0"><span>Diseño</span></a>
              </div>
              <h1 className="fz-55 mt-30">Las mejores librerías Javascript para usar en 2023.</h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img src="/dark/assets/imgs/blog/author.jpg" alt="" className="circle-img" />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Autor</span>
                        <h6 className="fz-16">Martin Fleig</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
              <a href="#0">
                      <span className="opacity-7">Publicado</span>
                      <h6 className="fz-16">August 6, 2021</h6>
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background bg-img parallaxie mt-80" data-background="/dark/assets/imgs/blog/header.jpg"></div>
    </header>
  )
}

export default BlogHeader