<template>
    <!-- Header  -->
    <Header />
    <!-- Header  -->

    <!-- Association News Top Section  -->
    <div class="association-news-top-section-wrapper">
        <div class="container-fluid">
            <div class="association-news-top-inner">
                <div class="title-search-wrapper">
                    <div class="left-title">
                        <h2>협회 소식</h2>
                    </div>
                    <div class="right-search-wrapper">
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
                                <input v-model="searchText" type="text" class="form-control" placeholder="협회 소식 검색 ...">
                            </div>
                        </form>
                    </div>
                </div>
                <div v-if="homepageData.length > 0" class="left-image-right-content-wrapper" @click="toDetails(homepageData[0]?.id)">
                    
                    <div class="left-image-wrapper">
                        <img class="custom-img-width"  :src="`https://testingpro.xyz/storage/${homepageData[0]?.thumbnail}`" alt="">
                    </div>
                    <div class="right-content-wrapper">
                        <div class="top-date">
                            <div class="calendar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M18.6665 8.9043H0.842529C0.428529 8.9043 0.0925293 8.5683 0.0925293 8.1543C0.0925293 7.7403 0.428529 7.4043 0.842529 7.4043H18.6665C19.0805 7.4043 19.4165 7.7403 19.4165 8.1543C19.4165 8.5683 19.0805 8.9043 18.6665 8.9043Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M14.2013 12.8096C13.7873 12.8096 13.4473 12.4736 13.4473 12.0596C13.4473 11.6456 13.7783 11.3096 14.1923 11.3096H14.2013C14.6153 11.3096 14.9513 11.6456 14.9513 12.0596C14.9513 12.4736 14.6153 12.8096 14.2013 12.8096Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.76377 12.8096C9.34977 12.8096 9.00977 12.4736 9.00977 12.0596C9.00977 11.6456 9.34077 11.3096 9.75477 11.3096H9.76377C10.1778 11.3096 10.5138 11.6456 10.5138 12.0596C10.5138 12.4736 10.1778 12.8096 9.76377 12.8096Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.31701 12.8096C4.90301 12.8096 4.56201 12.4736 4.56201 12.0596C4.56201 11.6456 4.89401 11.3096 5.30801 11.3096H5.31701C5.73101 11.3096 6.06701 11.6456 6.06701 12.0596C6.06701 12.4736 5.73101 12.8096 5.31701 12.8096Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M14.2013 16.6963C13.7873 16.6963 13.4473 16.3603 13.4473 15.9463C13.4473 15.5323 13.7783 15.1963 14.1923 15.1963H14.2013C14.6153 15.1963 14.9513 15.5323 14.9513 15.9463C14.9513 16.3603 14.6153 16.6963 14.2013 16.6963Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.76377 16.6963C9.34977 16.6963 9.00977 16.3603 9.00977 15.9463C9.00977 15.5323 9.34077 15.1963 9.75477 15.1963H9.76377C10.1778 15.1963 10.5138 15.5323 10.5138 15.9463C10.5138 16.3603 10.1778 16.6963 9.76377 16.6963Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.31701 16.6963C4.90301 16.6963 4.56201 16.3603 4.56201 15.9463C4.56201 15.5323 4.89401 15.1963 5.30801 15.1963H5.31701C5.73101 15.1963 6.06701 15.5323 6.06701 15.9463C6.06701 16.3603 5.73101 16.6963 5.31701 16.6963Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.7935 4.791C13.3795 4.791 13.0435 4.455 13.0435 4.041V0.75C13.0435 0.336 13.3795 0 13.7935 0C14.2075 0 14.5435 0.336 14.5435 0.75V4.041C14.5435 4.455 14.2075 4.791 13.7935 4.791Z"
                                        fill="#939393" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.71533 4.791C5.30133 4.791 4.96533 4.455 4.96533 4.041V0.75C4.96533 0.336 5.30133 0 5.71533 0C6.12933 0 6.46533 0.336 6.46533 0.75V4.041C6.46533 4.455 6.12933 4.791 5.71533 4.791Z"
                                        fill="#939393" />
                                    <mask id="mask0_417_2457" style="mask-type:luminance" maskUnits="userSpaceOnUse"
                                        x="0" y="1" width="20" height="21">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5791H19.5V21.5H0V1.5791Z"
                                            fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_417_2457)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.521 3.0791C2.928 3.0791 1.5 4.4621 1.5 6.9731V16.0221C1.5 18.5881 2.928 20.0001 5.521 20.0001H13.979C16.572 20.0001 18 18.6141 18 16.0981V6.9731C18.004 5.7381 17.672 4.7781 17.013 4.1181C16.335 3.4381 15.29 3.0791 13.988 3.0791H5.521ZM13.979 21.5001H5.521C2.116 21.5001 0 19.4011 0 16.0221V6.9731C0 3.6451 2.116 1.5791 5.521 1.5791H13.988C15.697 1.5791 17.11 2.0911 18.075 3.0581C19.012 3.9991 19.505 5.3521 19.5 6.9751V16.0981C19.5 19.4301 17.384 21.5001 13.979 21.5001Z"
                                            fill="#939393" />
                                    </g>
                                </svg>
                            </div>
                            <div class="news-date">
                                <!-- <h6>2024년 9월 19일</h6> -->
                                <h6>{{ formatTimestamp(homepageData[0]?.
                                                                    created_at)
                                                                    }}</h6>
                            </div>
                        </div>
                        <div class="title-wrapper">
                            <h3>{{ homepageData[0]?.topic }}</h3>
                        </div>
                        <div class="conttent-wrapper truncate ">
                            <p v-html="homepageData[0]?.body"></p>
                            <!-- <p>한국건물관리협회는 회원들이 보다 큰 효율성과 법적 안정성을 달성할 수 있도록 지원하기 위해 고안된 다양한 새로운 혜택과 서비스를 소개하게 되어 기쁘게
                                생각합니다.</p> -->
                        </div>
                        <div class="link-wrapper">
                            <NuxtLink :to="`/association-news-details/${homepageData[0]?.id}`">자세히 보기 <span class="material-symbols-outlined">
                                    arrow_right_alt
                                </span></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Association News Top Section  -->


    <!-- Associatin News Section  -->
    <div class="association-news-section-wrapper">
        <div class="container-fluid">
            <div class="association-news-inner">
                <div class="top-title">
                    <h3>협회 최신 활동 및 소식</h3>
                </div>
                <div class="association-news">
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
                                <div class="right-select-filter-wrapper">
                                    <div class="left-title">
                                        <h5>정렬 기준:</h5>
                                    </div>
                                    <div class="select-filter">
                                        <div class="form-group">
                                            <select class="form-select" v-model="sortOrder"
                                                aria-label="Default select example"  @change="getHomepageData()" >
                                                <option value="newest" selected>최신 순</option>
                                                <option value="oldest">오래된 순</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                            aria-labelledby="pills-home-tab" tabindex="0">
                                            <!-- Association News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div v-if="loading"
                                                    class="d-flex align-items-center justify-content-center">
                                                    <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8"
                                                        fill="transparent" animationDuration=".5s"
                                                        aria-label="Custom ProgressSpinner" />

                                                </div>
                                                <div v-else v-for="data in homepageData" class="news-box">
                                                    <NuxtLink :to="`/association-news-details/${data?.id}`">
                                                        <div class="image-box">
                                                            <img style="max-height: 260px; max-height: 260px; object-fit: cover;"
                                                                :src="`https://testingpro.xyz/storage/${data?.thumbnail}`"
                                                                alt="">
                                                        </div>
                                                        <div class="category-date-wrapper">
                                                            <div class="category-wrapper">
                                                                <!-- <h5>모범 사례</h5> -->
                                                                <h5>{{ data?.category?.name }}</h5>
                                                            </div>
                                                            <div class="date-wrapper">
                                                                <!-- <h5>2024년 9월 18일</h5> -->
                                                                <h5>{{ formatTimestamp(data?.
                                                                    created_at)
                                                                    }}</h5>
                                                            </div>
                                                        </div>
                                                        <div class="news-title">
                                                            <h3>{{ data?.topic }}</h3>
                                                        </div>
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                            <!-- Association News Inner  -->
                                        </div>

                                    </div>
                                    <!-- Pagination Wrapper  -->

                                    <div v-if="pagination?.links?.length > 0 && homepageData.length > 0"
                                        class="pagination-outer-wrappers">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <!-- Previous Page -->
                                                <li class="page-item" :class="{ disabled: !pagination?.links[0].url }">
                                                    <a class="page-link" href="#"
                                                        @click.prevent="changePage(pagination.current_page - 1)">

                                                        <span class="desktop-version">이전 페이지</span> <span
                                                            class="material-symbols-outlined mobile-version">
                                                            arrow_left_alt
                                                        </span>
                                                    </a>
                                                </li>

                                                <!-- Page Numbers -->
                                                <li v-for="link in pagination?.links.slice(1, -1)" :key="link.label"
                                                    class="page-item" :class="{ active: link?.active }">
                                                    <a class="page-link" :class="{ active: link?.active }" href="#"
                                                        @click.prevent="changePage(link?.label)">
                                                        {{ link?.label }}
                                                    </a>
                                                </li>

                                                <!-- Next Page -->
                                                <li class="page-item"
                                                    :class="{ disabled: !pagination?.links[pagination.links?.length - 1].url }">
                                                    <a class="page-link" href="#"
                                                        @click.prevent="changePage(pagination?.current_page + 1)">

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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Associatin News Section  -->


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
const categories = ref([])
const loading = ref(true)
const selectedCategory = ref('')
const searchText = ref('')
const sortOrder = ref('newest')
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





