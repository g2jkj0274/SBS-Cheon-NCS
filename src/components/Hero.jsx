import '../css/Hero.css'

const heroIllustration = `
<svg width="720" height="620" viewBox="0 0 720 620" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg1" x1="88" y1="46" x2="592" y2="540" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2C74FF"/>
      <stop offset="1" stop-color="#0E1835"/>
    </linearGradient>
    <linearGradient id="card1" x1="165" y1="116" x2="553" y2="454" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18284C"/>
      <stop offset="1" stop-color="#0C1530"/>
    </linearGradient>
    <linearGradient id="panel" x1="187" y1="150" x2="524" y2="414" gradientUnits="userSpaceOnUse">
      <stop stop-color="#EDF4FF"/>
      <stop offset="1" stop-color="#D6E5FF"/>
    </linearGradient>
    <linearGradient id="screen" x1="214" y1="184" x2="506" y2="391" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#EFF5FF"/>
    </linearGradient>
    <filter id="shadow" x="0" y="0" width="720" height="620" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#061022" flood-opacity="0.35"/>
    </filter>
  </defs>

  <circle cx="132" cy="118" r="72" fill="#4FA4FF" fill-opacity="0.18"/>
  <circle cx="580" cy="110" r="92" fill="#00C2E0" fill-opacity="0.16"/>
  <circle cx="620" cy="450" r="84" fill="#6D55FF" fill-opacity="0.18"/>
  <circle cx="98" cy="474" r="62" fill="#1A5CFF" fill-opacity="0.18"/>

  <g filter="url(#shadow)">
    <rect x="136" y="92" width="448" height="346" rx="34" fill="url(#bg1)"/>
    <rect x="160" y="116" width="400" height="298" rx="28" fill="url(#card1)"/>
    <rect x="186" y="146" width="348" height="242" rx="22" fill="url(#panel)"/>
    <rect x="214" y="178" width="292" height="190" rx="18" fill="url(#screen)"/>

    <rect x="214" y="178" width="292" height="28" rx="14" fill="#DCE8FF"/>
    <circle cx="234" cy="192" r="5" fill="#93B3FF"/>
    <circle cx="251" cy="192" r="5" fill="#B1C8FF"/>
    <circle cx="268" cy="192" r="5" fill="#D0DDFF"/>

    <rect x="236" y="224" width="112" height="18" rx="9" fill="#1A5CFF" fill-opacity="0.18"/>
    <rect x="236" y="252" width="212" height="12" rx="6" fill="#C5D8FF"/>
    <rect x="236" y="272" width="192" height="12" rx="6" fill="#D8E5FF"/>
    <rect x="236" y="304" width="84" height="42" rx="14" fill="#1A5CFF"/>
    <rect x="332" y="304" width="84" height="42" rx="14" fill="#0F224A"/>
    <rect x="428" y="304" width="54" height="42" rx="14" fill="#E1ECFF"/>

    <rect x="444" y="228" width="42" height="42" rx="14" fill="#FFFFFF"/>
    <path d="M456 248.5L466.5 259L476 239" stroke="#00B8A9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>

    <rect x="158" y="430" width="180" height="70" rx="22" fill="#FFFFFF"/>
    <rect x="178" y="450" width="82" height="12" rx="6" fill="#D7E5FF"/>
    <rect x="178" y="470" width="126" height="12" rx="6" fill="#A9C3FF"/>

    <rect x="384" y="430" width="176" height="86" rx="24" fill="#EAF2FF"/>
    <rect x="404" y="452" width="92" height="12" rx="6" fill="#9DBBFF"/>
    <rect x="404" y="474" width="126" height="12" rx="6" fill="#CFDFFF"/>
  </g>

  <g>
    <rect x="78" y="214" width="122" height="62" rx="18" fill="#FFFFFF"/>
    <rect x="96" y="232" width="48" height="12" rx="6" fill="#BFD3FF"/>
    <rect x="96" y="252" width="76" height="10" rx="5" fill="#E0EAFF"/>
  </g>

  <g>
    <rect x="522" y="176" width="120" height="68" rx="20" fill="#FFFFFF"/>
    <rect x="540" y="196" width="54" height="12" rx="6" fill="#9FD8FF"/>
    <rect x="540" y="216" width="76" height="10" rx="5" fill="#DCEEFF"/>
  </g>

  <g>
    <rect x="544" y="364" width="110" height="62" rx="18" fill="#FFFFFF"/>
    <rect x="562" y="384" width="50" height="12" rx="6" fill="#C3D7FF"/>
    <rect x="562" y="404" width="70" height="10" rx="5" fill="#E3ECFF"/>
  </g>
</svg>
`

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">국민내일배움카드 훈련과정</div>

          <p className="hero-kicker">Java · Spring Boot · MySQL</p>

          <h1>
            취업까지 연결되는
            <br />
            <em>자바 기반 웹 개발자 양성과정</em>
          </h1>

          <p className="hero-sub">
            백엔드 핵심 기술을 기초부터 프로젝트까지 단계적으로 학습하고,
            <br />
            실무형 포트폴리오와 협업 경험까지 완성하는 집중 과정입니다.
          </p>

          <div className="hero-actions">
            <a href="#apply" className="hero-primary-btn">
              지금 지원하기
            </a>
            <a href="#curriculum" className="hero-secondary-btn">
              커리큘럼 보기
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="label">수강 기간</div>
              <div className="value">70일</div>
            </div>
            <div className="hero-stat">
              <div className="label">총 훈련시간</div>
              <div className="value">280H</div>
            </div>
            <div className="hero-stat">
              <div className="label">정원</div>
              <div className="value">18명</div>
            </div>
            <div className="hero-stat">
              <div className="label">훈련비 지원</div>
              <div className="value">최대 100%</div>
            </div>
          </div>

          <div className="hero-note">
            * 국취제 유형 및 고용센터 심사 결과에 따라 실제 지원 비율은 달라질 수 있습니다.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>

          <div className="floating-card floating-card-left">
            <span className="floating-title">실무 프로젝트</span>
            <strong>팀 협업 · 코드리뷰</strong>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-title">백엔드 핵심</span>
            <strong>Spring Boot</strong>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-title">데이터 설계</span>
            <strong>MySQL · JPA</strong>
          </div>

          <div className="hero-main-image-wrap">
            <img
              className="hero-main-image"
              src={`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(heroIllustration)}`}
              alt="부트캠프 소개 화면 일러스트"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero