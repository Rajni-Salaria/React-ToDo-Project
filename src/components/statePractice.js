import { useState } from "react";

function SecondComp() {

    let [edit, SetEdit] = useState("false")
    // let [newColor, SetNewColor] = useState("black")
    function Clicked() {
        // Function to change state

        // SetText("upper");
        // SetNewColor("green");
        //     const input(() = {
        //         if(clicked== "true")
        //     SetText(clicked)
        // })

        // alert("rashi")

           SetEdit(true)
        
        
        // console.log(text)
    }
    return (
        // <div>
        //     <p style={{color:newColor}}>{text}</p>
        //     <button onClick={Clicked}>Click</button>
        // </div>
        // <div>
        //     <p> This is Para</p>
        //     <button onClick={Clicked}>Click</button>
        // </div>
        <div>
            {edit === true ?
                <input type="text" />
                :
                <p> This is Para</p>
            }
            <button onClick={Clicked}>Click</button>
        </div>

    );
}
export default SecondComp;