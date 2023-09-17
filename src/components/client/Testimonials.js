import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default function Testimonials() {
  return (
    <>
      <Header />
      <section className="section-padding pb-0" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-lg-5 mb-4">Our Patients</h2>

              <div className="owl-carousel reviews-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{"transition":"all 0.3s ease 0s","width":"5584px","transform":"translate3d(-1745px, 0px, 0px)"}}
                  >
                    <div
                      className="owl-item cloned"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Great services!</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia curae; Donec sit amet
                          velit vitae purus aliquam efficitur.
                        </p>

                        <img
                          src="assets/client/images/reviews/portrait-british-woman.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Laura Zono</strong>

                          <span className="text-muted">New Patient</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                          <i className="bi-star"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Best Advices</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Integer posuere erat a ante venenatis dapibus posuere
                          velit aliquet. Maecenas faucibus mollis interdum.
                          Donec ullamcorper nulla non metus auctor fringilla.
                        </p>

                        <img
                          src="assets/client/images/reviews/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Rosey</strong>

                          <span className="text-muted">Almost Recovered</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Best Health Care</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Phasellus ligula ante, tempus ac imperdiet ut, mattis
                          ac nibh. Orci varius natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.
                        </p>

                        <img
                          src="assets/client/images/reviews/beautiful-woman-face-portrait-brown-background.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Marie</strong>

                          <span className="text-muted">Patient</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item active center"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Doctor cares everyone!</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Donec in elementum orci, nec posuere ligula. Quisque
                          vulputate diam et ullamcorper ullamcorper.
                          Pellentesque vestibulum neque at leo fermentum mattis.
                        </p>

                        <img
                          src="assets/client/images/reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Ben Walker</strong>

                          <span className="text-muted">Recovered</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item active"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Great services!</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia curae; Donec sit amet
                          velit vitae purus aliquam efficitur.
                        </p>

                        <img
                          src="assets/client/images/reviews/portrait-british-woman.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Laura Zono</strong>

                          <span className="text-muted">New Patient</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                          <i className="bi-star"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Best Advices</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Integer posuere erat a ante venenatis dapibus posuere
                          velit aliquet. Maecenas faucibus mollis interdum.
                          Donec ullamcorper nulla non metus auctor fringilla.
                        </p>

                        <img
                          src="assets/client/images/reviews/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Rosey</strong>

                          <span className="text-muted">Almost Recovered</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Best Health Care</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Phasellus ligula ante, tempus ac imperdiet ut, mattis
                          ac nibh. Orci varius natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus.
                        </p>

                        <img
                          src="assets/client/images/reviews/beautiful-woman-face-portrait-brown-background.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Marie</strong>

                          <span className="text-muted">Patient</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{"width":"598px","marginRight":"100px"}}
                    >
                      <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                        <div className="reviews-stars">
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star-fill"></i>
                          <i className="bi-star"></i>
                        </div>

                        <p className="text-primary d-block mt-2 mb-0 w-100">
                          <strong>Doctor cares everyone!</strong>
                        </p>

                        <p className="reviews-text w-100">
                          Donec in elementum orci, nec posuere ligula. Quisque
                          vulputate diam et ullamcorper ullamcorper.
                          Pellentesque vestibulum neque at leo fermentum mattis.
                        </p>

                        <img
                          src="assets/client/images/reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg"
                          className="img-fluid reviews-image"
                          alt=""
                        />

                        <figcaption className="ms-4">
                          <strong>Ben Walker</strong>

                          <span className="text-muted">Recovered</span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="owl-nav" style={{"width":"598px"}}>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
