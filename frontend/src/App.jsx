import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;