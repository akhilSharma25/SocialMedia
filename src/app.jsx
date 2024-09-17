import { NavBar } from "./components/Navbar"
import "./app.css"
import { Sidebar } from "./components/Sidebar"
import { Post } from  "./components/Post.jsx"
import { Rightbar } from "./components/Rightbar.jsx"
import {data,data2} from "./Data.js"
import {useState} from 'react'
export const App=()=>{

 const [bgColor,setbgColor]= useState('#232D3f')
const [color,setColor]=useState("white")
  const [toggle,setToggle]=useState(true)

  const toggleButton=()=>{
    setToggle(!toggle)
    if(toggle){
      setbgColor("rgb(255,255,255)")
      setColor("black")
      document.querySelector("body").style.backgroundColor="#cbc5c5"

    }
    else{
      setbgColor("#232D3f")
      setColor("white")
      document.querySelector("body").style.backgroundColor="#black"

    }
  }

  console.log(data);
  return(
    <>
    <NavBar bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle}/>
    <div className="container">
    <div className="side-bar">
      <Sidebar bgColor={bgColor} color={color}/>
    </div>
    <div className="post-section">
      
      
      {data.map((d)=>(
          <Post key={d.id} data={d} bgColor={bgColor} color={color}/>
      ))}

{/* {data.map((d)=>{
         return( <Post key={d.id} data={d}/>)
})} */}
      
    
     
    </div>
    
    <div className="right-bar">
   {data2.map((d)=>(
       <Rightbar key={d.id} data={d} bgColor={bgColor} color={color}/>
   ))}
    </div>
    </div>
   
    
    </>
  )
}