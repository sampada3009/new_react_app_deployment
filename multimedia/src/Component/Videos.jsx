import Video1 from "../assets/video1.mp4"
export function Videos(){
    return(
      <div>
        <video controls>
            <source src={Video1} style={{ width: "10px", height: "10px" }}></source>
        </video>
      </div>
    )
}