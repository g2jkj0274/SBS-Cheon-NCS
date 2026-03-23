import { Code2, Globe, Server, Database, Lock, Rocket } from 'lucide-react';

function CurriculumSection() {
  const curriculumData = [
    {
      title: "Java 프로그래밍 기초 + 객체지향 (OOP)",
      desc: "웹 개발을 위한 언어 기반을 다지고, 상속·다형성 등 객체지향적으로 프로그램을 설계하는 능력을 확보합니다.",
      tags: ["Java", "OOP", "컬렉션"],
      icon: <Code2 size={56} color="#a855f7" strokeWidth={1.5} />,
    },
    {
      title: "웹 기초 (HTTP / 웹 동작 원리)",
      desc: "인터넷 구조와 클라이언트-서버 모델, HTTP 요청/응답 구조 등 웹 개발자가 반드시 알아야 할 동작 구조를 이해합니다.",
      tags: ["HTTP", "JS/DOM", "웹 구조"],
      icon: <Globe size={56} color="#3b82f6" strokeWidth={1.5} />,
    },
    {
      title: "Spring Boot 백엔드 개발 (핵심)",
      desc: "계층형 아키텍처(Controller, Service, Repository)를 이해하고 실제 회사에서 사용하는 REST API 서버를 제작합니다.",
      tags: ["Spring Boot", "REST API", "아키텍처"],
      icon: <Server size={56} color="#22c55e" strokeWidth={1.5} />,
    },
    {
      title: "데이터베이스 설계 + JPA 활용",
      desc: "RDB 개념과 테이블 설계(정규화)를 배우고, JPA와 ORM을 활용하여 실무 수준의 DB 연동 능력을 확보합니다.",
      tags: ["MySQL", "JPA", "ORM"],
      icon: <Database size={56} color="#f59e0b" strokeWidth={1.5} />,
    },
    {
      title: "인증 / 보안 / 실전 기능 구현",
      desc: "Spring Security와 JWT, OAuth2를 활용한 로그인/회원가입 기능부터 게시판 CRUD까지 실제 서비스 기능을 완성합니다.",
      tags: ["Security", "JWT", "OAuth2"],
      icon: <Lock size={56} color="#ef4444" strokeWidth={1.5} />,
    },
    {
      title: "배포 / 협업 / 실무 개발 환경",
      desc: "Git 브랜치 전략과 Docker, AWS(EC2, RDS)를 활용하여 실제 인터넷 환경에 서비스를 배포하는 경험을 합니다.",
      tags: ["AWS", "Docker", "CI/CD"],
      icon: <Rocket size={56} color="#06b6d4" strokeWidth={1.5} />,
    }
  ];

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="section-inner">
        <div className="sec-header">
          <span className="sec-label-accent">커리큘럼</span>
          <h2 className="sec-title">
            기초부터 배포·운영까지 <br />
            탄탄한 기본기를 완성하는 커리큘럼
          </h2>
          <p className="sec-desc">
            잡플래닛, 원티드, 사람인 등 수많은 백엔드 개발자 공고를 분석하고 <br />
            취업 성공을 위한 최적의 커리큘럼을 만들었습니다.
          </p>
        </div>

        <div className="sec-subheader">
          <h3>이런 내용을 배워요</h3>
          <div className="slider-controls">
            <button className="control-btn">{"<"}</button>
            <button className="control-btn">{">"}</button>
          </div>
        </div>

        <div className="curriculum-grid">
          {curriculumData.map((item, index) => (
            <div className="curriculum-card" key={index}>
              <div className="card-image-area">
                 <div className="icon-wrapper">
                    {item.icon}
                 </div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-tags">
                  {item.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurriculumSection;