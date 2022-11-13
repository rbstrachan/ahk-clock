const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
      
setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;
	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
}, 50)

function changeBG(){
  const images = [
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828160-4414815.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828138-5619592.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828191-5859774.png")',
    'url("https://wallpapertag.com/wallpaper/full/4/1/c/153686-uhd-wallpapers-3840x2160-for-windows-10.jpg")',
    'url("https://wallpapertag.com/wallpaper/full/3/2/b/153687-free-download-uhd-wallpapers-3840x2160-for-htc.jpg")',
    'url("https://wallpapertag.com/wallpaper/full/1/6/c/153688-popular-uhd-wallpapers-3840x2160-windows.jpg")',
    'url("https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg")',
    'url("https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg")',
    'url("https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg")',
    'url("https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg")',
    'url("https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg")',
    'url("https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg")',
    'url("https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg")',
    'url("https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg")',
    'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg")'
  ];
  
  const body = document.querySelector('body');
  const bg = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = bg;
}

window.onLoad = changeBG()
