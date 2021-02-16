import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [inputNumber, setInputNumber] = useState(1);
  const [answer, setAnswer] = useState(1);
  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState("");
  const [time, setTime] = useState(0);

  setInterval(() => {
      setTime(time + 1);

    }, 1000);

  useEffect(() => {

     console.log("Side effect triggered"); 

    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }

    setTime(0);
    
    setCorrect("");
  }, [inputNumber]);

  const handlePlay = () => {
    setInputNumber(inputNumber + 1);

  };


const handleGuess = ((event) => {
  
  event.preventDefault();
  if (guess.toLowerCase() == answer) {
    setCorrect("you got it right")
  } else {
    setCorrect("you got it wrong, shan times!")
  }
});

const handleInputGuess = (event) => {
  setGuess(event.target.value);
};

  return (
    <div>
      <h1>{time}</h1>
      <h2>Current number: {inputNumber}</h2>
      <button value={inputNumber} onClick={handlePlay}>Next Number</button>
      <form onSubmit={handleGuess}>
      <input type="text" placeholder="Your guess: fizz, buzz, fizzbuzz or number" value={guess} onChange={handleInputGuess}/>
      <input type="submit" value="Guess" />
      </form>
      <h1>{correct}</h1>
    </div>
  );
}

export default App;
