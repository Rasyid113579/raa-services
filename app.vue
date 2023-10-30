<!--
    use this to install AOS animation 
    npm i --save-dev @types/aos

    npx nuxi generate : 
-->

<template>
  <div id="body">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Offcanvas navbar large">
        <div class="container">
            <a id="logo" class="navbar-brand text-bold"><img src="./gambar/raaLogo.png">RAA SERVICES</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbar2Label">RAA SERVICES</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#highlights">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#aboutus">Tentang</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#persyaratan">Syarat</a>
                        </li>
                        <li class="nav-item" id="WA">
                            <a class="nav-link text-center" aria-current="page" href="https://wa.me/6287877108198" target="_blank">
                                <img src="https://i.ibb.co/pd7pJ61/whatsapp2.png" alt="Whatsapp">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="highlights">
        <div class="slideshow-container">
            <div class="mySlides">
                <div class="numbertext">1 / 3</div>
                <img src="./gambar/america.png" style="width:100%">
                <div class="text">RAA SERVICES</div>
            </div>
            <div class="mySlides">
                <div class="numbertext">2 / 3</div>
                <img src="./gambar/dubai.png" style="width:100%">
                <div class="text">RAA SERVICES</div>
            </div>
            <div class="mySlides">
                <div class="numbertext">3 / 3</div>
                <img src="./gambar/australia.png" style="width:100%">
                <div class="text">RAA SERVICES</div>
            </div>
            <a class="prev" @click="plusSlides(-1)">❮</a>
            <a class="next" @click="plusSlides(1)">❯</a>
        </div>
        <br>
        <div style="text-align:center">
            <span class="dot" @click="currentSlide(1)"></span> 
            <span class="dot" @click="currentSlide(2)"></span> 
            <span class="dot" @click="currentSlide(3)"></span>
        </div>
    </div>
    <div id="pemesanan" class="text-center pb-2 pt-1">
        <div class="container">
            <h1 class="mt-5">Pemesanan</h1>
            <div class="d-flex justify-content-center mt-2">
                <div id="boxPesan" class="row my-3">
                    <div id="pesan" class="col my-4 mx-4" data-aos="fade-up" data-aos-duration="600">
                        <a href=""><img src="./gambar/shopee1.png" alt="shopee"></a>
                    </div>
                    <div id="pesan" class="col my-4 mx-4" data-aos="fade-up" data-aos-duration="800">
                        <a href=""><img src="./gambar/tokopedia1.png" alt="tokopedia"></a>
                    </div>
                    <div id="pesan" class="col my-4 mx-4" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://wa.me/6287877108198"><img src="./gambar/whatsapp1.png" alt="whatsapp"></a>
                    </div>
                    <div id="aboutus"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="aboutus" class="container text-center py-2">
        <h1 class="mt-5 mb-3">About RAA Services</h1>
        <div id="descAboutus" class="mt-4"  data-aos="fade-up" data-aos-duration="800">
            <p class="py-4 px-4">RAA SERVICES hadir sebagai mitra perjalanan Anda, siap membantu mewujudkan rencana perjalanan ke Eropa dengan penuh kemudahan. Sebagai biro jasa dalam pemesanan asuransi perjalanan dan proses pembuatan visa, kami telah mengukir pengalaman yang tak terhitung jumlahnya. Profesionalisme kami tercermin dalam setiap langkah perjalanan Anda, memastikan Anda merasa aman. Jadikan kami partner setia Anda dalam meraih pengalaman berharga di Eropa dan jelajahi dunia dengan keyakinan penuh.</p>
        </div>
    </div>
    <div id="ourServices">
        <div class="container text-center pt-4">
            <h1 class="mt-5">Our Services</h1>
            <div class="row mt-4">
                <div id="services" class="col mt-4 mb-2 mx-auto"
                data-aos="fade-up" data-aos-duration="800">
                    <img src="./gambar/Travel_Insurance1.png" alt="Travel Insurance">
                    <h1 class="mt-4">TRAVEL INSURANCE</h1>
                </div>
                <div id="services" class="col mt-4 mb-2 mx-auto"
                    data-aos="fade-up" data-aos-duration="800">
                    <img src="./gambar/VISA1.png" alt="Visa">
                    <h1 class="mt-4">VISA</h1>
                </div>
                <div id="persyaratan"></div>
            </div>
        </div>
    </div>
    <div id="boxSyarat">
        <div id="persyaratan" class="container pt-5 pb-5">
            <div id="togglePersyaratan" class="pb-3 pt-1 mt-4" @click="isSyaratVisible = !isSyaratVisible"
                data-aos="flip-down" data-aos-duration="800">
                <h1 class="mt-4 text-center">Persyaratan</h1>
            </div>
            <div id="toggleSyarat" class="mt-5" :style="{ maxHeight: isSyaratVisible ? '1000px' : '0' }">
                <div id="buttonSyarat" class="row text-center">
                    <div
                        id="visa"
                        class="col py-3"
                        @click="toggleSyarat('visa')"
                        :style="{ color: activeTab === 'visa' ? '#F7F5EB' : '', backgroundColor: activeTab === 'visa' ? '#59644a' : '' }"
                    >
                        <h4>VISA</h4>
                    </div>
                    <div
                        id="asuransi"
                        class="col py-3"
                        @click="toggleSyarat('asuransi')"
                        :style="{ color: activeTab === 'asuransi' ? '#F7F5EB' : '', backgroundColor: activeTab === 'asuransi' ? '#59644a' : '' }"
                    >
                        <h4>ASURANSI</h4>
                    </div>
                </div>
                <div id="syarat" class="row">
                    <div id="syaratVisa" class="col py-5" v-show="activeTab === 'visa'">
                        <h5 class="lh-lg mx-5">
                            1. Paspor<br>
                            2. Formulir permohonan aplikasi<br>
                            3. Pas foto sesuai yang diminta Kedubes yang bersangkutan<br>
                            4. Surat sponsor, surat keterangan belajar, atau surat keterangan kerja<br>
                            5. Bukti keuangan selama 3 bulan terakhir dan fotokopi<br>
                            6. Fotokopi KTP dan KK<br>
                            7. Jadwal perjalanan<br>
                            8. Bukti pemesanan tiket atau tiket pesawat
                        </h5>
                    </div>
                    <div id="syaratAsuransi" class="col py-5" v-show="activeTab === 'asuransi'">
                        <h5 class="lh-lg mx-5">
                            1. Paspor<br>
                            2. Foto KTP dan KK<br>
                            3. Jadwal perjalanan<br>
                            4. Bukti pemesanan tiket atau tiket pesawat<br>
                            5. Alamat Email
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer" class="pt-4 pb-3">
        <div class="container">
            <div class="row" style="font-weight: bold;">
                <div id="footTitle" class="text-center">
                    <h3 style="font-weight: bolder;">RAA SERVICES</h3>
                </div>
                <div id="footText" class="text-center">
                    <p>Copyright &copy; 2022, All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#body {
    background-color: #FAF1E4;
    font-family: 'Righteous', cursive;
}

