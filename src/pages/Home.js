import "../styles/home.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    return (<>
        <Header page="home"/>
        <div className="content">
            <h2>home</h2>
        </div>
        <Footer/>
    </>);
}