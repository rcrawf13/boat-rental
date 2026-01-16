import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import {motion} from 'motion/react';
import BookingButton from "../../booking_button/BookingButton";

const MyTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
                color:'#3A745C',
    
    },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'solid #3A745C 1pt'
    
  },
  '&:hover .MuiOutlinedInput-notchedOutline' : {
    border:'solid #3A745C 2pt',
  }
});

const ContactWideScreen = () => {
  return (
    <div className="contactWideScreenContain">
      <div className="greyBox">
        <h3>Leave your message</h3>
        <div className="nameInputs">
          <MyTextField  label="First Name" 
          InputLabelProps={{shrink: true}} 
          required
          />
          <MyTextField label="Last Name" 
          InputLabelProps={{shrink: true}}
          required          
          />
        </div>
        
        <MyTextField
          sx={{ width: '100%' }}
          label="Subject"
          required
          InputLabelProps={{shrink: true}} 
        />
        <MyTextField
          sx={{ width: '100%' }}
          label="Message" 
          multiline
          rows={5}
          required
          InputLabelProps={{shrink: true}}
        />
        <BookingButton variant="filled" label="Send Message" customCB={()=>console.log("Message Sent")} />
      </div>
    </div>
  )
}

export default ContactWideScreen