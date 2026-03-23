function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">국민내일배움카드 훈련과정</div>

        <h1>
          자바기반
          <br />
          <em>웹개발자 양성과정</em>
        </h1>

        <p className="hero-sub">
          Java · Spring을 중심으로 실무 프로젝트까지 완성하는 280시간 집중 과정
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="val">
              280<em>H</em>
            </div>
            <div className="key">총 훈련시간</div>
          </div>

          <div className="hero-stat">
            <div className="val">
              70<em>일</em>
            </div>
            <div className="key">훈련기간</div>
          </div>

          <div className="hero-stat">
            <div className="val">
              18<em>명</em>
            </div>
            <div className="key">정원</div>
          </div>

          <div className="hero-stat">
            <div className="val">
              <em>최대</em> 100%
            </div>
            <div className="key">국취제 1유형 기준</div>
            <div className="key">* 유형별 훈련비 지원율이 상이하니 고용센터로 확인 바랍니다.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero