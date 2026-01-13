import cardSectionInfo from './carouselItems';
import { ShowMore, type ShowMoreRef } from '@re-dev/react-truncate'
import { useRef } from 'react';
import './about.css'; 

const WideScreen = () => {
    const refs = useRef<ShowMoreRef[]>([]);

  return (
          <div className="wideScreenContainer">
        <div className="img-text-con">
          <div className="imgCon"></div>
          <div className="textElements">
            <h3>Lorem ipsum, dolor sit amet </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolorem illo molestiae odio dolores inventore, tenetur totam perspiciatis reprehenderit earum quam accusamus impedit 
              minus sapiente corrupti fugiat ab sed maxime?
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
                <ShowMore
                  lines={5}
                  ref={el => refs.current[index] = el}
                  more={<p style={{'cursor':'pointer'}} onClick={(e)=>refs.current[index].toggleLines(e)}>read more</p>}
                  less={<p style={{'cursor':'pointer'}} onClick={(e)=>refs.current[index].toggleLines(e)}>show less</p>}
                  >
                  {itemObject.paragraph}
                </ShowMore>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default WideScreen