import React from "react"
const Copyright=()=>{
    const todayyear=new Date();
  return (
    <footer className="App">Copyright &copy; {todayyear.getDate()}/{todayyear.getMonth()}/{todayyear.getFullYear()}</footer>
  )
}

export default Copyright