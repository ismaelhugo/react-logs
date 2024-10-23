import './App.css'

function App() {
  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json => console.log(json))
  }

  return (
    <>
      <button onClick={handleClick}>GET</button>
    </>
  )
}

export default App
