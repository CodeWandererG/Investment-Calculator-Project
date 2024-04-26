import {Header} from "./components/Header.jsx"
import { UserInput } from "./components/UserInput.jsx"
import { Results } from "./components/Results.jsx"
import { useState } from "react"

function App() {

const [userinput ,setUserInput] = useState({
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
})

function handleChange(identifier , newValue){
  setUserInput(prevData => {
      return {
          ...prevData,
          [identifier] : newValue
      };
  });
}

  return (
    <>
      <Header />
      <UserInput userinput={userinput} onChange={handleChange}/>
      <Results input={userinput}/>
    </>
  )
}

export default App
