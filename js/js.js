var nextPageToken = "";
            // Resultados por pagina
const resPorPagina = 5;
            // Paginas a mostrar
const paginas = 1;
const key = "AIzaSyAbKAHiNubYuptPeeFGiRvEpiE8dPPT0GY";
const idCanal = "UCYQo8CdhXD22qfwUBUw591Q";
const videosContainer = document.getElementById("videos-container");

const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${idCanal}&maxResults=10&order=date&type=video&key=${key}`;




if (videosContainer) {
    // Resto del código para agregar videos al contenedor
} else {
    console.error('El contenedor de videos no se encontró en el DOM.');
}


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Manejar los datos de la respuesta
    const videos = data.items;

    // Mostrar cada video en el contenedor
    videos.forEach(video => {
      const videoId = video.id.videoId;
      const videoTitle = video.snippet.title;

      const iframe = document.createElement("iframe");
      iframe.setAttribute("width", "400");
      iframe.setAttribute("height", "205");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
      iframe.setAttribute("title", videoTitle);
      iframe.setAttribute("allowfullscreen", "");

      videosContainer.appendChild(iframe);
    });
  })
  .catch(error => {
    // Manejar errores de la solicitud aquí
    console.error('Error:', error);
  });

  
  
  
  
