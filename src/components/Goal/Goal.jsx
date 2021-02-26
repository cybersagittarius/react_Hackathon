import './Goal.css'


export default function (props) {
    return (
        <div id="goal">
            <title>
                Your new life will go smoother in just few steps with “Helping Hands”
            </title>
            <img id ="main-pic" src = "./assets/pic.jpg" alt="" />
            <div id="steps">
                <div className = "pass">
                    <img className ="number" src="./assets/numbers/1.png" alt=""/>
                    <p className = "step">Select your Region & City</p>
                </div>
                
                <div className = "pass">
                    <img className ="number" src="./assets/numbers/2.png" alt=""/>
                    <p className = "step">Select the category you seek help in</p></div>
                <div className = "pass">
                    <img className ="number" src="./assets/numbers/3.png" alt=""/>
                    <p className = "step">Find the support you need</p>
                </div>
               
                
                
                
            </div>
        </div>
        
    )
}