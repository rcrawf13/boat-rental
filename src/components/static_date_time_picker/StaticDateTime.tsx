import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useContext } from "react";
import ActivePriceContext from "../../context/ActivePriceContext";
import APIResContext from "../../context/APIResContext";
import { useRef } from "react";
import { shouldDisableTime, handleChange } from "./should_disabile_time_util";

const StaticDateTime = () => {
    const prevHourRef = useRef<null|number>(null);
    const APIRes = useContext(APIResContext);
    const {selectedDayJSObj,setSelectedDayJSObj} = useContext(ActivePriceContext);
    
    return (
                <div className="dateTimeInputs">
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <StaticDateTimePicker 
                        sx={{backgroundColor:'transparent', justifySelf:'center'}} 
                        localeText={{
                            dateTimePickerToolbarTitle: 'Select Day & Start Time',
                        }as any}
                        disablePast={true}
                        value={selectedDayJSObj}
                        onChange={(e)=> handleChange(e,prevHourRef,setSelectedDayJSObj)}
                        shouldDisableTime={(value,view)=>shouldDisableTime(value,view,APIRes)}
                        />
                    </LocalizationProvider>
                </div>
    )
}

export default StaticDateTime