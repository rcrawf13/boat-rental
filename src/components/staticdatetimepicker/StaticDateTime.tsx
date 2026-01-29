import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useContext } from "react";
import ActivePriceContext from "../../context/ActivePriceContext";
import APIResContext from "../../context/APIResContext";
import NumberValueContext from "../../context/NumberValueContext";
import type { Dayjs } from "dayjs";
import type { TimeView } from "@mui/x-date-pickers/models";

const StaticDateTime = () => {
    const APIRes = useContext(APIResContext);
    const {selectedDayJSObj,setSelectedDayJSObj,setActive} = useContext(ActivePriceContext);
    const {setNumberValue} = useContext(NumberValueContext);
    const shouldDisableTime = (timeValue:Dayjs, view:TimeView) => {
    const hour = timeValue.hour();
    const min = timeValue.minute();
    const day = selectedDayJSObj.day();
    const isWeekday = day > 0 && day <= 5;
    const availabilityStartTime = APIRes.weekDayAvailability.startTime;
    const availabilityEndTime = APIRes.weekDayAvailability.endTime;


    // If Selected Day is a Weekday
    if (isWeekday) {
        // Disable hours before 5PM or after 8PM
        if(view === 'hours') {
        return hour < availabilityStartTime || hour > availabilityEndTime - 2
        }
        // If selected hour == to 5PM bl
        if(view === 'minutes') {
            if(hour == availabilityStartTime) {
                // Block minute options less than 30
                return min < 30
            }
        }
    }
    // If Day is a Weekend
    if(!isWeekday) {
        if(view === 'hours') {
        return (hour < 10 || hour > 17 )
        }
    }

    return false
    


    };

    return (
                <div className="dateTimeInputs">
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <StaticDateTimePicker 
                        sx={{backgroundColor:'transparent', justifySelf:'center'}} 
                        defaultValue={selectedDayJSObj}
                        disablePast={true}
                        onChange={(e)=>{
                            if(e) {
                            setSelectedDayJSObj(e)
                            setActive(2);
                            // console.log(e)
                            setNumberValue(2);
                            }
                        }}
                        shouldDisableTime={shouldDisableTime}
                        />
                    </LocalizationProvider>
                </div>
    )
}

export default StaticDateTime