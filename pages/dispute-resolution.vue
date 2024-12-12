<template>
    <!-- Header  -->
    <Header />
    <!-- Header  -->
    <!-- Dispute Resolution Top Section  -->
    <div class="dispute-resolution-top-section-wrapper">
        <div class="container-fluid">
            <div class="dispute-resolution-top-inner">
                <div class="left-content-section">
                    <h2>공정한 분쟁 해결을<br /> 도와드립니다.</h2>
                    <p>모든 이해관계자를 위해<br /> 공정하고 신속한 분쟁 해결을 지원합니다.</p>
                </div>
                <div class="right-image-section">
                    <div class="image-wrapper">
                        <img src="/assets/images/dispute/dispute-top-building.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Dispute Resolution Top Section  -->

    <!-- Dispute request Section  -->
    <div class="dispute-request-section-wrapper">
        <div class="container-fluid">
            <div class="dispute-request-section-inner">
                <div class="left-request-section">
                    <div class="inner-wrapper">
                        <div class="title-wrapper">
                            <h3>분쟁해결 요청 내역</h3>
                        </div>
                        <div class="dispute-request-tabs-wrapper">
                            <!-- Tabs  -->
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">모든 요청 보기 <span>3</span></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">진행중 <span>2</span></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">답변완료 <span>1</span></button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabindex="0">

                                    <!-- Request tabs content  -->
                                    <div class="request-tabs-content">
                                        <div class="dispute-top-title">
                                            <h5>귀하의 분쟁 메시지</h5>
                                        </div>
                                        <!-- <div class="requests-wrapper latest-request">
                                            <div class="issues-status-time-wrapper">
                                                <div class="issues-status-wrapper">
                                                    <h6 class="dispute-issues">재정 문제</h6>
                                                    <h6 class="dispute-status completed-status">답변완료</h6>
                                                </div>
                                                <div class="time-wrapper">
                                                    <h6 class="dispute-time">2일 전</h6>
                                                </div>
                                            </div>
                                            <div class="issues-content">
                                                <p>저는 최근 월세 명세서를 검토했는데 예상치 못한 비용이 청구되었습니다. 제가 알지 못했던 유지 관리 서비스에 대한 수수료인
                                                    듯합니다. 이 비용과 제공된 서비스에 대한 관련 세부 정보에 대한 설명을 부탁드립니다.</p>
                                            </div>
                                            <div class="replies-wrapper">
                                                <div class="replies-inner">
                                                    <button class="btn btn-primary" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseReplies1"
                                                        aria-expanded="false" aria-controls="collapseReplies1">
                                                        <div class="replies-header">
                                                            <div class="circle"></div>
                                                            <div class="message-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M8.33342 12.5001L5.7707 15.0948C5.41324 15.4568 5.2345 15.6377 5.08087 15.6505C4.94759 15.6616 4.81709 15.608 4.73005 15.5064C4.62971 15.3894 4.62971 15.1351 4.62971 14.6264V13.3264C4.62971 12.87 4.25598 12.5398 3.80442 12.4737V12.4737C2.71153 12.3136 1.85323 11.4553 1.69314 10.3624C1.66675 10.1822 1.66675 9.96718 1.66675 9.53712V5.66675C1.66675 4.26662 1.66675 3.56655 1.93923 3.03177C2.17892 2.56137 2.56137 2.17892 3.03177 1.93923C3.56655 1.66675 4.26662 1.66675 5.66675 1.66675H11.8334C13.2335 1.66675 13.9336 1.66675 14.4684 1.93923C14.9388 2.17892 15.3212 2.56137 15.5609 3.03177C15.8334 3.56655 15.8334 4.26662 15.8334 5.66675V9.16675M15.8334 18.3334L14.0197 17.0725C13.7648 16.8952 13.6373 16.8066 13.4986 16.7438C13.3755 16.688 13.246 16.6474 13.1131 16.6229C12.9633 16.5953 12.808 16.5953 12.4975 16.5953H11.0001C10.0667 16.5953 9.59995 16.5953 9.24343 16.4137C8.92983 16.2539 8.67486 15.9989 8.51507 15.6853C8.33342 15.3288 8.33342 14.8621 8.33342 13.9287V11.8334C8.33342 10.9 8.33342 10.4333 8.51507 10.0768C8.67486 9.76316 8.92983 9.50819 9.24343 9.3484C9.59995 9.16675 10.0667 9.16675 11.0001 9.16675H15.6667C16.6002 9.16675 17.0669 9.16675 17.4234 9.3484C17.737 9.50819 17.992 9.76316 18.1518 10.0768C18.3334 10.4333 18.3334 10.9 18.3334 11.8334V14.0953C18.3334 14.8719 18.3334 15.2602 18.2065 15.5665C18.0374 15.9748 17.7129 16.2993 17.3046 16.4685C16.9983 16.5953 16.61 16.5953 15.8334 16.5953V18.3334Z"
                                                                        stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="replies-count">
                                                                <h6><span>1</span> 답변</h6>
                                                            </div>
                                                            <div class="arrow-wrapper">
                                                                <div class="arrow-down">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M12.8334 1.08325L7.00008 6.91659L1.16675 1.08325"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="arrow-up">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M1.16665 6.91675L6.99998 1.08341L12.8333 6.91675"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="collapse" id="collapseReplies1">
                                                        <div class="card card-body">
                                                            <div class="content-wrapper">
                                                                <div class="content">
                                                                    <p><b>현우님께,</b></p>
                                                                    <p>최근 임대료 명세서에 예상치 못한 요금이 청구된 것에 대해 문의해 주셔서 감사합니다.
                                                                        예상치 못한 수수료를 보는 것이 얼마나 걱정스러운지 이해하며, 이 문제를 해결하는 동안
                                                                        인내심을 가져주셔서 감사합니다.</p>
                                                                    <p>우리는 건물을 유지관리하고 모든 거주자에게 안전하고 편안한 생활 환경을 보장하는 데 드는
                                                                        비용을 충당하기 위해 이 수수료를 시행했습니다.</p>
                                                                    <p>이 변경 사항을 전달하는 데 있어서 실수가 있었다는 점에 대해 사과드립니다. 앞으로는
                                                                        제공되는 서비스의 세부 정보와 함께 추가 비용이 사전에 명확하게 전달되도록 하겠습니다.
                                                                    </p>
                                                                </div>
                                                                <div class="help-text">
                                                                    <a href="#">더 많은 도움이 필요하세요? 즉시 저희에게 연락하세요.</a>
                                                                </div>
                                                                <div class="replies-time">
                                                                    <h6>2일 전</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        {{ }}
                                        <div v-for="(dispute, index) in disputes" :key="index"
                                            class="requests-wrapper " :class="{ 'latest-request' : index == 0 }">
                                            <div class="issues-status-time-wrapper">
                                                <div class="issues-status-wrapper">
                                                    <h6 class="dispute-issues">{{ dispute.dispute_type.name }}</h6>
                                                    <h6 class="dispute-status completed-status">{{ dispute.status }}
                                                    </h6>
                                                </div>
                                                <div class="time-wrapper">
                                                    <h6 class="dispute-time">2일 전</h6>
                                                </div>
                                            </div>
                                            <div class="issues-content">
                                                <p>{{ dispute.message }}</p>
                                            </div>
                                            <div class="replies-wrapper">
                                                <div class="replies-inner">
                                                    <button class="btn btn-primary" type="button"
                                                        data-bs-toggle="collapse" :data-bs-target="'#collapse-' + index"
                                                        aria-expanded="false" :aria-controls="'collapse-' + index">
                                                        <div class="replies-header">

                                                            <div class="circle"></div>
                                                            <div class="message-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M8.33342 12.5001L5.7707 15.0948C5.41324 15.4568 5.2345 15.6377 5.08087 15.6505C4.94759 15.6616 4.81709 15.608 4.73005 15.5064C4.62971 15.3894 4.62971 15.1351 4.62971 14.6264V13.3264C4.62971 12.87 4.25598 12.5398 3.80442 12.4737V12.4737C2.71153 12.3136 1.85323 11.4553 1.69314 10.3624C1.66675 10.1822 1.66675 9.96718 1.66675 9.53712V5.66675C1.66675 4.26662 1.66675 3.56655 1.93923 3.03177C2.17892 2.56137 2.56137 2.17892 3.03177 1.93923C3.56655 1.66675 4.26662 1.66675 5.66675 1.66675H11.8334C13.2335 1.66675 13.9336 1.66675 14.4684 1.93923C14.9388 2.17892 15.3212 2.56137 15.5609 3.03177C15.8334 3.56655 15.8334 4.26662 15.8334 5.66675V9.16675M15.8334 18.3334L14.0197 17.0725C13.7648 16.8952 13.6373 16.8066 13.4986 16.7438C13.3755 16.688 13.246 16.6474 13.1131 16.6229C12.9633 16.5953 12.808 16.5953 12.4975 16.5953H11.0001C10.0667 16.5953 9.59995 16.5953 9.24343 16.4137C8.92983 16.2539 8.67486 15.9989 8.51507 15.6853C8.33342 15.3288 8.33342 14.8621 8.33342 13.9287V11.8334C8.33342 10.9 8.33342 10.4333 8.51507 10.0768C8.67486 9.76316 8.92983 9.50819 9.24343 9.3484C9.59995 9.16675 10.0667 9.16675 11.0001 9.16675H15.6667C16.6002 9.16675 17.0669 9.16675 17.4234 9.3484C17.737 9.50819 17.992 9.76316 18.1518 10.0768C18.3334 10.4333 18.3334 10.9 18.3334 11.8334V14.0953C18.3334 14.8719 18.3334 15.2602 18.2065 15.5665C18.0374 15.9748 17.7129 16.2993 17.3046 16.4685C16.9983 16.5953 16.61 16.5953 15.8334 16.5953V18.3334Z"
                                                                        stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="replies-count">
                                                                <h6><span>{{ dispute.comment_count }}</span> 답변</h6>
                                                            </div>
                                                            <div class="arrow-wrapper">
                                                                <div class="arrow-down">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M12.8334 1.08325L7.00008 6.91659L1.16675 1.08325"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="arrow-up">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M1.16665 6.91675L6.99998 1.08341L12.8333 6.91675"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div v-for="(comment, commentIndex) in dispute.comments"
                                                        class="collapse" :id="'collapse-' + index">
                                                        <div class="card card-body">
                                                            <div class="content-wrapper">
                                                                <div class="content">
                            
                                                                    <p>{{ comment.comment }}</p>
                                                                </div>
                                                                <!-- <div class="help-text">
                                                                    <a href="#">더 많은 도움이 필요하세요? 즉시 저희에게 연락하세요.</a>
                                                                </div> -->
                                                                <div class="replies-time">
                                                                    <!-- <h6>2일 전</h6> -->
                                                                     <h6>{{formatTimestamp(comment.updated_at)  }}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- <div class="requests-wrapper">
                                            <div class="issues-status-time-wrapper">
                                                <div class="issues-status-wrapper">
                                                    <h6 class="dispute-issues">재정 문제</h6>
                                                    <h6 class="dispute-status completed-status">답변완료</h6>
                                                </div>
                                                <div class="time-wrapper">
                                                    <h6 class="dispute-time">2/14/2024</h6>
                                                </div>
                                            </div>
                                            <div class="issues-content">
                                                <p>저는 최근 월세 명세서를 검토했는데 예상치 못한 비용이 청구되었습니다. 제가 알지 못했던 유지 관리 서비스에 대한 수수료인
                                                    듯합니다. 이 비용과 제공된 서비스에 대한 관련 세부 정보에 대한 설명을 부탁드립니다.</p>
                                            </div>
                                            <div class="replies-wrapper">
                                                <div class="replies-inner">
                                                    <button class="btn btn-primary" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseReplies2"
                                                        aria-expanded="false" aria-controls="collapseReplies2">
                                                        <div class="replies-header">
                                                            <div class="circle"></div>
                                                            <div class="message-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M8.33342 12.5001L5.7707 15.0948C5.41324 15.4568 5.2345 15.6377 5.08087 15.6505C4.94759 15.6616 4.81709 15.608 4.73005 15.5064C4.62971 15.3894 4.62971 15.1351 4.62971 14.6264V13.3264C4.62971 12.87 4.25598 12.5398 3.80442 12.4737V12.4737C2.71153 12.3136 1.85323 11.4553 1.69314 10.3624C1.66675 10.1822 1.66675 9.96718 1.66675 9.53712V5.66675C1.66675 4.26662 1.66675 3.56655 1.93923 3.03177C2.17892 2.56137 2.56137 2.17892 3.03177 1.93923C3.56655 1.66675 4.26662 1.66675 5.66675 1.66675H11.8334C13.2335 1.66675 13.9336 1.66675 14.4684 1.93923C14.9388 2.17892 15.3212 2.56137 15.5609 3.03177C15.8334 3.56655 15.8334 4.26662 15.8334 5.66675V9.16675M15.8334 18.3334L14.0197 17.0725C13.7648 16.8952 13.6373 16.8066 13.4986 16.7438C13.3755 16.688 13.246 16.6474 13.1131 16.6229C12.9633 16.5953 12.808 16.5953 12.4975 16.5953H11.0001C10.0667 16.5953 9.59995 16.5953 9.24343 16.4137C8.92983 16.2539 8.67486 15.9989 8.51507 15.6853C8.33342 15.3288 8.33342 14.8621 8.33342 13.9287V11.8334C8.33342 10.9 8.33342 10.4333 8.51507 10.0768C8.67486 9.76316 8.92983 9.50819 9.24343 9.3484C9.59995 9.16675 10.0667 9.16675 11.0001 9.16675H15.6667C16.6002 9.16675 17.0669 9.16675 17.4234 9.3484C17.737 9.50819 17.992 9.76316 18.1518 10.0768C18.3334 10.4333 18.3334 10.9 18.3334 11.8334V14.0953C18.3334 14.8719 18.3334 15.2602 18.2065 15.5665C18.0374 15.9748 17.7129 16.2993 17.3046 16.4685C16.9983 16.5953 16.61 16.5953 15.8334 16.5953V18.3334Z"
                                                                        stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="replies-count">
                                                                <h6><span>1</span> 답변</h6>
                                                            </div>
                                                            <div class="arrow-wrapper">
                                                                <div class="arrow-down">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M12.8334 1.08325L7.00008 6.91659L1.16675 1.08325"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="arrow-up">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M1.16665 6.91675L6.99998 1.08341L12.8333 6.91675"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="collapse" id="collapseReplies2">
                                                        <div class="card card-body">
                                                            <div class="content-wrapper">
                                                                <div class="content">
                                                                    <p><b>현우님께,</b></p>
                                                                    <p>최근 임대료 명세서에 예상치 못한 요금이 청구된 것에 대해 문의해 주셔서 감사합니다.
                                                                        예상치 못한 수수료를 보는 것이 얼마나 걱정스러운지 이해하며, 이 문제를 해결하는 동안
                                                                        인내심을 가져주셔서 감사합니다.</p>
                                                                    <p>우리는 건물을 유지관리하고 모든 거주자에게 안전하고 편안한 생활 환경을 보장하는 데 드는
                                                                        비용을 충당하기 위해 이 수수료를 시행했습니다.</p>
                                                                    <p>이 변경 사항을 전달하는 데 있어서 실수가 있었다는 점에 대해 사과드립니다. 앞으로는
                                                                        제공되는 서비스의 세부 정보와 함께 추가 비용이 사전에 명확하게 전달되도록 하겠습니다.
                                                                    </p>
                                                                </div>
                                                                <div class="help-text">
                                                                    <a href="#">더 많은 도움이 필요하세요? 즉시 저희에게 연락하세요.</a>
                                                                </div>
                                                                <div class="replies-time">
                                                                    <h6>2일 전</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="requests-wrapper">
                                            <div class="issues-status-time-wrapper">
                                                <div class="issues-status-wrapper">
                                                    <h6 class="dispute-issues">재정 문제</h6>
                                                    <h6 class="dispute-status pending-status">답변완료</h6>
                                                </div>
                                                <div class="time-wrapper">
                                                    <h6 class="dispute-time">2/14/2024</h6>
                                                </div>
                                            </div>
                                            <div class="issues-content">
                                                <p>저는 최근 월세 명세서를 검토했는데 예상치 못한 비용이 청구되었습니다. 제가 알지 못했던 유지 관리 서비스에 대한 수수료인
                                                    듯합니다. 이 비용과 제공된 서비스에 대한 관련 세부 정보에 대한 설명을 부탁드립니다.</p>
                                            </div>
                                            <div class="replies-wrapper">
                                                <div class="replies-inner">
                                                    <button class="btn btn-primary" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseReplies3"
                                                        aria-expanded="false" aria-controls="collapseReplies3">
                                                        <div class="replies-header">
                                                            <div class="circle"></div>
                                                            <div class="message-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M8.33342 12.5001L5.7707 15.0948C5.41324 15.4568 5.2345 15.6377 5.08087 15.6505C4.94759 15.6616 4.81709 15.608 4.73005 15.5064C4.62971 15.3894 4.62971 15.1351 4.62971 14.6264V13.3264C4.62971 12.87 4.25598 12.5398 3.80442 12.4737V12.4737C2.71153 12.3136 1.85323 11.4553 1.69314 10.3624C1.66675 10.1822 1.66675 9.96718 1.66675 9.53712V5.66675C1.66675 4.26662 1.66675 3.56655 1.93923 3.03177C2.17892 2.56137 2.56137 2.17892 3.03177 1.93923C3.56655 1.66675 4.26662 1.66675 5.66675 1.66675H11.8334C13.2335 1.66675 13.9336 1.66675 14.4684 1.93923C14.9388 2.17892 15.3212 2.56137 15.5609 3.03177C15.8334 3.56655 15.8334 4.26662 15.8334 5.66675V9.16675M15.8334 18.3334L14.0197 17.0725C13.7648 16.8952 13.6373 16.8066 13.4986 16.7438C13.3755 16.688 13.246 16.6474 13.1131 16.6229C12.9633 16.5953 12.808 16.5953 12.4975 16.5953H11.0001C10.0667 16.5953 9.59995 16.5953 9.24343 16.4137C8.92983 16.2539 8.67486 15.9989 8.51507 15.6853C8.33342 15.3288 8.33342 14.8621 8.33342 13.9287V11.8334C8.33342 10.9 8.33342 10.4333 8.51507 10.0768C8.67486 9.76316 8.92983 9.50819 9.24343 9.3484C9.59995 9.16675 10.0667 9.16675 11.0001 9.16675H15.6667C16.6002 9.16675 17.0669 9.16675 17.4234 9.3484C17.737 9.50819 17.992 9.76316 18.1518 10.0768C18.3334 10.4333 18.3334 10.9 18.3334 11.8334V14.0953C18.3334 14.8719 18.3334 15.2602 18.2065 15.5665C18.0374 15.9748 17.7129 16.2993 17.3046 16.4685C16.9983 16.5953 16.61 16.5953 15.8334 16.5953V18.3334Z"
                                                                        stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="replies-count">
                                                                <h6><span>1</span> 답변</h6>
                                                            </div>
                                                            <div class="arrow-wrapper">
                                                                <div class="arrow-down">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M12.8334 1.08325L7.00008 6.91659L1.16675 1.08325"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="arrow-up">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M1.16665 6.91675L6.99998 1.08341L12.8333 6.91675"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="collapse" id="collapseReplies3">
                                                        <div class="card card-body">
                                                            <div class="content-wrapper">
                                                                <div class="content">
                                                                    <p><b>현우님께,</b></p>
                                                                    <p>최근 임대료 명세서에 예상치 못한 요금이 청구된 것에 대해 문의해 주셔서 감사합니다.
                                                                        예상치 못한 수수료를 보는 것이 얼마나 걱정스러운지 이해하며, 이 문제를 해결하는 동안
                                                                        인내심을 가져주셔서 감사합니다.</p>
                                                                    <p>우리는 건물을 유지관리하고 모든 거주자에게 안전하고 편안한 생활 환경을 보장하는 데 드는
                                                                        비용을 충당하기 위해 이 수수료를 시행했습니다.</p>
                                                                    <p>이 변경 사항을 전달하는 데 있어서 실수가 있었다는 점에 대해 사과드립니다. 앞으로는
                                                                        제공되는 서비스의 세부 정보와 함께 추가 비용이 사전에 명확하게 전달되도록 하겠습니다.
                                                                    </p>
                                                                </div>
                                                                <div class="help-text">
                                                                    <a href="#">더 많은 도움이 필요하세요? 즉시 저희에게 연락하세요.</a>
                                                                </div>
                                                                <div class="replies-time">
                                                                    <h6>2일 전</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                    <!-- Request tabs content  -->
                                    <!-- Pagination  -->
                                    <div class="pagination-wrapper">
                                        <ul>
                                            <li class="page-item active" aria-current="page"><a href="#">1</a></li>
                                            <li class="page-item"><a href="#">2</a></li>
                                            <li class="page-item"><a href="#">3</a></li>
                                            <li class="page-item"><a href="#">4</a></li>
                                        </ul>
                                    </div>
                                    <!-- Pagination  -->

                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab" tabindex="0">

                                    <!-- Request tabs content  -->
                                    <div class="request-tabs-content">
                                        <div class="dispute-top-title">
                                            <h5>귀하의 분쟁 메시지</h5>
                                        </div>
                                        <div v-for="(dispute, index) in disputes" :key="index"
                                            class="requests-wrapper " :class="{ 'latest-request' : index == 0 }">
                                            <div class="issues-status-time-wrapper">
                                                <div class="issues-status-wrapper">
                                                    <h6 class="dispute-issues">{{ dispute.dispute_type.name }}</h6>
                                                    <h6 class="dispute-status completed-status">{{ dispute.status }}
                                                    </h6>
                                                </div>
                                                <div class="time-wrapper">
                                                    <h6 class="dispute-time">2일 전</h6>
                                                </div>
                                            </div>
                                            <div class="issues-content">
                                                <p>{{ dispute.message }}</p>
                                            </div>
                                            <div class="replies-wrapper">
                                                <div class="replies-inner">
                                                    <button class="btn btn-primary" type="button"
                                                        data-bs-toggle="collapse" :data-bs-target="'#collapse-' + index"
                                                        aria-expanded="false" :aria-controls="'collapse-' + index">
                                                        <div class="replies-header">

                                                            <div class="circle"></div>
                                                            <div class="message-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M8.33342 12.5001L5.7707 15.0948C5.41324 15.4568 5.2345 15.6377 5.08087 15.6505C4.94759 15.6616 4.81709 15.608 4.73005 15.5064C4.62971 15.3894 4.62971 15.1351 4.62971 14.6264V13.3264C4.62971 12.87 4.25598 12.5398 3.80442 12.4737V12.4737C2.71153 12.3136 1.85323 11.4553 1.69314 10.3624C1.66675 10.1822 1.66675 9.96718 1.66675 9.53712V5.66675C1.66675 4.26662 1.66675 3.56655 1.93923 3.03177C2.17892 2.56137 2.56137 2.17892 3.03177 1.93923C3.56655 1.66675 4.26662 1.66675 5.66675 1.66675H11.8334C13.2335 1.66675 13.9336 1.66675 14.4684 1.93923C14.9388 2.17892 15.3212 2.56137 15.5609 3.03177C15.8334 3.56655 15.8334 4.26662 15.8334 5.66675V9.16675M15.8334 18.3334L14.0197 17.0725C13.7648 16.8952 13.6373 16.8066 13.4986 16.7438C13.3755 16.688 13.246 16.6474 13.1131 16.6229C12.9633 16.5953 12.808 16.5953 12.4975 16.5953H11.0001C10.0667 16.5953 9.59995 16.5953 9.24343 16.4137C8.92983 16.2539 8.67486 15.9989 8.51507 15.6853C8.33342 15.3288 8.33342 14.8621 8.33342 13.9287V11.8334C8.33342 10.9 8.33342 10.4333 8.51507 10.0768C8.67486 9.76316 8.92983 9.50819 9.24343 9.3484C9.59995 9.16675 10.0667 9.16675 11.0001 9.16675H15.6667C16.6002 9.16675 17.0669 9.16675 17.4234 9.3484C17.737 9.50819 17.992 9.76316 18.1518 10.0768C18.3334 10.4333 18.3334 10.9 18.3334 11.8334V14.0953C18.3334 14.8719 18.3334 15.2602 18.2065 15.5665C18.0374 15.9748 17.7129 16.2993 17.3046 16.4685C16.9983 16.5953 16.61 16.5953 15.8334 16.5953V18.3334Z"
                                                                        stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="replies-count">
                                                                <h6><span>{{ dispute.comment_count }}</span> 답변</h6>
                                                            </div>
                                                            <div class="arrow-wrapper">
                                                                <div class="arrow-down">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M12.8334 1.08325L7.00008 6.91659L1.16675 1.08325"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="arrow-up">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M1.16665 6.91675L6.99998 1.08341L12.8333 6.91675"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div v-for="(comment, commentIndex) in dispute.comments"
                                                        class="collapse" :id="'collapse-' + index">
                                                        <div class="card card-body">
                                                            <div class="content-wrapper">
                                                                <div class="content">
                            
                                                                    <p>{{ comment.comment }}</p>
                                                                </div>
                                                                <!-- <div class="help-text">
                                                                    <a href="#">더 많은 도움이 필요하세요? 즉시 저희에게 연락하세요.</a>
                                                                </div> -->
                                                                <div class="replies-time">
                                                                    <!-- <h6>2일 전</h6> -->
                                                                     <h6>{{formatTimestamp(comment.updated_at)  }}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Request tabs content  -->
                                    <!-- Pagination  -->
                                    <div class="pagination-wrapper">
                                        <ul>
                                            <li class="page-item active" aria-current="page"><a href="#">1</a></li>
                                            <li class="page-item"><a href="#">2</a></li>
                                            <li class="page-item"><a href="#">3</a></li>
                                            <li class="page-item"><a href="#">4</a></li>
                                        </ul>
                                    </div>
                                    <!-- Pagination  -->

                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-contact-tab" tabindex="0">

                                    <!-- Request tabs content  -->
                                    <div class="request-tabs-content">
                                        <div class="dispute-top-title">
                                            <h5>귀하의 분쟁 메시지</h5>
                                        </div>
                                        <div v-for="(dispute, index) in disputes" :key="index"
                                            class="requests-wrapper " :class="{ 'latest-request' : index == 0 }">
                                            <div class="issues-status-time-wrapper">
                                                <div class="issues-status-wrapper">
                                                    <h6 class="dispute-issues">{{ dispute.dispute_type.name }}</h6>
                                                    <h6 class="dispute-status completed-status">{{ dispute.status }}
                                                    </h6>
                                                </div>
                                                <div class="time-wrapper">
                                                    <h6 class="dispute-time">2일 전</h6>
                                                </div>
                                            </div>
                                            <div class="issues-content">
                                                <p>{{ dispute.message }}</p>
                                            </div>
                                            <div class="replies-wrapper">
                                                <div class="replies-inner">
                                                    <button class="btn btn-primary" type="button"
                                                        data-bs-toggle="collapse" :data-bs-target="'#collapse-' + index"
                                                        aria-expanded="false" :aria-controls="'collapse-' + index">
                                                        <div class="replies-header">

                                                            <div class="circle"></div>
                                                            <div class="message-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                    height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path
                                                                        d="M8.33342 12.5001L5.7707 15.0948C5.41324 15.4568 5.2345 15.6377 5.08087 15.6505C4.94759 15.6616 4.81709 15.608 4.73005 15.5064C4.62971 15.3894 4.62971 15.1351 4.62971 14.6264V13.3264C4.62971 12.87 4.25598 12.5398 3.80442 12.4737V12.4737C2.71153 12.3136 1.85323 11.4553 1.69314 10.3624C1.66675 10.1822 1.66675 9.96718 1.66675 9.53712V5.66675C1.66675 4.26662 1.66675 3.56655 1.93923 3.03177C2.17892 2.56137 2.56137 2.17892 3.03177 1.93923C3.56655 1.66675 4.26662 1.66675 5.66675 1.66675H11.8334C13.2335 1.66675 13.9336 1.66675 14.4684 1.93923C14.9388 2.17892 15.3212 2.56137 15.5609 3.03177C15.8334 3.56655 15.8334 4.26662 15.8334 5.66675V9.16675M15.8334 18.3334L14.0197 17.0725C13.7648 16.8952 13.6373 16.8066 13.4986 16.7438C13.3755 16.688 13.246 16.6474 13.1131 16.6229C12.9633 16.5953 12.808 16.5953 12.4975 16.5953H11.0001C10.0667 16.5953 9.59995 16.5953 9.24343 16.4137C8.92983 16.2539 8.67486 15.9989 8.51507 15.6853C8.33342 15.3288 8.33342 14.8621 8.33342 13.9287V11.8334C8.33342 10.9 8.33342 10.4333 8.51507 10.0768C8.67486 9.76316 8.92983 9.50819 9.24343 9.3484C9.59995 9.16675 10.0667 9.16675 11.0001 9.16675H15.6667C16.6002 9.16675 17.0669 9.16675 17.4234 9.3484C17.737 9.50819 17.992 9.76316 18.1518 10.0768C18.3334 10.4333 18.3334 10.9 18.3334 11.8334V14.0953C18.3334 14.8719 18.3334 15.2602 18.2065 15.5665C18.0374 15.9748 17.7129 16.2993 17.3046 16.4685C16.9983 16.5953 16.61 16.5953 15.8334 16.5953V18.3334Z"
                                                                        stroke="currentColor" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div class="replies-count">
                                                                <h6><span>{{ dispute.comment_count }}</span> 답변</h6>
                                                            </div>
                                                            <div class="arrow-wrapper">
                                                                <div class="arrow-down">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M12.8334 1.08325L7.00008 6.91659L1.16675 1.08325"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <div class="arrow-up">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14"
                                                                        height="8" viewBox="0 0 14 8" fill="none">
                                                                        <path
                                                                            d="M1.16665 6.91675L6.99998 1.08341L12.8333 6.91675"
                                                                            stroke="currentColor" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div v-for="(comment, commentIndex) in dispute.comments"
                                                        class="collapse" :id="'collapse-' + index">
                                                        <div class="card card-body">
                                                            <div class="content-wrapper">
                                                                <div class="content">
                            
                                                                    <p>{{ comment.comment }}</p>
                                                                </div>
                                                                <!-- <div class="help-text">
                                                                    <a href="#">더 많은 도움이 필요하세요? 즉시 저희에게 연락하세요.</a>
                                                                </div> -->
                                                                <div class="replies-time">
                                                                    <!-- <h6>2일 전</h6> -->
                                                                     <h6>{{formatTimestamp(comment.updated_at)  }}</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Request tabs content  -->
                                    <!-- Pagination  -->
                                    <div class="pagination-wrapper">
                                        <ul>
                                            <li class="page-item active" aria-current="page"><a href="#">1</a></li>
                                            <li class="page-item"><a href="#">2</a></li>
                                            <li class="page-item"><a href="#">3</a></li>
                                            <li class="page-item"><a href="#">4</a></li>
                                        </ul>
                                    </div>
                                    <!-- Pagination  -->

                                </div>
                            </div>
                            <!-- Tabs  -->
                        </div>
                    </div>
                </div>
                <div class="right-request-section">
                    <div class="inner-wrapper">
                        <div class="form-title">
                            <h2>분쟁 상황을 작성해 주세요.</h2>
                        </div>
                        <div class="form-content-para">
                            <p>분쟁의 세부 사항을 자세히 기입해 주시면,<br /> 신속하고 정확한 해결 방안을 제공해 드리겠습니다.</p>
                        </div>
                        <div class="request-form">
                            <form @submit.prevent="onSubmit">
                                <div class="form-group">
                                    <div class="form-floating">
                                        <input v-model="name" type="text" class="form-control" id="floatingusername"
                                            placeholder="username">
                                        <label for="floatingusername">이름</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <input v-model="address" type="text" class="form-control" id="floatingaddress"
                                            placeholder="addresses">
                                        <label for="floatingaddress">건물 주소</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <select v-model = "disputeTypeData" class="form-select" id="floatingSelect"
                                            aria-label="Floating label select example">
                                            <option v-for="dispute in disputeType" :key="dispute.id" :value="dispute.id">
        {{ dispute.name }}
      </option>
                                        </select>
                                        <label for="floatingSelect">문제 유형</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-floating">
                                        <textarea v-model="message" class="form-control" placeholder="메시지"
                                            id="floatingTextarea2"></textarea>
                                        <label for="floatingTextarea2">메시지</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button class="btn_submit" type="submit">요청하기 <span
                                            class="material-symbols-outlined">
                                            arrow_right_alt
                                        </span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Dispute request Section  -->








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

    <Toast />



    <!-- Login Modal  -->
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button> -->

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
                            <a href="./sign-in.html">로그인</a>
                            <a href="./sign-up.html">회원가입</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- Login Modal  -->
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();
import Toast from 'primevue/toast';
import useAuth from '@/composables/useAuth';
const { isAuthenticated } = useAuth();
const runtimeConfig = useRuntimeConfig();
const { authToken } = await useAuth();
const disputeType = ref([]);
const disputeTypeData = ref('')
const name = ref('')
const address = ref('')
const message = ref('')
const loading = ref(false)
definePageMeta({
    middleware: ['auth'],
});

const disputes = ref([])
onMounted(() => {
    getDisputeType()
    getDisputeData()
    if (!isAuthenticated) {
        $(document).ready(function () {

            $('#loginModal').modal('show');
        });
    }

})

const getDisputeData = async () => {
    console.log('token', authToken)
    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}disputes`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        disputes.value = await res.data.reverse();
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

}

function formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString();
}

async function onSubmit () {

    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}disputes`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            },
            body:{
                dispute_type_id: disputeTypeData.value,
                name:name.value,
                address:address.value,
                message:message.value
            }
        })
        toast.add({ detail:"Dispute Request Submitted!" , life: 3000 });
        getDisputeData()
        loading.value = false
       
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

}

async function getDisputeType () {

    try {
        loading.value = true
        const res = await $fetch(`${runtimeConfig.public.apiBase}dispute-types`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authToken.value}` // Add the Bearer token here
            }
        })

        disputeType.value = await res.data;
        disputeTypeData.value = disputeType.value[0].id
        loading.value = false
        console.log('res', res)
    }
    catch (e) {
        console.error(e)
        loading.value = false
    }

}

</script>