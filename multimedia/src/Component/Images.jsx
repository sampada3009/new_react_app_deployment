import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
export function Images() {
  return (
    <div>
        <h1 stylstyle={{ textAlign: "center" }}e={{color:"green"}}>using ES6 import</h1>
      <h1>This is an Image1</h1>
      <img src={image1} alt="image" width="300" />
      <h1 style={{ color: "blue" }}>using public folder</h1>
      <h1 >This is an Image2</h1>
      <img src={image2} alt="image" width="300" />
      <h1>This is an Image3</h1>
      <img src="image3.jpeg" alt="image" width="300" />
    </div>
  );
}
