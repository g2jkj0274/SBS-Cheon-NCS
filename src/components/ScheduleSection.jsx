import React from 'react';

function ScheduleSection() {
  const moveToSection = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="schedule-section" id="schedule">
      <div className="section-inner">
        <div className="sec-label">훈련 일정</div>
        <h2 className="sec-title">수업 일정과 신청 절차를 미리 확인하세요</h2>
        <p className="sec-desc">
          훈련 시작일부터 수업 시간, 신청 순서까지 한 번에 확인할 수 있도록 정리했습니다.
        </p>

        <div className="schedule-layout">
          <div className="schedule-main">
            <div className="schedule-card">
              <div className="schedule-card-head">
                <span className="schedule-badge">모집 중</span>
                <h3>훈련 운영 정보</h3>
              </div>

              <div className="schedule-info-list">
                <div className="schedule-info-item">
                  <div className="schedule-info-label">훈련 기간</div>
                  <div className="schedule-info-value">2026.04.13 ~ 2026.07.23</div>
                </div>

                <div className="schedule-info-item">
                  <div className="schedule-info-label">수업 시간</div>
                  <div className="schedule-info-value">월 ~ 금 / 09:00 ~ 13:00</div>
                </div>

                <div className="schedule-info-item">
                  <div className="schedule-info-label">총 훈련시간</div>
                  <div className="schedule-info-value">280시간</div>
                </div>

                <div className="schedule-info-item">
                  <div className="schedule-info-label">정원</div>
                  <div className="schedule-info-value">18명</div>
                </div>

                <div className="schedule-info-item">
                  <div className="schedule-info-label">장소</div>
                  <div className="schedule-info-value">SBS 아카데미컴퓨터아트학원 천안점</div>
                </div>
              </div>
            </div>

            <div className="schedule-card">
              <div className="schedule-card-head">
                <h3>신청 절차</h3>
              </div>

              <div className="process-list">
                <div className="process-item">
                  <div className="process-number">1</div>
                  <div className="process-content">
                    <div className="process-title">과정 상담 신청</div>
                    <div className="process-desc">
                      전화 또는 방문 상담을 통해 과정 적합성과 수강 가능 여부를 확인합니다.
                    </div>
                  </div>
                </div>

                <div className="process-item">
                  <div className="process-number">2</div>
                  <div className="process-content">
                    <div className="process-title">국민내일배움카드 확인</div>
                    <div className="process-desc">
                      카드 보유 여부와 지원 가능 유형을 확인하고 필요한 절차를 안내받습니다.
                    </div>
                  </div>
                </div>

                <div className="process-item">
                  <div className="process-number">3</div>
                  <div className="process-content">
                    <div className="process-title">수강 등록 진행</div>
                    <div className="process-desc">
                      개강 일정에 맞춰 등록을 완료하고 훈련 참여 준비를 진행합니다.
                    </div>
                  </div>
                </div>

                <div className="process-item">
                  <div className="process-number">4</div>
                  <div className="process-content">
                    <div className="process-title">개강 및 수업 시작</div>
                    <div className="process-desc">
                      정해진 일정에 맞춰 수업이 시작되며 실습 중심으로 학습을 진행합니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="schedule-side">
            <div className="schedule-side-card">
              <div className="side-mini-label">상담 안내</div>
              <h3>
                지금 문의하면 수강 가능 여부를 빠르게 확인할 수 있습니다
              </h3>
              <p>
                정원 마감 전에 상담을 받아두면 카드 여부, 자부담, 신청 절차를 더 정확하게 안내받을 수 있습니다.
              </p>

              <div className="side-highlight-list">
                <div className="side-highlight-item">정예 18명 운영</div>
                <div className="side-highlight-item">실무형 프로젝트 중심</div>
                <div className="side-highlight-item">상담 후 신청 절차 안내</div>
              </div>

              <button
                className="side-cta-btn"
                onClick={() => moveToSection('cta')}
              >
                상담 / 신청 바로가기
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection;