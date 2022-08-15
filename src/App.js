import logo from './logo.svg';
import './App.css';
import actions from "./components/data";
function App() {

  return (
    <div >
      {
        actions.shortcutdata.map((s) => {
          return (<h1>{s.name}</h1>)

        })
      }
    </div>
  );
}

export default App;