/* NAVBAR OFF CANVAS */
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
@media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
}
.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}
.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}
.bi {
    vertical-align: -.125em;
    fill: currentColor;
}
.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}
.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
#navbar {
    background-color: #59644a;
    font-weight: 400;
    font-size: 1.2rem;
}

.navbar-brand {
    color: #FAF1E4;
}
.nav-link {
    color: #F7F5EB;
    opacity: 70%;
    transition: 0.5s;
}
.nav-link:hover {
    color: #61441B;
    opacity: 1;
}
#logo img {
    width: 30px;
    margin-right: 10px;
}
.dropdown-item:hover {
    color: #61441B;
    transition: 0.3s;
}
#WA {
    background-color: #668e5e;
    border-radius: 10px;
    transition: 0.3s;
}
#WA img {
    width: 30px;
    margin-right: 10px;
}
#WA:hover {
    transform: scale(0.9);
}

/* HEADER */
#title h1{
    font-weight: 600;
    color: #61441B;
}

/* CAROUSEL */

.highlights {
    padding-top: 70px;
    background-size: 300px;
    background-repeat: no-repeat;
    background-image: url("./gambar/grafis2.png");
    background-position: start bottom;
    margin-bottom: 30px;
}
.mySlides {
    display: none;
}
.mySlides img {
    vertical-align: middle;
    max-height: 500px;
    object-fit: cover;
}

/* Slideshow container */
.slideshow-container {
    max-width: 1130px;
    position: relative;
    margin: auto;
}

