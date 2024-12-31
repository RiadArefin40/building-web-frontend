<template>
    <!-- Header  -->
    <Header />
     <!-- Header  -->
 
     <!-- Association News Details Section  -->
      <div  class="announcements-details-section-wrapper">
         <div class="top-section">
             <div class="container-fluid">
                 <div class="top-inner">
                     <div class="top-date-category-wrapper">
                         <div class="date-wrapper">
                             <!-- <h6>2024년 9월 18일</h6> -->
                              <h6>{{  formatTimestamp(announcement?.created_at) }}</h6>
                         </div>
                         <!-- <div class="category-wrapper">
                             <h6>모범 사례</h6>
                         </div> -->
                     </div>
                     <div class="news-title">
                         <!-- <h2>건물 관리자를 위한 새로운<br/> 교육 프로그램 출시</h2> -->
                          <h2>{{announcement?.topic  }}</h2>
                     </div>
                 </div>
             </div>
         </div>
         <div class="container-fluid">
             <div class="announcements-details-inner-wrapper">
                 
                 <div class="news-content-related-content-wrapper">
                     <div class="news-content-wrapper">
                         <!-- <div class="matters-wrapper">
                             <h3>교육 프로그램에 대하여</h3>
                             <p>건물 관리 분야의 최신 기술과 지식을 전문가들에게 제공하기 위해 고안된 새로운 건물 관리자 교육 프로그램 출시를 알려드리게 되어 기쁩니다.</p>
                             <p>이 프로그램은 집합건물법 준수, 에너지 효율 전략, 디지털 관리 도구를 포함한 광범위한 필수 주제를 다룹니다.</p>
                         </div> -->
                         <!-- <div class="image-wrapper">
                             <img src="/assets/images/announcements-details/announcements-details.png" alt="">
                         </div> -->
                         <div class="key-recommendation-wrapper">

                            <div  v-if="!loading" v-html="styledBody" ></div>
                             <!-- <h3>프로그램 하이라이트:</h3>
                             <ul>
                                 <li><p><span>정기 감사 및 보고</span> 정기적으로 내부 감사를 실시하고 그 결과를 주민과 공유함으로써 책임감을 강화할 수 있습니다.</p></li>
                                 <li><p><span>사용량 기반 청구</span> 가능하다면 전기, 수도 등의 공공 서비스에 대한 요금 청구를 지역 기반 요금 청구에서 사용량 기반 요금 청구로 전환하세요.</p></li>
                                 <li><p><span>예산 계획에 주민 참여</span> 연간 예산 계획 과정에 주민을 포함시키면 투명성을 크게 높일 수 있습니다.</p></li>
                             </ul> -->
                         </div>
                         
                     </div>
                     <div class="related-content-wrapper">
                         <div class="related-inner-wrapper">
                             <h5>협회의 다른 소식 확인하기</h5>
                             <p>협회의 최신 소식과 업데이트를 확인해보세요.</p>
                             <div class="related-news-box">
                                 <a style="cursor: pointer;" v-for="data in homepageData?.slice(0, 3)" @click = "toDetails(data.id)">
                                     <h6>{{ data.topic }}</h6>
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
 </template>


<script setup>
const route = useRoute()
const runtimeConfig = useRuntimeConfig();
const id = route.params.id
const loading = ref(true)
const announcement = ref(null)
const router = useRouter()
const homepageData = ref(null)
const imageWidth = ref("740px");


onMounted(() => {
    updateImageWidth();
    getHomepageData();
  getData(id);
  window.addEventListener("resize", updateImageWidth);
  
})

const getHomepageData = async () => {

    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}announcements`, {
            method: 'GET',
        })

        homepageData.value = await res.data
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }


}

async function getData(id){

    try{
        const res = await $fetch(`${runtimeConfig.public.apiBase}announcements/${id}`, {
    method: 'GET',
});

announcement.value = await res.data
    loading.value = false
  }
  catch (e){
     console.error(e)
     loading.value = false
  }

}

function toDetails(id){
    router.push(`/announcements-details/${id}`)
}

function toMain (){
    router.push('/announcement')
}


function styleImages(html, styles) {
  const styleString = Object.entries(styles)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
  
  return html.replace(/<img([^>]*)>/gi, `<img style="${styleString}" $1>`);
}

function  formatTimestamp(timestamp) {
      return new Date(timestamp).toLocaleString(); 
}

   // Function to update image width based on screen size
   const updateImageWidth = () => {
      if (window.innerWidth <= 991) {
        imageWidth.value = "90vw";
      } else {
        imageWidth.value = "740px";
      }
    };



    const styledBody = computed(() => 
      styleImages(announcement.value.body, { width: imageWidth.value, "border-radius": "10px" })
    );

</script>

<style scoped>
  img {
    width: 200px;
  }
</style>