import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from 'dayjs';

const TimePickerField = () => {
  const now = dayjs();
  const futureHour = now.add(1,"hour").hour();

  const flooredHour = Math.floor(futureHour)
  const flooredFutureHour = dayjs().hour(flooredHour).minute(0).second(0).millisecond(0) 



  return (
  <>
  <LocalizationProvider dateAdapter={AdapterDayjs}>


      <DesktopTimePicker 
      label={'Reservation Time'} 
      defaultValue={flooredFutureHour}
      minTime={flooredFutureHour}
      />
  </LocalizationProvider>
  </>
  )
}

export default TimePickerField