/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = (props) => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img className='logo' style={{width: "200px"}} src={props.logo} alt="logo" />
        
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
        <Link>
          <FacebookOutlinedIcon/>
          </Link>
        </div>
        <div className="footer-icon-container">
        <Link>
          <InstagramIcon/>
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link>
          <WhatsAppIcon/>
          </Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer