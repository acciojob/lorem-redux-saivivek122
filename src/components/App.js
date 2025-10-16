
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

  if (loading){
    return <h4>Loading...</h4>;
      }
  if (error) {
    return <p>Error: {error}</p>;
      }
  if (!data) {
    return null;
  }
  return (
    <div>
     
      {/* Do not remove the main div */}{" "}
      <h1>A short Naration of Lorem Ipsum</h1>{" "}
      <h4>
        Below Contains A title and Body gotten froma random API, Please take
        your time to Review
      </h4>
      <ul>
        <div  className="title">
        <li>Title : {data.title}</li>
          </div>
        <li>Body : {data.body}</li>
      </ul>
    </div>
  )
}

export default App
