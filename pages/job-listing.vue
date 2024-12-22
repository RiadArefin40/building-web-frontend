<template>
    <!-- Header  -->
    <Header />
    <!-- Header  -->

    <!-- Announcements Top Section  -->
    <div class="announcements-top-section-wrapper">
        <div class="container-fluid">
            <div class="announcements-top-inner">
                <div class="title-search-wrapper">
                    <div class="left-title">
                        <h2>구인 구직</h2>
                    </div>
                    <div class="right-search-wrapper">
                        <p>다양한 분야의 채용 공고를 통해 경력에 맞는 새로운 도전을 시작해보세요.</p>
                        <form action="">
                            <div class="form-group">
                                <button type="submit" class="submit_btn"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <mask id="mask0_431_1322" style="mask-type:luminance" maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="20" height="20">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H19.4768V19.477H0V0Z"
                                                fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_431_1322)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.73876 1.5C5.19576 1.5 1.49976 5.195 1.49976 9.738C1.49976 14.281 5.19576 17.977 9.73876 17.977C14.2808 17.977 17.9768 14.281 17.9768 9.738C17.9768 5.195 14.2808 1.5 9.73876 1.5ZM9.73876 19.477C4.36876 19.477 -0.000244141 15.108 -0.000244141 9.738C-0.000244141 4.368 4.36876 0 9.73876 0C15.1088 0 19.4768 4.368 19.4768 9.738C19.4768 15.108 15.1088 19.477 9.73876 19.477Z"
                                                fill="black" />
                                        </g>
                                        <mask id="mask1_431_1322" style="mask-type:luminance" maskUnits="userSpaceOnUse"
                                            x="15" y="15" width="6" height="6">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.24 15.707H20.264V20.7218H15.24V15.707Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask1_431_1322)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M19.5142 20.7218C19.3232 20.7218 19.1312 20.6488 18.9842 20.5028L15.4602 16.9888C15.1672 16.6958 15.1662 16.2208 15.4592 15.9278C15.7512 15.6328 16.2262 15.6348 16.5202 15.9258L20.0442 19.4408C20.3372 19.7338 20.3382 20.2078 20.0452 20.5008C19.8992 20.6488 19.7062 20.7218 19.5142 20.7218Z"
                                                fill="black" />
                                        </g>
                                    </svg></button>
                                <input v-model="searchText" type="text" class="form-control" placeholder="구인공고 검색 ...">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Announcements Top Section  -->


    <!-- Job Listing Section  -->
    <div class="job-listing-section-wrapper">
        <div class="container-fluid">
            <div class="job-listing-section-inner">
                <div class="left-tab-button-wrapper">
                    <div class="tabs-button-inner-wrapper">
                        <div class="title-wrapper">
                            <h3>직업 카테고리</h3>
                        </div>
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <button  class="nav-link"
                               :class="{ active: !selectedCategory }" id=""
                                data-bs-toggle="pill" data-bs-target="#v-pills-one" type="button" role="tab"
                                :aria-controls="'pills-' " aria-selected="true"
                                @click="selectCategory('')">전체보기</button>
                            <button v-for="category in categories" class="nav-link"
                                :class="{ active: category.id == selectedCategory }" :id="category.id"
                                data-bs-toggle="pill" data-bs-target="#v-pills-one" type="button" role="tab"
                                :aria-controls="'pills-' + category.id" aria-selected="true"
                                @click="selectCategory(category.id)">{{ category.name }}</button>

                            <!-- <button class="nav-link" id="v-pills-two-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-one" type="button" role="tab" aria-controls="v-pills-one"
                                aria-selected="false">관리자</button>
                            <button class="nav-link" id="v-pills-three-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-one" type="button" role="tab" aria-controls="v-pills-one"
                                aria-selected="false">전기</button>
                            <button class="nav-link" id="v-pills-four-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-one" type="button" role="tab" aria-controls="v-pills-one"
                                aria-selected="false">경비</button>
                            <button class="nav-link" id="v-pills-five-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-one" type="button" role="tab" aria-controls="v-pills-one"
                                aria-selected="false">회계</button>
                            <button class="nav-link" id="v-pills-six-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-one" type="button" role="tab" aria-controls="v-pills-one"
                                aria-selected="false">감독자</button> -->
                        </div>
                    </div>
                </div>
                <div class="right-content-wrapper">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-one" role="tabpanel"
                            aria-labelledby="v-pills-one-tab" tabindex="0">
                            <div class="inner-tab-content">
                                <div class="right-box-button-filter-wrapper">
                                    <div class="button-wrapper" style="cursor: pointer;">
                                        <a @click="toTenderManagement()">글쓰기</a>
                                    </div>
                                    <div class="right-select-filter-wrapper">
                                        <div class="left-title">
                                            <h5>카테고리:</h5>
                                        </div>
                                        <div class="select-filter">
                                            <div class="form-group">
                                                <select class="form-select" v-model="sortOrder"
                                                aria-label="Default select example"  @change="getJobData()" >
                                                <option value="newest" selected>최신 순</option>
                                                <option value="oldest">오래된 순</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ProgressSpinner v-if="loading" style="width: 50px; height: 50px"
                                                    strokeWidth="8" fill="transparent" animationDuration=".5s"
                                                    aria-label="Custom ProgressSpinner" />
                                <div v-else class="inner-tab-content-wrapper">
                                    <div v-for="job in jobs" class="content-box" style="max-width: 484px;">
                                        <NuxtLink :to="`/joblisting-details/${job.id}`">
                                            <div class="top-box-wrapper">
                                                <div class="top-writer-box">
                                                    <!-- <p>회계</p> -->
                                                    <p>{{ job.category?.name }}</p>
                                                </div>
                                                <div class="job-title truncate-title">
                                                    <!-- <h5>행정 보조원</h5> -->
                                                    <h5>{{ job.title }}</h5>
                                                </div>
                                                <div class="job-description truncate-description">
                                                    <!-- <p>일상 업무를 지원하고 일정을 관리하며 커뮤니케이션 업무를 지원합니다.</p> -->
                                                    <p class="" v-html="removeImageTags(job?.description)"></p>
                                                </div>
                                                <div class="category-wrapper">
                                                    <!-- <p>작성자: <span>한국경영관</span></p> -->
                                                </div>
                                            </div>
                                            <div class="bottom-date">
                                                <!-- <p>2일 전</p> -->
                                                <p>{{ job.created_ago }}</p>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <!-- Pagination Wrapper  -->

                                <div v-if="jobs?.length > 0"
                                    class="pagination-outer-wrappers">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <!-- Previous Page -->
                                            <li class="page-item" :class="{ disabled: !pagination?.links[0].url }">
                                                <a class="page-link" href="#"
                                                    @click.prevent="changePage(pagination?.current_page - 1)">

                                                    <span class="desktop-version">이전 페이지</span> <span
                                                        class="material-symbols-outlined mobile-version">
                                                        arrow_left_alt
                                                    </span>
                                                </a>
                                            </li>

                                            <!-- Page Numbers -->
                                            <li v-for="link in pagination?.links.slice(1, -1)" :key="link.label"
                                                class="page-item" :class="{ active: link.active }">
                                                <a class="page-link" :class="{ active: link.active }" href="#" @click.prevent="changePage(link.label)">
                                                    {{ link.label }}
                                                </a>
                                            </li>

                                            <!-- Next Page -->
                                            <li class="page-item"
                                                :class="{ disabled: !pagination?.links[pagination?.links?.length - 1].url }">
                                                <a class="page-link" href="#"
                                                    @click.prevent="changePage(pagination.current_page + 1)">

                                                    <span class="desktop-version">다음 페이지</span> <span
                                                        class="material-symbols-outlined mobile-version">
                                                        arrow_right_alt
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- Pagination Wrapper  -->
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-two" role="tabpanel" aria-labelledby="v-pills-two-tab"
                            tabindex="0">
                            <div class="inner-tab-content">
                                <div class="right-box-button-filter-wrapper">
                                    <div class="button-wrapper">
                                        <a href="#">글쓰기</a>
                                    </div>
                                    <div class="right-select-filter-wrapper">
                                        <div class="left-title">
                                            <h5>카테고리:</h5>
                                        </div>
                                        <div class="select-filter">
                                            <div class="form-group">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>전체</option>
                                                    <option>오래된 순</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inner-tab-content-wrapper">
                                    <div class="content-box">
                                        <a href="#">
                                            <div class="top-box-wrapper">
                                                <div class="top-writer-box">
                                                    <p>회계</p>
                                                </div>
                                                <div class="job-title">
                                                    <h5>행정 보조원</h5>
                                                </div>
                                                <div class="job-description">
                                                    <p>일상 업무를 지원하고 일정을 관리하며 커뮤니케이션 업무를 지원합니다.</p>
                                                </div>
                                                <div class="category-wrapper">
                                                    <p>작성자: <span>한국경영관</span></p>
                                                </div>
                                            </div>
                                            <div class="bottom-date">
                                                <p>2일 전</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="content-box">
                                        <a href="#">
                                            <div class="top-box-wrapper">
                                                <div class="top-writer-box">
                                                    <p>회계</p>
                                                </div>
                                                <div class="job-title">
                                                    <h5>행정 보조원</h5>
                                                </div>
                                                <div class="job-description">
                                                    <p>일상 업무를 지원하고 일정을 관리하며 커뮤니케이션 업무를 지원합니다.</p>
                                                </div>
                                                <div class="category-wrapper">
                                                    <p>작성자: <span>한국경영관</span></p>
                                                </div>
                                            </div>
                                            <div class="bottom-date">
                                                <p>2일 전</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="content-box">
                                        <a href="#">
                                            <div class="top-box-wrapper">
                                                <div class="top-writer-box">
                                                    <p>회계</p>
                                                </div>
                                                <div class="job-title">
                                                    <h5>행정 보조원</h5>
                                                </div>
                                                <div class="job-description">
                                                    <p>일상 업무를 지원하고 일정을 관리하며 커뮤니케이션 업무를 지원합니다.</p>
                                                </div>
                                                <div class="category-wrapper">
                                                    <p>작성자: <span>한국경영관</span></p>
                                                </div>
                                            </div>
                                            <div class="bottom-date">
                                                <p>2일 전</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="content-box">
                                        <a href="#">
                                            <div class="top-box-wrapper">
                                                <div class="top-writer-box">
                                                    <p>회계</p>
                                                </div>
                                                <div class="job-title">
                                                    <h5>행정 보조원</h5>
                                                </div>
                                                <div class="job-description">
                                                    <p>일상 업무를 지원하고 일정을 관리하며 커뮤니케이션 업무를 지원합니다.</p>
                                                </div>
                                                <div class="category-wrapper">
                                                    <p>작성자: <span>한국경영관</span></p>
                                                </div>
                                            </div>
                                            <div class="bottom-date">
                                                <p>2일 전</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <!-- Pagination Wrapper  -->
                                <div class="pagination-outer-wrappers">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#"><span
                                                        class="desktop-version">이전 페이지</span> <span
                                                        class="material-symbols-outlined mobile-version">
                                                        arrow_left_alt
                                                    </span></a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                                            <li class="page-item"><a class="page-link" href="#"><span
                                                        class="desktop-version">다음 페이지</span> <span
                                                        class="material-symbols-outlined mobile-version">
                                                        arrow_right_alt
                                                    </span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <!-- Pagination Wrapper  -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Job Listing Section  -->


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
<Toast/>
</template>

