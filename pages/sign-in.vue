<template>

    <!-- Sign in up Wrapper  -->
    <div class="sign-in-up-wrapper">
        <div class="container-fluid">
            <div class="inner-section-wrapper">
                <div class="left-form-section">
                    <div class="left-inner-wrapper">
                        <div class="top-logo-section">
                            <a href="./index.html">
                                <img src="/assets/images/logo-icon.svg" alt="">
                                대한건물관리협회
                            </a>
                        </div>
                        <!-- Form Section  -->
                        <div class="form-section-wrapper">
                            <div class="form-section-inner">
                                <form action="">
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingusername"
                                                placeholder="username">
                                            <label for="floatingusername">아이디</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingpassword"
                                                placeholder="password">
                                            <label for="floatingpassword">비밀번호</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                아이디 기억하기
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn_submit" type="submit">로그인</button>
                                    </div>
                                    <div class="forgot-password-wrapper">
                                        <button type="button" class="btn" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            비밀번호 찾기
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Form Section  -->
                    </div>

                    <!-- Bottom Section  -->
                    <div class="bottom-section-wrapper">
                        <div class="inner-wrapper">
                            <p>회원이 아니신가요?   <NuxtLink to = "/sign-up">회원가입 하기 ></NuxtLink></p>
                        </div>
                    </div>
                    <!-- Bottom Section  -->
                </div>
                <div class="right-image-section">
                    <div class="image-wrapper">
                        <img class="desktop-image" src="/assets/images/signin/signin.png" alt="">
                        <img class="mobile-image" src="/assets/images/signin/signin-mobile.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Sign in up Wrapper  -->



    <!-- Forgot Password Pop up  -->
    <!-- Modal -->
    <div class="modal fade forgot-password-popup" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatinguseremail"
                                    placeholder="이메일 아이디">
                                <label for="floatinguseremail">당신의 이메일 ID를 알려주세요</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button class="btn_submit" type="submit">로그인</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    <!-- Forgot Password Pop up  -->
</template>