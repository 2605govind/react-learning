import React, { useRef, useState } from 'react'
import WelcomeMessage from './component/WelcomeMessage'
import Weather from './component/Weather'
import UserStatus from './component/UserStatus'
import Greeting from './component/Greeting'
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./index.css"
import ComponentOne from './component/ComponentOne'
import ComponentTwo from './component/ComponentTwo'
import ExampleOne from './component/ExampleOne'
import ShopingList from './component/ShopingList'
import CopyINput from './component/CopyINput'
import Switcher from './component/Switcher'
import UseEffect from './component/UseEffect'
import Component1 from './component/propdrilling/Component1'
import {createContext} from 'react';
import { UserProvider } from './Usercontext'
import UserProfile from './component/UserProfile'
import UpdateUser from './component/UpdateUser'
import UserReducer from './component/UserReducer'
import Counter from './component/usereducer/Counter'
import UseRef from './component/UseRef'
import Timer from './component/Timer'
import useFetch from './hooks/useFetch'
import UniqueID from './component/UniqueID'


export const Data = createContext() // instence
export const Data1 = createContext() // instence

const Copy = () => {
  const copyHandler = () => {
    alert("why are you stealing my code")
  }
  return <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
}

const Move = () => {
  function movieHandle() {
    alert("Mouse move event fired")
    console.log("Mouse move event fired")
  }
  return <p onMouseMove={movieHandle}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus nihil accusantium pariatur ad quasi sint, magnam tenetur architecto cupiditate officiis dicta ex quo dolor tempora ducimus voluptatem. Ea animi reiciendis accusantium.
  </p>
}

  

const Button = () => {
  const handleClick = () => console.log(Math.floor(Math.random()*10));
  return <button onClick={handleClick}>Button</button>
}
const App = () => {
  const [count, setCount] = useState(0);
  // const [friends, setFriends] = useState(['rakesh', 'john'])
  // console.log(count)
  // setCount(count);
  // const styles = {color: "white", backgroundColor: "crimon", padding: '2rem'};

  // const increment =() => setCount((prev) => prev + 1)
  // const decrement =() => setCount((prev) => prev - 1)



  // const [movie, setMovie] = useState({
  //   title: "Equalizer 3",
  //   rating: 2
  // })

  // const handleRating = () => {
  //   setMovie((prev) => {return {...prev, rating: 5}});
  // }

  // array of object
  // const [movies, setMovies] = useState([
  //   {id: 1, title: "Spider man", rating: 3},
  //   {id: 2, title: "Superman", rating: 6}
  // ])

  // const handleChangetitle = () => {
  //   setMovies(movies.map(m => m.id == 1 ? ({...m, title: "IronMan"}) : m))
  // }


  // console.log(movies)

  // let name = "rakesh"
  // let age = 18;


  // const [data, loadin] = useFetch('https://jsonplaceholder.typicode.com/todos');
  // if(loadin) return <div>Loading</div>
  // console.log(data)
 
  return (
    <section id="section">
      {/* <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className='text'>Paragraph Content</p>
      </article> */}

      {/* <Weather/> */}
      {/* <UserStatus loggedIn={true} isAdmin={false}/> */}
      {/* <Greeting timeOfDay={"morning"}/> */}


      {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum quidem ad quisquam iure itaque voluptatibus provident nisi tenetur tempora! Qui, voluptas? Impedit, minima. Assumenda, magnam! Mollitia nostrum eum maiores. </h1> */}
      {/* <FaCartArrowDown/> */}
      {/* <AiOutlineLoading3Quarters size={30} color='gold'/> */}

      {/* <Button/> */}
      {/* <Copy/> */}

      {/* <Move/> */}

{/* 
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <div>
        {
          friends.map((f) => (
            <li key={Math.random()}>{f}</li>
          ))
        }

        <button onClick={() => {
          setFriends([...friends, 'govind']);
        }}>Add new Friend</button>

        <button onClick={() => {
          setFriends(friends.filter(f => f !== 'govind'));
        }}>Remove a Friend</button>

        <button onClick={() => {
          setFriends(friends.map(f => f === 'john' ? "junior john": f));
        }}>Update a Friend</button>

        
      </div> */}




      {/* time 2:00:00 */}
      {/* <h1>Title: {movie.title}</h1>
      <h1>Rating: {movie.rating}</h1>
      <button onClick={handleRating}>Change rating</button> */}

        {/* {
          movies.map(m => (
            <li key={Math.random()}>{m.title}</li>
          ))
        }

        <button onClick={handleChangetitle}>change title</button> */}


        {/* <ComponentOne count={count} onClickhandler={() => setCount(count+1)}/>
        <ComponentTwo count={count} onClickhandler={() => setCount(count+1)}/> */}

        {/* <ExampleOne/> */}

        {/* <ShopingList/> */}
        {/* <CopyINput/> */}
        {/* <Switcher/> */}

        {/* <UseEffect/> */}

          {/* <Data.Provider value={name}>
            <Data1.Provider value={age}>
            <Component1 />

            </Data1.Provider>
          </Data.Provider> */}


  
            {/* <UserProvider>
    
              <UserProfile/>
              <UpdateUser/>
            </UserProvider>  */}

              
              {/* <UserReducer/> */}
              {/* <Counter/> */}


              {/* <UseRef/> */}
              {/* <Timer/> */}



              <UniqueID/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum. Quis, tempora aliquam accusamus laboriosam officia suscipit! Doloribus nulla placeat error, illo rem suscipit, alias, omnis soluta eius dolor deserunt?</p>
              <UniqueID/>
              
    </section>
  )
}


export default App