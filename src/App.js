import AddTdL from "./components/Task/AddTdL";
import CardTdL from "./components/Task/CardTdL";


function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="col">
          <AddTdL />
        </div>
      </div>

      <div className="row">
        <div className="col ">
          <CardTdL />
        </div>
      </div>
    </div>
  );
}

export default App;
