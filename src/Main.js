import React from "react"
import logo from "./github-mark-white.png"
import linkedin from "./icons8-linkedin-48.png"
import email from "./icons8-email-48.png"
import resume from "./Yuvaraj-Resume.pdf"
const Main=()=>{
  return (
    <main className="main-page">
       <main className="main-page1">
            <h1>Yuvaraj R</h1>
            <p>Front End Developer</p>
            <a href={resume}>Resume</a>
       </main>
            <main className="logo">
              <nav className="github">
                <a href="https://github.com/yuva-raj2"><img src={logo} alt="github"/></a>
              </nav>
              <nav className="linkedin" id="logo">
                <a href="https://www.linkedin.com/in/yuvaraj-r-497908214/"><img src={linkedin} alt="linkedin"/></a>
              </nav>
              <nav className="email" id="logo">
                <a href="mailto:yuvaarun09964@gmail.com"><img src={email} alt="email-icon"/></a>
              </nav>
            </main>
    </main>
  )
}

export default Main