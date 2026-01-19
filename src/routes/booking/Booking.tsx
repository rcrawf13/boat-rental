import BookingForm from './components/BookingForm';
import FadeDiv from '../../components/fade_div/FadeDiv';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Fab from '@mui/material/Fab';
import dayjs from 'dayjs';
import './booking.css';
import { useNavigate } from 'react-router';

const Booking = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="container" style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'relative'}}>
      <Fab 
      onClick={handleClick}
      sx={{position:'absolute',top:'1rem', left:'1rem'}}>
        <ChevronLeftIcon/>
      </Fab>
      <FadeDiv>
        <div className="bookingContainer">
            <div className="bookingContentContainer">
              <BookingForm/>
              <div className="dateTimeInputs">
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <StaticDateTimePicker 
                  sx={{backgroundColor:'transparent'}} 
                  defaultValue={dayjs()}
                  disablePast={true}
                  views={['day','hours']}
                  />
                </LocalizationProvider>
              </div>
            </div>
        </div>
      </FadeDiv>  
    </div>
)
}

export default Booking