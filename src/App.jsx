import { useEffect, useState } from 'react'

import './App.css'
function App() {
  const [length , setLength] = useState(8)
  const [pass , setPass] = useState("")
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const [isCopied , setIsCopied] = useState(false)


function generatePass(){
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let newPass = ""
if(numberAllowed) str += "0123456789"
if(charAllowed) str += "!@#$%^&*"
   for (let i = 0; i < length; i++) {
 
  let charIdx = Math.floor(Math.random() * str.length)
   newPass += str.charAt(charIdx)
  setPass(newPass)
}
}
const handleCopy = () => {
    if (pass.length > 0) {
       navigator.clipboard.writeText(pass);
     setIsCopied(true)
     setTimeout(() => {
      setIsCopied(false)
     }, 2000);
    } 
  };


useEffect(()=>{
 generatePass()
},[length ,numberAllowed ,charAllowed])

  return (
    <>
    <h1>Password Generator</h1>
    <div className='pass-cont'>
      <input className='pass-area' type="text" readOnly value={pass}/>
    <button
    className={`copy ${isCopied? "success" : ""}`}
    onClick={handleCopy}
    >{isCopied?"Copied!":"Copy"}</button>
<div className="down-area">
  <div className="range">
      <input type="range" 
      min={8}
     max={16}
    value={length}
      onChange={(e)=>{
        setLength(e.target.value)
      }}
      />
      <label htmlFor="range">Length({length})</label>
      </div>

      <div className="checkboxes">
        <div className="number-box">
      <input type="checkbox"
      onChange={(e)=>{
       setNumberAllowed(e.target.checked)
      }}
      />
      <label htmlFor="checkbox">Numbers</label>
      </div>
      <div className="char-box">
      <input type="checkbox"
       onChange={(e)=>{
       setCharAllowed(e.target.checked)
      }}
      />
      <label htmlFor="checkbox">Characters</label>
      </div>
      </div>
      </div>
       { isCopied && (
        <p className='text-copy'>
          Text Copied Successfully!
        </p>
      )}
      </div>
     
    </>
  )
}

export default App
