import "./index.scss";

// function ContactUs() {
//   return (
//     <div className='tableContainer'>
//       <div className="table">
//         <table>
//           <tr>
//             <th className=''>Questions? Contact us</th>
//           </tr>
//           <div id="td2">
//             <tr>
//               <td>FAQ</td>
//               <td>Help Center</td>
//               <td>Account</td>
//               <td>Media Center</td>
//             </tr>
//             <tr>
//               <td>Investor Relations</td>
//               <td>Jobs</td>
//               <td>Ways to Watch</td>
//               <td>Terms of Use</td>
//             </tr>
//             <tr>
//               <td>Privacy</td>
//               <td>Cookie Preferencies</td>
//               <td>Corporate Information</td>
//               <td>Contact Us</td>
//             </tr>
//             <tr>
//               <td>Speed Test</td>
//               <td>Legal Notices</td>
//               <td>Netflix Originals</td>
//             </tr>
//           </div>
//         </table>
//       </div>
//     </div>
//   );
// }

// import React from 'react'

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
