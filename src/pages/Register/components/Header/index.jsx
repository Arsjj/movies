import { useNavigate } from 'react-router-dom';
import './index.scss'

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="right">
          <select type="english" name="English" id="English">
            <option value="English">English</option>
            <option value="Rus">Russian</option>
          </select>
          <button onClick={()=> navigate('/sign-in')}>Sign in</button>
      </div>
    </div>
  );
}

export default Header;
