<template>


    <!-- Header  -->
    <Header />
    <!-- Header  -->
    <div >

       <!-- Top Banner Box  -->
    <section  class="home-top-content-box">
      <div class="home-top-container">
        <div class="home-top-content-inner">
          <div class="left-content-box">
            <div style="overflow: hidden;">
              <!-- <h1 class="animate fade-in-top-animation" data-animate="" data-animation="fade-in-top"
                data-animation-delay="300">공정하고 투명한 건물 관리,<br /><span>대한건물관리협회</span>가<br class="mobile-break" /> 함께합니다.
              </h1> -->
              <h1 v-html="homepageData['section-1']?.title" class="animate fade-in-top-animation" data-animate="" data-animation="fade-in-top"
                data-animation-delay="300">
              </h1>
            </div>
            <!-- <p class="desktop-title">대한건물관리협회는 건물 관리의 공정성과 투명성을 보장하기 위해<br /> 중재와 상담을 지원하는 <span>비영리 단체</span>입니다.</p>
            <p class="mobile-title">대한건물관리협회는 건물 관리의 공정성과 투명성을<br /> 보장하기 위해 중재와 상담을 지원하는<br /> <span>비영리 단체</span>입니다.
            </p> -->
            <p  v-html="homepageData['section-1']?.subtitle" class="desktop-title"></p>
            <p v-html="homepageData['section-1']?.subtitle" class="mobile-title"></p>
          
            <div class="link-wrapper">
              <a @click = handleDispute()>중재 요청하기 <span class="material-symbols-outlined">
                  arrow_right_alt
                </span></a>
              <a href="#about">더 알아보기</a>
            </div>
            <!-- Counter Section  -->
            <div class="counter-section">
              <div class="counter-inner">
                <div class="counter-box">
                  <h2><span>100</span>+</h2>
                  <p>회원 수</p>
                </div>
                <div class="counter-box">
                  <h2><span>10</span>+</h2>
                  <p>년 이상의 업계 경력</p>
                </div>
                <div class="counter-box">
                  <h2><span>50</span>+</h2>
                  <p>법적 사례 해결 건수</p>
                </div>
              </div>
            </div>
            <!-- Counter Section  -->
          </div>
          <div class="right-image-box-wrapper">
            <div class="right-image-box-inner">
              <div class="image-box">
                <img src="/assets/images/top-building.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Top Banner Box  -->

    <!-- Why Box Section  -->
    <section v-if="!loading" class="why-box-wrapper" id="about">
      <div class="container-fluid">
        <div class="why-box-inner">
          <div class="left-box">
            <!-- <h2><span>왜</span> 건물 관리는<br />항상 그렇게 복잡하고<br />어려운 걸까요?</h2> -->
            <h2 v-html="homepageData['section-2']?.title"></h2>
            <div class="note-box">
              <div class="star-image">
                <img src="/assets/images/star.png" alt="star" style="margin-top: -10px;">
              </div>
              <p v-html="homepageData['section-2']?.subtitle"></p>
              <!-- <p>“이러한 문제들로 인해 관리자의 업무 부담이 늘어나고<br />건물의 가치가 저하될 수 있습니다.”</p> -->
            </div>
          </div>
          <div class="right-box">
            <div class="accrodion-box-wrapper">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button v-html="homepageData['section-2']?.dropdown_1_title" class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p v-html="homepageData['section-2']?.dropdown_1_body">
                      </p>
                      <!-- <p>관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를 저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의 불신과 분쟁을 유발할 수 있습니다.
                      </p> -->
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button v-html="homepageData['section-2']?.dropdown_2_title" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p v-html="homepageData['section-2']?.dropdown_2_body"> </p>
                      <!-- <p>관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를 저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의 불신과 분쟁을 유발할 수 있습니다.
                      </p> -->
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button v-html="homepageData['section-2']?.dropdown_3_title" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">  
                       <p v-html="homepageData['section-2']?.dropdown_3_body"> </p>
                      <!-- <p>관리비 산정 및 집행의 불투명성은 입주자와 관리주체 간의 신뢰를 저해합니다. 명확한 공시와 투명한 회계처리가 부족하면 이해관계자 간의 불신과 분쟁을 유발할 수 있습니다.
                      </p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mobile-note-box">
              <div class="note-box">
                <div class="star-image">
                  <img src="/assets/images/star.png" alt="star">
                </div>
                <!-- <p>“이러한 문제들로 인해 관리자의 업무 부담이 늘어나고<br />건물의 가치가 저하될 수 있습니다.”</p> -->
                <p class="desktop-title">“ 문제들로 인해 관리자의 업무 부담이 늘어나고, 건물의 가치가 저하될 수 있습니다.”</p>
                <!-- <p class="mobile-title">“ 문제들로 인해 관리자의 업무 부담이 늘어나고,<br/> 건물의 가치가 저하될 수 있습니다.”</p> -->
                <p class="mobile-title">“ 이러한 문제들로 인해 관리자의 업무 부담이<br /> 늘어나고, 건물의 가치가 저하될 수 있습니다. ”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Box Section  -->

    <!-- Billing Section  -->
    <section  class="billing-section-outer">
      <div class="container-fluid">
        <div class="billing-section-inner">
          <div class="left-section">
            <div class="left-bill-inner-section">
              <div class="top-bill-section">
                <div class="bill-box">
                  <div class="unit-box">
                    <!-- New Animation  -->
                    <div class="ripple-animation-wrapper">
                      <div class="ripple">

                      </div>
                    </div>
                    <!-- New Animation  -->
                    <p>공실</p>
                  </div>
                  <div class="electricity-billed-box">
                    <div class="left-image-box">
                      <div class="image-box">
                        <img src="/assets/images/coins-stacked-02.svg" alt="">
                      </div>
                    </div>
                    <div class="right-billed-box">
                      <!-- <p>전기요금<br/><span class="span1">면적 </span><span class="span2">기준</span></p> -->
                      <p>전기요금<br /><span class="span1">면적 </span><span class="span2">기준</span></p>
                      <h5></h5>
                    </div>
                  </div>
                  <div class="bill-count-box">
                    <h4>200,000 원</h4>
                  </div>
                  <div class="bg-image">
                    <img src="/assets/images/bill-bg.png" alt="">
                  </div>
                </div>
                <div class="bill-box">
                  <div class="unit-box">
                    <!-- <img src="/assets/images/bill-dots.png" alt=""> -->
                    <!-- New Animation  -->
                    <div class="ripple-animation-wrapper">
                      <div class="ripple">

                      </div>
                    </div>
                    <!-- New Animation  -->
                    <p>공실</p>
                  </div>
                  <div class="electricity-billed-box">
                    <div class="left-image-box">
                      <div class="image-box">
                        <img src="/assets/images/coins-stacked-02.svg" alt="">
                      </div>
                    </div>
                    <div class="right-billed-box">
                      <p>전기요금<br /><span class="span1">사용량 </span><span class="span2">기준</span></p>
                    </div>
                  </div>
                  <div class="bill-count-box">
                    <h4>0 원</h4>
                  </div>
                  <div class="bg-image">
                    <img src="/assets/images/bill-bg.png" alt="">
                  </div>
                </div>
              </div>
              <div class="bottom-building-box">
                <div class="bottom-building-inner">
                  <div class="image-wrapper">
                    <img src="/assets/images/bill-building-1.png" alt="">
                  </div>
                  <div class="image-wrapper">
                    <img src="/assets/images/bill-building-2.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!loading" class="right-section">
            <!-- <h2>가장 큰 문제는<br /><span>투명성과 공정성</span> 의 부재입니다.</h2> -->
             <h2 style="margin-bottom: -28px !important;" v-html="homepageData['section-3']?.title"></h2>

            <!-- <h5>많은 건물에서 공실 호수의 전기료가<br /> <span>면적기준으로</span> 부과되는 것이 일반적입니다.</h5> -->
            <h5 style="margin-bottom: -28px !important;" v-html="homepageData['section-3']?.subtitle"></h5>

            <!-- <p>하지만 일부 빌딩에서는 이를 사용량 기준으로 변경하면서, 공실 호수들은 전기료를 내지 않게 되어, 나머지 점유 호수들이 그 비용을 부담하게 되는 불공정한 상황이 발생하고 있습니다.
              <br />이러한 불투명한 관리방식은 건물주와 관리 업체 간의 갈등을 심화시키고, <br />결국 법적 분쟁으로까지 이어질 위험이 큽니다.
            </p> -->
            <p style="margin-bottom: -10px !important;" v-html="homepageData['section-3'] && homepageData['section-3']['text-1'] ? homepageData['section-3']['text-1'] : ''"
            ></p>
            <!-- <h6>“ 불투명한 관리에서 벗어나,<br /> 이제는 <span>명확한 해답</span>이 필요합니다. ”</h6> -->
             <h6 v-html="homepageData['section-3'] && homepageData['section-3']['text-2'] ? homepageData['section-3']['text-2'] : ''"></h6>
          </div>
        </div>
      </div>
    </section>
    <!-- Billing Section  -->

    <!-- Who wr are Section  -->
    <section   class="who-we-are-section">
      <div class="container-fluid">
        <div class="who-we-are-inner">
          <div  class="left-box">
            <h6>협회 소개</h6>
            <!-- <h2>건물 관리의<br />
              새로운 표준을 제시합니다.</h2> -->
              <h2 style="margin-bottom: 20px;" class="rendered-h" v-html="homepageData['section-4']?.title"></h2>
              <p class="rendered-p" v-html="homepageData['section-4']?.subtitle"></p>
            <!-- <p>대한건물관리협회는 복잡한 건물 관리 문제를 해결하고, <br />이해관계자 간의 원활한 소통을 이끌어내기 위해 설립되었습니다.</p>
            <p class="last-p">협회는 공정한 중재와 신뢰할 수 있는 상담을 통해,<br /> 건물 관리가 투명하게 이루어지도록 지원합니다.<br /> 모든 이해관계자에게 합당한 기준을
              제공함으로써, <br /><span>공공의 이익을 도모하는 것을 목표</span>로 합니다.</p> -->
            <div class="link-wrapper">
              <a @click = "membershipRequest()">협회 가입신청 <span class="material-symbols-outlined">
                  arrow_right_alt
                </span></a>
            </div>
          </div>
          <div class="right-box">
            <div class="transparency-outer-box">
              <div class="transparency-inner-box">
                <div class="top-transparency-box">
                  <div class="inner-box top-btn-box btn-1">
                    <div class="image-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                      </svg>
                    </div>
                    <h5>투명성</h5>
                  </div>
                </div>
                <div class="center-button-box">
                  <div class="ripple-button">
                    <!-- <div class="ripple-inner">
                    <img src="/assets/images/ripple-image.svg" alt="">
                  </div> -->
                    <div class="wrapper">
                      <div class="video-main">
                        <div class="promo-video">
                          <div class="waves-block">
                            <img src="/assets/images/ripple-image.svg" alt="">
                            <div class="waves wave-1"></div>
                            <div class="waves wave-2"></div>
                            <div class="waves wave-3"></div>
                          </div>
                        </div>
                        <!-- <a href="javascript:void(0);" class="video video-popup mfp-iframe"
                        ><img src="/assets/images/ripple-image.svg" alt=""></a> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottom-fairness-relaibility-box">
                  <div class="fairness-box btn-2">
                    <div class="image-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2 17V16.8498C2 16.5333 2 16.3751 2.02421 16.2209C2.0457 16.084 2.08136 15.9497 2.13061 15.8202C2.18609 15.6743 2.2646 15.5369 2.42162 15.2622L6 9M2 17C2 19.2091 3.79086 21 6 21C8.20914 21 10 19.2091 10 17M2 17V16.8C2 16.52 2 16.38 2.0545 16.273C2.10243 16.1789 2.17892 16.1024 2.273 16.0545C2.37996 16 2.51997 16 2.8 16H9.2C9.48003 16 9.62004 16 9.727 16.0545C9.82108 16.1024 9.89757 16.1789 9.9455 16.273C10 16.38 10 16.52 10 16.8V17M6 9L9.57838 15.2622C9.7354 15.5369 9.81391 15.6743 9.86939 15.8202C9.91864 15.9497 9.9543 16.084 9.97579 16.2209C10 16.3751 10 16.5333 10 16.8498V17M6 9L18 7M14 15V14.8498C14 14.5333 14 14.3751 14.0242 14.2209C14.0457 14.084 14.0814 13.9497 14.1306 13.8202C14.1861 13.6743 14.2646 13.5369 14.4216 13.2622L18 7M14 15C14 17.2091 15.7909 19 18 19C20.2091 19 22 17.2091 22 15M14 15V14.8C14 14.52 14 14.38 14.0545 14.273C14.1024 14.1789 14.1789 14.1024 14.273 14.0545C14.38 14 14.52 14 14.8 14H21.2C21.48 14 21.62 14 21.727 14.0545C21.8211 14.1024 21.8976 14.1789 21.9455 14.273C22 14.38 22 14.52 22 14.8V15M18 7L21.5784 13.2622C21.7354 13.5369 21.8139 13.6743 21.8694 13.8202C21.9186 13.9497 21.9543 14.084 21.9758 14.2209C22 14.3751 22 14.5333 22 14.8498V15M12 3V8"
                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                      </svg>
                    </div>
                    <h5>공정성</h5>
                  </div>
                  <div class="relaibility-box btn-3">
                    <div class="image-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                      </svg>
                    </div>
                    <h5>신뢰성</h5>
                  </div>
                </div>
              </div>
            </div>
            <!-- Animation Box  -->
            <div class="center-animation-box">
              <!-- START Box -->
              <div class="animated-border-box-glow"></div>
              <div class="animated-border-box">
                <!-- Inside the Box -->
              </div>
              <!-- END -->
            </div>
            <!-- Animation Box  -->
          </div>
        </div>
        <!-- Mobile Link  -->
        <div class="mobile-link">
          <div class="link-wrapper">
            <a href="#">협회 가입신청 <span class="material-symbols-outlined">
                arrow_right_alt
              </span></a>
          </div>
        </div>
        <!-- Mobile Link  -->
      </div>
    </section>
    <!-- Who wr are Section  -->

    <!-- Fusion Section  -->
    <section v-if="!loading" class="fusion-section">
      <div class="container-fluid">
        <div class="fusion-inner">
          <div class="left-section">
            <p>차별화</p>
            <!-- <h2>법률과 기술의 융합, <br />문제 해결의 새로운 패러다임.</h2> -->
             <h2 v-html="homepageData['section-5']?.left"></h2>
          </div>
          <div class="right-section">
            <p v-html="homepageData['section-5']?.right"></p>
            <!-- <p>대한건물관리협회는 집합건물법에 대한 깊은 이해와 경험을 바탕으로, 법적 안정성을 제공합니다. 또한, 최신 기술을 활용하여 투명한 관리 솔루션을 제공하며, 모든 회원사들이 신뢰할 수 있는
              환경을
              조성합니다.</p>
            <p class="last-para">다른 협회와는 달리, 대한건물관리협회는 <span>실질적인 문제 해결에 집중</span>하며, <br /><span>중재</span>와 <span>법률
                상담</span>을 통해 갈등을 최소화합니다.</p> -->
          </div>
        </div>
      </div>
      <div class="bottom-block-image">
        <img src="/assets/images/fusion-box.svg" alt="">
      </div>
    </section>
    <!-- Fusion Section  -->

    <!-- Key Services Section  -->
    <section v-if="!loading" class="key-services-section">
      <div class="container-fluid">
        <div class="key-services-inner">
          <div class="left-section">
            <div class="left-inner">
              <div class="image-box">
                <img class="desktop-image" src="/assets/images/korean-building.png" alt="">
                <img class="mobile-image" src="/assets/images/korean-building-mobile.png" alt="">
              </div>
              <div class="up-text-wrapper">
                <h2>대한건물관리협회 <br />주요 서비스 안내</h2>
                <p>모든 건물 관리 문제, <span>하나의 솔루션</span>으로 해결합니다.</p>
              </div>
            </div>
          </div>
          <div class="right-section">
            <div class="right-inner">
              <div class="key-services-box">
                <div class="key-box">
                  <div class="left-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.66663 14.1667V14.0415C1.66663 13.7778 1.66663 13.6459 1.6868 13.5174C1.70471 13.4033 1.73443 13.2914 1.77547 13.1835C1.8217 13.062 1.88713 12.9475 2.01798 12.7185L4.99996 7.5M1.66663 14.1667C1.66663 16.0076 3.15901 17.5 4.99996 17.5C6.84091 17.5 8.33329 16.0076 8.33329 14.1667M1.66663 14.1667V14C1.66663 13.7666 1.66663 13.65 1.71204 13.5608C1.75199 13.4824 1.81573 13.4187 1.89413 13.3787C1.98326 13.3333 2.09994 13.3333 2.33329 13.3333H7.66663C7.89998 13.3333 8.01666 13.3333 8.10579 13.3787C8.18419 13.4187 8.24793 13.4824 8.28788 13.5608C8.33329 13.65 8.33329 13.7666 8.33329 14V14.1667M4.99996 7.5L7.98194 12.7185C8.11279 12.9475 8.17822 13.062 8.22445 13.1835C8.26549 13.2914 8.29521 13.4033 8.31312 13.5174C8.33329 13.6459 8.33329 13.7778 8.33329 14.0415V14.1667M4.99996 7.5L15 5.83333M11.6666 12.5V12.3748C11.6666 12.1111 11.6666 11.9792 11.6868 11.8507C11.7047 11.7367 11.7344 11.6248 11.7755 11.5168C11.8217 11.3953 11.8871 11.2808 12.018 11.0518L15 5.83333M11.6666 12.5C11.6666 14.3409 13.159 15.8333 15 15.8333C16.8409 15.8333 18.3333 14.3409 18.3333 12.5M11.6666 12.5V12.3333C11.6666 12.1 11.6666 11.9833 11.712 11.8942C11.752 11.8158 11.8157 11.752 11.8941 11.7121C11.9833 11.6667 12.0999 11.6667 12.3333 11.6667H17.6666C17.9 11.6667 18.0167 11.6667 18.1058 11.7121C18.1842 11.752 18.2479 11.8158 18.2879 11.8942C18.3333 11.9833 18.3333 12.1 18.3333 12.3333V12.5M15 5.83333L17.9819 11.0518C18.1128 11.2808 18.1782 11.3953 18.2244 11.5168C18.2655 11.6248 18.2952 11.7367 18.3131 11.8507C18.3333 11.9792 18.3333 12.1111 18.3333 12.3748V12.5M9.99996 2.5V6.66667"
                        stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="right-content-box">
                    <h4 v-html="homepageData['section-6']?.list_1_title"></h4>
                    <p v-html="homepageData['section-6']?.list_1_subtitle"></p>
                           <!-- <h4>분쟁 중재</h4> -->
                    <!-- <p>관리 과정에서 발생하는 다양한 분쟁을 공정하게 중재합니다.</p> -->
                  </div>
                </div>
                <div class="key-box">
                  <div class="left-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.6667 9.16669H6.66671M8.33337 12.5H6.66671M13.3334 5.83335H6.66671M16.6667 8.75002V5.66669C16.6667 4.26656 16.6667 3.56649 16.3942 3.03171C16.1545 2.56131 15.7721 2.17885 15.3017 1.93917C14.7669 1.66669 14.0668 1.66669 12.6667 1.66669H7.33337C5.93324 1.66669 5.23318 1.66669 4.6984 1.93917C4.22799 2.17885 3.84554 2.56131 3.60586 3.03171C3.33337 3.56649 3.33337 4.26656 3.33337 5.66669V14.3334C3.33337 15.7335 3.33337 16.4336 3.60586 16.9683C3.84554 17.4387 4.22799 17.8212 4.6984 18.0609C5.23318 18.3334 5.93324 18.3334 7.33337 18.3334H9.58337M18.3334 18.3334L17.0834 17.0834M17.9167 15C17.9167 16.6109 16.6109 17.9167 15 17.9167C13.3892 17.9167 12.0834 16.6109 12.0834 15C12.0834 13.3892 13.3892 12.0834 15 12.0834C16.6109 12.0834 17.9167 13.3892 17.9167 15Z"
                        stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="right-content-box">
                    <h4 v-html="homepageData['section-6']?.list_2_title"></h4>
                    <p v-html="homepageData['section-6']?.list_2_subtitle"></p>
                    <!-- <h4>공실 관리 솔루션</h4>
                    <p>공실 발생 시, 공용전기료와 같은 문제를 투명하게 해결합니다.</p> -->
                  </div>
                </div>
                <div class="key-box">
                  <div class="left-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.708 4.99999C12.522 5.15879 13.27 5.55687 13.8564 6.14327C14.4428 6.72967 14.8409 7.47771 14.9997 8.29166M11.708 1.66666C13.3991 1.85452 14.976 2.6118 16.1799 3.81416C17.3838 5.01652 18.143 6.5925 18.333 8.28332M8.52216 11.5525C7.52084 10.5512 6.73019 9.41903 6.15019 8.21101C6.1003 8.10711 6.07536 8.05515 6.05619 7.98941C5.98809 7.75578 6.03701 7.4689 6.17868 7.27104C6.21855 7.21536 6.26618 7.16773 6.36144 7.07247C6.65278 6.78114 6.79845 6.63547 6.89369 6.48898C7.25285 5.93658 7.25285 5.22442 6.89369 4.67202C6.79845 4.52553 6.65278 4.37987 6.36144 4.08853L6.19905 3.92614C5.75618 3.48327 5.53475 3.26183 5.29693 3.14155C4.82396 2.90232 4.26541 2.90232 3.79244 3.14155C3.55462 3.26183 3.33319 3.48327 2.89032 3.92614L2.75896 4.0575C2.3176 4.49885 2.09693 4.71953 1.92839 5.01955C1.74137 5.35248 1.6069 5.86955 1.60804 6.2514C1.60906 6.59553 1.67582 6.83071 1.80932 7.30108C2.5268 9.82891 3.88053 12.2142 5.87051 14.2042C7.86049 16.1942 10.2458 17.5479 12.7736 18.2654C13.244 18.3989 13.4792 18.4656 13.8233 18.4667C14.2052 18.4678 14.7222 18.3333 15.0552 18.1463C15.3552 17.9778 15.5759 17.7571 16.0172 17.3158L16.1486 17.1844C16.5914 16.7415 16.8129 16.5201 16.9332 16.2823C17.1724 15.8093 17.1724 15.2507 16.9332 14.7778C16.8129 14.54 16.5914 14.3185 16.1486 13.8757L15.9862 13.7133C15.6948 13.4219 15.5492 13.2763 15.4027 13.181C14.8503 12.8219 14.1381 12.8219 13.5857 13.181C13.4392 13.2763 13.2936 13.4219 13.0022 13.7133C12.907 13.8085 12.8593 13.8562 12.8037 13.896C12.6058 14.0377 12.3189 14.0866 12.0853 14.0185C12.0196 13.9994 11.9676 13.9744 11.8637 13.9245C10.6557 13.3445 9.52347 12.5539 8.52216 11.5525Z"
                        stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="right-content-box">
                    <h4 v-html="homepageData['section-6']?.list_3_title"></h4>
                    <p v-html="homepageData['section-6']?.list_3_subtitle"></p>
                    <!-- <h4>관리비 및 공과금 상담</h4>
                    <p>관리비와 공과금의 투명한 부과를 돕기 위해 전문가의 상담 서비스를 제공합니다.</p> -->
                  </div>
                </div>
                <div class="key-box">
                  <div class="left-icon-box">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8333 5.83333L9.90368 3.9741C9.63613 3.439 9.50235 3.17144 9.30277 2.97597C9.12628 2.80311 8.91356 2.67164 8.68002 2.59109C8.41593 2.5 8.1168 2.5 7.51854 2.5H4.33329C3.39987 2.5 2.93316 2.5 2.57664 2.68166C2.26304 2.84144 2.00807 3.09641 1.84828 3.41002C1.66663 3.76654 1.66663 4.23325 1.66663 5.16667V5.83333M1.66663 5.83333H14.3333C15.7334 5.83333 16.4335 5.83333 16.9683 6.10582C17.4387 6.3455 17.8211 6.72795 18.0608 7.19836C18.3333 7.73314 18.3333 8.4332 18.3333 9.83333V13.5C18.3333 14.9001 18.3333 15.6002 18.0608 16.135C17.8211 16.6054 17.4387 16.9878 16.9683 17.2275C16.4335 17.5 15.7334 17.5 14.3333 17.5H5.66663C4.26649 17.5 3.56643 17.5 3.03165 17.2275C2.56124 16.9878 2.17879 16.6054 1.93911 16.135C1.66663 15.6002 1.66663 14.9001 1.66663 13.5V5.83333Z"
                        stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div class="right-content-box">
                    <h4 v-html="homepageData['section-6']?.list_4_title"></h4>
                    <p v-html="homepageData['section-6']?.list_4_subtitle"></p>
                    <!-- <h4>법률 분쟁 지원</h4>
                    <p>건물 관리와 법률적인 분쟁을 신속하고 공정하게 해결하는 데 도움을 드립니다.</p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Key Services Section  -->

    <!-- Benifits Member Section  -->
    <section v-if="!loading" class="benifits-member-section">
      <div class="container-fluid">
        <div class="benifits-member-inner">
          <div class="left-section">
            <h2 v-html="homepageData['section-7']?.top_left"></h2>
            <!-- <h2>협회 회원이 되면 <br />누릴 수 있는 <span>혜택</span></h2> -->
          </div>
          <div class="right-section">
            <p  v-html="homepageData['section-7']?.top_right"></p>
            <!-- <p>협회 회원이 되시면, 공정한 중재와 상담 서비스, 최신 관리 솔루션 제공, 법적 안정성 확보, 업계 네트워킹 기회 등 다양한 혜택을 누리실 수 있습니다.</p>
            <p class="last-para">협회 가입 후 관리비 절감 및 공실 관리 문제 해결로 <br />연간 수익이 개선된 실제 사례를 확인해보세요.</p> -->
          </div>
        </div>
        <div class="benifits-inner-box-wrapper">
          <div class="benifits-box">
            <div class="top-icon-content-box">
              <div class="icon-box">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.69355 14.044C9.69355 14.044 11.1213 15.6757 13.5008 15.6757C15.8804 15.6757 17.3081 14.044 17.3081 14.044M16.4923 8.60502H16.5032M10.5094 8.60502H10.5203M8.06185 20.0269V22.5674C8.06185 23.1471 8.06185 23.4369 8.18067 23.5857C8.28401 23.7152 8.4407 23.7905 8.60634 23.7903C8.7968 23.7901 9.02311 23.6091 9.47573 23.247L12.0706 21.1711C12.6007 20.747 12.8658 20.535 13.1609 20.3842C13.4227 20.2504 13.7015 20.1526 13.9895 20.0935C14.3142 20.0269 14.6536 20.0269 15.3324 20.0269H18.0696C19.8973 20.0269 20.8111 20.0269 21.5092 19.6712C22.1232 19.3583 22.6225 18.8591 22.9353 18.2451C23.291 17.547 23.291 16.6331 23.291 14.8055V8.93136C23.291 7.10369 23.291 6.18985 22.9353 5.49177C22.6225 4.87773 22.1232 4.37849 21.5092 4.06562C20.8111 3.70993 19.8973 3.70993 18.0696 3.70993H8.93209C7.10442 3.70993 6.19058 3.70993 5.49251 4.06562C4.87846 4.37849 4.37922 4.87773 4.06635 5.49177C3.71066 6.18985 3.71066 7.10369 3.71066 8.93136V15.6757C3.71066 16.6873 3.71066 17.1931 3.82186 17.6081C4.12362 18.7343 5.00326 19.6139 6.12943 19.9157C6.54442 20.0269 7.05023 20.0269 8.06185 20.0269ZM17.0362 8.60502C17.0362 8.90541 16.7927 9.14892 16.4923 9.14892C16.1919 9.14892 15.9484 8.90541 15.9484 8.60502C15.9484 8.30463 16.1919 8.06112 16.4923 8.06112C16.7927 8.06112 17.0362 8.30463 17.0362 8.60502ZM11.0533 8.60502C11.0533 8.90541 10.8098 9.14892 10.5094 9.14892C10.209 9.14892 9.9655 8.90541 9.9655 8.60502C9.9655 8.30463 10.209 8.06112 10.5094 8.06112C10.8098 8.06112 11.0533 8.30463 11.0533 8.60502Z"
                    stroke="currentColor" stroke-width="1.15179" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div class="title-content">
                <h4 v-html="homepageData['section-7']?.list_1_title"></h4>
                <!-- <h4>전문 중재 및 상담 서비스</h4> -->
              </div>
            </div>
            <div class="content-box">
              <p v-html="homepageData['section-7']?.list_1_subtitle"></p>
              <!-- <p><span>중재와 분쟁 해결: </span>전문가의 중재와 상담을 통해 건물 관리 <br />에서 발생하는 분쟁을 효과적으로 해결하세요.</p>
              <p class="last-para"><span>맞춤형 컨설팅: </span>전문 컨설팅을 통해 관리 비용을 절감하고, <br />효율적인 운영 방안을 제시해 드립니다.</p> -->
            </div>
          </div>
          <div class="benifits-box">
            <div class="top-icon-content-box">
              <div class="icon-box">
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.8824 12.7353V6.36471C18.8824 4.48688 18.8824 3.54797 18.5169 2.83074C18.1954 2.19984 17.6825 1.68691 17.0516 1.36545C16.3344 1 15.3955 1 13.5176 1H6.36471C4.48688 1 3.54797 1 2.83074 1.36545C2.19984 1.68691 1.68691 2.19984 1.36545 2.83074C1 3.54797 1 4.48688 1 6.36471V17.9882C1 19.8661 1 20.805 1.36545 21.5222C1.68691 22.1531 2.19984 22.666 2.83074 22.9875C3.54797 23.3529 4.48688 23.3529 6.36471 23.3529H9.94118M12.1765 11.0588H5.47059M7.70588 15.5294H5.47059M14.4118 6.58823H5.47059M12.7353 20L14.9706 22.2353L20 17.2059"
                    stroke="currentColor" stroke-width="1.18339" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div class="title-content">
                <h4 v-html="homepageData['section-7']?.list_2_title"></h4>
                <!-- <h4>최적화된 관리 솔루션</h4> -->
              </div>
            </div>
            <div class="content-box">
              <p v-html="homepageData['section-7']?.list_2_subtitle"></p>
              <!-- <p><span>관리 절감 솔루션: </span>최신 관리 도구를 활용하여 건물 관리 비 <br />용을 절감하고, 운영 효율성을 극대화합니다.</p>
              <p class="last-para"><span>사례 연구 제공: </span>성공적인 관리 사례를 통해, 비용 절감과 <br />효율적인 운영 방안을 확인하고 적용해 보세요.</p> -->
            </div>
          </div>
          <div class="benifits-box">
            <div class="top-icon-content-box">
              <div class="icon-box">
                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.20184 11.4834L8.40065 13.7063L13.348 8.70471M18.2953 12.0391C18.2953 17.4947 12.4091 21.4626 10.2674 22.7258C10.024 22.8693 9.90233 22.9411 9.73057 22.9783C9.59728 23.0072 9.40282 23.0072 9.26953 22.9783C9.09778 22.9411 8.97608 22.8693 8.73268 22.7258C6.59099 21.4626 0.704834 17.4947 0.704834 12.0391V6.72362C0.704834 5.83499 0.704834 5.39067 0.848592 5.00874C0.975589 4.67134 1.18196 4.37028 1.44985 4.1316C1.75311 3.86141 2.16462 3.7054 2.98764 3.39338L8.88241 1.15858C9.11097 1.07193 9.22525 1.0286 9.34282 1.01143C9.4471 0.996191 9.553 0.996191 9.65728 1.01143C9.77485 1.0286 9.88913 1.07193 10.1177 1.15858L16.0125 3.39338C16.8355 3.7054 17.247 3.86141 17.5502 4.1316C17.8181 4.37028 18.0245 4.67134 18.1515 5.00874C18.2953 5.39067 18.2953 5.83499 18.2953 6.72362V12.0391Z"
                    stroke="currentColor" stroke-width="1.17685" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div class="title-content">
                <h4 v-html="homepageData['section-7']?.list_3_title"></h4>
                <!-- <h4>법적 보호 및 산업 네트워킹</h4> -->
              </div>
            </div>
            <div class="content-box">
              <p v-html="homepageData['section-7']?.list_3_subtitle"></p>
              <!-- <p><span>법적 안정성 확보: </span>법적 분쟁 및 이슈를 예방하고 해결하기 <br />위해, 전문가의 법률 자문을 제공합니다.</p>
              <p class="last-para"><span>협회 네트워킹 혜택: </span>회원 간의 네트워킹을 통해, 산업 내에 <br />서 입지를 강화하고, 새로운 협력 기회를 발굴해 보세요.
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Benifits Member Section  -->

    <!-- Success Stories Section  -->
    <section v-if="!loading" class="success-stories-section">
      <div class="success-stories-inner">
        <div class="success-stories-container">
          <div class="success-stories-top-title-wrapper">
            <h2>협회 회원들의 성공 사례</h2>
          </div>
          <div class="success-stories-slider-wrapper">
            <div class="success-stories-slider owl-carousel owl-theme">
              <div v-for="data in testimonials" class="item">
                <div class="item-inner">
                  <div class="item-inner-top-wrapper">
                    <div class="quote-box">
                      <img src="/assets/images/quote.svg" alt="">
                    </div>
                    <div class="title-box">
                      <!-- <h4>대한건물관리협회에 감사의 말씀을 전하고 싶습니다.</h4> -->
                       <h4 class="truncate-title">{{ data?.title }}</h4>
                    </div>
                    <div class="paragraph-content">
                      <!-- <p>관리 솔루션 덕분에 비용을 대폭 줄일 수 있었어요. 맞춤형 컨설팅으로 관리 업무가 효율적이고 체계적으로 개선되었습니다.</p> -->
                       <p class="truncate" style="max-width: fit-content;">{{ data?.description }}</p>
                    </div>
                  </div>
                  <div class="user-designation-box">
                    <div class="user-image">
                      <img :src="`https://testingpro.xyz/${data?.icon}`" alt="">
                    </div>
                    <div class="designation-content">
                      <h6>{{ data?.author_name }}</h6>
                      <p style="max-width: fit-content;">{{ data?.author_occupation }}</p>
                    </div>
                  </div>
                </div>
              </div>
      
           
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Success Stories Section  -->

    <!-- Management Issues Section  -->
    <section v-if="!loading" class="management-issues-section">
      <div class="container-fluid">
        <div class="management-issues-inner">
          <div class="left-section">
            <h2>건물 관리에서<br /> 놓치기 쉬운 문제들,</h2>
            <h4><span>지금 점검해보세요!</span></h4>
            <p>현재 귀하의 건물에서 발생할 수 있는 문제들을 점검해보세요. 공실 전기료, 관리비 분쟁, 법률적 문제 등 협회의 도움을 받을 수 있는 다양한 상황을 확인하십시오.</p>
            <div class="link-wrapper">
              <a @click="handleDispute()">중재 요청하기 <span class="material-symbols-outlined">
                  arrow_right_alt
                </span></a>
            </div>
          </div>
          <div class="right-section">
            <div class="management-issues-inner-box">
              <div class="issues-box">
                <div class="icon-box">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.41668 15.3215L16.4061 10.3991C16.5851 10.2895 16.8142 10.3 16.9817 10.4295C17.7408 11.014 18.4189 11.6067 18.8714 12.1049C18.8714 12.1049 19.2612 12.5039 19.4298 12.7571C19.7022 13.1024 19.8333 13.554 19.8333 13.9926C19.8333 14.485 19.6897 14.9505 19.4036 15.3227C19.3387 15.3892 19.0913 15.6821 18.8577 15.9212C17.4946 17.41 13.9364 19.8694 12.0649 20.615C11.7925 20.7352 11.0654 20.986 10.6882 21C10.3246 21 9.97355 20.9207 9.63619 20.7468C9.22133 20.5076 8.89651 20.1366 8.71415 19.6968C8.59676 19.3911 8.41554 18.474 8.41554 18.4472C8.29815 17.7927 8.21039 16.8733 8.16708 15.7999C8.15911 15.6074 8.25598 15.4207 8.41668 15.3215Z"
                      fill="#4182FF"></path>
                    <path opacity="0.4"
                      d="M8.95103 12.6703C8.59886 12.8885 8.1555 12.6097 8.1726 12.1908C8.21477 11.2084 8.28771 10.3427 8.37661 9.69867C8.39029 9.68467 8.5715 8.54245 8.78007 8.15626C9.14364 7.43873 9.85711 7.00004 10.6241 7.00004H10.688C11.1826 7.01287 12.2346 7.45156 12.2346 7.4784C12.7645 7.69891 13.4564 8.07226 14.2006 8.52145C14.5357 8.72446 14.5437 9.22265 14.2086 9.42916L8.95103 12.6703Z"
                      fill="#4182FF"></path>
                  </svg>
                </div>
                <div class="content-box">
                  <p v-html="homepageData['section-9']?.list_1_text" class="desktop-title" ></p>
                  <p v-html="homepageData['section-9']?.list_1_text" class="mobile-title" ></p>
                  <!-- <p class="desktop-title">관리비 부과 기준이 명확하고 투명하게 공개되고 있습니까?</p>
                  <p class="mobile-title">관리비 부과 기준이 명확하고<br /> 투명하게 공개되고 있습니까?</p> -->
                </div>
              </div>
              <div class="issues-box">
                <div class="icon-box">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.41668 15.3215L16.4061 10.3991C16.5851 10.2895 16.8142 10.3 16.9817 10.4295C17.7408 11.014 18.4189 11.6067 18.8714 12.1049C18.8714 12.1049 19.2612 12.5039 19.4298 12.7571C19.7022 13.1024 19.8333 13.554 19.8333 13.9926C19.8333 14.485 19.6897 14.9505 19.4036 15.3227C19.3387 15.3892 19.0913 15.6821 18.8577 15.9212C17.4946 17.41 13.9364 19.8694 12.0649 20.615C11.7925 20.7352 11.0654 20.986 10.6882 21C10.3246 21 9.97355 20.9207 9.63619 20.7468C9.22133 20.5076 8.89651 20.1366 8.71415 19.6968C8.59676 19.3911 8.41554 18.474 8.41554 18.4472C8.29815 17.7927 8.21039 16.8733 8.16708 15.7999C8.15911 15.6074 8.25598 15.4207 8.41668 15.3215Z"
                      fill="#4182FF"></path>
                    <path opacity="0.4"
                      d="M8.95103 12.6703C8.59886 12.8885 8.1555 12.6097 8.1726 12.1908C8.21477 11.2084 8.28771 10.3427 8.37661 9.69867C8.39029 9.68467 8.5715 8.54245 8.78007 8.15626C9.14364 7.43873 9.85711 7.00004 10.6241 7.00004H10.688C11.1826 7.01287 12.2346 7.45156 12.2346 7.4784C12.7645 7.69891 13.4564 8.07226 14.2006 8.52145C14.5357 8.72446 14.5437 9.22265 14.2086 9.42916L8.95103 12.6703Z"
                      fill="#4182FF"></path>
                  </svg>
                </div>
                <div class="content-box">
                  <p v-html="homepageData['section-9']?.list_2_text" class="desktop-title" ></p>
                  <p v-html="homepageData['section-9']?.list_2_text" class="mobile-title" ></p>
                  <!-- <p class="desktop-title">건물 내 주요 시설의 유지보수가 정기적으로 이루어지고 있나요?</p>
                  <p class="mobile-title">건물 내 주요 시설의 유지보수가<br /> 정기적으로 이루어지고 있나요?</p> -->
                </div>
              </div>
              <div class="issues-box">
                <div class="icon-box">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.41668 15.3215L16.4061 10.3991C16.5851 10.2895 16.8142 10.3 16.9817 10.4295C17.7408 11.014 18.4189 11.6067 18.8714 12.1049C18.8714 12.1049 19.2612 12.5039 19.4298 12.7571C19.7022 13.1024 19.8333 13.554 19.8333 13.9926C19.8333 14.485 19.6897 14.9505 19.4036 15.3227C19.3387 15.3892 19.0913 15.6821 18.8577 15.9212C17.4946 17.41 13.9364 19.8694 12.0649 20.615C11.7925 20.7352 11.0654 20.986 10.6882 21C10.3246 21 9.97355 20.9207 9.63619 20.7468C9.22133 20.5076 8.89651 20.1366 8.71415 19.6968C8.59676 19.3911 8.41554 18.474 8.41554 18.4472C8.29815 17.7927 8.21039 16.8733 8.16708 15.7999C8.15911 15.6074 8.25598 15.4207 8.41668 15.3215Z"
                      fill="#4182FF"></path>
                    <path opacity="0.4"
                      d="M8.95103 12.6703C8.59886 12.8885 8.1555 12.6097 8.1726 12.1908C8.21477 11.2084 8.28771 10.3427 8.37661 9.69867C8.39029 9.68467 8.5715 8.54245 8.78007 8.15626C9.14364 7.43873 9.85711 7.00004 10.6241 7.00004H10.688C11.1826 7.01287 12.2346 7.45156 12.2346 7.4784C12.7645 7.69891 13.4564 8.07226 14.2006 8.52145C14.5357 8.72446 14.5437 9.22265 14.2086 9.42916L8.95103 12.6703Z"
                      fill="#4182FF"></path>
                  </svg>
                </div>
                <div class="content-box">
                  <p v-html="homepageData['section-9']?.list_3_text" class="desktop-title" ></p>
                  <p v-html="homepageData['section-9']?.list_3_text" class="mobile-title" ></p>
                  <!-- <p class="desktop-title">건물 관리와 관련된 법적 분쟁을 예방하기 위한 대비가 되어 있나요?</p>
                  <p class="mobile-title">건물 관리와 관련된 법적 분쟁을<br /> 예방하기 위한 대비가 되어 있나요?</p> -->
                </div>
              </div>
              <div class="issues-box">
                <div class="icon-box">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.41668 15.3215L16.4061 10.3991C16.5851 10.2895 16.8142 10.3 16.9817 10.4295C17.7408 11.014 18.4189 11.6067 18.8714 12.1049C18.8714 12.1049 19.2612 12.5039 19.4298 12.7571C19.7022 13.1024 19.8333 13.554 19.8333 13.9926C19.8333 14.485 19.6897 14.9505 19.4036 15.3227C19.3387 15.3892 19.0913 15.6821 18.8577 15.9212C17.4946 17.41 13.9364 19.8694 12.0649 20.615C11.7925 20.7352 11.0654 20.986 10.6882 21C10.3246 21 9.97355 20.9207 9.63619 20.7468C9.22133 20.5076 8.89651 20.1366 8.71415 19.6968C8.59676 19.3911 8.41554 18.474 8.41554 18.4472C8.29815 17.7927 8.21039 16.8733 8.16708 15.7999C8.15911 15.6074 8.25598 15.4207 8.41668 15.3215Z"
                      fill="#4182FF"></path>
                    <path opacity="0.4"
                      d="M8.95103 12.6703C8.59886 12.8885 8.1555 12.6097 8.1726 12.1908C8.21477 11.2084 8.28771 10.3427 8.37661 9.69867C8.39029 9.68467 8.5715 8.54245 8.78007 8.15626C9.14364 7.43873 9.85711 7.00004 10.6241 7.00004H10.688C11.1826 7.01287 12.2346 7.45156 12.2346 7.4784C12.7645 7.69891 13.4564 8.07226 14.2006 8.52145C14.5357 8.72446 14.5437 9.22265 14.2086 9.42916L8.95103 12.6703Z"
                      fill="#4182FF"></path>
                  </svg>
                </div>
                <div class="content-box">
                  <p class="desktop-title">이해관계자 간의 소통이 원활하게 이루어지고 있나요?</p>
                  <p class="mobile-title">이해관계자 간의 소통이<br /> 원활하게 이루어지고 있나요?</p>
                </div>
              </div>
            </div>
            <div class="mobile-link-wrapper">
              <div class="link-wrapper">
                <a @click="handleDispute()">중재 요청하기 <span class="material-symbols-outlined">
                    arrow_right_alt
                  </span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="issues-box">
        <img src="/assets/images/issues-box.svg" alt="">
      </div>
    </section>
    <!-- Management Issues Section  -->

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

    </div>
   

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
                            <a @click = "toSignin" >로그인</a>
                            <a @click = "toSignup" >회원가입</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <!-- Login Modal  -->

 
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
import { nextTick } from 'vue';
const rotationAngle = ref(0);
const homepageData = ref([]);
const loading = ref(true)
const router = useRouter();
const testimonials = ref([])
const toSignin = () =>{
  $('#loginModal').modal('hide');
  router.push('/sign-in')
}
const toSignup = () =>{
  $('#loginModal').modal('hide');
  router.push('/sign-up')
}
onMounted(() => {
  getHomepageData();
  
  getTestimonialData();
  // const animatedBox = document.querySelector('.animated-border-box:before');
  //   // Trigger updates based on animation frames
  //   const trackRotation = () => {
  //   // Increment the rotation angle
  //   rotationAngle.value = (rotationAngle.value + 0.5) % 360;

  //   // Check button positions
  //   checkButtonIntersection();

  //   // Loop the animation
  //   requestAnimationFrame(trackRotation);
  //   console.log('rotationAngle.value',rotationAngle.value)
  // };

  // const checkButtonIntersection = () => {
  //   const topButton = document.querySelector('.top-transparency-box');
  //   // const bottomButton = document.getElementById('bottomButton');

  //   // Example: Update based on specific angles (adjust based on your gradient design)
  //   if (rotationAngle.value > 45 && rotationAngle.value < 135) {
  //     topButton?.classList.add('active');
  //     console.log('ok')
  //   } else {
  //     console.log('nok')
  //     topButton?.classList.remove('active');
  //   }

  // };

  // trackRotation();




  nextTick(() => {
  const animatedBox = document.querySelector('.animated-border-box'); // Parent element
  const topButton = document.querySelector('.btn-1');
  const leftButton = document.querySelector('.btn-2');
  const rightButton = document.querySelector('.btn-3'); // Ensure you have the correct class for the right button

  if (!animatedBox) {
    console.error('animated-border-box element not found');
    return;
  }

  // Function to extract rotation from the `::before` pseudo-element
  const getPseudoElementRotation = () => {
    const pseudoStyle = getComputedStyle(animatedBox, '::before');

    if (!pseudoStyle) {
      console.error('Failed to get computed style for ::before');
      return 0;
    }

    const transform = pseudoStyle.getPropertyValue('transform');
    if (transform && transform !== 'none') {
      const values = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);

      let angle = Math.atan2(b, a) * (180 / Math.PI);
      if (angle < 0) angle += 360; // Ensure angle is in the range [0, 360]

      return angle;
    }
    return 0; // Default to 0 if no transform is applied
  };

  // Function to check button intersection based on the rotation angle
  const checkButtonIntersection = () => {
    const rotationAngle = getPseudoElementRotation();
    console.log('rotation-angle', rotationAngle);

    // Adjust the conditions based on the range of rotation you want to detect for the top button
    if (!(rotationAngle >= 40 && rotationAngle <= 300)) {
      rightButton?.classList.remove('black');
      topButton?.classList.add('black');
      console.log('Top button active: Rotation angle is within range:', rotationAngle);
    } 

    // Check for left button
    if (rotationAngle >= 150 && rotationAngle <= 230) {
      topButton?.classList.remove('black');
      leftButton?.classList.add('black');
      console.log('Left button active');
    } else {
      // leftButton?.classList.remove('black');
      console.log('Left button inactive');
    }
    if (rotationAngle >= 130 && rotationAngle <= 160) {
      leftButton?.classList.remove('black');
      rightButton?.classList.add('black');
      console.log('Left button active');
    } 

    // You can add similar logic for the rightButton
    // if (rotationAngle >= 240 && rotationAngle <= 300) {
    //   rightButton?.classList.add('black');
    //   console.log('Right button active');
    // } else {
    //   rightButton?.classList.remove('black');
    //   console.log('Right button inactive');
    // }
  };

  // Function to track the rotation
  const trackRotation = () => {
    checkButtonIntersection();
    requestAnimationFrame(trackRotation); // Continuously check
  };

  // Start tracking
  trackRotation();
});





  

})

