import "./App.css";

//components
import Navbar from "./components/Navbar";
import Crud from "./components/Homepage";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
