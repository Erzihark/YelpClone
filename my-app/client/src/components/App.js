import React, {lazy, Suspense} from "react"
import Intro from "./Intro";
import Navbar from "./Navbar";

const About = lazy(() => import('./About'))
const NechromaticsList = lazy(() => import('./NechromaticsList'))
const Footer = lazy(() => import('./Footer'))

export default function App() {
    return (
            <div>
                <Navbar />
                <Intro />
                <Suspense fallback={<h1 className={"loader"}>Loading....</h1>}>
                    <About />
                    <Suspense fallback={<h1 className={"loader"}>Loading....</h1>}>
                        <NechromaticsList />
                        <Suspense fallback={<h1 className={"loader"}>Loading....</h1>}>
                            <Footer />
                        </Suspense>
                    </Suspense>
                </Suspense>
            </div>
    )
}