function CtaSection() {
  return (
    <section className="cta-section" id="cta">
      <div className="section-inner">
        <div className="cta-box">
          <div className="cta-text">
            <div className="cta-mini-label">지금 상담 가능</div>
            <h2>자바기반 웹개발자 양성과정,<br />지금 상담부터 시작해보세요</h2>
            <p>
              정원 마감 전에 상담을 받아두면 수강 가능 여부, 카드 사용 여부,
              자부담 범위까지 더 정확하게 확인할 수 있습니다.
            </p>
          </div>

          <div className="cta-actions">
            {/* <button className="cta-primary-btn">수강 신청하기</button> */}
            <button 
            className="cta-primary-btn"
            onClick={() => window.open('https://www.work24.go.kr/hr/a/a/3100/selectTracseDetl.do?tracseId=AIG20250000526923&tracseTme=1&cstmConsTme=&crseTracseSe=C0061&trainstCstmrId=500042646362&tracseReqstsCd=&focusId=', '_blank')}
            >
              수강 신청하기
            </button>
            <button className="cta-secondary-btn">전화 상담 문의</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection