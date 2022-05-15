import About from "./About"
import Profile from "./Profile"
import Interest from "./Interest"
import Footer from "./Footer"


export default function BusinessCard() {
    return (
        <div className="container" >
            <Profile />
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}