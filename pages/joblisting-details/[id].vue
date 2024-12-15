<template>

    <!-- Header  -->
    <Header />
    <!-- Header  -->

    <!-- joblisting Top Section  -->
    <div v-if="!loading" class="joblisting-top-section-wrapper">
        <div class="container-fluid">
            <div class="joblisting-top-inner">
                <div class="title-search-wrapper">
                    <div class="left-title">
                        <!-- {{ job }} -->
                        <!-- <h2>구인 구직</h2> -->
                         <h2>{{ job?.title }}</h2>
                         <p> {{ job?.created_ago }} </p>
                        <!-- <p>2일 전</p> -->
                    </div>
                    <div class="right-content-wrapper">
                        <div class="category-content-wrapper">
                            <div class="box-wrapper">
                                <div class="left-side">
                                    <h5>모집 부문:</h5>
                                </div>
                                <div class="right-side">
                                    <!-- <h6>회계</h6> -->
                                     <h6>{{ job?.category.name }}</h6>
                                </div>
                            </div>
                            <div class="box-wrapper">
                                <div class="left-side">
                                    <h5>작성자:</h5>
                                </div>
                                <div class="right-side">
                                    <!-- <h6>한국경영관</h6> -->
                                     <h6>{{ job?.user?.name }}</h6>
                                </div>
                            </div>
                            <!-- <div class="box-wrapper">
                                <div class="left-side">
                                    <h5>위치:</h5>
                                </div>
                                <div class="right-side">
                                    <h6>서울, 한국</h6>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- joblisting Top Section  -->


    <!-- Job Listing Details Section  -->
    <div class="joblisting-details-section-wrapper">
        <div class="container-fluid">
            <div class="announcements-details-inner-wrapper">
                <div class="news-content-related-content-wrapper">
                    <div class="news-content-wrapper">
                        <div v-html ="job?.description"></div>
                        <!-- <div class="matters-wrapper">
                            <h3>프로젝트 범위</h3>
                            <p>한국건물관리협회에서는 팀을 지원할 의욕적이고 세부 사항 주의를 기울이는 행정 보조원을 구합니다. 이 역할에는 다양한 행정 업무를 처리하고 사무실의 효율적인 운영을 보장하기 위한 주요 지원을 제공하는 것이 포함됩니다.</p>
                        </div>
                        <div class="key-recommendation-wrapper">
                            <h3>주요 책임</h3>
                            <div class="details-box">
                                <h5>일반 사무 관리:</h5>
                                <p>회의 일정 조정, 전화 대응, 서신 처리 등 일상적인 사무 업무를 관리합니다.</p>
                            </div>
                            <div class="details-box">
                                <h5>문서 관리:</h5>
                                <p>공식 문서, 보고서 및 기록을 준비, 정리 및 유지 관리합니다. 필요에 따라 프레젠테이션 및 스프레드시트 준비를 지원합니다.</p>
                            </div>
                            <div class="details-box">
                                <h5>데이터 입력 및 기록 보관:</h5>
                                <p>회원 정보, 재무 기록, 회의록 등 다양한 데이터베이스에 대한 데이터의 정확한 입력 및 유지 관리를 보장합니다.</p>
                            </div>
                            <div class="details-box">
                                <h5>경영팀 지원:</h5>
                                <p>여행 준비, 일정 관리, 회의 조직 등 경영팀에 행정 지원을 제공합니다.</p>
                            </div>
                        </div>
                        <div class="key-recommendation-wrapper">
                            <h3>자격:</h3>
                            <div class="details-box">
                                <h5>교육:</h5>
                                <p>고등학교 졸업장 또는 동등 학력 필수. 경영학 또는 관련 분야 학위가 선호됩니다.</p>
                            </div>
                            <div class="details-box">
                                <h5>경험:</h5>
                                <p>최소 1-2년의 행정 또는 사무직 경험. 빌딩 관리, 부동산 또는 이와 유사한 분야에서의 이전 경험은 플러스입니다.</p>
                            </div>
                        </div> -->
                    </div>
                    <div class="related-content-wrapper">
                        <div class="related-inner-wrapper">
                            <h3>다른 채용 공고 보기</h3>
                            <!-- {{ jobs }} -->
                            <div class="job-listing-related-wrapper">
                                <div v-for="job in jobs?.slice(0, 3)" :key="job.id" class="content-box">
                                    <a href="#">
                                        <div class="top-box-wrapper">
                                            <div class="top-writer-box">
                                                <p>회계</p>
                                            </div>
                                            <div class="job-title">
                                                <!-- <h5>행정 보조원</h5> -->
                                                 <h5>{{ job?.title }}</h5>
                                            </div>
                                            <div class="job-description">
                                                <!-- <p>일상 업무를 지원하고 일정을 관리하며 커뮤니케이션 업무를 지원합니다.</p> -->
                                                 <p v-html ="job?.description"></p>
                                            </div>
                                            <div class="category-wrapper">
                                                <p>작성자: <span>{{ job?.user?.name }}</span></p>
                                            </div>
                                        </div>
                                        <div class="bottom-date">
                                            <p>2일 전</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="explore-more-btn">
                                <a @click = "toJobListing">모든 구인공고 보기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <!-- Job Listing Details Section  -->


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
const router = useRouter()
const runtimeConfig = useRuntimeConfig();
const id = route.params.id
const loading = ref(true)
const job = ref(null)
const jobs = ref(null)
const { authToken } = await useAuth();

onMounted(() => {
    getJobData() 
  getData(id);
})

async function getData(id){

    try{
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/${id}`, {
    method: 'GET',
});

job.value = await res.data
    loading.value = false
  }
  catch (e){
     console.error(e)
     loading.value = false
  }

}

function  formatTimestamp(timestamp) {
      return new Date(timestamp).toLocaleString(); 
}

const getJobData = async (page = 1) => {
    try {
        loading.value = true


        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        jobs.value = await res.data.reverse();
        loading.value = false



    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

}
const toJobListing = () =>{
    router.push('/job-listing')
}


</script>