import viteLogo from '/vite.svg'
import './App.css'
import RemoteComponentWrapper from "./components/RemoteWrapperComponent";

function App() {
  return (
    <>
      <div className="px-6 border-2">
        <div className="flex justify-center items-center">
          <img src={viteLogo} alt="Example" />
        </div>
        <h1 className="text-2xl">Host Application</h1>
        <p>
          {" "}
          Welcome to the Host application, below are the components pulled from
          the remote application
        </p>
        <RemoteComponentWrapper />
      </div>
    </>
  );
}

export default App
