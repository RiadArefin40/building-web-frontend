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
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingpassword"
                                                placeholder="password">
                                            <label for="floatingpassword">비밀번호 확인</label>
                                        </div>
                                    </div>
                                    <div class="row-inner">
                                        <div class="col-inner">
                                            <div class="form-group">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="floatingfirstname"
                                                        placeholder="firstname">
                                                    <label for="floatingfirstname">이름</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-inner">
                                            <div class="form-group">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="floatinglastname"
                                                        placeholder="lastname">
                                                    <label for="floatinglastname">직책</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="floatingemail"
                                                placeholder="email">
                                            <label for="floatingemail">이메일 주소</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingaddress"
                                                placeholder="address">
                                            <label for="floatingaddress">전화 번호</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                가입 버튼을 클릭하시면 이용약관과 개인정보 수집 및 이용에 동의한 것으<br />로 간주됩니다.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn_submit" type="submit">가입하기</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Form Section  -->
                    </div>

                    <!-- Bottom Section  -->
                    <div class="bottom-section-wrapper">
                        <div class="inner-wrapper">
                            <p>이미 계정이 있으신가요?  <NuxtLink to = "/sign-in">여기에서 로그인하세요.</NuxtLink></p>
                        </div>
                    </div>
                    <!-- Bottom Section  -->
                </div>
                <div class="right-image-section">
                    <div class="image-wrapper">
                        <img class="desktop-image" src="/assets/images/signup/signup.png" alt="">
                        <img class="mobile-image" src="/assets/images/signup/signup-mobile.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Sign in up Wrapper  -->
</template>