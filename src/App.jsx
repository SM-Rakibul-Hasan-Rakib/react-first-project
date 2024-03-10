
import './App.css'

function App() {
  

  function handleClick(){
    alert('button clicked')
  }
  
  const handleClick2= () =>{
    alert('button 2 cliced')
  }
  
  const addFive = (num) => {
    alert(num + 6)
  }


  return (
    <>
     
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third button clicked')}}>third button</button>
      <button onClick={() => addFive(4)}>4 number</button>
    </>
  )
}

export default App
