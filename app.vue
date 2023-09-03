<!--
    use this to install AOS animation 
    npm i --save-dev @types/aos
-->

<template>
  <div id="body">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Offcanvas navbar large">
        <div class="container">
            <a class="navbar-brand text-bold">RAA SERVICES</a>
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
                            <a class="nav-link" aria-current="page" href="https://www.instagram.com/delizioso.tgr/" target="_blank">Syarat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div id="highlights" class="text-center mb-2">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner" data-aos="fade-up" data-aos-duration="1300">
                <div class="carousel-item active">
                    <div class="carousel-caption">
                        <img id="gambarProduk" src="./gambar/australia.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption">
                        <img id="gambarProduk" src="./gambar/america.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption">
                        <img id="gambarProduk" src="./gambar/dubai.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="carousel-caption">
                        <img id="gambarProduk" src="./gambar/netherlands.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="pemesanan" class="container text-center pb-2 pt-1">
        <h1 class="mt-5">Pemesanan</h1>
        <div class="d-flex justify-content-center mt-2">
            <div class="row my-3">
                <div id="pesan" class="col my-4 mx-4">
                    <a href=""><img src="./gambar/shopee 1.png" alt="shopee"></a>
                </div>
                <div id="pesan" class="col my-4 mx-4">
                    <a href=""><img src="./gambar/tokopedia 1.png" alt="tokopedia"></a>
                </div>
                <div id="pesan" class="col my-4 mx-4">
                    <a href="https://wa.me/6287877108198"><img src="./gambar/whatsapp 1.png" alt="whatsapp"></a>
                </div>
            </div>
        </div>
    </div>
    <div id="aboutus" class="container text-center py-2">
        <h1 class="mt-5">About RAA</h1>
        <div id="descAboutus" class="mt-4">
            <p class="py-4 px-4">RAA SERVICES hadir sebagai mitra perjalanan Anda, siap membantu mewujudkan rencana perjalanan ke Eropa dengan penuh kemudahan. Sebagai biro jasa dalam pemesanan asuransi perjalanan dan proses pembuatan visa, kami telah mengukir pengalaman yang tak terhitung jumlahnya. Profesionalisme kami tercermin dalam setiap langkah perjalanan Anda, memastikan Anda merasa aman. Jadikan kami partner setia Anda dalam meraih pengalaman berharga di Eropa dan jelajahi dunia dengan keyakinan penuh.</p>
        </div>
    </div>
    <div id="ourServices" class="container text-center py-4">
        <h1 class="mt-5">Our Services</h1>
        <div class="row mt-4">
            <div id="services" class="col my-4 mx-auto">
                <img src="./gambar/Travel_Insurance 1.png" alt="Travel Insurance">
            </div>
            <div id="services" class="col my-4 mx-auto">
                <img src="./gambar/VISA 1.png" alt="Visa">
            </div>
        </div>
    </div>
    <div id="persyaratan" class="container py-4">
        <h1 class="mt-4 text-center">Persyaratan</h1>
        <div id="toggleSyarat" class="mt-5">
            <div id="buttonSyarat" class="row text-center">
                <div
                    id="visa"
                    class="col py-3"
                    @click="toggleSyarat('visa')"
                    :style="{ color: activeTab === 'visa' ? 'white' : '', backgroundColor: activeTab === 'visa' ? '#61441B' : '' }"
                >
                    <h4>VISA</h4>
                </div>
                <div
                    id="asuransi"
                    class="col py-3"
                    @click="toggleSyarat('asuransi')"
                    :style="{ color: activeTab === 'asuransi' ? 'white' : '', backgroundColor: activeTab === 'asuransi' ? '#61441B' : '' }"
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
    <div id="product" class="">
        <h1 style="font-weight: 650; font-size: 30px;" data-aos="fade-up" data-aos-duration="1000">Best Seller</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso5.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso1.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso2.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso3.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso5.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso1.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso2.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso3.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso5.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso1.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso2.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso3.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso4.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 my-2" data-aos="fade-up" data-aos-duration="1300">
                    <div class="card">
                        <img class="card-img-top" src="./gambar/delizioso5.png">
                        <div class="card-body">
                            <h5 class="card-title">Rp 249.000</h5>
                            <h5>Mukena Tazbiya Kids Flower Red Rose</h5>
                        </div>
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

/* BANNER */
#banner {
    width: 100%;
    height: auto;
}
#banner1 {
    width: 100%;
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
    background-color: #9EB384;
    font-weight: 400;
    font-size: 1.2rem;
}

.navbar-brand {
    color: #61441B;
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
.dropdown-item:hover {
    color: #61441B;
    transition: 0.3s;
}

/* HEADER */
#title h1{
    font-weight: 600;
    color: #61441B;
}

/* HIGHLIGHTS */
#highlights {
    padding-top: 85px;
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
}

#pesan img {
    width: 150px;
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
}

#services img {
    width: 300px;
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

/* PRODUCT */
.card {
    border: none;
}
.card-body {
    background-color: #F7F5EB;
}
.card-title {
    color: #61441B;
}
#product h1 {
    color: #61441B;
    text-align: center;
    margin-bottom: 30px;
}
.card-img-top {
    transition: transform 1s;
    overflow: hidden;
}
.card-img-top:hover {
    transform: scale(1.3);
}

/* PERSYARATAN */
#persyaratan h1 {
    color: #61441B;
}
#syarat {
    color: #4d3617;
}
#visa {
    border-radius: 40px 40px 0 0;
    color: #61441B;
}
#syaratVisa {
    background-color: #9EB384;
    border-radius: 0 0 40px 40px;
    transition: height 1s;
}
#asuransi {
    border-radius: 40px 40px 0 0;
    color: #61441B;
}
#syaratAsuransi {
    background-color: #9EB384;
    border-radius: 0 0 40px 40px;
    transition: height 1s;
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
    };
  },
  methods: {
    toggleSyarat(tab) {
      // Fungsi ini akan dipanggil saat tombol VISA atau ASURANSI diklik
      this.activeTab = tab;
    },
  },
};
</script>
