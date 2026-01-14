import React, { useState, type Dispatch, type SetStateAction } from "react"
import NumberComponent from "./NumberComponent";
type setActiveType = Dispatch<SetStateAction<number>>;
type setCurrentPriceType = Dispatch<SetStateAction<string>>;
interface DurationButtonsProps  {
  active:number;
  setActive: setActiveType;
  setCurrentPrice: setCurrentPriceType;
}
const DurationButtons = ({active,setActive,setCurrentPrice}:DurationButtonsProps) => {
  const [open,setOpen] = useState<boolean>(true);

  const handleChange = (e:Event):void => {
    const value = (e.target as HTMLInputElement).value;
    setActive(parseInt(value));
    updateCurrentPrice(parseInt(value));
  } 

  const updateCurrentPrice = (value:number | null ):void => {

    if(value && value > 1 ) {
      const additionalHours:number = value - 4;
      const priceAdditional:number = 400.00 + additionalHours * 75;
      setCurrentPrice(`$${priceAdditional}.00`);
    }    
  }

  const handleOpen = ():void => {
    setOpen(!open);
  }


  return (
    <>

        {open?(    
    <div className="durCont">
    <p>Choose Your time on the water</p>
      <div className="duratonBtns">
        <button 
        style={active == 2 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66"}} 
        value={2} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}>2 Hrs</button>
        <button 
        style={active == 4 ? {"backgroundColor":"#2F6F66"}:{"backgroundColor":"transparent","border":"solid #2F6F66 2pt", "color":"#2F6F66"}} value={4} 
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>handleChange(e.nativeEvent)}>4 Hrs</button>

        <button id="customTime" onClick={handleOpen}></button>
      </div>
    </div>)
    
    :
    
    (
      <>
        <div className="durCont">
          <p>Choose Your time on the water</p>
          <NumberComponent 
          updateCurrentPrice={updateCurrentPrice}/>
        </div>
      </>
    )}
    
    </>
  )
}

export default DurationButtons