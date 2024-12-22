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
                        <h2>입찰 공고</h2>
                    </div>
                    <div class="right-search-wrapper">
                        <p>최신 입찰 공고에 대한 정보를 확인해보세요.</p>
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
                                <input v-model="searchText" type="text" class="form-control" placeholder="입찰공고 검색 ...">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Announcements Top Section  -->


    <!-- Announcements News Section  -->
    <div class="announcements-news-section-wrapper">
        <div class="container-fluid">
            <div class="announcements-news-inner">
                <div class="announcements-news">
                    <div class="inner-news-wrapper">
                        <div class="inner-wrapper">
                            <div class="button-filter-wrapper">
                                <div class="left-tab-button-wrapper">
                                    <div class="ProductNav_Wrapper">
                                        <nav id="ProductNav" class="ProductNav dragscroll mouse-scroll" role="tablist">
                                            <div id="ProductNavContents" class="nav ProductNav_Contents">
                                                <li class="nav-item ProductNav_Link" role="presentation">
                                                    <button class="nav-link" :class="{ active: !selectedCategory }"
                                                        id="category.id" data-bs-toggle="pill"
                                                        data-bs-target="#pills-home" type="button" role="tab"
                                                        aria-controls="pills" @click="selectCategory('')">
                                                        전체보기
                                                    </button>
                                                </li>
                                                <li v-for="category in categories" :key="category.id"
                                                    class="nav-item ProductNav_Link"  role="presentation">
                                                    <button class="nav-link"
                                                        :class="{ active: category.id == selectedCategory }"
                                                        :id="category.id" data-bs-toggle="pill"
                                                        data-bs-target="#pills-home" type="button" role="tab"
                                                        :aria-controls="'pills-' + category.id"
                                                        @click="selectCategory(category.id)">
                                                        {{ category.name }}
                                                    </button>
                                                </li>
                                                <span id="Indicator" class="ProductNav_Indicator"></span>
                                            </div>
                                        </nav>
                                        <button id="AdvancerLeft" class="Advancer Advancer_Left" type="button">
                                            <span class="material-symbols-outlined">
                                                arrow_left_alt
                                            </span>
                                        </button>
                                        <button id="AdvancerRight" class="Advancer Advancer_Right" type="button">
                                            <span class="material-symbols-outlined">
                                                arrow_right_alt
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="right-box-button-filter-wrapper tender-announcements-filter-wrapper">
                                    <div class="button-wrapper" style="cursor: pointer;">
                                        <a @click="toTenderManagement()">글쓰기</a>
                                    </div>
                                    <div class="right-select-filter-wrapper">
                                        <div class="left-title">
                                            <h5>정렬 기준:</h5>
                                        </div>
                                        <div class="select-filter">
                                            <div class="form-group">
                                                <select class="form-select" v-model="sortOrder"
                                                aria-label="Default select example"  @change="getAnnouncement()" >
                                                <option value="latest" selected>최신 순</option>
                                                <option value="oldest">오래된 순</option>
                                            </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                            aria-labelledby="pills-home-tab" tabindex="0">
                                            <!-- Tender announcements Inner  -->
                                            <div class="outer-wrapper">
                                                <div class="tender-announcements-inner-wrapper">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th style="width: 10vw;">아니요</th>
                                                                    <th style="width: 30vw;">제목 </th>
                                                                    <th style="width: 12vw;">작성자</th>
                                                                    <th style="width: 12vw;">날짜</th>
                                                                    <th style="width: 12vw;"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for = "(data,i) in homepageData">
                                                                    <td>{{ i+1 }}</td>
                                                                    <td @click = "handleDetails(data?.id)" style="cursor: pointer;">{{ data?.topic }}</td>
                                                                    <!-- <td class="truncate-des" v-html="data?.body"></td> -->
                                                                    <td>{{ data?.user?.name || data?.author_name }}</td>
                
                                                                    <td>{{ formatTimestamp(data?.created_at) }}</td>
                                                                    <td><a @click = "handleDetails(data?.id)">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="table-mobile-wrapper">
                                                        <div class="mobile-table-inner-wrapper">
                                                            <div class="table-mobile-header">
                                                                <h5>모집부문</h5>
                                                            </div>
                                                            <div class="table-mobile-data-wrapper">
                                                                <div v-for = "data in homepageData" class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>{{ data?.category?.name }}</h6>
                                                                        <h6>{{ formatTimestamp(data?.created_at) }}</h6>
                                                                    </div>
                                                                    <div class="data-link-wrapper">
                                                                        <div class="announcemnts-wrapper">
                                                                            <h5>{{ data?.topic }}</h5>
                                                                        </div>
                                                                        <a @click = "handleDetails(data?.id)"><span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <!-- <div class="paginations-outer-wrappers">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination">
                                                            <li class="page-item"><a class="page-link" href="#"><span
                                                                        class="desktop-version">이전 페이지</span> <span
                                                                        class="material-symbols-outlined mobile-version">
                                                                        arrow_left_alt
                                                                    </span></a></li>
                                                            <li class="page-item"><a class="page-link" href="#">1</a>
                                                            </li>
                                                            <li class="page-item"><a class="page-link" href="#">2</a>
                                                            </li>
                                                            <li class="page-item"><a class="page-link" href="#">3</a>
                                                            </li>
                                                            <li class="page-item"><a class="page-link" href="#"><span
                                                                        class="desktop-version">다음 페이지</span> <span
                                                                        class="material-symbols-outlined mobile-version">
                                                                        arrow_right_alt
                                                                    </span></a></li>
                                                        </ul>
                                                    </nav>
                                                </div> -->
                                                <div v-if=" homepageData.length > 0"
                                                    class="paginations-outer-wrappers">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination">
                                                            <!-- Previous Page -->
                                                            <li class="page-item"
                                                                :class="{ disabled: !pagination?.links[0]?.url }">
                                                                <a class="page-link" href="#"
                                                                    @click.prevent="changePage(pagination.current_page - 1)">

                                                                    <span class="desktop-version">이전 페이지</span> <span
                                                                        class="material-symbols-outlined mobile-version">
                                                                        arrow_left_alt
                                                                    </span>
                                                                </a>
                                                            </li>

                                                            <!-- Page Numbers -->
                                                            <li v-for="link in pagination?.links?.slice(1, -1)"
                                                                :key="link.label" class="page-item"
                                                                :class="{ active: link.active }">
                                                                <a class="page-link" :class="{ active: link.active }" href="#"
                                                                    @click.prevent="changePage(link.label)">
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
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Announcements News Section  -->


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
    <Toast/>
    <!-- Login Modal  -->
