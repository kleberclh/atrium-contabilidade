import Chamada from "./components/Chamada";
import Receba from "./components/Chamada/Receba";
import Servicos from "./components/Chamada/Servicos";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Valores from "./components/Valores";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Chamada />
      <Servicos />
      <Receba />
      <Valores />
    </div>
  );
}

export default App;