const geCategories = async () => {
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}news-categories`, {
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

const getHomepageData = async (page = 1) => {
    try {
        if (selectCategory.value) {
            loading.value = true
            console.log('category', selectedCategory.value)
            const res = await $fetch(`${runtimeConfig.public.apiBase}news/?page=${page}&category_id=${selectedCategory.value}&sort=${sortOrder.value}`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
                // }
            })
            homepageData.value = await res.data
            pagination.value = await res.meta
            loading.value = false

        }
        else {
            loading.value = true
            const res = await $fetch(`${runtimeConfig.public.apiBase}news/?page=${page}&sort=${sortOrder.value}`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
                // }
            })
            homepageData.value = await res.data
            pagination.value = await res.meta
            loading.value = false

        }



    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
}

async function selectCategory(id) {
    selectedCategory.value = id
    try {
        if (selectedCategory.value) {

            loading.value = true
            const res = await $fetch(`${runtimeConfig.public.apiBase}news/?category_id=${selectedCategory.value}&sort=${sortOrder.value}`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
                // }
            });

            homepageData.value = await res.data
            pagination.value = await res.meta
            loading.value = false

        }
        else {
            loading.value = true
            const res = await $fetch(`${runtimeConfig.public.apiBase}news/?sort=${sortOrder.value}`, {
                method: 'GET',
                // headers: {
                //     Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
                // }
            });

            homepageData.value = await res.data
            pagination.value = await res.meta
            loading.value = false
        }

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

const handleEdit = (id) => {
    router.push(`post-job/${id}`)
}
const toDetails = (id) => {
    router.push(`association-news-details/${id}`)
}
const handleCreate = () => {
    router.push('/create-job-post')
}
watch(searchText, async (newSearchText) => {
    //   if (newSearchText.trim() === '') {
    //     homepageData.value = []; 
    //     return;
    //   }

    loading.value = true;


    try {
        const res = await $fetch(`${runtimeConfig.public.apiBase}news?search=${newSearchText}&sort=${sortOrder.value}`, {
            method: 'GET',
        });

        homepageData.value = await res.data;  // Assuming the response has a 'data' field with the results
    } catch (err) {
        console.error(err);
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
.custom-img-width{

max-height: 340px !important; 
width:50vw !important; 
object-fit: cover !important;


}

@media (max-width: 991px) {

    .custom-img-width{

max-height: 340px !important; 
width:100vw !important; 
object-fit: cover !important;


}

}



</style>