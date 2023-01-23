var request = new XMLHttpRequest();
request.open("GET", "../device/device.json");
request.onload = function () {
  var device = JSON.parse(request.responseText);
  loadJSON(device);
};
request.send();

function loadJSON(value) {
  var htmlString = "";

  for (i = 0; i < value.length; i++) {
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
    if (value[i].changelog != "" || value[i].changelog == undefined) {
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

  document.getElementById("result").insertAdjacentHTML("beforeend", htmlString);
}

$.ajaxSetup({ cache: true });
$.getJSON("../device/device.json", function (data) {
  $("#search").keyup(function () {
    $("#result").html("");
    $("#state").val("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    var output = "";
    $.each(data, function (key, value) {
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
        if (value.changelog != "" || value.changelog == undefined) {
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
    $("#result").html(output);
  });
});
