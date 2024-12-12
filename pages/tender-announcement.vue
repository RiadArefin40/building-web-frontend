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
                                <input type="text" class="form-control" placeholder="입찰공고 검색 ...">
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
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
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
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <div class="paginations-outer-wrappers">
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
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                            </div>
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                            aria-labelledby="pills-profile-tab" tabindex="0">
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
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
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
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <div class="paginations-outer-wrappers">
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
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                            </div>
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                            aria-labelledby="pills-contact-tab" tabindex="0">
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
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
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
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <div class="paginations-outer-wrappers">
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
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                            </div>
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-goverment" role="tabpanel"
                                            aria-labelledby="pills-goverment-tab" tabindex="0">
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
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
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
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <div class="paginations-outer-wrappers">
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
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                            </div>
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-practice" role="tabpanel"
                                            aria-labelledby="pills-practice-tab" tabindex="0">
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
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
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
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <div class="paginations-outer-wrappers">
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
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                            </div>
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                        <div class="tab-pane fade" id="pills-extra" role="tabpanel"
                                            aria-labelledby="pills-extra-tab" tabindex="0">
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
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
                                                                                class="material-symbols-outlined">
                                                                                arrow_right_alt
                                                                            </span></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>에너지 효율 개선 프로젝트</td>
                                                                    <td>김성진</td>
                                                                    <td>18/08/2024</td>
                                                                    <td><a href="#">자세히 보기 <span
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
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                                <div class="table-data-box">
                                                                    <div class="top-writer-date-wrapper">
                                                                        <h6>Category</h6>
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                                <div class="paginations-outer-wrappers">
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
                                                </div>
                                                <!-- Pagination Wrapper  -->
                                            </div>
                                            <!-- Tender announcements Inner  -->
                                        </div>
                                    </div>
                                    <!-- Pagination Wrapper  -->
                                    <!-- <div class="pagination-outer-wrappers">
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
                                    </div> -->
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