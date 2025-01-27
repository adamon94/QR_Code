import './App.css'
import img from "./assets/images/image-qr-code.png";
function App() {

  return (
    <div id ="Card">
        <img src={img} alt={"logo"} width="320" height="320"/>
        <p id="bold">Improve your front-end skills by building projects</p>
        <p id="basic">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
        )
}

export default App
