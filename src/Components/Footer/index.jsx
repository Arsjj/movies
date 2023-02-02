import "./index.scss";

function Footer() {
  return (
    <div className="main">   
      <ul className="ulContainer">
      <div className="icons">
        <i className="bx bxl-youtube" style={{ color: "#f0e9e9" }}></i>
        <i className="bx bxl-instagram" style={{ color: "#f0e9e9" }}></i>
        <i className="bx bxl-facebook" style={{ color: "#f0e9e9" }}></i>
      </div>
        <li className="footer-link-item">Audo Description</li>
        <li className="footer-link-item">Help center</li>
        <li className="footer-link-item">Gift Cards</li>
        <li className="footer-link-item">Media center</li>
        <li className="footer-link-item">Investor Relations</li>
        <li className="footer-link-item">Jobs</li>
        <li className="footer-link-item">Terms of use</li>
        <li className="footer-link-item">Privacy</li>
        <li className="footer-link-item">Legal Notices</li>
        <li className="footer-link-item">Cookie Preferencies</li>
        <li className="footer-link-item">Corporate Information</li>
        <li className="footer-link-item">Contact Us</li>
      </ul>
    </div>
  );
}

export default Footer;
