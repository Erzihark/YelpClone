import React from "react"
import Example from "./Example"
import Header from "./Header";
import NechromaticsList from "./NechromaticsList";

export default function App() {
    return (
        <div>
            <Header />
            <br/>
            <NechromaticsList />
            <br/>
            <Example />
        </div>
    )
}