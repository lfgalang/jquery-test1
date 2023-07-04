function fetchToGetHost() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('../../config.json');
      if (response.ok) {
        const data = await response.json();
        const host = data.host;
        resolve(host);
      } else {
        reject(new Error('Error al obtener el archivo config.json'));
      }
    } catch (error) {
      reject(error);
    }
  });
}

$(document).ready(async function () {
  try {
    const host = await fetchToGetHost();
    const currentURL = window.location.href;

    console.log('currentURL', currentURL)

    if (currentURL.endsWith(`${host}/`)) {
      $("#pageContainer").load("./pages/home/home.html", function () {
        var script = document.createElement("script");
        script.src = "./pages/home/home.js";
        document.head.appendChild(script);
      });
    } else if (currentURL.endsWith(`${host}/index.html`)) {
      $("#pageContainer").load("./pages/dlnetNimbus/dlnetNimbus.html", function () {
        var script = document.createElement("script");
        script.src = "./pages/dlnetNimbus/dlnetNimbus.js";
        document.head.appendChild(script);
      });
    } else if (currentURL.endsWith(`${host}/dlnetNimbus`)) {
      $("#pageContainer").load("./pages/dlnetNimbus/dlnetNimbus.html", function () {
        var script = document.createElement("script");
        script.src = "./pages/dlnetNimbus/dlnetNimbus.js";
        document.head.appendChild(script);
      });
    }
  } catch (error) {
    console.error(error);
  }
});
