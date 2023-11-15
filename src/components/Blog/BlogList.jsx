import React from 'react';
import Link from 'next/link';
//= Data
import { useState } from 'react';
import prefix from '@/common/prefix';

function BlogList() {


    const [data, setData] = useState([
        {
          "id": 1,
          "date": "August 6, 2022",
          "title": "Free advertising for your online business.",
          "image": `${prefix}/dark/assets/imgs/blog/cover.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ]
        },
        {
          "id": 2,
          "date": "August 6, 2022",
          "title": "Business meeting 2023 in San Francisco.",
          "image": `${prefix}/dark/assets/imgs/blog/cover.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ]
        },
        {
          "id": 3,
          "date": "August 6, 2022",
          "title": "Free advertising for your online business.",
          "image": `${prefix}/dark/assets/imgs/blog/cover.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ]
        },
        {
          "id": 4,
          "date": "August 6, 2022",
          "title": "Business meeting 2023 in San Francisco.",
          "image": `${prefix}/dark/assets/imgs/blog/cover.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ]
        },
        {
          "id": 5,
          "date": "August 6, 2022",
          "title": "Free advertising for your online business.",
          "image": `${prefix}/dark/assets/imgs/blog/cover.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ]
        },
        {
          "id": 6,
          "date": "August 6, 2022",
          "title": "Business meeting 2023 in San Francisco.",
          "image": `${prefix}/dark/assets/imgs/blog/cover.jpg`,
          "tags": [
            "Marketing",
            "Design"
          ]
        }
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
                          <Link href="/blog">{item.title}</Link>
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