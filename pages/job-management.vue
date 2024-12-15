<template>
    <!-- Header  -->
    <Header />
    <!-- Header  -->

    <!-- Announcements Top Section  -->
    <div class="tender-announcements-post-top-section-wrapper">
        <div class="container-fluid">
            <div class="announcements-top-inner">
                <div class="title-search-wrapper">
                    <div class="left-title">
                        <!-- <h2>입찰 공고 게시물</h2> -->
                         <h2>구인공고</h2>
                    </div>
                    <div class="right-search-wrapper">
                        <div class="link-wrapper">
                            <a @click="handleCreate()">새 게시물 만들기 <span class="material-symbols-outlined">
                                    arrow_right_alt
                                </span></a>
                        </div>
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
                                                <li v-for="category in categories" :key="category.id"
                                                    class="nav-item ProductNav_Link" role="presentation">
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
                                    <div class="button-wrapper">
                                        <a href="#">글쓰기</a>
                                    </div>
                                    <div class="right-select-filter-wrapper">
                                        <div class="left-title">
                                            <h5>정렬 기준:</h5>
                                        </div>
                                        <div class="select-filter">
                                            <div class="form-group">
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>최신</option>
                                                    <option>오래된 순</option>
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
                                                                    <th></th>
                                                                    <th>모집 부문</th>
                                                                    <th>작성자</th>
                                                                    <th>날짜</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="job in homepageData">
                                                                    <td>{{ job.id }}</td>
                                                                    <td v-html ="job.title"></td>
                                                                    <td>{{ job.user.name }}</td>
                                                                    <td>{{ formatTimestamp(job.created_at) }}</td>
                                                                    <td>
                                                                        <div class="buttons-wrapper">
                                                                            <button class="btn edit-btn" @click="handleEdit(job.id)"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24" height="24"
                                                                                    viewBox="0 0 24 24" fill="none">
                                                                                    <path
                                                                                        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path
                                                                                        d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                </svg></button>
                                                                            <button @click = "handleDelete(job.id)" class="btn delete-btn">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24" height="24"
                                                                                    viewBox="0 0 24 24" fill="none">
                                                                                    <path d="M3 6H5H21"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path
                                                                                        d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path d="M10 11V17"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path d="M14 11V17"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </td>
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
                                                                <!-- <div class="table-data-box">
                                                                       <div class="top-writer-date-wrapper">
                                                                           <h6>범주</h6>
                                                                           <h6>18/08/2024</h6>
                                                                       </div>
                                                                       <div class="data-link-wrapper">
                                                                           <div class="announcemnts-wrapper">
                                                                               <h5>에너지 효율 개선 프로젝트</h5>
                                                                           </div>
                                                                           <a href="#"><span
                                                                                   class="material-symbols-outlined">
                                                                                   arrow_right_alt
                                                                               </span></a>
                                                                       </div>
                                                                   </div> -->
                                                                <div v-for="job in homepageData" class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <!-- <h6>범주</h6> -->
                                                                        <h6>{{ job.category.name }}</h6>
                                                                        <h6>1{{ job.created_at }}</h6>
                                                                    </div>
                                                                    <div class="data-link-wrapper">
                                                                        <div class="announcemnts-wrapper">
                                                                            <!-- <h5>에너지 효율 개선 프로젝트</h5> -->
                                                                            <h5 v-html ="job.title"></h5>
                                                                        </div>
                                                                        <div class="buttons-wrapper">
                                                                            <button @click="handleEdit(job.id)" class="btn edit-btn"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24" height="24"
                                                                                    viewBox="0 0 24 24" fill="none">
                                                                                    <path
                                                                                        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path
                                                                                        d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                </svg></button>
                                                                            <button @click = "handleDelete(job.id)" class="btn delete-btn">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24" height="24"
                                                                                    viewBox="0 0 24 24" fill="none">
                                                                                    <path d="M3 6H5H21"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path
                                                                                        d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path d="M10 11V17"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                    <path d="M14 11V17"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                             
                                                <!-- Pagination Wrapper  -->

                                                <div v-if="pagination?.links?.length > 0 && homepageData.length > 0"
                                                    class="paginations-outer-wrappers">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination">
                                                            <!-- Previous Page -->
                                                            <li class="page-item"
                                                                :class="{ disabled: !pagination.links[0].url }">
                                                                <a class="page-link" href="#"
                                                                    @click.prevent="changePage(pagination.current_page - 1)">

                                                                    <span class="desktop-version">이전 페이지</span> <span
                                                                        class="material-symbols-outlined mobile-version">
                                                                        arrow_left_alt
                                                                    </span>
                                                                </a>
                                                            </li>

                                                            <!-- Page Numbers -->
                                                            <li v-for="link in pagination.links.slice(1, -1)"
                                                                :key="link.label" class="page-item"
                                                                :class="{ active: link.active }">
                                                                <a class="page-link" href="#"
                                                                    @click.prevent="changePage(link.label)">
                                                                    {{ link.label }}
                                                                </a>
                                                            </li>

                                                            <!-- Next Page -->
                                                            <li class="page-item"
                                                                :class="{ disabled: !pagination.links[pagination.links.length - 1].url }">
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
    <Dialog v-model:visible="confirmModal" modal header="Confirm Delete this Post?" :style="{ width: '25rem' }">
        <div class="d-flex justify-content-center gap-2">
                <Button type="button"  label="Cancel" severity="secondary" @click="confirmModal = false"></Button>
                <Button type="button" :loading="loading" label="Confirm" @click="confirmDelete"></Button>
            </div>
    </Dialog>
    <Toast/>
    <!-- Login Modal  -->
</template>

<script setup>

import Dialog from 'primevue/dialog';

import Button from 'primevue/button';

import ProgressSpinner from 'primevue/progressspinner';
const runtimeConfig = useRuntimeConfig();
import { nextTick } from 'vue';
const toast = useToast();
import Toast from 'primevue/toast';
import useAuth from '@/composables/useAuth';
const { authToken } = await useAuth();
const homepageData = ref([]);
const categories = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'])
const loading = ref(true)
const selectedCategory = ref('1')
const searchText = ref('')
const sortOrder = ref('latest')
const pagination = ref(null)
const router = useRouter()
const deleteId = ref('')
const confirmModal = ref(false)

onMounted(() => {
    geCategories()
    getHomepageData();
    //   initializeCarousel();
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

const handleDelete = async (id) =>{
    deleteId.value = id;
    confirmModal.value =  true;
}

const confirmDelete = async () =>{
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/${deleteId.value}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        toast.add({ detail:"Deleted Successfully!" , life: 3000 });
        getHomepageData();
        confirmModal.value = false
    }
    catch (e) {
        toast.add({ detail:e , life: 3000 });
        console.error(e)
        loading.value = false
    }
}

const geCategories = async () => {
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}job-categories`, {
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

const getHomepageData = async (page=1) => {
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/mine?page=${page}&category_id=${selectedCategory.value}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        homepageData.value = await res.data.reverse()
        pagination.value = await res.meta
        console.log(pagination.value)
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
}

async function selectCategory(id) {
    selectedCategory.value = id
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/mine?category_id=${selectedCategory.value}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
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

function formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
}

async function changePage(page) {
    if (page < 1 || page > pagination.last_page) return;
    getHomepageData(page);
}
const handleEdit = (id) =>{
 router.push(`post-job/${id}`)
}
const handleCreate = () =>{
    router.push('/create-job-post')
}
</script>