/* Next & previous buttons */
.prev, .next {
    cursor: pointer;
    position: absolute;
    text-decoration: none;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: #4d3617;
    opacity: 0.7;
}

/* Position the "next button" to the right */
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
    opacity: 1;
}

/* Caption text */
.text {
    color: #FAF1E4;
    font-size: 45px;
    padding: 8px 12px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    background-color: #59644a;
    opacity: 0.9;
}

@media (max-width: 600px) {
    .text {
        font-size: 15px;
        bottom: 0px;
    }
    .highlights {
        background-size: 200px;
        background-position: 0% 100%;
    }
    .mySlides img {
        height: 300px;
    }
}

/* Number text (1/3 etc) */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* The dots/bullets/indicators */
.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dot:hover {
    background-color: #717171;
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
    .prev, .next,.text {font-size: 11px}
}
/* PEMESANAN */
#pemesanan {
    color: #61441B;
    background-size: 500px;
    background-repeat: no-repeat;
    background-image: url("./gambar/grafis4.png");
    background-position: 100% 100%;
}

#pesan img {
    width: 150px;
    box-shadow:#4d3617 10px 10px 0 0;
    border-radius: 20px;
}
/* ABOUT US */
#aboutus {
    color: #61441B; 
}

#descAboutus{
    border-radius: 40px;
    background-color: #61441B;
    color: #F7F5EB;
}

/* Our Services */
#ourServices {
    color: #61441B;
    background-size: 300px;
    background-repeat: no-repeat;
    background-image: url("./gambar/grafis2.png");
    background-position: start bottom;
}

#services img {
    width: 300px;
    box-shadow:#4d3617 10px 10px 0 0;
}

#descAboutus p {
    font-size: 20px;
    text-align: justify;
}

@media (max-width: 600px) {
    #aboutus {
        width: 80%;
        height: auto;
    }
}

/* PERSYARATAN */
#boxSyarat {
    background-size: 700px;
    background-repeat: no-repeat;
    background-image: url("./gambar/grafis4.png");
    background-position: 100% 70px;
}
#togglePersyaratan {
    background-color: #4d3617;
    border-radius: 40px;
    transition: 0.5s;
}
#togglePersyaratan:hover {
    cursor: pointer;
    transform: scale(0.95);
}
#toggleSyarat {
    display: block;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
}
#persyaratan h1 {
    color: #F7F5EB;
}

#syarat {
    color: #4d3617;
    background-color: #E5D5BD;
}

#visa {
    border-radius: 0 40px 0 0;
    color: #4d3617;
}
#asuransi {
    border-radius: 40px 0 0 0;
    color: #4d3617;
}
#buttonSyarat div:hover {
    cursor: pointer;
}

/* FOOTER */
#footer {
    background-color: #61441B;
    color: #F7F5EB;
}
#footTitle h3 {
    font-size: 30px;
}
#footText p {
    font-size: 13px;
}
</style>

<script>
    export default {
        data() {
            return {
                slideIndex: 1,
                activeTab: 'visa', // Tab awal yang aktif
                isSyaratVisible: false, // Tambahkan data untuk melacak apakah elemen ditampilkan
            };
        },
        mounted() {
            this.showSlides(this.slideIndex);
            setInterval(() => {
                this.plusSlides(1); // Otomatis ganti slide setiap 1.5 detik
            }, 2000);
        },
        methods: {
            toggleSyarat(tab) {
                if (this.activeTab === tab) {
                    // Jika tab yang sama ditekan lagi, sembunyikan elemen
                    this.isSyaratVisible = false;
                } else {
                    this.activeTab = tab;
                    // Jika tab yang berbeda ditekan, tampilkan elemen
                    this.isSyaratVisible = true;
                }
            },
            plusSlides(n) {
                this.showSlides((this.slideIndex += n));
            },
            currentSlide(n) {
                this.showSlides((this.slideIndex = n));
            },
            showSlides(n) {
                let i;
                let slides = document.getElementsByClassName("mySlides");
                let dots = document.getElementsByClassName("dot");
                if (n > slides.length) {
                    this.slideIndex = 1;
                }
                if (n < 1) {
                    this.slideIndex = slides.length;
                }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace("active", "");
                }
                slides[this.slideIndex - 1].style.display = "block";
                dots[this.slideIndex - 1].className += " active";
            },
        },
    };
</script>