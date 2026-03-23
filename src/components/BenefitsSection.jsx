import { Code2, Globe, Server, Database, Lock, Rocket } from 'lucide-react';

function BenefitsSection() {
  const curriculumSteps = [
    {
      icon: <Code2 size={28} color="#a855f7" />,
      title: "Java 프로그래밍 기초",
      desc: "웹 개발을 위한 언어 기반을 다지고 객체지향 설계 사고 능력을 확보합니다."
    },
    {
      icon: <Globe size={28} color="#3b82f6" />,
      title: "웹 동작 원리 이해",
      desc: "HTTP 요청/응답 구조와 클라이언트-서버 모델 등 웹의 기본 구조를 이해합니다."
    },
    {
      icon: <Server size={28} color="#22c55e" />,
      title: "Spring Boot 백엔드",
      desc: "Controller, Service, Repository 구조를 이해하고 REST API 서버를 제작합니다."
    },
    {
      icon: <Database size={28} color="#f59e0b" />,
      title: "DB 설계 및 JPA 활용",
      desc: "RDB 설계(정규화)와 JPA를 활용한 실무 수준의 데이터 활용 능력을 확보합니다."
    },
    {
      icon: <Lock size={28} color="#ef4444" />,
      title: "인증 및 보안 구현",
      desc: "Spring Security와 JWT, OAuth2를 활용한 서비스 핵심 기능을 완성합니다."
    },
    {
      icon: <Rocket size={28} color="#06b6d4" />,
      title: "배포 및 실무 환경",
      desc: "Docker와 AWS를 활용하여 실제 인터넷 환경에 서비스를 배포하고 운영합니다."
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="section-inner">
        <div className="sec-label">과정 핵심 커리큘럼</div>
        <h2 className="sec-title">기초부터 배포까지, 6단계 학습 플랜</h2>
        <p className="sec-desc">
          단순 문법 학습이 아니라 실무 프로젝트 완성을 목표로, 취업과 포트폴리오에
          연결될 수 있는 흐름으로 구성했습니다.
        </p>

        <div className="benefits-grid">
          {curriculumSteps.map((step, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;