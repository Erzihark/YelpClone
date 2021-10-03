import React from "react"
import Header from "./Header";
//import Searchbar from "./Searchbar";
import Intro from "./Intro";
import About from "./About";
import NechromaticsList from "./NechromaticsList";
import Footer from "./Footer";

export default function App() {
    return (
        <div>
            <Header />
            <Intro />
            <About />
            <NechromaticsList />
            <Footer />
        </div>
    )
}