</template>
<script setup>
import ProgressSpinner from 'primevue/progressspinner';
const runtimeConfig = useRuntimeConfig();
import { nextTick } from 'vue';
const toast = useToast();
import Toast from 'primevue/toast';
import useAuth from '@/composables/useAuth';
const { authToken } = await useAuth();
const homepageData = ref([]);
const categories = ref([])
const loading = ref(true)
const selectedCategory = ref('')
const searchText = ref('')
const sortOrder = ref('latest')
const pagination = ref(null)
const router = useRouter()
const deleteId = ref('')
const confirmModal = ref(false)

onMounted(()=>{
    geCategories()
    getAnnouncement()



    var SETTINGS = {
        navBarTravelling: false,
        navBarTravelDirection: "",
        navBarTravelDistance: 150
    }

    var colours = {
        0: "#fead00"
    }

    var AdvancerLeft = document.getElementById("AdvancerLeft");
    var AdvancerRight = document.getElementById("AdvancerRight");


    ProductNav.setAttribute("data-overflowing", determineOverflow(ProductNavContents, ProductNav));




    AdvancerLeft.addEventListener("click", function () {
        // If in the middle of a move return
        if (SETTINGS.navBarTravelling === true) {
            return;
        }


        // If we have content overflowing both sides or on the left
        if (determineOverflow(ProductNavContents, ProductNav) === "left" || determineOverflow(ProductNavContents, ProductNav) === "both") {
            // Find how far this panel has been scrolled
            var availableScrollLeft = ProductNav.scrollLeft;
            // If the space available is less than two lots of our desired distance, just move the whole amount
            // otherwise, move by the amount in the settings
            if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
                ProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
            } else {
                ProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
            }
            // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
            ProductNavContents.classList.remove("ProductNav_Contents-no-transition");
            // Update our settings
            SETTINGS.navBarTravelDirection = "left";
            SETTINGS.navBarTravelling = true;
        }
        // Now update the attribute in the DOM
        ProductNav.setAttribute("data-overflowing", determineOverflow(ProductNavContents, ProductNav));
    });

    AdvancerRight.addEventListener("click", function () {
        // If in the middle of a move return
        if (SETTINGS.navBarTravelling === true) {
            return;
        }
        // If we have content overflowing both sides or on the right
        if (determineOverflow(ProductNavContents, ProductNav) === "right" || determineOverflow(ProductNavContents, ProductNav) === "both") {
            // Get the right edge of the container and content
            var navBarRightEdge = ProductNavContents.getBoundingClientRect().right;
            var navBarScrollerRightEdge = ProductNav.getBoundingClientRect().right;
            // Now we know how much space we have available to scroll
            var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
            // If the space available is less than two lots of our desired distance, just move the whole amount
            // otherwise, move by the amount in the settings
            if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
                ProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
            } else {
                ProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
            }
            // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
            ProductNavContents.classList.remove("ProductNav_Contents-no-transition");
            // Update our settings
            SETTINGS.navBarTravelDirection = "right";
            SETTINGS.navBarTravelling = true;
        }
        // Now update the attribute in the DOM
        ProductNav.setAttribute("data-overflowing", determineOverflow(ProductNavContents, ProductNav));
    });


    ProductNavContents.addEventListener(
        "transitionend",
        function () {
            // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
            var styleOfTransform = window.getComputedStyle(ProductNavContents, null);
            var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
            // If there is no transition we want to default to 0 and not null
            var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
            ProductNavContents.style.transform = "none";
            ProductNavContents.classList.add("ProductNav_Contents-no-transition");
            // Now lets set the scroll position
            if (SETTINGS.navBarTravelDirection === "left") {
                ProductNav.scrollLeft = ProductNav.scrollLeft - amount;
            } else {
                ProductNav.scrollLeft = ProductNav.scrollLeft + amount;
            }
            SETTINGS.navBarTravelling = false;
        },
        false
    );



    function determineOverflow(content, container) {
        var containerMetrics = container.getBoundingClientRect();
        var containerMetricsRight = Math.floor(containerMetrics.right);
        var containerMetricsLeft = Math.floor(containerMetrics.left);
        var contentMetrics = content.getBoundingClientRect();
        var contentMetricsRight = Math.floor(contentMetrics.right);
        var contentMetricsLeft = Math.floor(contentMetrics.left);
        if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
            return "both";
        } else if (contentMetricsLeft < containerMetricsLeft) {
            return "left";
        } else if (contentMetricsRight > containerMetricsRight) {
            return "right";
        } else {
            return "none";
        }
    }
})


