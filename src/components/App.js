
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";  
import { fetchLorem } from "./loremSlice";
import './../styles/App.css';      
  
const App = () => { 
 const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;
  return (
     <div>
      {/* Do not remove the main div */}
      <h1>A short Narration of Lorem Ipsum</h1> 
      <ul>
        <li className="title">Title : {data.title}</li>         
        <li>Body : {data.body}</li>
      </ul>
      <h4>Below Contains A title and Body gotten from a random API, Please take your time to Review</h4>
    </div>
  )
}

export default App
