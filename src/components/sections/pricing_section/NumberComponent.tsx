import { NumberField } from '@base-ui/react/number-field';
import cirlePlus from "./../../../assets/circle-add.svg"
import cirleMinus from "./../../../assets/circle-minus.svg"
const NumberComponent = ({handleOpen,updateCurrentPrice}) => {
    
    return (

        <>
            <div className="custDurCont">
                <NumberField.Root  onValueChange={(e)=>updateCurrentPrice(e)}  defaultValue={4} min={2} max={8} >
                <NumberField.ScrubArea>
                <NumberField.ScrubAreaCursor />
                </NumberField.ScrubArea>
                <NumberField.Group style={{display:'flex', alignItems:'center',justifyItems:'center'}}>
                    <NumberField.Decrement style={{border:'none', background:'none'}}>
                        <img src={cirleMinus} style={{height:'5dvh', width:'5dvh'}} alt="" />
                    </NumberField.Decrement>
                        <NumberField.Input 
                        className={'test'} 
                        style={{textAlign:'center',color:'#2F6F66'}} />
                    <NumberField.Increment style={{border:'none', background:'none'}} >
                        <img src={cirlePlus} style={{height:'5dvh', width:'5dvh'}} alt="" />
                    </NumberField.Increment>
                </NumberField.Group >
                </NumberField.Root>                
            </div>
        </>
    )
}

export default NumberComponent