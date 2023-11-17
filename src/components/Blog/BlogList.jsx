import React from 'react';
import Link from 'next/link';
//= Data
import { useState } from 'react';
import prefix from '@/common/prefix';

function BlogList() {


    const [data, setData] = useState([
        {
          "id": 1,
          "date": "16 de Octubre, 2023",
          "title": "Shopify vs. WordPress en Bolivia: Cuándo Usar Cada Solución",
          "image": `${prefix}/dark/assets/imgs/blog/blog1/main.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ],
          "link": "/shopify-vs-wordpress-en-bolivia",
        },
        {
          "id": 2,
          "date": "25 de Octubre, 2023",
          "title": "¿Cuándo Necesitas un eCommerce? Señales de que es el Momento Adecuado",
          "image": `${prefix}/dark/assets/imgs/blog/blog2/main.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ],
          "link": "/cuanto-necesitas-un-ecommerce",
        },
      ]);
  return (
    <section className="blog-list-half section-padding sub-bg">
      <div className="container">
        <div className="row">
          {
            data.map((item, index) => (
              <div className="col-lg-6" key={item.id}>
                <div className={`item ${index !== data.length - 1 ? 'mb-50' : ''}`}>
                  <div className="row">
                    <div className="col-md-6 img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="col-md-6 main-bg cont valign">
                      <div className="full-width">
                        <span className="date fz-12 ls1 text-u opacity-7 mb-15">{item.date}</span>
                        <h5>
                          <Link href={item.link}>{item.title}</Link>
                        </h5>
                        <div className="tags colorbg mt-15">
                          {
                            item.tags.map((tag, i) => (<Link href="/blogs" className="me-1" key={i}>{tag}</Link>))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BlogList