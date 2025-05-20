// import { useState } from "react";

// function App() {

//   // useState
//   // const [theme, setTheme] = useState("dark");

//   const [theme, setTheme] = useState("dark")

//   // handle theme

//   function handleTheme() {
  
//     setTheme(theme === "dark" ? "light" :"dark");
//     // console.log(theme);
//   }

//   return (
//     <>
//       <div className={`flex justify-center items-center flex-col gap-5 h-[100vh]
//         ${theme==="dark"?"bg-gray-950 text-white" : "bg-gray-100 text-black"}
        
//         `}>
//         <h1 className={`border-1 border-blacK 
//           ${theme==="dark" ? "bg-gray-950 text-white" :"bg-gray-100 text-black"}
//           p-10 rounded-2xl`}>
//           Theme {theme}
//         </h1>
//         <button
//           onClick={handleTheme}
//           className={`
//             ${theme==="dark"?"text-white bg-gray-950":"text-black font-bold text-4xl"}
//             border-1 border-black p-5 rounded-3xl `}
//         >
//           {theme === "dark" ?"Enabale Light Mode" : "Disabale Light Mode"}
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;





































// import React from 'react'
// import { useState } from 'react'
// const App = () => {
// const [theme, setTheme] = useState("dark")
// function handle(){
//   setTheme(theme==="dark" ? "light" : "dark")
// }
//   return (
//     <div className={`${theme==="dark"? "bg-black text-white" : "bg-white text-black"} h-screen flex justify-center items-center gap-10 flex-col`}>
//       <h1 className='border-2 black p-5 rounded-3xl text-3xl font-bold uppercase'>{theme==="dark"? "dark mode on" : "light mode on"}
     

//       </h1>
//       <button onClick={handle} className='border-2 black p-5 rounded-3xl text-2xl font-bold uppercase' >click</button>
//     </div>
//   )
// }

// export default App































import React from 'react'

  import { useState } from 'react'

const App = () => {
  
const [theme, settheme] = useState("dark")



  function click(){

    settheme(theme==="dark"? "light": "dark")
    
  }
  
  return (
    <div className={`h-[100vh]
      ${theme=== "dark"? "bg-black text-white":"bg-white text-black"}
      flex 
    justify-center items-center flex-col gap-5 border-rounded `}>
      <h1 className={`text-3xl uppercase rounded-2xl  `}> 
        change theme 
      </h1>

      <p className='border-1 p-5 rounded-3xl' onClick={click}> submit </p>
    </div>
  )
}

export default App









