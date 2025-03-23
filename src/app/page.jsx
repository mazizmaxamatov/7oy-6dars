import Link from "next/link";
import Nav from "./dashboard/nav.jsx/page";
import Header from "./dashboard/header.jsx/page";
import Main from "./dashboard/main.jsx/page";
import Footer from "./dashboard/footer.jsx/page";



export default function Home() {
  return (
    <div className="">
     <Nav/>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}
