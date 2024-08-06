import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Staticpage/Dashboard";
import MainApp from "./Staticpage/main";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="global">
          <Dashboard />
        </div>
        <Routes>
          <Route path="/main" element={<MainApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
