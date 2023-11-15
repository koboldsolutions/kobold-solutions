import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function BlogContent() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="blog section-padding pb-0">
    <div className="container">
      <div className="main-post">
        <div className="item pb-60">
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <div className="d-flex align-items-center">
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">A</span>
                    <p>new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p>
                  </div>
                  <p>new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <p>However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.</p>
                </div>
                <div className="title mt-30">
                  <h5 className="fw-600">What sizes do MacBook Airs come in?</h5>
                </div>
                <div className="text mt-20">
                  <p>Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="post-qoute mt-50">
                <h6 className="fz-20">
                  <span className="l-block">Aumenta el tráfico de tu página web con las siguientes librerías SEO.</span>
                  <span className="sub-title main-color mt-20 mb-0"> - Martin Fleig</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="mb-50 mt-50">
            <div className="row">
              <div className="col-sm-6">
                <div className="iner-img sm-mblogpic0">
                  <img src="/dark/assets/imgs/blog/blogpic.jpg" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iner-img">
                  <img src="/dark/assets/imgs/blog/blogpic.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="title mb-10">
                <h5 className="fw-600">Apple currently sells only one MacBook Air size.</h5>
              </div>

              <div className="text mb-20">
                <p>A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p>
              </div>





            </div>
          </div>
        </div>
        <div className="info-area flex mt-20 pb-20">
          <div>
            <div className="tags flex">
              <div className="valign">
                <span>Tags :</span>
              </div>
              <div>
                <Link href="/blogs">Marketing</Link>
                <Link href="/blogs">Diseño</Link>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="share-icon flex">
              <div className="valign">
                <span>Compartir :</span>
              </div>
              <div>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="author-area mt-50">
          <div className="flex">
            <div className="author-img mr-30">
              <div className="img">
                <img src="/dark/assets/imgs/blog/author.jpg" alt="" className="circle-img" />
              </div>
            </div>
            <div className="cont valign">
              <div className="full-width">
                <h6 className="fw-600 mb-10">Martin Fleig</h6>
                <p>Ingeniero de Software, fundador de Kobold.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="next-prv-post flex mt-50">
          <div className="thumb-post bg-img" data-background="/dark/assets/imgs/blog/blogpic.jpg">
            <Link href="/blog">
              <span className="fz-12 text-u ls1 main-color mb-15"><i className="pe-7s-angle-left"></i> Anterior Blog</span>
              <h6 className="fw-600 fz-16">5 maneras de aumentar el tráfico en tu página web.</h6>
            </Link>
          </div>
          <div className="thumb-post ml-auto text-right bg-img" data-background="/dark/assets/imgs/blog/blogpic.jpg">
            <Link href="/dark/blog">
              <span className="fz-12 text-u ls1 main-color mb-15">Próximo Blog <i
                className="pe-7s-angle-right"></i></span>
              <h6 className="fw-600 fz-16">Las tendencias en diseño web 2023.</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BlogContent