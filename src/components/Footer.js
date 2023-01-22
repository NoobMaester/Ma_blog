import { useContext } from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Footer = () => {
  const {currentUser, logout} = useContext(AuthContext)
  return (
    <div className="main_footer">
      <div className="footer_top">
        <h1>MA COLOMBE</h1>
        <div className="footer_right">
          <div>
            <h3>Help</h3>
            <p>FAQ</p>
            <p>Return Policy</p>
            <p>Accessibility</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>Location</p>
            <p>Email</p>
            <p>Telephone</p>
          {currentUser ? (<Link to= "/"> <button className="btn" onClick={logout}>Logout</button></Link>) : (
           <Link to= "/login"> <button className="btn">Admin</button></Link>
          )}
         
          
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>Copyright &copy; 2022 Ma COLOMBE, Inc. All Right Reserved</p>

        <div className="socials">
          <FaTwitterSquare
            size="40px"
            style={{ padding: "1%" }}
            onClick={() => window.open("https://www.google.rw", "_blank")}
          />

          <FaFacebookSquare
            size="40px"
            style={{ padding: "1%" }}
            onClick={() => window.open("https://www.google.rw", "_blank")}
          />

          <FaInstagramSquare
            size="40px"
            style={{ padding: "1%" }}
            onClick={() => window.open("https://www.google.rw", "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
