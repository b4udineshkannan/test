import { useState } from "react"

function Depatment3(props) {
  const parent = "sned ddata"
//  const test = props.withoutclicksend = "send date"

//  const [withoutclicksend, setWithoutclicksend] = useState('a');
    return (
        <div>
            <h2>Test6 </h2>
            
            <button onClick={()=>{props.send(parent)}}>send</button>
            
        </div>
    )

}

export default Depatment3;