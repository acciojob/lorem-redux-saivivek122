
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

  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : data ? (
        <>
          <h1>A Short Narration of Lorem Ipsum</h1>
          <h4>
            Below contains a Title and Body from a random API. Please review.
          </h4>
          <ul>
            <li className="title">Title: {data.title}</li>
            <li>Body: {data.body}</li>
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default App
