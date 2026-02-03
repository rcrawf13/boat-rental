import cardSectionInfo from './carouselItems';
import FadeDiv from '../../../fade_div/FadeDiv';
import './about.css'; 

const WideScreen = () => {


  return (
      <FadeDiv>
        <div className="wideScreenContainer">
        <div className="img-text-con">
          <div className="imgCon"></div>
          <div className="textElements">
            <h3 style={{textAlign:'center',width:'100%',fontSize:'1.3rem',fontWeight:'500'}}>About Us</h3>
            <p>
Every outing should feel like a getaway. That’s why we’re dedicated to providing a seamless rental experience and a comfortable space for you to unwind, celebrate, or explore.
            </p>
          </div>
        </div>

        <div className="perks-cont">
          {cardSectionInfo.map((itemObject,index)=>{
            return (
              <div key={index} className="card">
                <img src={itemObject.image} alt="" />
                <h3>
                  {itemObject.title}
                </h3>
                <p>{itemObject.paragraph}</p>

              </div>
            )
          })}
        </div>
      </div>
      </FadeDiv>
  )
}

export default WideScreen