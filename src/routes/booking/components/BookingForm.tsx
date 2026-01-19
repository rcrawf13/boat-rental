import TextField from "@mui/material/TextField";
import DurationButtons from "../../../components/sections/pricing_section/DurationButtons";
import BookingButton from "../../../components/booking_button/BookingButton";
import ImageWideCont from "../../../components/image_component/ImageWideCont";

const BookingForm = () => {
  return (
        <div className="bookingForm">
            <ImageWideCont/>
            <DurationButtons />

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

            <BookingButton variant="filled" label="Submit"/>
        </div>
  )
}

export default BookingForm