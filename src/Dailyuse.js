import React from "react"
import react from "./react.png"
import django from "./django-logo-positive.png"
import css from "./css.svg"
import html from "./html.svg"
import vscode from "./icons8-visual-studio-30.png"
import python from "./python.svg"
import windows from "./windows.svg"
const Dailyuse=()=>{
  return (
    <div className="Dailyuse">
        My Daily Use
        <nav className="image">
           <img src={react} alt="react-img"/>
           <img src={django} alt="django-img"/>
           <img src={css} alt="css-img"/>
           <img src={html} alt="html-img"/>
           <img src={vscode} alt="vscode-img"/>
           <img src={python} alt="python-img"/>
           <img src={windows} alt="windows-img"/>
        </nav>
        <br />
        <br />
        <div className="lineview"></div>
        <br />
    </div>
  )
}

export default Dailyuse