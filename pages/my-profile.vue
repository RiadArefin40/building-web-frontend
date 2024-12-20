<template>
    <!-- Sign in up Wrapper  -->
    <Header />
    <!-- {{ authUser }} -->
    <div class="sign-in-up-wrapper mt-4" style="margin-top: 140px !important;">
     <div class="container-fluid mt-4">
         <div class="inner-section-wrapper" style="display: flex !important; justify-content: space-around !important; ">
             <div class="left-form-section">
                 <div class="left-inner-wrapper">
                     <div class="top-logo-section">
                         <a href="#">
                  
                            개인정보 업데이트

                         </a>
                     </div>
                     <!-- Form Section  -->
                     <div class="form-section-wrapper">
                         <div class="form-section-inner">
                             <form @submit.prevent="onSignUp">
                                 <div class="form-group">
                                     <div class="form-floating">
                                         <input type="text" class="form-control" v-model="name" id="floatingusername"
                                             placeholder="username">
                                         <label for="floatingusername">아이디</label>
                                     </div>
                                 </div>
                                 <div class="form-group">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" v-model="userName" id="floatingusername"
                                                placeholder="username">
                                            <label for="floatingusername">아이디</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="password" v-model="password" class="form-control" id="floatingpassword"
                                                placeholder="password">
                                            <label for="floatingpassword">현재 비밀번호
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="password" v-model="newPassword" class="form-control" id="floatingpassword"
                                                placeholder="password">
                                            <label for="floatingpassword">새 비밀번호</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-floating">
                                            <input type="password" v-model="confirmPassword" class="form-control" id="floatingpassword"
                                                placeholder="password">
                                            <label for="floatingpassword">비밀번호 확인</label>
                                        </div>
                                    </div>
                                 <div class="row-inner">
                                     <div class="col-inner">
                                         <div class="form-group">
                                             <div class="form-floating">
                                                 <input type="text" v-model="name" class="form-control" id="floatingfirstname"
                                                     placeholder="firstname">
                                                 <label for="floatingfirstname">이름</label>
                                             </div>
                                         </div>
                                     </div>
                                     <div class="col-inner">
                                         <div class="form-group">
                                             <div class="form-floating">
                                                 <input type="text" v-model="position" class="form-control" id="floatinglastname"
                                                     placeholder="lastname">
                                                 <label for="floatinglastname">직책</label>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="form-group">
                                     <div class="form-floating">
                                         <input type="email" v-model="email" class="form-control" id="floatingemail"
                                             placeholder="email">
                                         <label for="floatingemail">이메일 주소</label>
                                     </div>
                                 </div>
                                 <div class="form-group">
                                     <div class="form-floating">
                                         <input type="text" v-model="phone_number" class="form-control" id="floatingaddress"
                                             placeholder="address">
                                         <label for="floatingaddress">전화 번호</label>
                                     </div>
                                 </div>
                                 <!-- <div class="form-group">
                                     <div class="form-check">
                                         <input class="form-check-input" type="checkbox" value=""
                                             id="flexCheckDefault">
                                         <label class="form-check-label" for="flexCheckDefault">
                                             가입 버튼을 클릭하시면 이용약관과 개인정보 수집 및 이용에 동의한 것으<br />로 간주됩니다.
                                         </label>
                                     </div>
                                 </div> -->
                                 <div class="form-group">
                                     <button class="btn_submit" type="submit">편집하다</button>
                                 </div>
                             </form>
                         </div>
                     </div>
                     <!-- Form Section  -->
                 </div>

                 <!-- Bottom Section  -->
                 <!-- <div class="bottom-section-wrapper">
                     <div class="inner-wrapper">
                         <p>이미 계정이 있으신가요?  <NuxtLink to = "/sign-in">여기에서 로그인하세요.</NuxtLink></p>
                     </div>
                 </div> -->
                 <!-- Bottom Section  -->
             </div>
             <!-- <div class="right-image-section">
                 <div class="image-wrapper">
                     <img class="desktop-image" src="/assets/images/signup/signup.png" alt="">
                     <img class="mobile-image" src="/assets/images/signup/signup-mobile.png" alt="">
                 </div>
             </div> -->
         </div>
     </div>
    </div>
 <Toast />


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
 <!-- Sign in up Wrapper  -->
</template>

<script setup>
import useAuth from '@/composables/useAuth';
const { logout, authUser,authToken, isAuthenticated,login } = useAuth();
const runtimeConfig = useRuntimeConfig();
import { useToast } from "primevue/usetoast";
const toast = useToast();
import Toast from 'primevue/toast';
const router = useRouter();
import axios from 'axios'
const userName = ref(authUser.value.username || '');
const name = ref(authUser.value.name || '');
const email = ref(authUser.value.email || '');
const phone_number = ref(authUser.value.phone_number || '')
const position = ref(authUser.value.position || '')
const password = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const loading = ref(false)




const onSignUp = async ()=>{

    try {
       const   body = {username:userName.value,
                    name:name.value,
                    email:email.value,
                    position:position.value,
                    current_password:password.value,
                    new_password:newPassword.value,
                    new_password_confirmation:confirmPassword.value,
                    phone_number:phone_number.value}
        loading.value = true;
        const res = await axios.put(`${runtimeConfig.public.apiBase}auth/user/`, body, {
            headers: {
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${authToken.value}` // Specify the content type
            },

        
        })

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