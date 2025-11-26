// This is a Server Component (default in Next.js)
import { use } from "react";

const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    return res.json();
}   


export default function Page() {
  const data = use(fetchData());
  return <h1>{data.title}</h1>;
}
