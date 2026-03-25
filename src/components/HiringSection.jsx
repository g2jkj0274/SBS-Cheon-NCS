import React from 'react';

function HiringSection() {
  return (
    <section className="hiring-section" id="hiring">
      <div className="section-inner">
        <div className="sec-label">진로 방향</div>
        <h2 className="sec-title">수료 후 이런 방향으로 확장할 수 있습니다</h2>
        <p className="sec-desc">
          과정 수료 후에는 웹 개발 전반의 흐름을 이해한 상태에서
          백엔드, 프론트엔드, 풀스택 방향으로 학습과 포트폴리오를 확장할 수 있습니다.
        </p>

        <div className="hiring-grid">
          <div className="hiring-card">
            <div className="hiring-icon">🖥️</div>
            <h3>백엔드 개발자 준비</h3>
            <p>
              Java, Spring Boot, MySQL 중심의 서버 개발 흐름을 바탕으로
              신입 백엔드 개발자 포지션을 준비할 수 있습니다.
            </p>
          </div>

          <div className="hiring-card">
            <div className="hiring-icon">🎨</div>
            <h3>프론트엔드 확장 학습</h3>
            <p>
              React 기반 화면 구성 경험을 바탕으로 UI 구현, 상태 관리,
              사용자 경험 중심 학습으로 확장할 수 있습니다.
            </p>
          </div>

          <div className="hiring-card">
            <div className="hiring-icon">🌐</div>
            <h3>풀스택 프로젝트 경험</h3>
            <p>
              화면과 서버, 데이터베이스를 연결하는 전체 흐름을 경험했기 때문에
              풀스택 포트폴리오 제작의 기반이 됩니다.
            </p>
          </div>
        </div>

        <div className="job-roadmap">
          <div className="roadmap-step">
            <div className="roadmap-no">1</div>
            <div>
              <div className="roadmap-title">기초 기술 이해</div>
              <div className="roadmap-desc">
                Java, 웹 기초, DB, Spring 구조 이해
              </div>
            </div>
          </div>

          <div className="roadmap-arrow">→</div>

          <div className="roadmap-step">
            <div className="roadmap-no">2</div>
            <div>
              <div className="roadmap-title">프로젝트 결과물 정리</div>
              <div className="roadmap-desc">
                CRUD, 인증, 게시판, 연동 기능을 포함한 포트폴리오 제작
              </div>
            </div>
          </div>

          <div className="roadmap-arrow">→</div>

          <div className="roadmap-step">
            <div className="roadmap-no">3</div>
            <div>
              <div className="roadmap-title">취업 준비 확장</div>
              <div className="roadmap-desc">
                이력서, 자기소개서, 기술 면접 대비 방향 설정
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HiringSection;