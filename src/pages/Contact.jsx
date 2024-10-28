import "../styles/contact.scss";
import "../styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState('');
  const [sending, setSending] = useState(false);

  const validateInputs = (dict) => {
    let emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!dict.name || !dict.message || !dict.email) {
      return "ERR_INCOMPLETE";
        // return "please check that everything was filled out";
    } else if (!emailTest.test(dict.email)) {
      return "ERR_EMAIL";
      // return "please check that you entered a valid email";
    }
    return ""; // no error msg
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents default upon submitting
    setSending(true);
    const formData = new FormData(e.target);

    var dict = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    }
    console.log(dict);
    var errorMsg = validateInputs(dict);
    if (errorMsg === "ERR_INCOMPLETE") {
      console.log("Error - Incomplete Form");
      setSuccess("Failed to send message :( Please check that everything was filled out");
      setSending(false);
      return;
    } else if (errorMsg === "ERR_EMAIL") {
      console.log("Error - Invalid Email");
      setSuccess("Failed to send message :( Please check that you entered a valid email");
      setSending(false);
      return;
    }

    formData.append("access_key", "4007ecf0-c98d-4e7e-92b3-61b11426be98");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setSuccess("Message recieved! Nice to meet you :>");
      e.target.reset();
      setSending(false);
    } else {
      console.log("Error: " + data);
      setSuccess("Failed to send message :( Please contact me through links in the footer")
    }
    
  }

  return (
    <>
      <Header page="contact" />
      <div className="Contact">
        <div className="content">
          <h1>Let's Talk :)</h1>
          <div className="row">
            <div className="contact-form">
              <form className="form" id="form" onSubmit={handleSubmit}>
                <p>Feel free to reach out about my work, possible collaborations, or just life in general! </p>
                <input type="hidden" name="subject" value="Hebe3834.github.io Contact Submission !!" />
                <input 
                className="name" 
                name="name"
                id="name" 
                placeholder="name"
                // pattern="[A-Za-z]"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                />
                <input 
                className="email" 
                name="email"
                id="email" 
                placeholder="email"
                />
                <textarea 
                className="msg" 
                name="message"
                id="msg" 
                placeholder="message"
                />
                <div className="submit-container">
                  <p className="success-msg" id="successMsg">{success}</p>
                  <input 
                    type="submit" 
                    className="submit-btn" 
                    id="submitBtn"
                    value={sending ? "Sending..." : "Send Message!"}
                  />  
                </div>
                
              </form>

            </div>
            {/* <div className="graphic">..</div>             */}
          </div>

        </div>
      </div>
      <Footer page="contact" />
    </>
  );
};

export default Contact;
