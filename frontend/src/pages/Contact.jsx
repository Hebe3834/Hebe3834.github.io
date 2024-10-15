import "../styles/contact.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const validateInputs = (dict) => {
    let emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!dict.name || !dict.message || !dict.email) {
        return "please check that everything was filled out";
    } else if (!emailTest.test(dict.email)) {
      console.log(dict.email);
      return "please check that you entered a valid email";
    }
    return ""; // no error msg
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents default upon submitting

    var dict = {
      name: name,
      email: email,
      message: msg
    }
    console.log(dict);
    var errorMsg = validateInputs(dict);
    if (errorMsg) {
        console.log("Error - Failed to Add Form");
        document.getElementById("successMsg").innerText = "Failed to send message :( " + errorMsg;
        document.getElementById("successMsg").style.color = "var(--pink)";
        return;
    } else {
        console.log("Form Successfully Added (fake)");
        document.getElementById("successMsg").innerText = "Message recieved! Nice to meet you :>"
        document.getElementById("successMsg").style.color = "var(--green)";    }
    
  }

  return (
    <>
      <Header page="contact" />
      <div className="Contact">
        <div className="content">
          <h1>Let's Talk :)</h1>
          <div className="row">
            <div className="contact-form">
              <form className="form" id="form">
                <input 
                className="name" 
                id="name" 
                placeholder="name"
                pattern="[A-Za-z]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                className="email" 
                id="email" 
                placeholder="email"
                pattern="[A-Za-z]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea 
                className="msg" 
                id="msg" 
                placeholder="message"
                pattern="[A-Za-z]"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                />
                <div className="submit-container">
                  <p className="success-msg" id="successMsg"></p>
                  <input 
                    type="submit" 
                    className="submit-btn" 
                    onClick={handleSubmit}
                    id="submitBtn"
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
