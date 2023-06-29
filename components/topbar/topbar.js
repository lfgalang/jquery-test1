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

    // console.log('host', host)

    // Asignar la URL completa para redirigir al hacer clic en los botones
    $("#homeButton").click(function () {
      window.location.href = `${host}/`;
    });

    $("#dlnetNimbusButton").click(function () {
      window.location.href = `${host}/pages/dlnetNimbus/dlnetNimbus.html`;
    });
  } catch (error) {
    console.error(error);
  }
});