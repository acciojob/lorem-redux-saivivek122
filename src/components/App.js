
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
      {/* Intro text */}
      <h1>A short Narration of Lorem Ipsum</h1>

      {/* Display fetched data inside <p> */}
      <p className="title">Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  )
}

export default App
