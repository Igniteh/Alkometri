import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

function calculation(e) {

  e.preventDefault();
  let calc = 0;
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let grams_left = grams - (burning * time);
  
  if (gender === 'male') {
    calc = grams_left / (weight * 0.7) 
  } else {
    calc = grams_left / (weight * 0.6) 
  }
  setResult(calc);
}

  return (
    <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculation}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" name="bottles" value={bottles} onChange={e => setBottles(e.target.value)} />
          </div>
        <div>
          <label>Time</label>
          <input type="number" name="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>
        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
