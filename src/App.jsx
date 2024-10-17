import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Navbar from './Navbar';
import Home from './Home';

function App() {
  
      // const [count, setCount] = useState(0)
      // const title = 'Welcome to the new blog';
      // const likes = 50;
  //const person = {name:'chathu', age: 27 }; can't doing with object
      // const link = "http://www.google.com";




  return (
    <div classname="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>App Component</h1> */}
        {/* <h1>{title}</h1> */}
        {/* <p>Liked { likes } times</p> */}
        {/* <p>{person}</p> */}

        {/* <p>{ 10 }</p>
        <p>{ "Hello chathu" }</p>
        <p>{ [10,9,8] }</p> */}

        {/* <a href={link}>Google site</a> */}
      </div>
    </div>



  )
}

export default App
