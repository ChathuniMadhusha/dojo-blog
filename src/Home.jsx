import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body:'Lorem ipsum...', author:'mario', id:1},
        {title: 'Welcome party!', body:'Lorem ipsum...', author:'yoshi', id:2},
        {title: 'Web dev top tips', body:'Lorem ipsum...', author:'mario', id:3},
    ]);

    // delete blog
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }




// let name = 'chathu';
// const [name, setName] = useState('chathu');
// const [age, setAge] = useState(27);

// const handleClick = () => {
//         setName('mario');
//         setAge(25);
//     }

    // const handleClick = (e) => {
    //     console.log('hello', e)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name , e.target)
    // }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>







            {/* list eken filter krla pennana
            <BlogList blogs={blogs.filter((blog)=> blog.author=== 'mario')} title="mario's blogs" /> */}
            
            
            
            
            {/* <h2>Homepage</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('chathu', e)}>Click me Again</button> */}
        </div>
    );
}

export default Home ;