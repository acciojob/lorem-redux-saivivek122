
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;
  return (
    <div>
        {/* Do not remove the main div */}
       <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  )
}

export default App
