import React, { useEffect, useRef, useState } from 'react'

const Passoword_Generator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharector, setIsCharector] = useState(false);
  const [savedPassword, setSavedPassword] = useState([]);
  const passwordRef = useRef(false);

  const generatePassword = () =>{
    let pswd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(isNumber) str += "0123456789";
    if(isCharector) str += " !\#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for(let i=0; i<length; i++){
      let randomIndex = Math.floor(Math.random() * str.length);
      // console.log(randomIndex)
      let randomCharector = str.charAt(randomIndex)
      pswd += randomCharector;
    }
    // console.log(pswd)
    setPassword(pswd);
    // setLength(length)
  }

  useEffect(() =>{
    generatePassword();
  },[length, isCharector, isNumber])

  const handleSave = () =>{

  };

  const hanldeCoppy = () =>{
    navigator.clipboard.writeText(password)
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,100);
  };

  const hanldleReset = () =>{
    setLength(8);
    setIsCharector(false);
    setIsNumber(false)
  }
  return (
    <div className='grid '>
      <input
       type="text"
       placeholder='Your Password'
       readOnly={true}
       value={password}
       ref={passwordRef}
       />
       <label htmlFor="isCharector" className='select-none'>
        <input type="checkbox" className='m-5 w-6 h-6 border-2'
         name="" id="isCharector"
         checked={isCharector}
         onChange={(e) => setIsCharector(e.target.checked)}
         />
        Include charectors
       </label>
       <label htmlFor="isNumber" className='select-none'>
        <input
        className='m-5 w-6 h-6 border-2'
         type="checkbox"
          name="" 
          id="isNumber" 
          checked={isNumber}
          onChange={(e) => setIsNumber(e.target.checked)}
          />
        Include Numbers
       </label>
       <label htmlFor="">
        <input 
         type="range"
         max={100} min={0}
         name="" id="" 
         value={length}
         onChange={(e) => setLength(e.target.value)}
         />

       </label>
       <button className='bg-blue-500 cursor-pointer py-2 my-3' onClick={() =>{
        setSavedPassword(prevPass => ([...prevPass, password]));
       }}>Save Password </button>
       <button className='bg-blue-500 cursor-pointer py-2 my-3' onClick={hanldeCoppy}>Coppy Password </button>
       <button className='bg-blue-500 cursor-pointer py-2 my-3' onClick={hanldleReset}>Reset Password</button>

       {
        savedPassword.map((ele, i) =>{
          return (
            <div key={i}>
              <h2>The Password : {ele}</h2>
              <p>The Length: {ele.length}</p>

            </div>
          )
        })
       }
    </div>
  )
}

export default Passoword_Generator
