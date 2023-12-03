
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  const [deleteArr, SetDeleteArr] = useState([false, false, false, false]);
  const [newArray, SetNewArray] = useState(['Ajay', 'vijay', 'raja', 'kali']);  
  
  const onClickHandler = (index) => {
    const tempArray1 = newArray;
    // const tempArray2 = deleteArr;
    const bin = tempArray1.filter((val, ind) => ind !== index);
    // const win = tempArray2.filter((val, ind)=>ind !== index)
    SetNewArray(bin)
    // console.log(win);
    // SetDeleteArr(win);
  }

  const inputHandler = (v) => {
    const tempArr = deleteArr;
    tempArr[v] = !tempArr[v];
    SetDeleteArr(tempArr);
    console.log(deleteArr);
  }

  useEffect(()=>{
    console.log('were');
   })

  return (
    <div className='center-box'>
      <div className="box">
        <ul>
          {
            newArray.map((val, a) =>
              <li key={a}><input type="checkbox" onClick={() => inputHandler(a)} />{val}
                {deleteArr[a] && <button onClick={() => onClickHandler(a)}>Delete</button>}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
