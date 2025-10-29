import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "./loremSlice";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      {loading && !data && (
        <h4>Loading...</h4>
      )}

      {!loading && data && (
        <>
          <h1>A short Naration of Lorem Ipsum</h1>
          <h4>
            Below Contains A title and Body gotten froma random API, Please take your time to Review
          </h4>
          <ul>
            <li>
              <span className="title">Title: {data.title}</span>
            </li>
            <li>Body: {data.body}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
