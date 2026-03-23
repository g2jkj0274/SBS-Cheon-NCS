function TargetSection() {
  return (
    <section className="target-section" id="target">
      <div className="section-inner">
        <div className="sec-label">추천 대상</div>
        <h2 className="sec-title">이런 분들에게 추천합니다</h2>
        <p className="sec-desc">
          처음 개발을 배우는 분부터, 웹 개발자로 취업을 준비하는 분까지
          학습 목표에 맞게 도전할 수 있습니다.
        </p>

        <div className="target-layout">
          <div className="target-left">
            <div className="target-card">
              <h3>수강 추천 대상</h3>

              <div className="target-list">
                <div className="target-item">
                  <div className="target-bullet">1</div>
                  <div>
                    <div className="target-item-title">개발을 처음 배우는 비전공자</div>
                    <div className="target-item-desc">
                      프로그래밍이 처음이어도 기초부터 단계적으로 학습하고 싶은 분
                    </div>
                  </div>
                </div>

                <div className="target-item">
                  <div className="target-bullet">2</div>
                  <div>
                    <div className="target-item-title">웹 개발자로 진로를 정한 사람</div>
                    <div className="target-item-desc">
                      Java와 Spring 기반 백엔드 개발 역량을 체계적으로 배우고 싶은 분
                    </div>
                  </div>
                </div>

                <div className="target-item">
                  <div className="target-bullet">3</div>
                  <div>
                    <div className="target-item-title">포트폴리오가 필요한 취업 준비생</div>
                    <div className="target-item-desc">
                      단순 공부가 아니라 결과물을 만들고 취업 자료까지 준비하고 싶은 분
                    </div>
                  </div>
                </div>

                <div className="target-item">
                  <div className="target-bullet">4</div>
                  <div>
                    <div className="target-item-title">체계적으로 다시 배우고 싶은 학습자</div>
                    <div className="target-item-desc">
                      혼자 공부하다 흐름이 끊겼거나, 기초부터 다시 정리하고 싶은 분
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="target-right">
            <div className="result-card">
              <div className="result-label">수강 후 기대 효과</div>
              <h3>학습 후에는 이런 변화가 가능합니다</h3>

              <ul className="result-list">
                <li>웹 서비스가 어떤 구조로 만들어지는지 이해할 수 있습니다.</li>
                <li>Java와 Spring 기반 백엔드 흐름을 설명할 수 있습니다.</li>
                <li>REST API 설계와 서버 개발 흐름을 프로젝트로 경험할 수 있습니다.</li>
                <li>DB 연동과 CRUD 구현 경험을 프로젝트에 담을 수 있습니다.</li>
                <li>취업용 포트폴리오의 기초 결과물을 정리할 수 있습니다.</li>
              </ul>
            </div>

            <div className="result-card light">
              <div className="result-label blue">이런 고민이 있다면</div>
              <h3>상담을 통해 먼저 확인해보세요</h3>

              <ul className="result-list dark">
                <li>내가 비전공자인데 따라갈 수 있을지</li>
                <li>국민내일배움카드 발급 또는 사용 가능 여부</li>
                <li>취업 준비에 실제로 도움이 되는 과정인지</li>
                <li>현재 내 수준에서 어떤 준비가 필요한지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetSection