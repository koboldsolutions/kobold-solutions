import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Common/Footer';
import BlogHeader from '@/components/Blog/Details/BlogHeader';
import BlogContent from '@/components/Blog/Details/BlogContent';
import Link from 'next/link';


function Blog2() {
  

  return (
    <>
      <Head>
        <title>Kobold Solutions - Contact</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
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
              <h1 className="fz-55 mt-30">¿Cuándo Necesitas un eCommerce? Señales de que es el Momento Adecuado</h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img src="/kobold-solutions/dark/assets/imgs/koboldlogo02.png"  alt="" className="circle-img" />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Autor</span>
                        <h6 className="fz-16">Kobold Solutions</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
              <a href="#0">
                      <span className="opacity-7">Publicado</span>
                      <h6 className="fz-16">16 de Octubre, 2023</h6>
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="background bg-img parallaxie mt-80" data-background="/kobold-solutions/dark/assets/imgs/blog/header.jpg"></div> */}
      <div className="background bg-img parallaxie mt-80 img-400" data-background="/kobold-solutions/dark/assets/imgs/blog/header.jpg">

      <img src="/kobold-solutions/dark/assets/imgs/blog/blog2/stock.jpg"  alt="" />
      </div>
      

    </header>
    <section className="blog section-padding pb-0">
    <div className="container">
      <div className="main-post">
        <div className="item pb-60">
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <div className="d-flex align-items-center">
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">E</span>
                    <p>ta es una pregunta que muchos emprendedores se hacen antes de lanzar su tienda online. Después de todo, el comercio electrónico es una inversión importante de tiempo, dinero y esfuerzo. Por eso, es importante asegurarse de que estás listo antes de dar el paso.</p>
                  </div>
                  <p>En Kobold te damos algunas señales de que podrías estar listo para dar el salto al mundo del comercio electrónico.</p>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-sm-6">
                <div className="iner-img sm-mblogpic0">
                  <img src="/kobold-solutions/dark/assets/imgs/blog/blog2/stock1.jpg" alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iner-img">
                  <img src="/kobold-solutions/dark/assets/imgs/blog/blog2/stock2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">1. Deseas Estar Disponible las 24/7</h4>
                  
                </div>
                <p className="text mt-20">Shopify es una plataforma de comercio electrónico. Es muy simple y facil de usar, 
                    lo que la hace ideal para comerciantes que no tienen experiencia técnica y que desean probar su operación 
                    con un riesgo bajo, ideal para el mercado boliviano que se encuentra en desarrollo. </p>
                <div className="mb-50 mt-50">

          </div>

              </div>


              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">2. Necesitas una Gestión de Inventario y Pedidos Eficiente</h4>
                  
                </div>
                <p className="text mt-20">Tienes muchos productos y es complicado administrarlos y/o controlarlos. Esto es especialmente útil si manejas un inventario grande o si ofreces una variedad de productos ya que en un e-commerce podrás registrar todo tu inventario y se descontarán las ventas automáticamente.</p>
                <div className="mb-50 mt-50">

          </div>

              </div>



              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">3. Quieres conocer mejor a tus clientes</h4>
                  
                </div>
                <p className="text mt-20">Un eCommerce te brinda la oportunidad de tener información valiosa sobre tus clientes, como sus preferencias de compra, datos de contacto y más. Esta información te permite personalizar tus estrategias de marketing y mejorar tu CX (Customer Experience).</p>
                <div className="mb-50 mt-50">

          </div>

              </div>


              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">4. Deseas ampliar tu presencia en línea</h4>
                  
                </div>
                <p className="text mt-20">Si todavía no cuentas con una presencia online, esto te ayudará a ser más visible y que más personas conozcan tu marca.</p>
                <div className="mb-50 mt-50">

          </div>

              </div>


              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">5. Quieres Competir en el Mercado Actual</h4>
                  
                </div>
                <p className="text mt-20">El comercio electrónico es una parte fundamental del comercio. Para mantenerse competitivo en el mercado actual, es necesario tener una presencial online.</p>
                <div className="mb-50 mt-50">

          </div>

              </div>



              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">6. Buscas Reducir Costos y Aumentar la Eficiencia</h4>
                  
                </div>
                <p className="text mt-20">Un eCommerce te puede reducir los costos operativos en comparación con una tienda física tradicional, aún más en Bolivia. Podes ahorrar en el alquiler del local, mantenimiento y personal. </p>
                <p className="text mt-20">Además, temas como la facturación y los pedidos, se pueden automatizar. </p>
                <div className="mb-50 mt-50">

          </div>

              </div>


              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">7. Quieres Facilitar la Experiencia del Cliente
</h4>
                  
                </div>
                <p className="text mt-20">Un eCommerce bien diseñado como los que hacemos en Kobold ofrecen a los clientes una experiencia de compra, con múltiples opciones de pago. Esto puede generar lealtad con tus clientes y fomentar compras recurrentes.</p>
                <div className="mb-50 mt-50">

          </div>

          <p className="text mt-20">En resumen, un eCommerce es una herramienta poderosa en Bolivia y el mundo, llegar a más clientes y mejorar la eficiencia de tus operaciones. Dale un check a tus necesidades y conversa con nosotros para que evaluemos las mejores opciones para que puedas tener tu comercio electrónico.</p>

              </div>

             


               

            </div>

          </div>

          

          {/* <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="post-qoute mt-50">
                <h6 className="fz-20">
                  <span className="l-block">Aumenta el tráfico de tu página web con las siguientes librerías SEO.</span>
                  <span className="sub-title main-color mt-20 mb-0"> - Martin Fleig</span>
                </h6>
              </div>
            </div>
          </div> */}


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

        </div>
        <div className="author-area mt-50">
          <div className="flex">
            <div className="author-img mr-30">
              <div className="img">
                <img src="/kobold-solutions/dark/assets/imgs/koboldlogo02.png" alt="" className="circle-img" />
              </div>
            </div>
            <div className="cont valign">
              <div className="full-width">
                <h6 className="fw-600 mb-10">Kobold Solutions</h6>
                {/* <p>Ingeniero de Software, fundador de Kobold.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="next-prv-post flex mt-50">
        <div className="thumb-post bg-img" data-background="/dark/assets/imgs/blog/blogpic.jpg">
            <Link href="/shopify-vs-wordpress-en-bolivia">
              <span className="fz-12 text-u ls1 main-color mb-15"><i className="pe-7s-angle-left"></i> Anterior Blog</span>
              <h6 className="fw-600 fz-16">Shopify vs. WordPress en Bolivia: Cuándo Usar Cada Solución</h6>
            </Link>
          </div> 
          {/* <div className="thumb-post ml-auto text-right bg-img" data-background="/dark/assets/imgs/blog/blogpic.jpg">
            <Link href="/dark/blog">
              <span className="fz-12 text-u ls1 main-color mb-15">Próximo Blog <i
                className="pe-7s-angle-right"></i></span>
              <h6 className="fw-600 fz-16">¿Cuándo Necesitas un eCommerce? Señales de que es el Momento Adecuado</h6>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
    </section>
      </main>
      <Footer />
    </>
  )
}

Blog2.getLayout = page => <Layout>{page}</Layout>

export default Blog2;