<template>
      <div class="modal fade forgot-password-popup" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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
                                <input type="email" class="form-control" id="floatinguseremail" placeholder="이메일 아이디">
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
</template>