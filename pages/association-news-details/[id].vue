<template>
    <!-- Header  -->
    <Header />
     <!-- Header  -->
 
     <!-- Association News Details Section  -->
      <div  class="association-news-details-section-wrapper">
         <div class="container-fluid">
             <div class="association-news-details-inner-wrapper">
                 <div class="top-date-category-wrapper">
                     <div class="date-wrapper">
                         <h6>{{  formatTimestamp(news?.created_at) }}</h6>
                     </div>
                     <div class="category-wrapper">
                         <h6>{{ news?.category?.name }}</h6>
                     </div>
                 </div>
                 <div class="news-title">
                     <h2>{{ news?.topic }}</h2>
                 </div>
                 <div class="news-image-wrapepr">
                     <!-- <img src="/assets/images/associationnewsdetails/association-news-details.png" alt=""> -->
                      <img style="max-height: 440px; width: 100vw; object-fit: cover;" :src="`${runtimeConfig.public.imageApi}/storage/${news?.thumbnail}`" alt="">
          
                 </div>
                 <div class="news-content-related-content-wrapper">
                     <div class="news-content-wrapper">
                         <div  v-html="styledBody" class="key-recommendation-wrapper">
                          </div>
                     </div>
                     <div class="related-content-wrapper">
                         <div class="related-inner-wrapper">
                             <h5>협회의 다른 소식 확인하기</h5>
                             <p>협회의 최신 소식과 업데이트를 확인해보세요.</p>
                             <div class="related-news-box">
         
                                 <a style="cursor: pointer;" v-for="data in homepageData?.slice(0, 3)" @click = "toDetails(data.id)">
                                    <h6>{{ data?.topic }}</h6>
                                     <div class="icon">
                                         <span class="material-symbols-outlined">
                                             arrow_right_alt
                                         </span>
                                     </div>
                                 </a>
 
                             </div>
                             <div class="explore-more-btn">
                                 <a @click="toMain()">모든 협회소식 보기</a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>
     <!-- Association News Details Section  -->
 
 
 
 
 
     <!-- Footer  -->
     <footer class="footer-section">
         <div class="container-fluid">
             <div class="footer-inner">
                 <div class="left-logo-box">
                     <a href="#">
                         <img src="/assets/images/footer-logo.svg" alt="">
                         대한건물관리협회
                     </a>
                 </div>
                 <div class="foote-details">
                     <div class="title">
                         <h4>사단법인 대한건물관리협회(KBMS)</h4>
                     </div>
                     <div class="footer-address">
                         <p>경기도 안산시 단원구 중앙대로 831, 24층 2420호</p>
                         <p>연락처 : 02-545-0000</p>
                         <p class="last-para">이메일 : <a href="mailto:biz@gmail.com">biz@gmail.com</a></p>
                     </div>
                 </div>
                 <div class="footer-link">
                     <div class="title">
                         <h4></h4>
                     </div>
                     <div class="footer-right-address">
                         <p>협회장ㅣ김동현</p>
                         <p>개인정보보호책임자ㅣ관리자</p>
                         <p class="last-para">사업자등록번호ㅣ800-55-54842</p>
                     </div>
                 </div>
             </div>
         </div>
         <div class="footer-copyright">
             <p class="copyright-desktop">© 2024 Korean Building Maintenance Society. All Right Reserved</p>
             <p class="copyright-mobile">© 2024 Building Management.<br /> All Right Reserved</p>
         </div>
     </footer>
     <!-- Footer  -->
          <!-- Modal -->
     <!-- Modal -->
     <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
             <div class="modal-content">
                 <div class="modal-body">
                     <div class="login-popup-inner-wrapper">
                         <div class="top-image-box">
                             <img src="/assets/images/login-popup-image.svg" alt="">
                         </div>
                         <div class="center-content">
                             <h3>분쟁 해결 요청을 위해 <br />로그인이 필요합니다.</h3>
                             <p>요청을 제출하려면 로그인이 필요합니다. <br />계속 진행하려면 로그인하거나 회원가입을 해주세요.</p>
                         </div>
                         <div class="login-signup-btn-wrapper">
                             <a href="/sign-in">로그인</a>
                             <a href="/sign-up">회원가입</a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        
     </div>
     <!-- Login Modal  -->
 </template>

<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig();
const id = route.params.id
const loading = ref(true)
const news = ref(null)
const router = useRouter()
const imageWidth = ref("840px");
const homepageData  = ref(null)

onMounted(() => {
    updateImageWidth();
    getHomepageData();
  getData(id);
  window.addEventListener("resize", updateImageWidth);
  
})

const getHomepageData = async (page = 1) => {
    try {
            loading.value = true
            const res = await $fetch(`${runtimeConfig.public.apiBase}news/`, {
                method: 'GET',
            })
            homepageData.value = await res.data
            loading.value = false

        }
    catch (e) {
        console.error(e)
        loading.value = false
    }
}


async function getData(id){

    try{
        const res = await $fetch(`${runtimeConfig.public.apiBase}news/${id}`, {
    method: 'GET',
});

news.value = await res.data
    loading.value = false
  }
  catch (e){
     console.error(e)
     loading.value = false
  }

}

function styleImages(html, styles) {
  const styleString = Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
  
  return html?.replace(/<img([^>]*)>/gi, `<img style="${styleString}" $1>`);
}

function  formatTimestamp(timestamp) {
      return new Date(timestamp).toLocaleString(); 
}

   // Function to update image width based on screen size
   const updateImageWidth = () => {
      if (window.innerWidth <= 991) {
        imageWidth.value = "390px";
      } else {
        imageWidth.value = "840px";
      }
    };



    const styledBody = computed(() => 
      styleImages(news?.value?.body, { width: imageWidth?.value, "border-radius": "10px" })
    );
    function toDetails(id){
    router.push(`/association-news-details/${id}`)
}

function toMain (){
    router.push('/association-news')
}
</script>