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
                                <form @submit.prevent="onLogin">
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" v-model="userName"
                                                id="floatingusername" placeholder="username">
                                            <label for="floatingusername">아이디</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" v-model="password"
                                                id="floatingpassword" placeholder="password">
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
                            <p>회원이 아니신가요? <NuxtLink to="/sign-up">회원가입 하기 ></NuxtLink>
                            </p>
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
                          <NuxtLink to="/sign-in">로그인</NuxtLink>
                          <NuxtLink to="/sign-up">회원가입</NuxtLink>
                            <!-- <a href="/sign-in">로그인</a> -->
                            <!-- <a href="/sign-up">회원가입</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <!-- Forgot Password Pop up  -->
    <Toast />
</template>


<script setup>
import axios from 'axios'
import useAuth from '@/composables/useAuth';
const { login } = useAuth();
const runtimeConfig = useRuntimeConfig();
import { useToast } from "primevue/usetoast";
const toast = useToast();
import Toast from 'primevue/toast';
const userName = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter();

onMounted(()=>{
  
})

const onLogin = async () => {
    try {
        const body = {
                username: userName.value,
                password: password.value
            }
        loading.value = true;
        const res = await axios.post(`${runtimeConfig.public.apiBase}auth/login`,body, {
            headers: {
                'Content-Type': 'application/json', // Specify the content type
            },
        
        })

        if (res?.data?.token) {
            login(res?.data?.token,res?.data?.data );
            const redirectTo = localStorage.getItem('redirectTo');
            // const redirectTo = new URLSearchParams(window.location.search).get('redirect') || '/';
            if(redirectTo){
                router.push(redirectTo);
                localStorage.removeItem('redirectTo');
            }
            else router.push('/');
        
        }

     
        loading.value = false
        toast.add({ detail:res?.data?.message , life: 3000 });
        console.log('res', res)
    }
    catch (e) {

        console.log('erroe', e)
        toast.add({ detail:e?.response?.data?.message , life: 3000 });
        loading.value = false
    }

}

</script>