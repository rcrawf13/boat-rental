import { useState } from "react"
const NavBar = ({navButtonOptions}) => {
    const [selected,setSelected] = useState("Home");
    const updateSelected = (item:string) => {
        setSelected(item);
        console.log(`The active item is: ${item}`)
    }


  return (
    <>
        <nav className="navConatiner">
            <ul>
                {navButtonOptions.map((currentItem:string, index:number)=>(
                <li className={selected === currentItem ?'active':''} onClick={()=>updateSelected(currentItem)} key={`listItem-${index}`} >{currentItem}</li>
                ))}
            </ul>
        </nav>
        
        {/* <div className="dotContainer">
            {navButtonOptions.map(()=>(
                <span className="dot"></span>
            ))}
        </div> */}
    
    </>
  )
}

export default NavBar