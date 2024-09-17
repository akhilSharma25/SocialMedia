import { data2 } from "../Data"

export const Rightbar=({data,bgColor,color})=>{
    return(
        <>
        <div className="right-container" style={{
            backgroundColor:`${bgColor}`,
            color:"white"
        }}>
            <div className="postimg">
                <img src={data.img} alt="" className="main-img"/>
         
                <div className="inside-img">
                    <div className="img">
                        <img src={data.authorImg} alt="" />
                    </div>
                    <div className="text">
                        <h3>{data.authorName}</h3>
                        <p>{data.authortext}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}