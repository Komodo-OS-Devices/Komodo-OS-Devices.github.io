import React, { useEffect, useState } from 'react';
import { devices } from '../data/data';

function Download() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // search();
  });

  /* const search = () => {
    var request = new XMLHttpRequest();
    request.open('GET', '../device/device.json');
    request.onload = function () {
      var device = JSON.parse(request.responseText);
      loadJSON(device);
    };
    request.send();

    function loadJSON(value) {
      var htmlString = '';

      for (let i = 0; i < value.length; i++) {
        htmlString += `<div class="accordion-item">`;
        htmlString += `<h2 class="accordion-header" id="flush-heading-${i}">`;
        htmlString += `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${i}" aria-expanded="false" aria-controls="flush-collapse-${i}">`;
        htmlString += `${value[i].brand} ${value[i].device}`;
        htmlString += `</button>`;
        htmlString += `</h2>`;
        htmlString += `<div id="flush-collapse-${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${i}" data-bs-parent="#result">`;
        htmlString += `<div class="accordion-body d-flex justify-content-between">`;
        htmlString += `<div>`;
        htmlString += `<h3 class='mb-4'>${value[i].codename}</h3>`;
        htmlString += `<p><span class="fs-5 fw-bold"><i class="fas fa-fw fa-user-hard-hat"></i> Maintainer :</span><br><a href="${value[i].github}" class="text-body" target="_blank">${value[i].maintainer}</a></p>`;
        if (value[i].changelog != '' || value[i].changelog == undefined) {
          htmlString += `<p><span class="fs-5 fw-bold"><i class="fas fa-fw fa-mobile-android"></i> Changelog :</span><br>`;
          for (const changelog in value[i].changelog) {
            htmlString += `- <a href='${value[i].changelog[changelog]}' class='text-body text-decoration-underline' target='_blank'>${changelog}</a><br>`;
          }
          htmlString += `</p>`;
        }
        htmlString += `</div>`;
        htmlString += `<div>`;
        htmlString += `<a href="${value[i].download}" class="btn btn-primary px-3 mt-2" title="Download"><i class="fas fa-download fa-lg"></i><span class="d-none d-md-inline"> Download</span></a>`;
        htmlString += `</div>`;
        htmlString += `</div>`;
        htmlString += `</div>`;
        htmlString += `</div>`;
      }

      document
        .querySelector('#result')
        .insertAdjacentHTML('beforeend', htmlString);
    }
  }; */

  /* const getJSONP = (url, success) => {
    var ud = '_' + +new Date(),
      script = document.createElement('script'),
      head =
        document.getElementsByTagName('head')[0] || document.documentElement;

    window[ud] = function (data) {
      head.removeChild(script);
      success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);
  };

  const doSearch = () => {
    getJSONP('../device/device.json', function (data) {
      document.querySelector('#result').innerHTML = '';
      document.querySelector('#state').value = '';
      var searchField = document.querySelector('#search').value;
      var expression = new RegExp(searchField, 'i');
      var output = '';
      data.forEach(function (key, value) {
        if (
          value.codename.search(expression) != -1 ||
          value.device.search(expression) != -1 ||
          value.brand.search(expression) != -1
        ) {
          output += `<div class="accordion-item">`;
          output += `<h2 class="accordion-header" id="flush-heading-${value.codename}">`;
          output += `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${value.codename}" aria-expanded="false" aria-controls="flush-collapse-${value.codename}">`;
          output += `${value.brand} ${value.device}`;
          output += `</button>`;
          output += `</h2>`;
          output += `<div id="flush-collapse-${value.codename}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${value.codename}" data-bs-parent="#result">`;
          output += `<div class="accordion-body d-flex justify-content-between">`;
          output += `<div>`;
          output += `<h3 class='mb-4'>${value.codename}</h3>`;
          output += `<p><span class="fs-5 fw-bold"><i class="fas fa-fw fa-user-hard-hat"></i> Maintainer :</span><br><a href="${value.github}" class="text-body" target="_blank">${value.maintainer}</a></p>`;
          if (value.changelog != '' || value.changelog == undefined) {
            output += `<p><span class="fs-5 fw-bold"><i class="fas fa-fw fa-mobile-android"></i> Changelog :</span><br>`;
            for (const changelog in value.changelog) {
              output += `- <a href='${value.changelog[changelog]}' class='text-body text-decoration-underline' target='_blank'>${changelog}</a><br>`;
            }
            output += `</p>`;
          }
          output += `</div>`;
          output += `<div>`;
          output += `<a href="${value.download}" class="btn btn-primary px-3 mt-2" title="Download"><i class="fas fa-download fa-lg"></i><span class="d-none d-md-inline"> Download</span></a>`;
          output += `</div>`;
          output += `</div>`;
          output += `</div>`;
          output += `</div>`;
        }
        // else {
        //   output = `
        //   <p class="text-center text-secondary mt-3">Device not found. Sorry :(</p>
        //   `
        // }
      });
      document.querySelector('#result').innerHTML = output;
    });
  }; */

  return (
    <div>
      {/* Ads */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7142462988454705"
        crossOrigin="anonymous"
      ></script>

      <section id="section-1">
        <div className="container">
          <div className="row d-flex align-items-center mb-5 pb-5">
            <div className="col my-5">
              <div className="text-center">
                <h1 className="display-5 display-md-4">Download Build</h1>
                <div className="row justify-content-center">
                  <div className="col-10 col-md-8 col-lg-6">
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search your device here"
                        id="search"
                        name="search"
                        onChange={(event) => {
                          setSearchTerm(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="bg-white shadow card-download px-2 pb-4">
              <div className="card-body">
                <h3 className="text-center pt-2 pb-3">
                  List of Available Devices
                </h3>

                <div className="accordion accordion-flush" id="result">
                  {devices
                    .filter((val) => {
                      if (searchTerm == '') {
                        return val;
                      } else if(
                        val.codename.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.brand.toLowerCase().includes(searchTerm.toLowerCase())
                        ) {
                          return val;
                      }
                    })
                    .map((device, index) => (
                      <div className="accordion-item" key={index}>
                        <h2
                          className="accordion-header"
                          id={`flush-heading-${index}`}
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapse-${index}`}
                            aria-expanded="false"
                            aria-controls={`flush-collapse-${index}`}
                          >
                            {device.brand} {device.device}
                          </button>
                        </h2>
                        <div
                          id={`flush-collapse-${index}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`flush-heading-${index}`}
                          data-bs-parent="#result"
                        >
                          <div className="accordion-body d-flex justify-content-between">
                            <div>
                              <h3 className="mb-4">{device.codename}</h3>
                              <p>
                                <span className="fs-5 fw-bold">
                                  Maintained by
                                  <a
                                    href={device.github}
                                    className="text-body text-primary"
                                    target="_blank"
                                  >
                                    {' ' + device.maintainer}
                                  </a>
                                </span>
                                <br />
                              </p>
                              {device.changelog != '' ? (
                                <p>
                                  <span className="fs-5 fw-bold">
                                    Changelogs
                                  </span>
                                  <br />
                                  {device.changelog.map((data, index) => (
                                    <span key={index}>
                                      &rarr;{' '}
                                      <a
                                        href={data.link}
                                        className="text-body text-decoration-underline text-secondary"
                                        target="_blank"
                                      >
                                        {data.cl_code}
                                      </a>
                                      <br></br>
                                    </span>
                                  ))}
                                </p>
                              ) : (
                                ''
                              )}
                            </div>
                            <div>
                              <a
                                href={device.download}
                                className="btn btn-primary px-3 mt-2"
                                title="Download"
                              >
                                <i className="fas fa-download fa-lg me-md-2"></i>
                                <span className="d-none d-md-inline">
                                  Download
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;
