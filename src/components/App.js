
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
       <h1>Welcome to Lorem Redux</h1> 
      <ul>
        <li>{data.title}</li>         
        <li>{data.body}</li>
      </ul>
    </div>
  )
}

export default App
