import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Nav from '../component/Nav';
import '../pages-css/SearchPw.css';

const SearchPw = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Nav />
      <div className='SearchPw'>
        <div className='title'>비밀번호 찾기</div>
        <div className='box'>
          <div className='smalltitle'>아이디 입력</div>
          <p>비밀번호를 찾고자 하는 아이디를 입력해주세요.</p>
          <hr />
          <input type='text' name='id' placeholder='아이디' />
          <div className='coment'>아이디를 모르시나요? <span onClick={() => {navigate('/id')}} style={{cursor: 'pointer'}}>아이디찾기</span></div>
          <button>다음</button>
        </div>

      </div>
      <Footer />
    </>

  );
}

export default SearchPw;