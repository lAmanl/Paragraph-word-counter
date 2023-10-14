import './App.css';
import {useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [para, setPara]=useState('')

  function count(val){
    const words = para.split(' ').filter(word => word !== '');
    return words.length;
  }
  return (
    <div class="main">
      <div class="container">
        <h3 class="text-center p-2">Responsive Paragraph Word</h3>
        <h3 class="text-center">Counter</h3>
        <textarea class="p-2" placeholder='Write your text here' value={para} rows='5' cols='60' onChange={(e) => setPara(e.target.value)}></textarea>
        <p class="p-3">Word Count: {count()}</p>
      </div>
    </div>
  );
}

export default App;
