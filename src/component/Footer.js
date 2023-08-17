import '../component-css/Footer.css';

const Footer = () => {
  return(
    <footer>
    <div className='split'>
      <div className='bold'>CS</div>
      <div>
        <div>1999-0422</div>
        <div>운영: 10:00 ~ 17:00</div>
        <div>점심: 12;00 ~ 13:00</div>
        <div>휴무: 주말 및 공휴일</div>

      </div>
    </div>
    <div className='split'>
      <div className='bold'>BANK INFO</div>
      <div>
        <div>신한은행: 110-282-156239</div>
        <div>예금주: 박윤희</div>
      </div>
    </div>
    <div className='split'>
      <div className='bold'>주식회사 피와이에이치</div>
      <div>상호: 주식회사 피와이에이치</div>
      <span>&nbsp;&nbsp;</span>
      <div>대표: 박윤희</div>
      <span>&nbsp;&nbsp;</span>
      <div>사업자등록번호: 123-45-67890</div>
      <span>&nbsp;&nbsp;</span>
      <div>대표번호: 010-9665-0442</div>
      <span>&nbsp;&nbsp;</span>
      <div>이메일: newyoonhee1@naver.com</div>
    </div>
  </footer>

  );
}

export default Footer;