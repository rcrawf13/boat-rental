import { useState } from 'react';
import './booking_mobile.css';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useContext } from 'react';
import APIResContext from '../../context/APIResContext';
import { useRef } from 'react';
import ActivePriceContext from '../../context/ActivePriceContext';
import { handleChange,shouldDisableTime } from '../../components/static_date_time_picker/should_disabile_time_util';

const BookingMobile = () => {
    const [visPageIndex, setVisPageIndex] = useState(1);
    const prevHourRef = useRef<null|number>(null);
    const APIRes = useContext(APIResContext);
    const {selectedDayJSObj,setSelectedDayJSObj} = useContext(ActivePriceContext);

    return (
        <div className="bk_mobile">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker
                sx={{backgroundColor:'transparent', justifySelf:'center'}} 
                localeText={{
                    dateTimePickerToolbarTitle: 'Select Day & Start Time',
                    }as any}
                disablePast={true}
                value={selectedDayJSObj}
                onChange={(e)=> handleChange(e,prevHourRef,setSelectedDayJSObj)}
                shouldDisableTime={(value,view)=>shouldDisableTime(value,view,APIRes)}
                
                onAccept={()=>{
                    console.log('submitted');
                    setVisPageIndex(visPageIndex+1);
                }}
                />
            </LocalizationProvider>
        </div>
    )
}

export default BookingMobile