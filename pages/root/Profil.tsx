import React from "react";
import Profile from "./../../styles/profil.module.scss"
import Headers from "../Shared/Headers"
import Footer from "../Shared/Footer"

function App() {
    return (
    <>
        <Headers/>
            <div className={Profile.container}>
                    containt
            </div>
        <Footer/>
    </>
    )
}
export default App;