import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPlaces from "./pages/AddPlaces";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Outlets */}
        <Route index element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addPlace" element={<AddPlaces />} />
      </Route>
    </Routes>
  );
}
