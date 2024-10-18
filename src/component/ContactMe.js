import React, { useState } from 'react';


const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    country: 'australia',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div className="mp-b5">
        <div className="mp-b5-heading">
          <div className="container">
            <h4>CONTACT</h4>
            <h2>Contact With Me</h2>
          </div>
        </div>
        <div className="mp-b5-form">
          <div className="mp-b5-left">
            <div className="mp-b5-left-img">
              <img src="assets/images/contact1.png" alt="Contact" />
            </div>
            <div className="mp-b5-left-name">
              <h4>Dhruvan Gandhi</h4>
              <p>I am available for freelance work. Connect with me via Call or E-mail.</p>
              <p>PHONE : <span>+91-9601409665</span></p>
              <p>EMAIL : <span>dhruvangandhi687@gmail.com</span></p>
            </div>
          </div>
          <div className="mp-b5-right">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                value={formData.firstname}
                onChange={handleChange}
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                value={formData.lastname}
                onChange={handleChange}
              />

              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: '200px' }}
                value={formData.subject}
                onChange={handleChange}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;