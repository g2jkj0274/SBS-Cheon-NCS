import { useEffect, useRef } from 'react';
import '../css/WhySpringSection.css';

function WhySpringSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: '기능을 넘어 서비스를 완성할 때',
      desc: '단순한 화면 구현을 넘어 로그인, API, DB 연결까지 아우르는 전체 프로세스를 경험합니다.',
      accent: 'End-to-End 서비스 완성',
      delay: 'delay-1'
    },
    {
      title: '실무형 아키텍처로 도약할 때',
      desc: '작동만 하는 코드가 아닌, 유지보수와 보안을 고려한 견고한 백엔드 구조를 설계합니다.',
      accent: '계층형 아키텍처 & 보안',
      delay: 'delay-2'
    },
  ];

  const flowSteps = [
    { label: 'Client', value: 'React / Web', active: false },
    { label: 'API Gateway', value: 'Spring Boot Server', active: true },
    { label: 'Database', value: 'MySQL / JPA', active: false },
  ];

  return (
    <section className="why-spring-section" ref={sectionRef}>
      <div className="ws-bg-glow" />
      
      <div className="why-spring-container">
        <div className="ws-header reveal">
          <span className="ws-label">Why This Course</span>
          <h2 className="ws-title">왜 스프링 기반의<br />백엔드인가요?</h2>
          <p className="ws-desc">
            국내 엔터프라이즈 시장의 표준 기술력을 확보하여
          </p>
          <p className="ws-desc">
            어떤 환경에서도 적응할 수 있는 개발자로 성장합니다.
          </p>
        </div>

        <div className="ws-content-grid">
          <div className="why-spring-reasons">
            {reasons.map((reason, idx) => (
              <div key={idx} className={`reason-card reveal ${reason.delay}`}>
                <span className="reason-accent">{reason.accent}</span>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-desc">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="why-spring-visual reveal delay-3">
            <div className="visual-glass-panel">
              <div className="visual-header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <span>System Flow Architecture</span>
              </div>
              
              <div className="flow-container">
                {flowSteps.map((step, idx) => (
                  <div key={idx} className={`flow-item ${step.active ? 'is-active' : ''}`}>
                    <div className="flow-node">
                      <span className="node-label">{step.label}</span>
                      <strong className="node-value">{step.value}</strong>
                    </div>
                    {idx < flowSteps.length - 1 && <div className="flow-connector" />}
                  </div>
                ))}
              </div>

              {/* 플로팅 정보 카드 */}
              <div className="ws-floating-info info-1">
                <span className="info-tag">Tech Stack</span>
                <strong>JPA · Security · Redis</strong>
              </div>
              <div className="ws-floating-info info-2">
                <span className="info-tag">Pattern</span>
                <strong>DTO · Global Exception</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySpringSection;