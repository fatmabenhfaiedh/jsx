import logo from './logo.svg';
import './App.css';
import image from "./WestAfrican.jpg";

function App() {
  return (
  <div style={{border:"solid 1 black",maxWidth:"100"}}>

    <h1 className="title red">Mamady Keita The Djembefola</h1>
    <br/>
    <img src={"./dsc8090-1366w-1.jpg"} alt= ""/>
    <br/>
    <img src={image} alt= "NO"/>
    <br/>
    <video className= "video" style= {{width:"640",height:"760"}} controls autoPlay>
      <source src="./djembefola.mp4" type="video/mp4"/>
    </video>

  </div>


  );
}

export default App;
