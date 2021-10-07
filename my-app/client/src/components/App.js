import React, {lazy, Suspense} from "react"
import Intro from "./Intro";
import Footer from "./Footer";
import Navbar from "./Navbar";

const NechromaticsList = lazy(() => import('./NechromaticsList'))
const About = lazy(() => import('./About'))

export default function App() {
    return (
            <div>
                <Navbar />
                <Intro />
                <Suspense fallback={<h1 className={"loader"}>Loading....</h1>}>
                    <About />
                </Suspense>
                <Suspense fallback={<h1 className={"loader"}>Loading....</h1>}>
                    <NechromaticsList />
                </Suspense>
                <Footer />
            </div>
    )
}