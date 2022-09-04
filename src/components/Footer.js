import React, { useEffect } from 'react';
import logo from '../assets/brand.svg';

function Footer() {
  const scrollButton = () => {
    let scrollButton = document.getElementById('scroll-top');
    let navbar = document.getElementById('navbar');

    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      scrollButton.style.opacity = '100';
      scrollButton.style.cursor = 'pointer';
      navbar.classList.add('shadow');
    } else {
      scrollButton.style.opacity = '0';
      scrollButton.style.cursor = 'default';
      navbar.classList.remove('shadow');
    }
  };

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // navbarDropdown.classList.remove('show');
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollButton);

    return () => {
      window.removeEventListener('scroll', scrollButton);
    };
  }, []);

  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container py-5 px-4 px-md-0">
          <div className="row">
            <div className="col-12 col-md-4 d-flex my-auto text-center text-sm-start">
              <div className="w-100">
                <a className="d-flex" href="/">
                  <img src={logo} alt="komodo os" draggable="false" />
                  <b className="fs-4 ms-3 text-white">KOMODO OS</b>
                </a>
                <p className="text-muted mt-3">
                  Custom ROM with all its local wisdom.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center text-sm-start text-md-center my-3 my-sm-0">
              <a href="http://t.me/komodosrom/">Telegram</a>
              <a href="http://t.me/komodosgroup/">Support Group</a>
              <a href="https://www.instagram.com/komodorom/">Instagram</a>
              <a href="https://twitter.com/komodoOSproject">Twitter</a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center my-3">
              <p id="maintainer">Want to build the ROM officialy?</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjPwX5xveh4qN2sgX_csnXXyCQ3qnwGUCM9lLUiDg4bOMVkA/viewform"
                target="_blank"
                className="btn btn-primary px-4 text-dark"
              >
                Join Us!
              </a>
            </div>
          </div>
        </div>
        <div className="container px-4">
          <div className="text-sm-center py-3">
            <p id="copyright" className="text-muted small">
              &copy; Komodo OS - 2021
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => {
          scrollTop();
        }}
        className="rounded-circle shadow-lg"
        id="scroll-top"
        title="Go to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default Footer;
