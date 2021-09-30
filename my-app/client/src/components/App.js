import React from "react"
import Example from "./Example"
import Header from "./Header";
import NechromaticsList from "./NechromaticsList";
//import Searchbar from "./Searchbar";
import Intro from "./Intro";
import About from "./About";

export default function App() {
    return (
        <div>
            <Header />
            <Intro />
            <About />
            <NechromaticsList />
            <Example />
        </div>
    )
}