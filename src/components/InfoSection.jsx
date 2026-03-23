function InfoSection() {
  const moveToSection = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="info-section" id="info">
      <div className="section-inner">
        <div className="sec-label">과정 정보</div>
        <h2 className="sec-title">한눈에 보는 과정 개요</h2>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="label">훈련 기간</div>
            <div className="value">2026.04.13 ~ 2026.07.23</div>
            <div className="sub">70일 / 280시간</div>
          </div>

          <div className="info-card">
            <div className="info-icon">🕘</div>
            <div className="label">수업 시간</div>
            <div className="value">09:00 ~ 13:00</div>
            <div className="sub">1일 4시간 / 주 5일 (월~금)</div>
          </div>

          <div className="info-card">
            <div className="info-icon">👥</div>
            <div className="label">정원</div>
            <div className="value">18명</div>
            <div className="sub">소규모 밀착 교육</div>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="label">훈련 기관</div>
            <div className="value">SBS아카데미 천안</div>
            <div className="sub">충청남도 천안시</div>
          </div>
        </div>

        <div className="cost-box detailed">
          <div className="cost-full">
            <div className="cost-total-label">훈련비용 총액</div>
            <div className="cost-total-price">
              1,853,600<span>원</span>
            </div>

            <div className="cost-type-grid">
              <div className="cost-type-card">
                <div className="cost-type-name">일반 유형</div>
                <div className="cost-type-sub">국가 지원 65%</div>
                <div className="cost-type-price">
                  648,760<span>원</span>
                </div>
                <div className="cost-type-desc">자부담금 35%</div>
              </div>

              <div className="cost-type-card highlight">
                <div className="cost-type-badge">최대혜택</div>
                <div className="cost-type-name highlight-text">국민취업지원제도 1유형</div>
                <div className="cost-type-sub">자부담금</div>
                <div className="cost-type-price highlight-price">
                  0<span>원</span>
                </div>
                <div className="cost-type-desc highlight-desc">
                  + 구직촉진수당 <strong>월 60만원 × 6개월</strong> 지급
                </div>
              </div>

              <div className="cost-type-card">
                <div className="cost-type-name">국민취업지원제도 2유형</div>
                <div className="cost-type-sub">자부담금</div>
                <div className="cost-type-price">
                  556,080<span>원</span>
                </div>
                <div className="cost-type-desc">일반 유형 대비 약 14% 절감</div>
              </div>
            </div>

            <button
              className="apply-btn-big"
              onClick={() => moveToSection('cta')}
            >
              지금 수강 신청하기 →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection