<template>
       <!-- Header  -->
    <Header />
    <!-- Header  -->

    <!-- Post Wrapepr  -->
    <div  class="post-wrapper">
    
    <div class="container-fluid">
        <div class="top-back-link">
            <a href="javascript:history.back();"><span class="material-symbols-outlined">
                    arrow_left_alt
                </span> 입찰 공고 게시물로 돌아가기</a>
        </div>
        
        <div class="post-inner">
            <form action="" @submit.prevent="onSubmit">
                <div class="left-editor-box">
                    <div class="form-group">
                        <textarea v-model="message" name="description" class="form-control" id="summernote"></textarea>
                    </div>
                </div>
                <div class="right-details-post-box">
                    <div class="inner-wrapper">
                        <div class="title-wrapper">
                            <h3>상세 포스트</h3>
                        </div>
                        <div class="form-group">
                            <div class="form-floating">
                                <input v-model = "title" type="text" class="form-control" id="floatinglastname" placeholder="제목 게시물">
                                <label for="floatinglastname">제목 게시물</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-floating">
                                <select v-model = "selectedCategory" class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option v-for="category in categories" :key="category.id" :value="category.id">
       {{ category.name }}
     </option>
                                 
                                </select>
                                <label for="floatingSelect">카테고리 선택</label>
                            </div>
                        </div>
                        <!-- <div class="form-group">
                            <div class="form-floating">
                                <select class="form-select" id="floatingSelect"
                                    aria-label="Floating label select example">
                                    <option selected>하위 카테고리 선택</option>
                                    <option value="하위 카테고리 선택">하위 카테고리 선택</option>
                                </select>
                                <label for="floatingSelect">하위 카테고리 선택</label>
                            </div>
                        </div> -->
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
import ProgressSpinner from 'primevue/progressspinner';
const runtimeConfig = useRuntimeConfig();
import { nextTick } from 'vue';
const toast = useToast();
import Toast from 'primevue/toast';
import useAuth from '@/composables/useAuth';
const { authToken } = await useAuth();
const loading = ref(false)
const router  = useRouter()
const route = useRoute()
const id = route.params.id
const message = ref('')
const title = ref('')
const selectedCategory = ref('')
const categories = ref([])

onMounted( async ()=>{



 $('#summernote').summernote({
         placeholder: '',
         tabsize: 2,
         callbacks: {
        onChange: (contents, $editable) => {
          // Update the model whenever the content changes in Summernote
          message.value = contents;
        }
      },
         toolbar: [
             ['style', ['style']],
             ['font', ['bold', 'underline', 'clear']],
             ['color', ['color']],
             ['para', ['ul', 'ol', 'paragraph']],
             ['table', ['table']],
             ['insert', ['link', 'picture', 'video']],
             ['view', ['fullscreen', 'codeview', 'help']]
         ]
     });


     if(id){
        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/${id}`, {
            method: 'GET',
        })

        const  post = await res.data
        title.value  = post.title 
        $('#summernote').summernote('code', post.description);
        message.value = post.title
        loading.value = false
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

    }

})

onMounted(()=>{
    geCategories()
})

const onSubmit = async () =>{
    if(id){
        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            },
            body:{job_category_id:selectedCategory.value, title: title.value, description:message.value  }
        })

        loading.value = false
        toast.add({ detail:"Dispute Request Submitted!" , life: 3000 });
        console.log('resasas', res)
        title.value = '';
        message.value = ''
        router.push('/job-management')
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
    }
    else{

        try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}jobs/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            },
            body:{job_category_id:selectedCategory.value, title: title.value, description:message.value  }
        })

        loading.value = false
        toast.add({ detail:"Dispute Request Submitted!" , life: 3000 });
        console.log('resasas', res)
        title.value = '';
        message.value = '';
        router.push('/job-management')
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
    }


}

const geCategories = async () => {
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}job-categories`, {
            method: 'GET',
        })

        categories.value = await res.data
        selectedCategory.value = categories.value[0].id
        loading.value = false
        console.log('resasas', res,selectedCategory.value)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }
}
</script>