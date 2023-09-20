import React from 'react'
const HeaderNav=()=> {
  return (
    <main className='mainpage'>
    <nav className='Nav'>
        <a href='#About'><abbr title='About Me' style={{textDecoration:"none"}}>About me</abbr></a>
        <a href="#Projects"><abbr title="Projects" style={{textDecoration:"none"}}>Projects</abbr></a>
        <a href="#Contact"><abbr title="Contact" style={{textDecoration:"none"}}>Contact Me</abbr></a>
    </nav>
    </main>
  )
}
export default HeaderNav