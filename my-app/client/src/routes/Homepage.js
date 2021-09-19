import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "../components/App"
import {NechromaticsContextProvider} from "../context/NechromaticsContext";

export default function Homepage() {
    return (
        <NechromaticsContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={App}/>
                    </Switch>
                </Router>
            </div>
        </NechromaticsContextProvider>

    )
}