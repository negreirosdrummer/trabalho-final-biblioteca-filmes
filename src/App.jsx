import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
