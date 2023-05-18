burger = document.querySelector(".burger");
burger.onclick = function() {
    navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}

// fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=UU0BhAOfmm1tJaJkPyTM9D_g&key=AIzaSyBrcwhZTG7spJKNYBGL7e7z1JjHQwPJoXs')
// .then(res => {
//     return res.json();
// })

// .then(data => {
//   data.items.forEach((curr) => {
//     var ifrm = document.createElement("iframe");
//     ifrm.setAttribute("src", "https://www.youtube.com/embed?v="+curr.snippet.resourceId.videoId);
//     ifrm.style.width = "400px";
//     ifrm.style.height = "250px";
//     document.querySelector(".videos").appendChild(ifrm);
//     console.log("https://www.youtube.com/embed?v="+curr.snippet.resourceId.videoId) 
//   });
// })