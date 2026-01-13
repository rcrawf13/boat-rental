import { useState } from "react"
import NumberComponent from "./NumberComponent";
const DurationButtons = ({active,setActive,setCurrentPrice}) => {
  const [open,setOpen] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setActive(value);
    updateCurrentPrice(value);
  } 

  const updateCurrentPrice = (value:number) => {

    if(parseInt(value) > 1 ) {
      const additionalHours = parseInt(value) - 4;
      const priceAdditional = parseFloat(400.00 + additionalHours * 75);
      setCurrentPrice(`$${priceAdditional}.00`);
    }    
  }

  const handleOpen = () => {
    setOpen(!open);
  }


  return (
    <>

        {open?(    
    <div className="durCont">
    <p>Choose Your time on the water</p>
      <div className="duratonBtns">
        <button style={active == 2 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66"}} value={2} onClick={(e)=>handleChange(e)}>2 Hrs</button>
        <button style={active == 4 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66"}} value={4} onClick={(e)=>handleChange(e)}>4 Hrs</button>
        <button id="customTime" onClick={handleOpen}></button>
      </div>
    </div>)
    
    :
    
    (
      <>
        <div className="durCont">
          <p>Choose Your time on the water</p>
          <NumberComponent updateCurrentPrice={updateCurrentPrice} handleOpen={handleOpen}/>
        </div>
      </>
    )}
    
    </>
  )
}

export default DurationButtons