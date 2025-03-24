import './Contact.css'

function Contact() {
  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json => console.log(json))
  }

  return (
    <>
      <button onClick={handleClick}>Contact</button>
    </>
  )
}

export default Contact
