import { useEffect, useMemo, useRef, useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Database, 
  ShieldCheck, 
  Box, 
  Code2, 
  Cpu,
  Layers
} from 'lucide-react';
import '../css/BenefitsSection.css';

function BenefitsSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

    const revealElements = sectionRef.current?.querySelectorAll('.reveal') ?? [];
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stepIcons = [
    <Code2 size={20} />,
    <Cpu size={20} />,
    <Layers size={20} />,
    <Database size={20} />,
    <ShieldCheck size={20} />,
    <Box size={20} />
  ];

  const detailedCurriculum = useMemo(() => [
    {
      period: '1-4주차',
      navTitle: '프로그래밍 기초',
      title: 'Web Standard & Core Logic',
      overview: '웹 브라우저의 동작 원리와 자바스크립트 엔진의 핵심 개념을 파악하여 견고한 프론트-백엔드 통신 기반을 다집니다.',
      stacks: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
      modules: [
        { title: '웹 개발 기초 지식', points: ['브라우저 렌더링 파이프라인', 'HTTP/HTTPS 프로토콜 이해', 'IP 및 DNS 동작 원리'] },
        { title: '현대적 퍼블리싱', points: ['Semantic Markup 설계', 'Flex/Grid 레이아웃 마스터', 'CSS 변수와 테마 시스템'] },
        { title: 'JavaScript Core', points: ['Event Loop와 비동기 처리', 'DOM API 실전 활용', 'ES6+ 최신 문법 및 모듈화'] }
      ]
    },
    {
      period: '5-8주차',
      navTitle: 'Java 심화 & OOP',
      title: 'Object-Oriented Design & Java',
      overview: '단순 문법을 넘어 객체지향 원칙(SOLID)을 코드에 녹여내고, 대규모 시스템 확장에 유리한 설계를 연습합니다.',
      stacks: ['Java 17', 'OOP', 'JVM Architecture', 'Servlet'],
      modules: [
        { title: 'Java 심화 메커니즘', points: ['JVM 메모리 구조와 GC', 'Generic과 Reflection 활용', '함수형 인터페이스와 Stream'] },
        { title: '객체지향 설계 원칙', points: ['SOLID 설계 5원칙 적용', '디자인 패턴 기초', '인터페이스 기반의 추상화 전략'] },
        { title: 'Web Engine 이해', points: ['Servlet Lifecycle 분석', 'Filter와 Interceptor 구분', 'Session/Cookie 기반 인증 원리'] }
      ]
    },
    {
      period: '9-12주차',
      navTitle: 'Spring Boot 핵심',
      title: 'Spring Framework & API Design',
      overview: '엔터프라이즈 급 백엔드 개발의 표준인 Spring Boot를 통해 계층형 아키텍처 API 서버를 구축합니다.',
      stacks: ['Spring Boot 3', 'REST API', 'Validation', 'JUnit5'],
      modules: [
        { title: 'Spring 핵심 원리', points: ['IoC/DI와 Bean Lifecycle', 'AOP 기반 공통 관심사 분리', '환경 설정 전략'] },
        { title: 'RESTful API 고도화', points: ['Global Exception Handler 구축', 'DTO 기반 데이터 매핑 전략', 'API 문서화 자동화'] },
        { title: '테스트 코드 작성', points: ['JUnit5 단위 테스트', 'Mocking 기반 서비스 로직 검증', '테스트 자동화 환경 구축'] }
      ]
    },
    {
      period: '13-16주차',
      navTitle: 'DB 설계 & JPA',
      title: 'Data Modeling & ORM Strategy',
      overview: '데이터의 정규화와 성능을 고려한 DB 설계를 바탕으로, 실무 표준 기술인 JPA의 성능 최적화 기법을 습득합니다.',
      stacks: ['MySQL', 'Spring Data JPA', 'QueryDSL', 'Redis'],
      modules: [
        { title: 'RDB 설계 및 최적화', points: ['정규화와 비정규화 전략', '인덱스 설계 및 실행 계획 분석', 'Transaction 격리 수준'] },
        { title: 'JPA 실무 활용', points: ['영속성 컨텍스트 활용 기법', 'N+1 문제 원인 및 해결 방안', '벌크 연산과 성능 최적화'] },
        { title: '데이터 아키텍처', points: ['QueryDSL 동적 쿼리 구현', 'Redis 기반 캐싱 전략 적용', '데이터 정적·동적 필터링'] }
      ]
    },
    {
      period: '17-20주차',
      navTitle: '인증/보안 실전',
      title: 'Security Architecture & Auth',
      overview: '보안의 핵심인 인증과 인가 프로세스를 Spring Security로 완벽히 제어하고 실무 수준의 토큰 기반 보안을 구축합니다.',
      stacks: ['Spring Security', 'JWT', 'OAuth2', 'Role-Based'],
      modules: [
        { title: '보안 아키텍처 설계', points: ['Security Filter Chain 커스텀', 'Authentication vs Authorization', 'UserDetailsService 구현'] },
        { title: '실전 인증 시스템', points: ['JWT 발급 및 재발급(Refresh)', 'OAuth2 소셜 로그인 통합', 'CORS 및 CSRF 방어 전략'] },
        { title: '권한 및 예외 처리', points: ['Role/Authority 기반 접근 제어', 'Security 전용 예외 핸들링', '로그 추적 및 감사 정책'] }
      ]
    },
    {
      period: '21-24주차',
      navTitle: '배포 & 프로젝트',
      title: 'Cloud Native & Deployment',
      overview: 'Docker와 AWS를 활용하여 실제 상용 환경과 유사한 배포 인프라를 구축하고 최종 프로젝트를 완성합니다.',
      stacks: ['Docker', 'AWS EC2', 'Nginx', 'GitHub Actions'],
      modules: [
        { title: '컨테이너 배포 환경', points: ['Docker Image 최적화 빌드', 'Multi-Stage Build 적용', 'Nginx 리버스 프록시 설정'] },
        { title: '클라우드 인프라', points: ['AWS EC2/RDS 보안 그룹 설정', 'VPC/Subnet 구조 이해', '도메인 및 SSL 인증서 적용'] },
        { title: '최종 프로젝트 완성', points: ['CI/CD 파이프라인 구축', '코드 리뷰 및 협업 프로세스', '성능 테스트 및 문서화'] }
      ]
    }
  ], []);

  const activeStep = detailedCurriculum[activeIndex];
  const totalPoints = activeStep.modules.reduce((count, module) => count + module.points.length, 0);

  return (
    <section className="benefits-section" id="benefits" ref={sectionRef}>
      <div className="benefits-bg-glow" />
      <div className="benefits-bg-lines" />

      <div className="section-inner">
        <header className="benefits-header reveal">
          <div className="sec-label">PRO-CURRICULUM</div>
          <h2 className="sec-title">취업에 필요한 스킬만 담은<br />최적의 커리큘럼</h2>
          <p className="sec-desc">
            실제 채용 공고에서 반복적으로 요구되는 기술을 중심으로,
            단계별 프로젝트를 통해 실무형 개발 역량을 완성합니다.
          </p>
        </header>

        <div className="curriculum-layout">
          <aside className="nav-panel reveal delay-1" aria-label="커리큘럼 로드맵">
            <div className="nav-panel-header">
              <div>
                <h3>Roadmap</h3>
                <p>단계를 선택하면 아래 상세 커리큘럼이 즉시 바뀝니다.</p>
              </div>
              <span className="step-indicator">{activeIndex + 1} / {detailedCurriculum.length}</span>
            </div>
            <nav className="nav-list" aria-label="단계 선택">
              {detailedCurriculum.map((step, index) => (
                <button
                  key={step.period}
                  onClick={() => setActiveIndex(index)}
                  className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                  aria-pressed={activeIndex === index}
                  type="button"
                >
                  <div className="nav-icon-wrapper">{stepIcons[index]}</div>
                  <div className="nav-info">
                    <span className="nav-period">{step.period}</span>
                    <strong className="nav-title">{step.navTitle}</strong>
                  </div>
                  <ChevronRight className="nav-arrow" size={16} />
                </button>
              ))}
            </nav>
          </aside>

          <article className="detail-panel reveal delay-2" aria-live="polite">
            <div className="detail-card">
              <header className="detail-card-header">
                <div className="header-top">
                  <span className="period-badge">{activeStep.period}</span>
                  <div className="stack-badges">
                    {activeStep.stacks.map((stack) => (
                      <span key={stack} className="stack-tag">{stack}</span>
                    ))}
                  </div>
                </div>
                <h3 className="detail-main-title">{activeStep.title}</h3>
                <p className="detail-overview">{activeStep.overview}</p>

                <div className="stats-container">
                  <div className="stat-card">
                    <span className="stat-label">기술 스택</span>
                    <strong className="stat-value">{activeStep.stacks.length}</strong>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">학습 모듈</span>
                    <strong className="stat-value">{activeStep.modules.length}</strong>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">세부 포인트</span>
                    <strong className="stat-value">{totalPoints}</strong>
                  </div>
                </div>
              </header>

              <div className="detail-card-body">
                {activeStep.modules.map((module) => (
                  <section className="module-group" key={module.title}>
                    <h4 className="module-title">
                      <CheckCircle2 size={18} className="check-icon" />
                      {module.title}
                    </h4>
                    <ul className="points-list">
                      {module.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;