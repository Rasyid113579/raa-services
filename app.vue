<!--
    use this to install AOS animation 
    npm i --save-dev @types/aos
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
    <div id="highlights" class="text-center mb-2 mx-0">
        <div>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel"
                data-aos="fade-up" data-aos-duration="800">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner" data-aos="fade-up" data-aos-duration="800">
                    <div class="carousel-item active">
                        <div class="carousel-caption">
                            <img id="gambarProduk" src="./gambar/australia.png"/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption">
                            <img id="gambarProduk" src="./gambar/america.png"/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption">
                            <img id="gambarProduk" src="./gambar/dubai.png"/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption">
                            <img id="gambarProduk" src="./gambar/netherlands.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="pemesanan" class="text-center pb-2 pt-1">
        <div class="container">
            <h1 class="mt-5">Pemesanan</h1>
            <div class="d-flex justify-content-center mt-2">
                <div id="boxPesan" class="row my-3">
                    <div id="pesan" class="col my-4 mx-4" data-aos="fade-up" data-aos-duration="600">
                        <a href=""><img src="./gambar/shopee 1.png" alt="shopee"></a>
                    </div>
                    <div id="pesan" class="col my-4 mx-4" data-aos="fade-up" data-aos-duration="800">
                        <a href=""><img src="./gambar/tokopedia 1.png" alt="tokopedia"></a>
                    </div>
                    <div id="pesan" class="col my-4 mx-4" data-aos="fade-up" data-aos-duration="1000">
                        <a href="https://wa.me/6287877108198"><img src="./gambar/whatsapp 1.png" alt="whatsapp"></a>
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
                    <img src="./gambar/Travel_Insurance 1.png" alt="Travel Insurance">
                    <h1 class="mt-4">TRAVEL INSURANCE</h1>
                </div>
                <div id="services" class="col mt-4 mb-2 mx-auto"
                    data-aos="fade-up" data-aos-duration="800">
                    <img src="./gambar/VISA 1.png" alt="Visa">
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
                            4. Bukti pemesanan tiket atau tiket pesawat
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

/* HIGHLIGHTS */
#highlights {
    padding-top: 85px;
    background-size: 280px;
    background-repeat: no-repeat;
    background-image: url("./gambar/grafis1.png");
    background-position: start bottom;
}

/* CAROUSEL */
.carousel-item {
    height: 32rem;
}
@media (max-width: 600px) {
    .carousel-item {
        height: 30rem;
    }
}
#gambarProduk {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.carousel .carousel-indicators button {background-color: rgb(55, 53, 53);}
.carousel .carousel-indicators button.active {background-color: rgb(5, 5, 5);}

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
                activeTab: 'visa', // Tab awal yang aktif
                isSyaratVisible: false, // Tambahkan data untuk melacak apakah elemen ditampilkan
            };
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
        },
    };
</script>

