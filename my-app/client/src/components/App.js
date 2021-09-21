import React from "react"
import Example from "./Example"
import Header from "./Header";
import NechromaticsList from "./NechromaticsList";
import Searchbar from "./Searchbar";

export default function App() {
    return (
        <div>
            <Header />
            <br/>
            <Searchbar />
            <br/>
            <NechromaticsList />
            <br/>
            <Example />
        </div>
    )
}