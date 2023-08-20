import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import '../pages-css/SignUp.css';
import Nav from '../component/Nav';
import Footer from '../component/Footer';


const SignUp = () => {

  const navigate = useNavigate();

  return (

    <>
      <Header />
      <Nav />
      <div className='SignUp'>
        <div>
          <div className='bigtitle'>회원가입</div>
          <hr />
        </div>

        <form>

          <div className='smalltitle'>약관동의</div>
          <hr />
          <div className='clause'>
            <div>
              <input type='checkbox' id='chk1' className='chkbox' />
              <label htmlFor='chk1'><span>(필수)</span> 이용약관</label>
              <div className='box'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante ligula, pharetra id scelerisque et, pellentesque at tellus. Mauris volutpat ante sit amet elit rhoncus rutrum. Donec auctor eleifend nisi eu euismod. Praesent et nulla volutpat odio malesuada dictum eu ac orci. Nunc id purus eget ipsum tincidunt placerat. Ut commodo lectus non est commodo tristique. Phasellus mollis, metus ut volutpat sodales, nulla ex placerat erat, et gravida dolor felis a dolor. Ut nisl nibh, efficitur sit amet porta in, blandit nec justo. Aliquam maximus ornare arcu, non gravida erat. Nullam sem mi, sagittis at posuere et, consequat in lacus. Suspendisse facilisis accumsan imperdiet.
                Etiam vel elit eu metus tempus malesuada. Integer et placerat turpis. Phasellus ac cursus eros, id porttitor metus. Integer pretium porttitor nisi, sit amet rhoncus risus dapibus eu. Nulla cursus, libero a sodales placerat, nibh ipsum dignissim orci, at blandit orci arcu eget nibh. Vestibulum suscipit elementum commodo. Maecenas non quam feugiat, pretium tellus in, tristique urna. Aenean mattis ex et orci egestas, a viverra enim vulputate.
              </div>
            </div>
            <div>
              <input type='checkbox' id='chk2' className='chkbox' />
              <label htmlFor='chk2'><span>(필수)</span> 개인정보수집 및 이용</label>
              <div className='box'>
                Vestibulum porta at felis ac interdum. Nullam mollis ipsum sit amet rhoncus viverra. Etiam mattis turpis magna, non feugiat ex fermentum et. Aenean pretium quam quis dolor posuere aliquam. Fusce mollis ligula ac enim malesuada egestas. Ut ante turpis, efficitur eget rhoncus id, euismod ut nibh. Suspendisse egestas pulvinar dictum. Morbi id nisl vitae turpis porttitor luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec sollicitudin nunc. Integer mattis convallis dui, vel consequat turpis. Nullam a sodales erat, vitae ornare nibh. Etiam feugiat lorem eget erat efficitur, vitae egestas purus eleifend. Cras sem lacus, dapibus non interdum eget, sollicitudin non massa. Curabitur tempor tempor suscipit. Aliquam faucibus fermentum est vitae venenatis.
                Ut et elementum nisi. Aliquam bibendum mi elit, non suscipit nisl pharetra ac. Praesent maximus sollicitudin mollis. Quisque id urna quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, quam sit amet hendrerit varius, est neque feugiat ligula, at dignissim libero augue at magna. Vestibulum id commodo lectus. Sed sagittis tempus fermentum. Nulla laoreet quis risus vel maximus. In sapien nulla, sagittis in pharetra aliquam, mollis id urna.
              </div>
            </div>
          </div>

          <div className='smalltitle'>기본정보</div>
          <span className='coment'>*표시는 반드시 입력하셔야 하는 항목입니다.</span>
          <hr />
          <table>
            <tr>
              <td>
                <span>*</span>아이디
              </td>
              <td>
                <input type='text' name='id' />
              </td>
            </tr>
            <tr>
              <td>
                <span>*</span>비밀번호
              </td>
              <td>
                <input type='password' name='pw' id='pw' />
              </td>
            </tr>
            <tr>
              <td>
                <span>*</span>비밀번호 확인
              </td>
              <td>
                <input type='password' name='pwcheck' id='pwcheck' />
              </td>
            </tr>
            <tr>
              <td>
                <div><span>*</span>이름</div>
              </td>
              <td>
                <input type='text' />
              </td>
            </tr>
            <tr>
              <td>
                이메일
              </td>
              <td>
                <input type='text' />
                <select name='email'>
                  <option value={''}>직접입력</option>
                  <option value={'네이버'}>@naver.com</option>
                  <option value={'다음'}>@daum.net</option>
                  <option value={'구글'}>@google.com</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <span>*</span>휴대폰번호
              </td>
              <td>
                <input type='tel' placeholder='-없이 입력하세요' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type='checkbox' className='chkbox' />
                <label>정보/ 이벤트 SNS에 동의합니다.</label>
              </td>
            </tr>
            <tr>
              <td>
                전화번호
              </td>
              <td>
                <input type='tel' placeholder='-없이 입력하세요' />
              </td>
            </tr>
            <tr>
              <td>
                주소
              </td>
              <td>
                <input type='text' />
                <button>우편번호 검색</button>

              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type='text' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type='text' />
              </td>
            </tr>
          </table>

          <div className='smalltitle'>부가정보</div>
          <hr />
          <table>
            <tr>
              <td>생일</td>
              <td>
                <input type='number' placeholder='예시) 19990422' />
              </td>
            </tr>
            <tr>
              <td>추천인아이디</td>
              <td>
                <input type='text' />
              </td>
            </tr>
          </table>

          <div className='btn'>
            <button onClick={() => {
              navigate('/');
            }} className='signup-btn'>취소</button>
            <button onClick={() => {
              window.confirm('회원가입완료');
              navigate('/login');
            }} className='signup-btn'>회원가입</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;