const handleDispute = () =>{
  router.push('/dispute-resolution')
}
const membershipRequest = () =>{
  router.push('/membership-guide')
}

const initializeCarousel = () => {
  nextTick(() => {})
      if (typeof $ !== 'undefined' && $.fn.owlCarousel) {
        console.log('$.fn.owlCarousel',$.fn.owlCarousel)
        const prevIcon = '<span class="material-symbols-outlined">arrow_left_alt</span>';
        const nextIcon = '<span class="material-symbols-outlined">arrow_right_alt</span>';

        $('.success-stories-slider').owlCarousel({
          loop: true,
          margin: 20,
          autoplay: true,
          autoplaySpeed: 2000,
          nav: true,
          center: false,
          navText: [prevIcon, nextIcon],
          dots: false,
          responsive: {
            0: { items: 1 },
            260: { items: 1 },
            380: { items: 1 },
            768: { items: 1.5 },
            992: { items: 2.2 },
            1300: { items: 2.5 },
            1441: { items: 2.8 },
          },
        });
      }
    }
const getHomepageData = async () =>{
  try{
    const res = await $fetch(`${runtimeConfig.public.apiBase}page/home`, {
        method: 'GET',
    })

    homepageData.value = await res
    loading.value = false
    console.log('res',res)
  }
  catch (e){
     console.error(e)
     loading.value = false
  }
}
const getTestimonialData = async () =>{
  try{
    const res = await $fetch(`${runtimeConfig.public.apiBase}testimonials`, {
        method: 'GET',
    })

    testimonials.value = await res.data
    loading.value = false
    setTimeout(()=>{
      initializeCarousel();
    },500)
  
  }
  catch (e){
     console.error(e)
     loading.value = false
  }
}
</script>
<style>
.rendered-p p{
  margin-bottom: 0px;
  /* height: 20px; */
}
.rendered-h p{
  margin-bottom: 0px !important;
}
.black{
  background-color: #23282F !important;

}
.black h5{
  color:white !important;
}
.image-box{
  background-color:rgb(248, 248, 248) !important;
}
</style>