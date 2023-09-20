import React from "react"
import { useState } from "react";
const About=()=>{
  const [name,setname]=useState("Yuvi");
  const shortname=()=>{
    const names=["Yuvi","Yuva","Raj","Raja"];
    const int=Math.floor(Math.random()*4);
    setname(names[int]);
  }
  return (
    <footer className="About" id="About">
        <h1>About Me</h1>
        <p>Hello I'm Yuvaraj.I'm call by the short name called {name}.I'm pursuing my studies in University College of Engineering,Anna University,BIT Campus,Trichy. I'm a 4th year <abbr title="Bachelor of Engineering" style={{textDecoration:"none"}}>B.E </abbr><abbr title="Computer Science and Engineering" style={{textDecoration:"None"}}>CSE</abbr> student</p>
        <button onClick={shortname}>Keep the short name as you wish</button>
    </footer>
  )
}

export default About