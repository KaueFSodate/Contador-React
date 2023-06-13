import { useState } from "react";
import "./App.css"

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () =>{
    setContador(contador + 1);
  }

  const zerar = () =>{
    setContador(0);
  }
  return (
    <div className="Contador">
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={incrementar} className="incrementar">Acrescentar</button>
      <button onClick={zerar} className="zerar">Zerar</button>
    </div>
  );
}

export default App;
