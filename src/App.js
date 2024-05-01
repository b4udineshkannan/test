import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Depatment1 from './Deparment1';
import Child1 from './Child1';

function App() {
  
 const [parentsend, setParentsend] = useState("");
 
  return (
    <div className="App">
      <Depatment1 send={(a)=>{setParentsend(a)}}/>
      {/* <Child1 recievedepart={parentsend}/>
       */}
       {/* <h2>{parentsend}</h2> */}
       <Child1 receive={parentsend}/>
       
     
     
    
    </div>
  );
}

export default App;
