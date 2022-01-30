import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import CreateCollectible from "./components/CreateCollectible";
import CreateForm from "./components/CreateForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/create-collectible"
            element={<CreateCollectible />}
          ></Route>
          <Route exact path="/create-form" element={<CreateForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
