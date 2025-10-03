import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsEmojiSmileFill } from "react-icons/bs";
import logoblack from '../assets/Maini_Logo_Black.png';
import headcontact from '../assets/headcontact.png';
import '../design/Home.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); 

    setTimeout(() => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  }, 500);
  };
  return (
    <div className="container py-5 mt-5">
      <h3 className="mt-5 text-center">
        <img src={headcontact} className="img-fluid" style={{height:'120px',width:'800px'}}/>
      </h3>
      <div className="row p-3">
        <div className="col-md-6 col-12 border rounded">
          <div className="d-flex flex-column gap-4">
            <div>
              <img src={logoblack} className="rounded img-fluid bg-white mt-3" style={{height: '50px'}} alt="logo" />
            </div>
            <div className="d-flex align-items-start gap-3">
              <FaLocationDot size={40} className="text-primary" />
              <p className="custom-size mb-0">
                Maini Tower, Survey No.61, Near Gujarwadi Phata, Pune Satara
                Road, Katraj Pune 411046
              </p>
            </div>
            <div className="d-flex align-items-start gap-3">
              <IoCall size={30} className="text-success" />
              <p className="custom-size takeleft mb-0">020 - 26959027 / 28 , 7709002474 / 75</p>
            </div>
            <div className="d-flex align-items-start gap-3">
              <MdEmail size={30} className="text-danger" />
              <p className="custom-size mb-0">mainiautoagency@gmail.com</p>
            </div>
            <div className="mt-3">
              <p className="fw-semibold" style={{textAlign:'justify'}}>
                We invite you to connect with us, whether for a detailed query
                or a simple chat about how we can serve your automotive needs.
                Because at Maini Group, every interaction matters.
              </p>
              <div className="d-flex align-items-center justify-content-center text-primary fw-bold gap-3 py-4">
                <BsEmojiSmileFill size={36} className="text-warning h-2" />
                <span>Feel Free to Ask!!!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 border rounded py-3">
          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
          <form
            className="d-flex flex-column gap-3"
            action="https://formsubmit.co/ramvish9923@gmail.com"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="form-label mt-3">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="form-label">Contact</label>
              <input
                name="contact"
                type="tel"
                className="form-control"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="form-label">Query / Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Send Message
            </button>
          </form>
          {submitted && (
            <div style={{
              position: 'fixed',
              bottom: '40px',
              right: '20px',
              backgroundColor: '#4BB543',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}>
              ✅ Message sent successfully!
            </div>
          )}
        </div>
      </div>

      <div className="col-md-12 col-12 mt-5">
        <iframe
          className="w-100 border rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60548.061657678496!2d73.8375173534193!3d18.47215709846363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0114518ccdd%3A0x146a886de0042252!2sMaini%20Auto%20Agencies!5e0!3m2!1sen!2sin!4v1698388080041!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 1 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Maini Auto Agencies Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
