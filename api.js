const base_url = 'http://localhost:8080/api/';

getPesan();

function getPesan() {
  fetch(base_url+"get.php")
    .then(status)
    .then(res => res.json())
    .then(addHtmlApi)
}

function addHtmlApi(response) {
  console.log("Adding messages");
  let html = '';
  response.forEach((res) => {
    html += `<div class="row mt-3 mr-2">
                <div style="width: 40px; display:inline">
                  <img class="ml-auto" src="src/assets/wish/ava_wish.svg">
                </div>
                <div class="pl-2" style="width: calc(100% - 42px);  ;display:inline-block;">
                  <div class="pr-2">
                    <span class="body">${res.nama} - </span><span class="body"><b>Kerabat
                    ${res.kerabat}</b></span>
                  </div>
                <div class="mt-1 p-2"
                    style="width:100%; background: #FFFFFF; border: 1px solid #FCB2A9;border-radius: 8px;">
                    <p class="body mb-0">${res.pesan}</p>
                </div>
              </div>
            </div>`;
  })
  document.getElementById('pesan').innerHTML = html;
}

function status(response) {
    if (response.status !== 200) {
        console.log('Error : ' + response.status)
        return Promise.reject(new Error(response.statusText))
    } else {
        console.log('Mengambil data API')
        return Promise.resolve(response)
    }
}

function json(response) {
    console.log('Mengubah data dari bentuk Json')
    return response.json()
}

function pesanSent() {
  alert('Pesan Terkirim!');
  document.getElementById('nama').value = '';
  document.getElementById('pesana').value = '';
}

function postPesan() {
  let d = document.getElementById("kerabat");

  let nama = document.getElementById("nama").value;
  let kerabat = d.options[d.selectedIndex].value;
  let pesan =  document.getElementById("pesana").value;
  let data = new FormData();
  data.append('nama', nama);
  data.append('kerabat', kerabat);
  data.append('pesan', pesan);
  for (let value of data.values()) {
    console.log(value);
 }

  if(kerabat !== "" && nama !== "" && pesan !== "") {
      fetch(base_url+'post.php', {
      method: 'POST',
      body: data
      })
      .then(response => {
          console.log(response);
          getPesan();
      })
      .then(pesanSent)
      .catch(err => {
          console.log(err)
      })
  } else {
      alert('Data tidak lengkap');
  }
}
