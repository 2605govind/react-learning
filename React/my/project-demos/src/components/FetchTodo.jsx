import { use } from 'react'

// const fetchData = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`).then((res) => res.json())
//     // return res.json();
// }   

// const FetchTodo = () => {
//     // const data = use(fetchData())
//     const data = fetchData()
//     console.log(data)
//   return (
//     <div>Title: {data.title}</div>
//   )
// }

// export default FetchTodo



 function getData() {
  return "React 19 works!";
}

export default function FetchTodo() {
  const text = use(getData());
  return <h1>{text}</h1>;
}
