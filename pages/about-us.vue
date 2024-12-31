<template>

  <!-- Header  -->
  <Header />
  <!-- Header  -->

  <!-- About top Section  -->
  <div id="section-1" ref="section1"  class="about-top-section-wrapper">
    <div class="about-top-section-inner">
      <div class="container-fluid">
        <div class="about-top-inner-wrapper">
          <div class="top-section">
            <div class="left-section">
              <!-- <h2 v-html="aboutPageData['section-1']?.title"></h2> -->

              <h2 :class="{'animate': isSection1Visible1}" class="section">건물 관리의<br />
                새로운 시대를 열어갑니다.</h2>
            </div>
            <div class="right-section">
              <!-- <p v-html="aboutPageData['section-1']?.subtitle"></p> -->
              <p :class="{'animate': isSection1Visible1}" class="section">대한건물관리협회는 건물 관리 업체들이 직면한 복잡한 문제에 대해 전문적인 조언과 해결책을 제시합니다. 법적 분쟁 예방부터 효율적인 관리 방안까지, 협회는 회원들이 더 나은 관리 기준을
                확립할 수 있도록 돕고, 효율적이고 안전한 운영 환경을 구축하는 데 있어 중요한 파트너 역할을 합니다.</p>
            </div>
          </div>
          <div class="bottom-image-section">
            <div class="image-wrapper">
              <img src="/assets/images/about/about-image.gif" alt="">
            </div>
          </div>
          <div class="bottom-video-section">
            <div class="video-wrapper">
              <video autoplay="" muted="" loop="" playsinline="" preload="auto" id="myVideo">
                <source src="/assets/images/about/about.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About top Section  -->

  <!-- Greeting Section  -->
  <div id="section-2" ref="section2" class="greeting-section-wrapper">
    <div class="container-fluid">
      <div class="greeting-section-inner">
        <div class="left-section">
          <!-- <h2 style="margin-bottom: 43px;" v-html="aboutPageData['section-3']?.left_title"></h2> -->
          <h2 :class="{'animate': isSection1Visible2}" class="section">모두가 믿을 수 있는 건물 관리, <br />확실한 기준으로 <br />건물의 가치를 높입니다.</h2>
          <div class="image-wrapper">
            <img src="/assets/images/about/greeting-quote.svg" alt="">
          </div>
        </div>
        <div class="right-section">
          <span></span>
          <!-- <h4 v-html="aboutPageData['section-3']?.right_title"></h4> -->
          <h4 >투명한 기준과 전문성으로<br/> 안전한 운영을 지원합니다.</h4>
          <!-- <p v-html="aboutPageData['section-3']?.right_subtitle"></p> -->
          <p>대한건물관리협회는 투명하고 신뢰성 있는 관리 기준을 최우선으로 두고 있습니다. 공정한 관리 체계를 통해 모든 이해관계자가 안심하고 신뢰할 수 있는 환경을 조성합니다. 협회는 회원들에게 법적
            자문과 체계적인 솔루션을 제공하여 복잡한 관리 문제를 해결하고, 건물의 가치를 지속적으로 향상시킬 수 있도록 지원합니다.</p>
          <p>회원들은 협회의 법률 자문과 체계적인 컨설팅을 통해, 건물 관리의 모든 단계에서 확실한 기준을 세우고 운영 효율성을 극대화할 수 있습니다. 협회의 지원을 통해, 더 나은 운영 환경을 만들고
            공정한 건물 관리 문화를 실현할 수 있습니다.</p>
          <p>협회와 함께,<br/> 공정하고 신뢰할 수 있는 관리 환경을 구축해보세요.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Greeting Section  -->

  <!-- Latest News Section  -->
  <div id="section-3" ref="section3" class="latest-news-section">
    <div class="container-fluid">
      <div class="latest-news-inner">
        <div class="top-title-link">
          <div class="left-title">
            <h2>협회 소식</h2>
          </div>
          <div class="right-link">
            <a @click="toNews()">더 알아보기 <span class="material-symbols-outlined">
                arrow_right_alt
              </span></a>
          </div>
        </div>
        <div class="latest-news-inner-box">
          <div v-if="loading" class="d-flex align-items-center justify-content-center">
            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" />

          </div>
 
          <div v-else v-for="data in homepageData?.slice(0, 3)" class="news-box">
            <div class="image-wrapper">
              <img style="max-height: 260px; max-height: 260px; object-fit: cover;" :src="`https://testingpro.xyz/storage/${data?.thumbnail}`" alt="">
            </div>
            <div class="title truncate-title">
              <h4>{{ data?.topic }}</h4>
            </div>
            <div class="content truncate-body">
              <p v-html="data?.body"></p>
            </div>
            <div class="link-wrapper">
              <a @click="toDetails(data?.id)"><span class="underline">자세히 보기</span> <span class="material-symbols-outlined">
                  arrow_right_alt
                </span></a>
            </div>
          </div>

        </div>
        <!-- <div class="bottom-mobile-link">
          <a @click="toDetails(data?.id)">더 알아보기 <span class="material-symbols-outlined">
              arrow_right_alt
            </span></a>
        </div> -->
      </div>
    </div>
  </div>
  <!-- Latest News Section  -->




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
import ProgressSpinner from 'primevue/progressspinner';
const runtimeConfig = useRuntimeConfig();
import { nextTick } from 'vue';
const aboutPageData = ref([]);
const loading = ref(true)
const homepageData = ref([]);
const router = useRouter()
const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const isSection1Visible1 = ref(false);
const isSection1Visible2 = ref(false);
const isSection1Visible3 = ref(false);

onMounted(() => {
  getaboutPageData();
  getHomepageData();
  nextTick(() => {
    const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === 'section-1') {
          isSection1Visible1.value = entry.isIntersecting;
         
        }
       else if (entry.target.id === 'section-2') {
          isSection1Visible2.value = entry.isIntersecting;
         
        }
        else if (entry.target.id === 'section-3') {
          isSection1Visible3.value = entry.isIntersecting;
         
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );
   
  if (section1.value) {
    observer.observe(section1.value);
   
  }
  if(section2.value){
    observer.observe(section2.value);
  }
  if(section3.value){
    observer.observe(section3.value);
  }



  })
})

function toDetails (id) {
  router.push(`/association-news-details/${id}`)
} 
function toNews(){
  router.push('/association-news')
}
const getaboutPageData = async () => {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}page/about`, {
      method: 'GET',
    })

    aboutPageData.value = await res
    loading.value = false
    console.log('res', res)
  }
  catch (e) {
    console.error(e)
    loading.value = false
  }
}

const getHomepageData = async (page = 1) => {
  try {

    loading.value = true
    const res = await $fetch(`${runtimeConfig.public.apiBase}news/`, {
      method: 'GET',
      // headers: {
      //     Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
      // }
    })
    homepageData.value = await res.data
    loading.value = false
 


  }
  catch (e) {
    console.error(e)
    loading.value = false
  }
}
function formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
}

</script>
<style scoped>

.truncate-body{
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>