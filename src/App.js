import "./App.css";
import DogListWithInput from "./Components/DogListWithInput";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Link to="/dogs-search">Home</Link>
                </div>
              }
            />
            <Route path="/dogs-search" element={<DogListWithInput />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
