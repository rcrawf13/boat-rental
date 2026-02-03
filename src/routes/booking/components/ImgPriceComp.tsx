import pontoonImg from './../../../assets/PontoonBoatBlr.webp'
import ActivePriceContext from '../../../context/ActivePriceContext';
import { useContext } from 'react';
import type { CSSProperties } from 'react';
const ImgPriceComp = () => {
    const {currentPrice} = useContext(ActivePriceContext);

    const imgandPriceStyle:CSSProperties = {
        position:'relative',
        alignSelf:'center',
        justifySelf:'center',
        maxWidth:'fit-content',
        width:'fit-content',
        display:'inline-block',
        fontFamily: "Roboto Serif, serif",
        fontOpticalSizing:'auto'
    }

    const frameStyle:CSSProperties = {
        width:'100%',
        position:'relative',
        display:'flex',
        justifyContent:'center'
    } 

    return (
    <div id='frame' style={frameStyle}>


        <div className="imgAndPrice" style={imgandPriceStyle}>
            <div id="price" style={{position:'absolute',left:'2.25%',top:'4%', backgroundColor:'#FFFFFF',padding:'.5rem',borderRadius:'100px',width:'100px',display:'flex',justifyContent:'center',boxShadow:'var(--home-text-shadow)'}}>
                {currentPrice}
            </div>
        <img
        src={pontoonImg}
        alt=""
        style={{
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '15px',
            maxWidth:'400px'
        }}
        />
        </div>
        
    </div>
  )
}

export default ImgPriceComp