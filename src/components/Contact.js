// Contact.js

import React from "react";
import './css/Contact.css';

function Contact() {
  return (
    <div>
      <h2 className="title_contact">Contact Us</h2>
      <p className="text_contact">If you have any questions or request about our project, please feel free to contact any of our team members :</p>

      <div className="team-member_contact">
        <h3 className="team-member_name">Bounouar Selyan</h3>
        <p className="team-member_email">Email: selyan.bounouar1@gmail.com </p>
      </div>

      <div className="team-member_contact">
        <h3 className="team-member_name">Kim Jiwon</h3>
        <p className="team-member_email">Email: jiwon.kim0210@gmail.com </p>
      </div>

      <div className="team-member_contact">
        <h3 className="team-member_name">Kim Sangwon</h3>
        <p className="team-member_email">Email: swkim216@gmail.ac.kr</p>
      </div>
    </div>
  );
}

export default Contact;