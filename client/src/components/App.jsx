import React, {  useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import { useDispatch } from "react-redux";
import { getNotes } from "../actions/notes.js";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

  return (
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;