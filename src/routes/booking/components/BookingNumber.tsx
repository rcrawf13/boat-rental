import { NumberField } from '@base-ui/react/number-field';
import cirlePlus from "./../../../assets/circle-add.svg";
import cirleMinus from "./../../../assets/circle-minus.svg";
import { motion } from "motion/react";
import { useContext } from 'react';
import NumberValueContext from '../../../context/NumberValueContext';
type updateCurrentPriceFnType = (value: null | number) => void;
interface NumberComponentProps {
    updateCurrentPrice:updateCurrentPriceFnType;
    totalAvailableBookingTime:number;

}

const BookingNumber = ({totalAvailableBookingTime,updateCurrentPrice}:NumberComponentProps) => {
    const {numberValue,setNumberValue} = useContext(NumberValueContext);
    return (
        <>
            <div className="custDurCont">
            
                <NumberField.Root
                    value={numberValue}                 
                    onValueChange={(e)=>{
                    // setNumberValue
                    if(e) {
                        // numberValue is defaulted to 2 when the StaticDateTime Picker component is updated
                        // It is done to reset the num component when the max={} value is lowered because of availability
                        setNumberValue(e)
                        updateCurrentPrice(e)
                    }
                    // console.log(e)

                }} step={1} defaultValue={2} min={2} max={totalAvailableBookingTime??8}  >
                <NumberField.ScrubArea>
                <NumberField.ScrubAreaCursor />
                </NumberField.ScrubArea>
                <NumberField.Group style={{display:'flex', alignItems:'center',justifyItems:'center'}}>
                    <NumberField.Decrement style={{border:'none', background:'none', cursor:'pointer'}}>
                        <motion.img 
                        whileTap={{scale:.8,pointerEvents:'none'}}
                        src={cirleMinus} 
                        style={{height:'5dvh', width:'5dvh'}} />
                    </NumberField.Decrement>
                        <NumberField.Input
                        className={'test'} 
                        style={{textAlign:'center',color:'#2F6F66'}} />
                    <NumberField.Increment style={{border:'none', background:'none', cursor:'pointer'}} >
                        <motion.img 
                        whileTap={{scale:.8,pointerEvents:'none'}}
                        src={cirlePlus} 
                        style={{height:'5dvh', width:'5dvh'}} />
                    </NumberField.Increment>
                </NumberField.Group >
                </NumberField.Root>                
            </div>
        </>
    )
    }
    
    
    

export default BookingNumber 