function FaqSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="section-inner">
        <div className="sec-label">FAQ</div>
        <h2 className="sec-title">자주 묻는 질문</h2>
        <p className="sec-desc">
          수강 전 가장 많이 궁금해하는 내용을 먼저 정리했습니다.
        </p>

        <div className="faq-list">
          <div className="faq-item">
            <h3>비전공자도 수강할 수 있나요?</h3>
            <p>
              가능합니다. 이 과정은 기초 문법부터 단계적으로 학습할 수 있도록
              구성되어 있어 처음 배우는 분도 흐름을 따라갈 수 있습니다.
            </p>
          </div>

          <div className="faq-item">
            <h3>국민내일배움카드가 꼭 있어야 하나요?</h3>
            <p>
              맞습니다. 해당 훈련과정은 국민내일배움카드가 있어야 수강신청이 가능하며, 고용24 사이트 또는 가까운 고용센터에서 발급 가능합니다. 
            </p>
          </div>

          <div className="faq-item">
            <h3>수업을 들으면 바로 취업할 수 있나요?</h3>
            <p>
              과정 자체가 취업을 자동으로 보장하는 것은 아닙니다. 다만
              프로젝트 결과물과 학습 방향을 정리하는 데 도움이 되는 과정입니다.
            </p>
          </div>

          {/* <div className="faq-item">
            <h3>React와 Spring을 둘 다 배우나요?</h3>
            <p>
              네. 프론트엔드 화면 구성과 백엔드 기능 구현을 함께 학습하는
              흐름으로 구성되어 있습니다.
            </p>
          </div> */}

          <div className="faq-item">
            <h3>상담 후 바로 신청해야 하나요?</h3>
            <p>
              상담을 통해 수강 가능 여부와 적합성을 먼저 확인한 뒤,
              일정과 상황에 맞게 신청을 진행하면 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection