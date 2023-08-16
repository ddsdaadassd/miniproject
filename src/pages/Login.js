import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Nav from '../component/Nav';
import '../pages-css/Login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Nav />
      <div className='Login'>
        <div className='title'>로그인</div>
        <form>
          <div className='member-login'>회원 로그인</div>
          <div className='log'>
            <div className='idpw'>
              <input type='text' name='id' />
              <br />
              <input type='password' name='pw' />
            </div>
            <button type='submit' className='loginBtn' value={'login'}>로그인</button>
          </div>
          <br />
          <div>
            <input type='checkbox' name='chk' id='idsave'/>
            <label htmlFor='idsave'>아이디저장</label>
          </div>
        </form>
        <hr />
        <div className='btn'>
          <button onClick={() => {navigate('/signup')}}>회원가입</button>
          <button>아이디찾기</button>
          <button>비밀번호찾기</button>
        </div>
      </div>
    </>
  );
}

export default Login;