function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>SBS</span> 아카데미컴퓨터아트학원 천안
            </div>
            <p>
              자바기반 웹개발자 양성과정을 통해
              실무형 웹 개발 학습과 프로젝트 경험을 제공합니다.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>바로가기</h4>
              <a href="#info">과정 정보</a>
              <a href="#curriculum">커리큘럼</a>
              <a href="#schedule">일정</a>
              <a href="#faq">FAQ</a>
            </div>

            <div className="footer-link-group">
              <h4>문의</h4>
              <span>전화 상담 가능</span>
              <span>방문 상담 가능</span>
              <span>상담 후 신청 안내</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SBS Academy Computer Art Cheonan. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer