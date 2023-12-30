import "./index.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <div className="App">

      <NavBar items={["Home","Shop","Preg. Frec.","Contacto"]}/>

      <ItemListContainer greeting={"Hola a todos👋👋"}/>

    </div>


  );
}

export default App;
