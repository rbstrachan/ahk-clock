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
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828131-6325710.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828138-5619592.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828143-9146832.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828147-4509654.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828152-8230828.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828158-3039427.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828160-4414815.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828165-6477876.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828172-179909.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828174-8158796.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828180-105254.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828184-4161973.png")',
    'url("https://browsecat.art/sites/default/files/beautiful-for-computer-wallpapers-100457-828191-5859774.png")'  
  ];
  
  const body = document.querySelector('body');
  const bg = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = bg;
}

window.onLoad = changeBG()
