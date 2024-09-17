import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export const Post = ({data,bgColor,color}) => {
 
    console.log(data.userName);
    
  return (
    <>
      <div className="post-container" style={{
            backgroundColor:`${bgColor}`,
            color:`${color}`
        }}>
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={data.pImg} alt="" />
            </div>
            <div className="text">
                <h3>{data.userName}</h3>
                <p>{data.title}</p>
            </div>
          </div>
          <div className="dot"><BsThreeDotsVertical/></div>
        </div>
        <p>
          {data.description}
        </p>
        <div className="post-img">
            <img src={data.mImg} alt="" />
        </div>
        <div className="like-comment">
            <div className="likes"><FaHeart className="items" />{data.like}{''}K 
            </div>
            <div className="comment"><FaCommentDots className="items" /> {data.comment}{" "}K
            </div>
            <div className="share"><FaShare className="items"/> {data.share}{" "}K
            </div>

        </div>
      </div>
    </>
  );
};
