import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const CalendarComponent = () => {
    const currentDay = dayjs();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
        disablePast={true}
        label="Date"
        defaultValue={currentDay}
        slotProps={
            {
                textField: {
                    sx:{
                    "& .MuiPickersInputBase-root  " :{
                        width:"70dvw"
                    },

                    "& .MuiPickersOutlinedInput-notchedOutline":{
                        borderColor:"#064743"
                    },
                    "& .MuiPickersSectionList-root": {
                        color:"#064743",
                    },
                    "& .MuiSvgIcon-root":{
                        color:"#ABC1C0"
                    },
                    "& .MuiFormLabel-root":{
                        color:"#064743"

                    }
                    
                
                }
                }
            }
        }
        />
    </LocalizationProvider>
)
}

export default CalendarComponent