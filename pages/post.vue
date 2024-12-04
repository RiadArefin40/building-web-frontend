<template>
       <!-- Header  -->
    <Header />
    <!-- Header  -->

    <!-- Post Wrapepr  -->
    <div class="post-wrapper">
        <div class="container-fluid">
            <div class="top-back-link">
                <a href="javascript:history.back();"><span class="material-symbols-outlined">
                        arrow_left_alt
                    </span> 입찰 공고 게시물로 돌아가기</a>
            </div>
            <div class="post-inner">
                <form action="">
                    <div class="left-editor-box">
                        <div class="form-group">
                            <textarea name="description" class="form-control" id="summernote"></textarea>
                        </div>
                    </div>
                    <div class="right-details-post-box">
                        <div class="inner-wrapper">
                            <div class="title-wrapper">
                                <h3>상세 포스트</h3>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="floatinglastname" placeholder="제목 게시물">
                                    <label for="floatinglastname">제목 게시물</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <select class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example">
                                        <option selected>카테고리 선택</option>
                                        <option value="카테고리 선택">카테고리 선택</option>
                                    </select>
                                    <label for="floatingSelect">카테고리 선택</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-floating">
                                    <select class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example">
                                        <option selected>하위 카테고리 선택</option>
                                        <option value="하위 카테고리 선택">하위 카테고리 선택</option>
                                    </select>
                                    <label for="floatingSelect">하위 카테고리 선택</label>
                                </div>
                            </div>
                            <div class="submit-wrapper">
                                <button class="submit_btn" type="submit">지금 게시 중 <span
                                        class="material-symbols-outlined">
                                        arrow_right_alt
                                    </span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Post Wrapepr  -->


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