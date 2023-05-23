var sisi_keliling = document.getElementsByName("sisi-keliling");
var output_keliling = document.getElementById("output_keliling");
var sisi_luas = document.getElementsByName("sisi-luas");
var output_luas = document.getElementById("output_luas");

function hitung_keliling() {
  output_keliling.innerHTML = `<p>
        K= 4 x S <br>
        K= 4 x ${sisi_keliling[0].value} <br>
        K= ${4 * sisi_keliling[0].value}
        </p>
    `;
}

function reset_keliling() {
  sisi_keliling[0].value = ``;
  output_keliling.innerHTML = ``;
}

function hitung_luas() {
  output_luas.innerHTML = `<p>
        L = S x S <br>
        L = ${sisi_luas[0].value} x ${sisi_luas[0].value} <br>
        L = ${sisi_luas[0].value * sisi_luas[0].value}
        </p>
    `;
}

function reset_luas() {
  sisi_luas[0].value = ``;
  output_luas.innerHTML = ``;
}