const geCategories = async () => {
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}tender-announcement-categories`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        categories.value = await res.data
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
}

const toTenderManagement = () =>{
    if(authToken?.value){
        router.push('/tender-management')
    }
    else{
        toast.add({ detail:"관리자 승인을 받은 유저만 가능합니다." , life: 3000 });
    }
  
}

const getAnnouncement = async (page=1) =>{
    if(!selectedCategory.value){

        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}tender-announcements/?page=${page}&sort=${sortOrder.value}`, {
            method: 'GET',
        });

        homepageData.value = await res.data
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
        const res = await $fetch(`${runtimeConfig.public.apiBase}tender-announcements/?category_id=${selectedCategory.value}&page=${page}&sort=${sortOrder.value}`, {
            method: 'GET',
        });

        homepageData.value = await res.data
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


async function selectCategory(id) {
    selectedCategory.value = id
    if(!selectedCategory.value){
        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}tender-announcements/`, {
            method: 'GET',
        });

        homepageData.value = await res.data
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
        const res = await $fetch(`${runtimeConfig.public.apiBase}tender-announcements/?category_id=${selectedCategory.value}`, {
            method: 'GET',
        });

        homepageData.value = await res.data
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
function  formatTimestamp(timestamp) {
      return new Date(timestamp).toLocaleString(); 
}

async function changePage(page) {
    if (page < 1 || page > pagination.last_page) return;
    getAnnouncement(page);
}

watch(searchText, async (newSearchText) => {
    //   if (newSearchText.trim() === '') {
    //     homepageData.value = []; 
    //     return;
    //   }

    loading.value = true;


    try {
        const res = await $fetch(`${runtimeConfig.public.apiBase}tender-announcements/?search=${newSearchText}&sort=${sortOrder.value}`, {
            method: 'GET',
        });

        homepageData.value = await res.data;  // Assuming the response has a 'data' field with the results
    } catch (err) {
        console.error(err);
    } finally {
        loading.value = false;
    }
});

function handleDetails(id){
    router.push(`/tender-announcement-details/${id}`)
}

</script>