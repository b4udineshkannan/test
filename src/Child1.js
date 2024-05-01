import App from "./App";
import { useState } from "react";
import Child2 from "./Child2";
function Child1(props){
   
    
   
    return(
        <div>
            <Child2 receive={props.receive}/>
           
           {/* <h2>{props.receive}</h2> */}
    




        </div>
    )

}

export default Child1;