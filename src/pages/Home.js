import React from 'react';
import imgHero from '../assets/hero.svg';
import imgSS from '../assets/ss.png';
import imgA11 from '../assets/a11.svg';
import imgDownload from '../assets/download.svg';
import imgShape from '../assets/shape.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div style={{ height: '72px' }}></div>
      <div id="home"></div>
      <section id="section-1">
        <div className="container my-4">
          <div className="row d-flex align-items-center">
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1 order-2"
              data-aos="fade-up"
            >
              <div className="mt-2 text-md-start text-center">
                <h1 className="display-5 display-md-4">
                  Welcome to the Jungle!
                </h1>
                <br />
                <p id="tagline" className="fs-5 fw-light text-reset">
                  Komodo OS is AOSP-based with customization & optimized
                  feature. #Komodo #WildYourAndroid
                </p>
                <br />
                <div id="btn-landing" className="text-md-start text-center">
                  <Link
                    className="btn button btn-primary btn-lg me-1"
                    to="/download"
                  >
                    Download Now
                  </Link>
                  <Link
                    className="btn button btn-secondary btn-lg px-4"
                    data-bs-toggle="popover"
                    to="/changelog"
                  >
                    Changelog
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-5 col-lg-6 order-md-2 order-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                id="hero-img"
                src={imgHero}
                alt="hero"
                className="img-fluid pb-4 pb-md-0 d-flex mx-auto"
                style={{ zIndex: -20 }}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="about"></div>

      <section id="section-2" className="mt-5">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div
              id="section-2-card"
              className="col-md-10 col-11 bg-white shadow-lg pt-4 pb-4 pb-md-5 px-5"
            >
              <div className="text-center">
                <p className="fs-4 fw-bold py-3">What is this?</p>
                <p className="fs-6 d-lg-none">
                  <span className="text-primary">Komodo OS</span> is an Android
                  operating system based on Android Open Source Project (AOSP)
                  adapted to optimal features and configurations. We release
                  regular updates with monthly security patches from the latest
                  AOSP sources.
                </p>
                <p className="fs-5 d-none d-lg-inline">
                  <span className="text-primary">Komodo OS</span> is an Android
                  operating system based on Android Open Source Project (AOSP)
                  adapted to optimal features and configurations. We release
                  regular updates with monthly security patches from the latest
                  AOSP sources.
                </p>
              </div>
              <hr className="mt-4" />
              <div className="text-center">
                <p className="fs-4 fw-bold py-3">What do we want to achieve?</p>
                <p className="fs-6 d-lg-none">
                  Our goal is to collaborate with anyone interested in all
                  aspects within Android customization.
                </p>
                <p className="fs-5 d-none d-lg-inline">
                  Our goal is to collaborate with anyone interested in all
                  aspects within Android customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-3" className="bg-primary text-white shadow-sm">
        <div className="bg-primary"></div>
        <div className="container py-5">
          <p
            id="features"
            className="fs-2 text-center pt-3 mb-0 mb-md-5 fw-bold"
            data-aos="fade-down"
          >
            Features & Advantages
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-7 order-2 order-md-1">
              <div
                className="row text-center mt-5 d-flex"
                data-aos="fade-right"
              >
                <div className="col-8 col-md-6 mx-auto">
                  <i className="fas fa-tachometer-alt fa-3x mb-4"></i>
                  <p className="fs-5 fw-bolder">Performance</p>
                  <p className="px-0 px-md-4">
                    Focused on speed and stability using certain tweak on some
                    apps
                  </p>
                </div>
                <div className="col-8 col-md-6 mx-auto">
                  <i className="fas fa-swatchbook fa-3x mb-4"></i>
                  <p className="fs-5 fw-bolder">Customization</p>
                  <p className="px-0 px-md-4">
                    We are including a lot of option to get rid of Android
                    theming
                  </p>
                </div>
                <div className="col-8 col-md-6 mx-auto">
                  <i className="fas fa-shield-alt fa-3x mb-4"></i>
                  <p className="fs-5 fw-bolder">Security</p>
                  <p className="px-0 px-md-4">
                    Security patch updates simultaneously
                  </p>
                </div>
                <div className="col-8 col-md-6 mx-auto">
                  <i className="fas fa-battery-full fa-3x mb-4"></i>
                  <p className="fs-5 fw-bolder">Battery Friendly</p>
                  <p className="px-0 px-md-4">
                    Additional option served to reach the best battery
                    consumtion
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 order-1 order-md-2"
              data-aos="fade-left"
              data-aos-offset="140"
            >
              <img
                id="ss-img"
                src={imgSS}
                alt="screenshot"
                className="d-flex mx-auto my-5 my-md-0"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6" data-aos="fade-right">
              <img
                id="a11-img"
                src={imgA11}
                alt="a11 ready"
                className="img-fluid d-flex mx-auto mt-5"
                draggable="false"
              />
            </div>
            <div className="col-12 col-md-6" data-aos="fade-left">
              <p
                id="section-4-quotes"
                className="text-center text-md-start fs-4 fs-md-2 fw-bold px-5"
              >
                We are adapting to latest version of Android and giving the best
                experience to users
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="count">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column" data-aos="fade-right">
              <div className="my-auto mx-0 mx-md-4 text-center text-lg-start">
                <p className="fs-4 fw-bold">
                  We have reached several milestones that have proven our work.
                </p>
                <p className="fs-4">
                  Let this stats tell you more about how{' '}
                  <span className="text-primary">Komodo</span> team have done
                  for its users.
                </p>
                <div className="row my-4">
                  <div className="col-4">
                    <h1>100%</h1>
                    <p className="fs-5 fw-bold">Satisfaction</p>
                  </div>
                  <div className="col-4">
                    <h1 id="device"></h1>
                    <p className="fs-5 fw-bold">Devices</p>
                  </div>
                  <div className="col-4">
                    <h1>
                      <span id="download"></span>+
                    </h1>
                    <p className="fs-5 fw-bold">Downloads</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-lg-flex d-none" data-aos="fade-left">
              <img
                src={imgDownload}
                alt="Download"
                className="img-fluid m-auto"
                draggable="false"
              />
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
            <p className="h1 mb-4">That's all for now, let's get started!</p>
            <a
              href="downloads.html"
              className="btn btn-lg btn-primary fs-3 fw-light px-4"
            >
              Download Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
