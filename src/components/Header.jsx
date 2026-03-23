function Header() {

  return (
    <nav className="nav">
      <div className="nav-logo">
        <span>SBS</span> 아카데미컴퓨터아트학원 천안
      </div>

      <ul className="nav-links">
        <li><a href="#info">과정 정보</a></li>
        <li><a href="#curriculum">커리큘럼</a></li>
        <li><a href="#schedule">일정</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <a
        className="nav-cta"
        href="https://www.work24.go.kr/hr/a/a/3100/selectTracseDetl.do?tracseId=AIG20250000526923&tracseTme=1&cstmConsTme=&crseTracseSe=C0061&trainstCstmrId=500042646362&tracseReqstsCd=&focusId="
        target="_blank"
        rel="noopener noreferrer"
      >
        수강 신청
      </a>
    </nav>
  )
}

export default Header