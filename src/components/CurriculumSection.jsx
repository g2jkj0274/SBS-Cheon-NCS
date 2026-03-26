import { useEffect, useMemo, useState } from 'react';
import { Code2, Globe, Server, Database, Lock, Rocket } from 'lucide-react';

function CurriculumSection() {
  const curriculumData = useMemo(() => [
    {
      phase: 'STEP 1',
      title: "프로그래밍 기초 + 객체지향 (OOP)",
      desc: "웹 개발을 위한 언어 기반을 다지고, 상속·다형성 등 객체지향적으로 프로그램을 설계하는 능력을 확보합니다.",
      result: '설계 가능한 코드 작성력 확보',
      tags: ["Java", "OOP", "컬렉션"],
      icon: <Code2 size={56} color="#a855f7" strokeWidth={1.5} />,
      images: [
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      phase: 'STEP 2',
      title: "웹 기초 (HTTP / 웹 동작 원리)",
      desc: "인터넷 구조와 클라이언트-서버 모델, HTTP 요청/응답 구조 등 웹 개발자가 반드시 알아야 할 동작 구조를 이해합니다.",
      result: '요청/응답 흐름 해석 능력 강화',
      tags: ["HTTP", "JS/DOM", "웹 구조"],
      icon: <Globe size={56} color="#3b82f6" strokeWidth={1.5} />,
      images: [
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      phase: 'STEP 3',
      title: "Spring Boot 백엔드 개발 (핵심)",
      desc: "계층형 아키텍처(Controller, Service, Repository)를 이해하고 실제 회사에서 사용하는 REST API 서버를 제작합니다.",
      result: '실무형 API 서버 직접 구축',
      tags: ["Spring Boot", "REST API", "아키텍처"],
      icon: <Server size={56} color="#22c55e" strokeWidth={1.5} />,
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      phase: 'STEP 4',
      title: "데이터베이스 설계 + JPA 활용",
      desc: "RDB 개념과 테이블 설계(정규화)를 배우고, JPA와 ORM을 활용하여 실무 수준의 DB 연동 능력을 확보합니다.",
      result: 'DB 모델링부터 연동까지 완성',
      tags: ["MySQL", "JPA", "ORM"],
      icon: <Database size={56} color="#f59e0b" strokeWidth={1.5} />,
      images: [
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      phase: 'STEP 5',
      title: "인증 / 보안 / 실전 기능 구현",
      desc: "Spring Security와 JWT, OAuth2를 활용한 로그인/회원가입 기능부터 게시판 CRUD까지 실제 서비스 기능을 완성합니다.",
      result: '인증/인가 기반 서비스 구현',
      tags: ["Security", "JWT", "OAuth2"],
      icon: <Lock size={56} color="#ef4444" strokeWidth={1.5} />,
      images: [
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      phase: 'STEP 6',
      title: "배포 / 협업 / 실무 개발 환경",
      desc: "Git 브랜치 전략과 Docker, AWS(EC2, RDS)를 활용하여 실제 인터넷 환경에 서비스를 배포하는 경험을 합니다.",
      result: '배포 가능한 포트폴리오 완성',
      tags: ["AWS", "Docker", "CI/CD"],
      icon: <Rocket size={56} color="#06b6d4" strokeWidth={1.5} />,
      images: [
        "https://images.unsplash.com/photo-1600267165517-707ef4a7f649?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560732488-4b2f2b1b8d77?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ], []);

  const initialIndexes = useMemo(() => curriculumData.map(() => 0), [curriculumData]);
  const [activeSlides, setActiveSlides] = useState(initialIndexes);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const learningFlow = ['입문 기초', '백엔드 핵심', '실전 프로젝트', '배포/협업'];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  const handleSlideChange = (cardIndex, direction) => {
    setActiveSlides((prev) => {
      const next = [...prev];
      const totalImages = curriculumData[cardIndex].images.length;

      if (direction === 'next') {
        next[cardIndex] = (next[cardIndex] + 1) % totalImages;
      } else {
        next[cardIndex] = (next[cardIndex] - 1 + totalImages) % totalImages;
      }

      return next;
    });
  };

  useEffect(() => {
    if (!isAutoPlay || prefersReducedMotion) {
      return undefined;
    }

    const autoSlideTimer = setInterval(() => {
      setActiveSlides((prev) =>
        prev.map((slideIndex, cardIndex) => {
          if (hoveredCardIndex === cardIndex) {
            return slideIndex;
          }

          const totalImages = curriculumData[cardIndex].images.length;
          return (slideIndex + 1) % totalImages;
        })
      );
    }, 5000);

    return () => clearInterval(autoSlideTimer);
  }, [curriculumData, hoveredCardIndex, isAutoPlay, prefersReducedMotion]);

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="curriculum-bg-orb orb-left" aria-hidden="true" />
      <div className="curriculum-bg-orb orb-right" aria-hidden="true" />

      <div className="section-inner">
        <div className="sec-header">
          <span className="sec-label-accent">커리큘럼</span>
          <h2 className="sec-title">
            기초부터 배포·운영까지 <br />
            탄탄한 기본기를 완성하는 커리큘럼
          </h2>
          <p className="sec-desc">
            기초 문법부터 백엔드 개발과 배포까지 <br />
            실무 흐름에 맞춰 차근차근 성장합니다.
          </p>

          <div className="learning-flow" role="list" aria-label="학습 흐름">
            {learningFlow.map((flow) => (
              <span key={flow} role="listitem" className="flow-chip">{flow}</span>
            ))}
          </div>
        </div>

        <div className="sec-subheader">
          <h3>
            이런 내용을 배워요
            <span className="sub-title-caption">6단계 실무 중심 로드맵</span>
          </h3>
          <div className="slider-controls curriculum-interaction">
            <button
              type="button"
              className="control-btn"
              onClick={() => setIsAutoPlay((prev) => !prev)}
              aria-label={isAutoPlay ? '자동 넘김 끄기' : '자동 넘김 켜기'}
            >
              {isAutoPlay ? '자동재생 ON' : '자동재생 OFF'}
            </button>
          </div>
        </div>

        <div className="curriculum-grid">
          {curriculumData.map((item, index) => (
            <div
              className="curriculum-card"
              key={index}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <div className="card-image-area">
                {item.images.map((imageSrc, imageIndex) => (
                  <img
                    key={imageSrc}
                    className={`card-slide-image ${activeSlides[index] === imageIndex ? 'active' : ''}`}
                    src={imageSrc}
                    alt={`${item.title} 예시 이미지 ${imageIndex + 1}`}
                    loading={index === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 && imageIndex === 0 ? 'high' : 'auto'}
                  />
                ))}

                <div className="card-image-overlay" />

                <div className="icon-wrapper">
                  {item.icon}
                </div>

                <div className="slide-indicators">
                  <button
                    type="button"
                    className="slide-nav-btn"
                    onClick={() => handleSlideChange(index, 'prev')}
                    aria-label={`${item.title} 이전 이미지`}
                  >
                    ‹
                  </button>

                  {item.images.map((_, imageIndex) => (
                    <button
                      key={`${item.title}-${imageIndex}`}
                      type="button"
                      className={`slide-dot ${activeSlides[index] === imageIndex ? 'active' : ''}`}
                      onClick={() => {
                        setActiveSlides((prev) => {
                          const next = [...prev];
                          next[index] = imageIndex;
                          return next;
                        });
                      }}
                      aria-label={`${item.title} 이미지 ${imageIndex + 1} 보기`}
                    />
                  ))}

                  <button
                    type="button"
                    className="slide-nav-btn"
                    onClick={() => handleSlideChange(index, 'next')}
                    aria-label={`${item.title} 다음 이미지`}
                  >
                    ›
                  </button>
                </div>

                <span className="slide-counter" aria-live="polite">
                  {activeSlides[index] + 1}/{item.images.length}
                </span>
              </div>
              <div className="card-content">
                <div className="card-meta-row">
                  <span className="step-badge">{item.phase}</span>
                  <span className="result-label">{item.result}</span>
                </div>
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