<script setup>

import { useToast } from "primevue/usetoast";
import ProgressSpinner from 'primevue/progressspinner';
const router = useRouter()
const toast = useToast();
import Toast from 'primevue/toast';
import useAuth from '@/composables/useAuth';
const { isAuthenticated } = useAuth();
const runtimeConfig = useRuntimeConfig();
const { authToken } = await useAuth();
const loading = ref(false)
const selectedCategory = ref('')
const pagination = ref(null);
const type = ref('')
const searchText = ref('')
const categories = ref(null)
const jobs = ref([])
const sortOrder = ref('newest')

onMounted(() => {
    getJobType()
    getJobData()
    if (!isAuthenticated) {
        $(document).ready(function () {

            $('#loginModal').modal('show');
        });
    }

})

async function selectCategory(id) {
    selectedCategory.value = id
    if(!selectedCategory.value){
        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs?`, {
            method: 'GET',
        });

        jobs.value = await res.data
        pagination.value = await res.meta
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
    }
    else{
        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs?category_id=${selectedCategory.value}`, {
            method: 'GET',
        });

        jobs.value = await res.data
        pagination.value = await res.meta
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
    }


}
const toTenderManagement = () =>{
    if(authToken?.value){
        router.push('/job-management')
    }
    else{
        toast.add({ detail:"관리자 승인을 받은 유저만 가능합니다." , life: 3000 });
    }
  
}
const getJobData = async (page = 1) => {
    if(!selectedCategory.value){
        try {
        loading.value = true


        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs?page=${page}&sort=${sortOrder.value}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        jobs.value = await res.data;
        pagination.value = await res.meta
        loading.value = false



    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

    }
    else{
        try {
        loading.value = true


        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs?page=${page}&category_id=${selectedCategory.value}&sort=${sortOrder.value}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        jobs.value = await res.data;
        pagination.value = await res.meta
        loading.value = false



    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
    }


}


const getJobType = async () => {


    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}job-categories`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        categories.value = await res.data;
        // disputeTypeData.value = disputeType.value[0].id
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

}

async function changePage(page) {
    if (page < 1 || page > pagination.last_page) return;
    getJobData(page);
}

watch(searchText, async (newSearchText) => {
    //   if (newSearchText.trim() === '') {
    //     homepageData.value = []; 
    //     return;
    //   }

    loading.value = true;


    try {
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/?search=${newSearchText}&sort=${sortOrder.value}`, {
            method: 'GET',
        });

        jobs.value = await res.data;  // Assuming the response has a 'data' field with the results
    } catch (err) {
        console.error(err);
    } finally {
        loading.value = false;
    }
});

function removeImageTags(html) {
  return html.replace(/<img[^>]*>/gi, "");
}


</script>

<style>
.truncate-description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.truncate-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>