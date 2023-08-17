import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Nav from '../component/Nav';
import '../pages-css/SearchId.css';
import Footer from '../component/Footer';

const SearchId = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Nav />
      <div className='SearchId'>
        <div className='title'>아이디찾기</div>
        <div className='box'>
          <div className='smalltitle'>회원 아이디 찾기</div>
          <div className='search'>
            <div>
              <input type='text' name='name' placeholder='이름' />
              <input type='email' name='mail' placeholder='가입메일주소' />
            </div>
            <div>
              <button className='id-btn'>아이디찾기</button>
            </div>
          </div>
          <hr />
          <div className='btn'>
            <button onClick={() => {navigate('/pw')}}>비밀번호 찾기</button>
            <button onClick={() => { navigate('/login') }}>로그인하기</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchId;