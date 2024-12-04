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
                        <h2>중요 안내 및 공지</h2>
                    </div>
                    <div class="right-search-wrapper">
                        <p>최신 협회 소식과 중요한 공지 사항을 이곳에서 확인하세요.</p>
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
                                <input type="text" class="form-control" placeholder="공지사항 검색 ...">
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
                                                    <button class="nav-link active" id="pills-home-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
                                                        role="tab" aria-controls="pills-home" aria-selected="true">모든
                                                        공지사항</button>
                                                </li>
                                                <li class="nav-item ProductNav_Link" role="presentation">
                                                    <button class="nav-link" id="pills-profile-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-profile"
                                                        type="button" role="tab" aria-controls="pills-profile"
                                                        aria-selected="false">이벤트 및 컨퍼런스</button>
                                                </li>
                                                <li class="nav-item ProductNav_Link" role="presentation">
                                                    <button class="nav-link" id="pills-contact-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-contact"
                                                        type="button" role="tab" aria-controls="pills-contact"
                                                        aria-selected="false">파트너십 및 협력</button>
                                                </li>
                                                <li class="nav-item ProductNav_Link" role="presentation">
                                                    <button class="nav-link" id="pills-goverment-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-goverment"
                                                        type="button" role="tab" aria-controls="pills-goverment"
                                                        aria-selected="false">정책 및 규제 업데이트</button>
                                                </li>
                                                <li class="nav-item ProductNav_Link" role="presentation">
                                                    <button class="nav-link" id="pills-practice-tab"
                                                        data-bs-toggle="pill" data-bs-target="#pills-practice"
                                                        type="button" role="tab" aria-controls="pills-practice"
                                                        aria-selected="false">모범 사례</button>
                                                </li>
                                                <li class="nav-item ProductNav_Link" role="presentation">
                                                    <button class="nav-link" id="pills-extra-tab" data-bs-toggle="pill"
                                                        data-bs-target="#pills-extra" type="button" role="tab"
                                                        aria-controls="pills-extra" aria-selected="false">모범 사례</button>
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
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>최신 순</option>
                                                <option>오래된 순</option>
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
                                            <!-- announcements News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div class="news-box active">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="./announcements-details.html">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="./announcements-details.html">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="./announcements-details.html">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="./announcements-details.html">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="./announcements-details.html">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="./announcements-details.html">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- announcements News Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                            aria-labelledby="pills-profile-tab" tabindex="0">
                                            <!-- announcements News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div class="news-box active">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- announcements News Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                            aria-labelledby="pills-contact-tab" tabindex="0">
                                            <!-- announcements News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div class="news-box active">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- announcements News Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-goverment" role="tabpanel"
                                            aria-labelledby="pills-goverment-tab" tabindex="0">
                                            <!-- announcements News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div class="news-box active">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- announcements News Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-practice" role="tabpanel"
                                            aria-labelledby="pills-practice-tab" tabindex="0">
                                            <!-- announcements News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div class="news-box active">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- announcements News Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-extra" role="tabpanel"
                                            aria-labelledby="pills-extra-tab" tabindex="0">
                                            <!-- announcements News Inner  -->
                                            <div class="news-inner-wrapper">
                                                <div class="news-box active">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div class="news-box">
                                                    <div class="category-date-wrapper">
                                                        <div class="category-wrapper">
                                                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M6.98065 13.0138L2.2666 17.7279M9.74539 5.53507L8.44465 6.83581C8.33854 6.94191 8.28549 6.99496 8.22505 7.03712C8.1714 7.07453 8.11353 7.10551 8.05264 7.12939C7.98404 7.1563 7.91047 7.17101 7.76333 7.20044L4.70961 7.81118C3.91602 7.9699 3.51923 8.04926 3.33359 8.25847C3.17187 8.44073 3.09802 8.68464 3.13148 8.92599C3.16989 9.20304 3.45602 9.48917 4.02829 10.0614L9.93307 15.9662C10.5053 16.5385 10.7915 16.8246 11.0685 16.863C11.3099 16.8965 11.5538 16.8226 11.736 16.6609C11.9452 16.4753 12.0246 16.0785 12.1833 15.2849L12.7941 12.2312C12.8235 12.084 12.8382 12.0105 12.8651 11.9419C12.889 11.881 12.92 11.8231 12.9574 11.7695C12.9995 11.709 13.0526 11.656 13.1587 11.5499L14.4594 10.2491C14.5273 10.1813 14.5612 10.1474 14.5985 10.1177C14.6316 10.0914 14.6667 10.0677 14.7034 10.0467C14.7447 10.0231 14.7888 10.0042 14.877 9.9664L16.9556 9.07555C17.5621 8.81566 17.8653 8.68572 18.003 8.47573C18.1234 8.2921 18.1665 8.06835 18.1229 7.85312C18.073 7.607 17.8398 7.37374 17.3732 6.90722L13.0873 2.62127C12.6208 2.15475 12.3875 1.92149 12.1414 1.8716C11.9262 1.82797 11.7024 1.87106 11.5188 1.9915C11.3088 2.12923 11.1788 2.43244 10.9189 3.03886L10.0281 5.11749C9.99031 5.20567 9.97142 5.24976 9.9478 5.2911C9.92682 5.32783 9.90307 5.36291 9.87676 5.39603C9.84714 5.43331 9.81322 5.46723 9.74539 5.53507Z"
                                                                        stroke="currentColor" stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg> 고정됨</h5>
                                                        </div>
                                                        <div class="date-wrapper">
                                                            <h5>2024년 9월 18일</h5>
                                                        </div>
                                                    </div>
                                                    <div class="news-title">
                                                        <h3>건물 관리자를 위한 새로운 교육 프로그램 출시</h3>
                                                    </div>
                                                    <div class="content-wrapper">
                                                        <p>건물 관리자의 규정 준수, 안전 및 기술 분야의 기술을 향상시키도록 설계된 전문 인증 프로그램을 발표합니다.
                                                        </p>
                                                    </div>
                                                    <div class="link-wrapper">
                                                        <a href="#">자세히 보기 <span class="material-symbols-outlined">
                                                                arrow_right_alt
                                                            </span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- announcements News Inner  -->
                                        </div>
                                    </div>
                                    <!-- Pagination Wrapper  -->
                                    <div class="pagination-outer-wrappers">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item"><a class="page-link" href="#"><span class="desktop-version">이전 페이지</span> <span class="material-symbols-outlined mobile-version">
                                                    arrow_left_alt
                                                </span></a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                <li class="page-item"><a class="page-link" href="#"><span class="desktop-version">다음 페이지</span>  <span class="material-symbols-outlined mobile-version">
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
</template>