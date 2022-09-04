import React from 'react';
import imgQRIS from '../assets/qris.png';
import imgPayPal from '../assets/paypal.png';
import imgShape from '../assets/shape.svg';

function Donate() {
  return (
    <div>
      <section className="mt-5 py-4">
        <div className="container my-4">
          <div className="row d-flex align-items-center">
            <div>
              <div className="mt-2 text-center">
                <h1 className="display-5 display-md-4">
                  Like our work? Support us!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-5" className="pb-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center px-5">
              <div
                className="col"
                data-aos="fade-in"
              >
                <div className="bg-white shadow rounded py-3 h-100">
                  <div className="card-body">
                    <h2 className="fw-bold text-center mb-0">QRIS</h2>
                    <div className="d-flex p-3">
                      <img src={imgQRIS} className="w-75 mx-auto" />
                    </div>
                    <div className="d-flex">
                      <a
                        href="https://invoice.xendit.co/donation/KomodoOS"
                        target="_blank"
                        className="btn btn-primary mx-auto"
                      >
                        Belikan kami pulsa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <div className="bg-white shadow rounded py-3 h-100">
                  <div className="card-body">
                    <h2 className="fw-bold text-center mb-0">PayPal</h2>
                    <div className="d-flex p-3">
                      <img src={imgPayPal} className="w-75 mx-auto" />
                    </div>
                    <div className="d-flex">
                      <a
                        href="https://paypal.me/KomodoOS"
                        target="_blank"
                        className="btn btn-primary mx-auto"
                      >
                        Buy us a coffee
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <img className="shape-divider" src={imgShape} draggable="false" />

      <section
        id="section-5"
        className="pb-5"
        style={{ backgroundColor: '#E6E8EB' }}
      >
        <div className="container pb-5">
          <div id="donate"></div>

          <div id="final-section" className="mt-0 pt-5 text-center">
            <p className="h1 mb-4">It means a lot for us. Thank you!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
