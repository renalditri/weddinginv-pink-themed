addHtml(images);

const urlParams = new URLSearchParams(window.location.search);
const tamu = urlParams.get('tamu');
if(tamu != null) {
  document.getElementById('tamu').innerHTML = `Dear ${tamu}`;
}

let date = new Date("Jan 5, 2022 15:37:25").getTime();
let audioPlayed = false;
const modal = document.getElementById("modalawal");
const btn = document.getElementById("modalbutton");
const btnPlay = document.getElementById("playbutton");

let x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = date - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("theday").style.display = "inline";
    document.getElementById("countdown").style.display = "none";
  }
}, 1000);

btnPlay.addEventListener('click', function() {
  if(audioPlayed == true) {
    btnPlay.innerHTML = `<img src="src/assets/btn-play.png">`;
    audio.pause();
    audioPlayed = false;
  } else {
    btnPlay.innerHTML = `<img src="src/assets/btn-pause.png">`;
    audio.play();
    audioPlayed = true;
  }
})

btn.onclick = function() {
  modal.classList.add("animate-fade");
  console.log("Play Audio")
  btnPlay.innerHTML = `<img src="src/assets/btn-pause.png">`;
  audio.play();
  audioPlayed = true;
}

modal.addEventListener('animationend', function() {
  if (this.classList.contains('animate-fade')) {
    this.style.display = 'none';
    this.classList.remove('w3-animate-show')
  }
});

function addHtml(images) {
  let html = ``;
  let column1 = ``;
  let column2 = ``;
  let column3 = ``;

  let count = 1;
  for(image in images) {
    switch (count) {
      case 1:
        column1 += `
          <a href="${images[image]}" data-lightbox="gallery">
            <img class="img-fluid" src="${images[image]}"
                style="border-radius: 8px;">
          </a>
        `;
        break;
      case 2:
        column2 += `
          <a href="${images[image]}" data-lightbox="gallery">
            <img class="img-fluid" src="${images[image]}"
                style="border-radius: 8px;">
          </a>
        `;
        break;
      case 3:
        column3 += `
          <a href="${images[image]}" data-lightbox="gallery">
            <img class="img-fluid" src="${images[image]}"
                style="border-radius: 8px;">
          </a>
        `;
        break;
    }
    count++;
    if(count > 2) { count = 1 }
  }

  html += `
  <div class="rowh justify-content-center">
    <div class="column">
      ${column1}
    </div>
    <div class="column">
      ${column2}
    </div>
  </div>`

  document.getElementById('gallery-photos').innerHTML = html;
}