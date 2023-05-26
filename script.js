burger = document.querySelector(".burger");
burger.onclick = function() {
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  if (getCookie("videoId")) {
    var videoId = getCookie("videoId")
    }else{
        console.log('não existe')
    }

fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2m6OllE4QKxFJoXCKpbp9A&maxResults=1&order=date&key=AIzaSyDWEqbv0iHNqFYwmzQhUVOWQ7xYk_leoxE')
.then((result)=>{
    return result.json();
}).then((data)=>{
    let videos = data.items;
    let videoId = videos[0].id.videoId;
    let videoContainer = document.querySelector(".ultimo");
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/'+videoId;
    iframe.title = videos[0].snippet.title;
    iframe.width = '400px';
    iframe.height = '226px';
    videoContainer.appendChild(iframe);
})

