import { NumberField } from '@base-ui/react/number-field';
import cirlePlus from "./../../../assets/circle-add.svg";
import cirleMinus from "./../../../assets/circle-minus.svg";
import { motion } from "motion/react";
import { useContext, useEffect } from 'react'; // 1. Import useEffect
import NumberValueContext from '../../../context/NumberValueContext';

type updateCurrentPriceFnType = (value: null | number) => void;

interface NumberComponentProps {
    updateCurrentPrice: updateCurrentPriceFnType;
    totalAvailableBookingTime: number;
}

const BookingNumber = ({ totalAvailableBookingTime, updateCurrentPrice }: NumberComponentProps) => {
    const { numberValue, setNumberValue } = useContext(NumberValueContext);

    // 2. The Fix: The "Safety Reset" Hook
    // Whenever the available time changes (user picked a new start time),
    // we immediately reset the duration to the safe minimum (2).
    useEffect(() => {
        setNumberValue(2);
        updateCurrentPrice(2);
    }, [totalAvailableBookingTime, setNumberValue]); // Dependency: Runs when this number changes

    return (
        <div className="custDurCont">
            <NumberField.Root
                value={numberValue}
                onValueChange={(e) => {
                    if (e) {
                        setNumberValue(e);
                        updateCurrentPrice(e);
                    }
                }}
                step={1}
                defaultValue={2}
                min={2}
                // 3. Safety: Ensure max never falls below min to prevent UI errors
                max={Math.max(2, totalAvailableBookingTime)} 
            >
                <NumberField.ScrubArea>
                    <NumberField.ScrubAreaCursor />
                </NumberField.ScrubArea>
                <NumberField.Group style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                    <NumberField.Decrement style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        <motion.img
                            whileTap={{ scale: 0.8, pointerEvents: 'none' }}
                            src={cirleMinus}
                            style={{ height: '5dvh', width: '5dvh' }} />
                    </NumberField.Decrement>
                    
                    <NumberField.Input
                        className={'test'}
                        style={{ textAlign: 'center', color: '#2F6F66' }} />
                    
                    <NumberField.Increment style={{ border: 'none', background: 'none', cursor: 'pointer' }} >
                        <motion.img
                            whileTap={{ scale: 0.8, pointerEvents: 'none' }}
                            src={cirlePlus}
                            style={{ height: '5dvh', width: '5dvh' }} />
                    </NumberField.Increment>
                </NumberField.Group >
            </NumberField.Root>
        </div>
    );
}

export default BookingNumber;