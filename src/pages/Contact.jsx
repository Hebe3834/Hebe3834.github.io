import "../styles/contact.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

const Contact = () => {
  return (
    <>
      <Header page="contact" />
      <Background />
      <div className="Contact">
        <div className="content">
          <h2>Coming soon :&#41;</h2>
        </div>
      </div>
      <Footer page="contact" />
    </>
  );
};

export default Contact;
