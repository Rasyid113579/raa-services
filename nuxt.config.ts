// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "RAA Services | Travel Insurance & Jasa Visa",
      meta: [
        { name: 'description', content: 'Perjalanan praktis & berkesan anda dengan menggunakan layanan RAA Services.' },
        { name: 'keywords', content: 'chubb travel insurance, asuransi chubb, jasa visa, biro perjalanan visa, visa, asuransi, travel insurance, asuransi perjalanan, asuransi keluar negeri, asuransi eropa, visa america, visa belanda, visa dubai, jasa segala visa, jasa visa america, jasa visa belanda, jasa visa dubai' },
        { name: 'google-site-verification', content: 'O6jTaHlgnI4elkK4qaS-WdNhB3p4u52p0enHvCDx7GM' },
        { name: 'robots', content: "index, follow" }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap'
        }, 
        {
          /* FOR SET UP IMG ICON */
          rel: 'icon',
          type: 'image/x-icon',
          href: '/tokopedia 1.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
        }, 
        {
          rel: 'canonical',
          href: 'https://getbootstrap.com/docs/5.3/examples/navbars-offcanvas/'
        }, 
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
        }
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.7.0.min.js',
          type: 'text/javascript'
        }, 
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
          type: 'text/javascript'
        }
      ],
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
