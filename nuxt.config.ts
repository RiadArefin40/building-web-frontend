// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      title: 'Home :: Building Management',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
      ],
      link: [
        // Favicon
        { rel: 'shortcut icon', type: 'image/png', href: '/assets/images/home/favIcon.png' },
  
        // Bootstrap 5
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css', 
          integrity: 'sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT', 
          crossorigin: 'anonymous' 
        },
  
        // Material Icons
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' 
        },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
  
        // FontAwesome 5
        { 
          rel: 'stylesheet', 
          href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', 
          integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', 
          crossorigin: 'anonymous' 
        },
  
        // FontAwesome 4
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
  
        // Owl Carousel
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
  
        // AOS (Animate On Scroll)
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
  
        // Fancybox
        { rel: 'stylesheet', href: '/css/fancybox.css' },
  
        // Custom Styles
        { rel: 'stylesheet', href: '/css/animation.css' },
        { rel: 'stylesheet', href: '/css/style.css' }
      ],
      script: [

        // FontAwesome Kit
        { src: 'https://kit.fontawesome.com/e2e8628afd.js', crossorigin: 'anonymous' },
  
        // jQuery
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', type: 'text/javascript', body: true },
  
        // Bootstrap Bundle JS
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8', crossorigin: 'anonymous', type: 'text/javascript', body: true },
    
        // AOS (Animate On Scroll)
        { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', type: 'text/javascript', body: true },
    
        
    
        // CounterUp JS
        { src: '/js/jquery.counterup.min.js', type: 'text/javascript',defer: true, },
    
        // Waypoints JS (used by CounterUp)
        { src: '/js/jquery.waypoints.min.js', type: 'text/javascript', defer: true, },

        // Owl Carousel JS (load after jQuery)
        { src: '/js/owl.carousel.min.js', type: 'text/javascript',defer: true, },
    
        // Fancybox JS
        { src: '/js/fancybox.js', type: 'text/javascript', body: true,defer: true, },
    
        // Custom JS (Your custom script)
        { src: '/js/custom.js', type: 'text/javascript', body: true,defer: true, },

        // Google reCAPTCHA API (async to avoid blocking page rendering)
        { src: 'https://www.google.com/recaptcha/api.js', async: true, defer: true, }
      ]
    }
  },
  baseURL: '/frontend_website/',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/sass/main.scss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.apiBase || "https://testingpro.xyz/api/v1/",
    },
  },

})
