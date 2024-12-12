<template>
    <Toast />


  <header v-if="!authToken">
    <div class="header-inner-wrapper">
      <div class="container-fluid">
        <div class="header-inner">
          <div class="left-logo-box">
            <NuxtLink to="/">
              <img src="/assets/images/logo-icon.svg" alt="">
              대한건물관리협회
            </NuxtLink>
          </div>
          <div class="middle-menu-box">
            <ul>
              <li>
                <NuxtLink to="/about-us">협회 소개</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dispute-resolution">분쟁해결요청</NuxtLink>
              </li>
              <!-- <li><a href="#">커뮤니티</a></li> -->
              <!-- Dropdown  -->
              <li class="dropdownwrapper"><a href="javascript:void(0);">커뮤니티 <span
                    class="material-icons">expand_more</span>
                </a>
                <div class="dropdown-menu-wrapper">
                  <div class="dropdown-box">
                    <ul>
                      <li>
                        <NuxtLink to="/announcement">
                          <div class="image-box">
                            <img src="/assets/images/announcements.svg" alt="">
                          </div>
                          공지사항
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/association-news">
                          <div class="image-box">
                            <img src="/assets/images/association-news.svg" alt="">
                          </div>
                          협회뉴스
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/tender-announcement">
                          <div class="image-box">
                            <img src="/assets/images/tender-announcements.svg" alt="">
                          </div>
                          입찰공고
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/job-listing">
                          <div class="image-box">
                            <img src="/assets/images/job-listing.svg" alt="">
                          </div>
                          구인공고
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <!-- Dropdown  -->
              <li>
                <NuxtLink to="/membership-guide">협회 가입안내</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="right-sign-up-box">
            <NuxtLink to="/sign-in">
              로그인 / 회원가입
            </NuxtLink>
          </div>
          <!-- Mobile Menu  -->
          <div class="mobile-menu-wrapper">
            <!-- <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
              aria-controls="offcanvasExample">
              Link with href
            </a> -->
            <button class="btn btn-primary mobile-menu-btn" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <span class="bar1"></span>
              <span class="bar2"></span>
              <span class="bar3"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"><a href="#">
                    <img src="/assets/images/logo-icon.svg" alt="">
                    대한건물관리협회
                  </a></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <div class="menu-wrapper">
                  <ul>
                    <li><a href="/about-us">협회 소개</a></li>
                    <li><a href="/dispute-resolution">분쟁해결요청</a></li>
                    <!-- <li><a href="#">커뮤니티</a></li> -->
                    <!-- Dropdown Link  -->
                    <li>
                      <div class="accordion" id="accordionExamplemenu">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOnemenu" aria-expanded="true" aria-controls="collapseOnemenu">
                              커뮤니티
                            </button>
                          </h2>
                          <div id="collapseOnemenu" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExamplemenu">
                            <div class="accordion-body">
                              <ul>
                                <li><a href="/announcement">
                                    <div class="image-box">
                                      <img src="/assets/images/announcements.svg" alt="">
                                    </div>
                                    공지사항
                                  </a></li>
                                <li><a href="/association-news">
                                    <div class="image-box">
                                      <img src="/assets/images/association-news.svg" alt="">
                                    </div>
                                    협회뉴스
                                  </a></li>
                                <li><a href="#">
                                    <div class="image-box">
                                      <img src="/assets/images/tender-announcements.svg" alt="">
                                    </div>
                                    입찰공고
                                  </a></li>
                                <li><a href="#">
                                    <div class="image-box">
                                      <img src="/assets/images/job-listing.svg" alt="">
                                    </div>
                                    구인공고
                                  </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <!-- Dropdown Link  -->
                    <li><a href="./membership-guide.html">협회 가입안내</a></li>
                  </ul>
                </div>
                <div class="mobile-menu-link">
                  <a href="/sign-in">로그인 / 회원가입</a>
                </div>

              </div>
            </div>
          </div>
          <!-- Mobile Menu  -->
        </div>
      </div>
    </div>
  </header>

  <header v-else>
    <div class="header-inner-wrapper">
      <div class="container-fluid">
        <div class="header-inner">
          <div class="left-logo-box">
            <NuxtLink to="/">
              <img src="/assets/images/logo-icon.svg" alt="">
              대한건물관리협회
            </NuxtLink>
          </div>
          <div class="middle-menu-box">
            <ul>
              <li>
                <NuxtLink to="/about-us">협회 소개</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dispute-resolution">분쟁해결요청</NuxtLink>
              </li>

              <li class="dropdownwrapper"><a href="javascript:void(0);">커뮤니티 <span
                    class="material-icons">expand_more</span>
                </a>
                <div class="dropdown-menu-wrapper">
                  <div class="dropdown-box">
                    <ul>
                      <li>
                        <NuxtLink to="/announcement">
                          <div class="image-box">
                            <img src="/assets/images/announcements.svg" alt="">
                          </div>
                          공지사항
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/association-news">
                          <div class="image-box">
                            <img src="/assets/images/association-news.svg" alt="">
                          </div>
                          협회뉴스
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/tender-announcement">
                          <div class="image-box">
                            <img src="/assets/images/tender-announcements.svg" alt="">
                          </div>
                          입찰공고
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/job-listing">
                          <div class="image-box">
                            <img src="/assets/images/job-listing.svg" alt="">
                          </div>
                          구인공고
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <!-- Dropdown  -->
              <li>
                <NuxtLink to="/membership-guide">협회 가입안내</NuxtLink>
              </li>
            </ul>
          </div>
      
          <!-- User details box  -->
          <div class="user-details-box">
            <div class="dropdown">
              <a class="dropdown-btn btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <div class="userdetails-inner">
                  <div class="user-image">
                    <img src="/assets/images/user1.png" alt="">
                  </div>
                  <div class="user-name">
                    <!-- <h5>박철민</h5> -->
                     <h5>{{ authUser }}</h5>
                  </div>
                </div>
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">마이 페이지</a></li>
                <li><a class="dropdown-item" @click ="handleLogout()">로그아웃</a></li>
              </ul>
            </div>
          </div>
          <!-- User details box  -->
          <!-- Mobile Menu  -->
          <div class="mobile-menu-wrapper">
            <!-- <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
              aria-controls="offcanvasExample">
              Link with href
            </a> -->
            <button class="btn btn-primary mobile-menu-btn" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <span class="bar1"></span>
              <span class="bar2"></span>
              <span class="bar3"></span>
            </button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel"><a href="#">
                    <img src="/assets/images/logo-icon.svg" alt="">
                    대한건물관리협회
                  </a></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <div class="menu-wrapper">
                  <ul>
                    <li><a href="/about-us">협회 소개</a></li>
                    <li class="active"><a href="/dispute-resolution-requests.html">분쟁해결요청</a></li>
                    <!-- <li><a href="#">커뮤니티</a></li> -->
                    <!-- Dropdown Link  -->
                    <li>
                      <div class="accordion" id="accordionExamplemenu">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOnemenu" aria-expanded="true" aria-controls="collapseOnemenu">
                              커뮤니티
                            </button>
                          </h2>
                          <div id="collapseOnemenu" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExamplemenu">
                            <div class="accordion-body">
                              <ul>
                                <li><a href="/announcement">
                                    <div class="image-box">
                                      <img src="/assets/images/announcements.svg" alt="">
                                    </div>
                                    공지사항
                                  </a></li>
                                <li><a href="/association-news">
                                    <div class="image-box">
                                      <img src="/assets/images/association-news.svg" alt="">
                                    </div>
                                    협회뉴스
                                  </a></li>
                                <li><a href="#">
                                    <div class="image-box">
                                      <img src="/assets/images/tender-announcements.svg" alt="">
                                    </div>
                                    입찰공고
                                  </a></li>
                                <li><a href="#">
                                    <div class="image-box">
                                      <img src="/assets/images/job-listing.svg" alt="">
                                    </div>
                                    구인공고
                                  </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <!-- Dropdown Link  -->
                    <li><a href="/membership-guide">협회 가입안내</a></li>
                  </ul>
                </div>
                <div class="mobile-menu-link">
                  <a href="/sign-in">로그인 / 회원가입</a>
                </div>

              </div>
            </div>
          </div>
          <!-- Mobile Menu  -->
        </div>
      </div>
    </div>
    
  </header>

  <!-- Header  -->
</template>


<script setup>
import useAuth from '@/composables/useAuth';
const { logout, authUser,authToken, isAuthenticated } = useAuth();
import { useToast } from "primevue/usetoast";
const toast = useToast();
import Toast from 'primevue/toast';
const router = useRouter();



const handleLogout = () =>{
  toast.add({ detail:'Successfuly Loged Out' , life: 500 });
  logout()
  const redirectTo = new URLSearchParams(window.location.search).get('redirect') || '/';
  router.push(redirectTo);


}

</script>

<style scss>
.p-toast {
  top: 20px; /* Adjust this value to position the toast as desired */
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999; /* Ensure the toast appears above other elements */
}
.userdetails-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  /* min-width: 127px; */
}

.userdetails-inner .user-image img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.userdetails-inner .user-name h5 {
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.80);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}
</style>