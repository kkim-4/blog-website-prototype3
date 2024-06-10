/*
import BlogContentPage from "./pages/BlogContentPage.jsx";
import  Homepage  from "./pages/Homepage.jsx";
import {Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch.js';

export default function App() {
  let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  console.log(data)

  return ( 
    <div>
      <Routes>
        <Route path='/' element ={<Homepage blogs={data?data:""} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage blogs={data?data:""}/>}></Route>
      </Routes>
    </div>
 
  )
} 
*/
import BlogContentPage from "./pages/BlogContentPage.jsx";
import  Homepage  from "./pages/Homepage.jsx";
import { Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch.js';

export default function App() {
  let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null; // or return a loading indicator if preferred

  return ( 
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data} />} />
        <Route path='/blog/:id' element={<BlogContentPage blogs={data} />} />
      </Routes>
    </div>
  );
}


