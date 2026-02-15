import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import BookingButton from "../../booking_button/BookingButton";
import { useState } from "react";
import checkVid from '../../../assets/Check.webm';
import { createClient } from '@supabase/supabase-js';
import chime from './../../../assets/sounds/success_chime.mp3'
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

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY);
const ContactWideScreen = () => {
    const formFields = {
    fName:'',
    lName:'',
    email:'',
    subject:'',
    message:''
  }
  const [isSubmitted, setIsSubmitted ] = useState(false);
  const [formFieldsObj,setFormFieldsObj] = useState(formFields);
  
    const formInsert = async () => {
    const { data, error } = await supabase
      .from('client-messages')
      .insert([
        {
          fname:formFieldsObj.fName,
          lname:formFieldsObj.lName,
          email:formFieldsObj.email,
          subject:formFieldsObj.email,
          message:formFieldsObj.message
        },
      ])
      console.log(data,error)
    }

  const validateFields = () => {
    const strInputsAry:string[] = Object.values(formFieldsObj);
    // Validate Empty Fields by checking for ''
    let isValid = false;
    for(let str of strInputsAry) {
      if(str.trim() === '') {
        setIsSubmitted(false);
        isValid = false;
        break;
      } else {
        isValid = true;
      }
    };
    
    if(isValid) {
        setIsSubmitted(!isSubmitted);
        formInsert();
    }


  }

  if(isSubmitted){
    return (
      <div className="contactWideScreenContain">
          <div className="flexCont" style={{display:'flex',flexDirection:'column',}}>
            <video playsInline autoPlay  >
              <source src={checkVid} type="video/webm"/>
            </video>
            <audio autoPlay hidden>
              <source src={chime}/>
            </audio>
          <h3 style={{fontFamily:'Inter', fontWeight:'500', color:'#55948A'}}>Message Recieved</h3>
          </div>
      </div>
    )
  } else {
      return (
    <div className="contactWideScreenContain">
      <div className="greyBox">
        <h3>Leave a Message</h3>
        <div className="nameInputs">
          <MyTextField  label="First Name" 
          InputLabelProps={{shrink: true}} 
          required
          onChange={(e)=>setFormFieldsObj({...formFieldsObj,fName:e.target.value})}
          />
          <MyTextField label="Last Name" 
          InputLabelProps={{shrink: true}}
          required
          onChange={(e)=>setFormFieldsObj({...formFieldsObj,lName:e.target.value})}
          />
        </div>
        
        <MyTextField
          sx={{ width: '100%' }}
          label="Email"
          required
          InputLabelProps={{shrink: true}} 
          onChange={(e)=>setFormFieldsObj({...formFieldsObj,email:e.target.value})}
        />
        <MyTextField
          sx={{ width: '100%' }}
          label="Subject"
          required
          InputLabelProps={{shrink: true}} 
          onChange={(e)=>setFormFieldsObj({...formFieldsObj,subject:e.target.value})}
        />
        <MyTextField
          onChange={(e)=>setFormFieldsObj({...formFieldsObj,message:e.target.value})}
          sx={{ width: '100%' }}
          label="Message" 
          multiline
          rows={5}
          required
          InputLabelProps={{shrink: true}}
        />
        
        <BookingButton variant="filled" label="Send Message" customCB={validateFields} />
      </div>
    </div>
  )
  }
}

export default ContactWideScreen