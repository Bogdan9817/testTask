import TableRes from './components/TableRes';
import {useState,} from 'react'
import data from './data/data'

function App() {
  const [val, setVal] = useState('position')
  const [find, setFind] = useState('')
 

  const handleChange = (e)=>{
    setVal(e.target.value)
  }
  
    

  return (
    <div className="App">
      <div className='position-center'>
      <select  onChange={(e)=>handleChange(e)} className="position-centre">
        <option value="position">by position</option>
        <option value="name">by name</option>
        <option value="scores">by scores</option>
        <option value="time">by time</option>
        <option value="hits">by hits</option>
        <option value='fireRate'>by fire rate</option>
      </select>
      
      <input className='position-centre' placeholder='find player'onChange={(e)=>setFind(e.target.value)} value={find}type="text"/>
      </div>
      <div className='centrify'>
       
       <TableRes data={data} val={val} find={find} /> 
        </div>
     
    </div>
  );
}

export default App;
