import TextField from "@mui/material/TextField";
import BookingButton from "../../../components/booking_button/BookingButton";
import APIDurationComponents from "./APIDurationComponents";
import ImgPriceComp from "./ImgPriceComp";

const BookingForm = () => {
    return (
            <div className="bookingForm">
                <ImgPriceComp/>
                <APIDurationComponents/>
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

export default BookingForm;