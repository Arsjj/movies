import "./index.scss";

function ContactUs() {
  return (
    <div className="table">
      <div>
        <p>Questions? Contact us</p>

        <ul>
          <li className="footer-link-item">FAQ</li>
          <li className="footer-link-item">Help center</li>
          <li className="footer-link-item">Account</li>
          <li className="footer-link-item">Media center</li>
          <li className="footer-link-item">Investor Relations</li>
          <li className="footer-link-item">Jobs</li>
          <li className="footer-link-item">Ways to watch</li>
          <li className="footer-link-item">Terms of use</li>
          <li className="footer-link-item">Privacy</li>
          <li className="footer-link-item">Cookie Preferencies</li>
          <li className="footer-link-item">Corporate Information</li>
          <li className="footer-link-item">Contact Us</li>
          <li className="footer-link-item">Speed Test</li>
          <li className="footer-link-item">Legal Notices</li>
          <li className="footer-link-item">Netflix Originals</li>
        </ul>
        <div className="select">
          <select type="english" name="English" id="English">
            <option value="English">English</option>
            <option value="Rus">Russian</option>
          </select>
        </div>
        <p>Netflix Armenia</p>
      </div>
    </div>
  );
}

// export default index

export default ContactUs;
