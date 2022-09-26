import "./App.css";
import About from "./components/Navbar/About/About";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App w-8/12 m-auto">
      <NavBar />
      <div className="welcome h-screen flex justify-center items-center">
        <h1 className="text-white font-extrabold text-5xl">I'm Lord Zeus.</h1>
      </div>
      <About />
    </div>
  );
}

export default App;
