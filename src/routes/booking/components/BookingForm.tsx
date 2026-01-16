import TextField from "@mui/material/TextField"
import DurationButtons from "../../../components/sections/pricing_section/DurationButtons"
const BookingForm = () => {
  return (
        <div className="bookingForm">
          <div className="name">
              <TextField
              label='First Name'
              />
              <TextField
              label='Last Name'
              />
          </div>
          <div className="contactFields">
              <TextField
              label='Email'
              />
              <TextField
              label='Phone Number'
              />
          </div>
          <DurationButtons />
      </div>
  )
}

export default BookingForm