import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router';


const CustomFab = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return (
        <Fab 
            onClick={handleClick}
            sx={{position:'absolute',top:'1rem', left:'1rem'}}>
            <ChevronLeftIcon/>
        </Fab>
    )
}

export default CustomFab