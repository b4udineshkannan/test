
import Child3 from "./Child3";
function Child2(props){

    return(
        <div>
        <Child3 receive={props.receive}/>
        {/* <h2>{props.receive}</h2> */}
        </div>
    )

}

export default Child2;