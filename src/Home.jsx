import { useState } from 'react';



const Home = () => {
// let name = 'chathu';
const [name, setName] = useState('chathu');
const [age, setAge] = useState(27);

const handleClick = () => {
        setName('mario');
        setAge(25);
    }

    // const handleClick = (e) => {
    //     console.log('hello', e)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name , e.target)
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('chathu', e)}>Click me Again</button> */}
        </div>
    );
}

export default Home ;