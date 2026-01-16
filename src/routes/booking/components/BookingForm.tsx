import TextField from "@mui/material/TextField"
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

        </div>
    </div>
  )
}

export default BookingForm