import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import CurriculumSection from './components/CurriculumSection'
import ScheduleSection from './components/ScheduleSection'
import BenefitsSection from './components/BenefitsSection'
import TargetSection from './components/TargetSection'
import HiringSection from './components/HiringSection'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import WhySpringSection from './components/WhySpringSection'

function App() {
  return (
    <>
      <Header />

      <Hero />                  {/*Hero Section*/}
      <WhySpringSection />      {/*문제 제기, 필요성 설득*/}
                                {/*해결책 (교육 방향성)*/}
      <CurriculumSection />     {/*커리큘럼 소개*/}
                                {/*학습 방식 (운영) */}         
      <BenefitsSection />
      <TargetSection />
      <HiringSection />

      <InfoSection />
      
      <ScheduleSection />
      <FaqSection />
      <CtaSection />

      <Footer />
    </>
  )
}

export default App