import { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState(0)

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {
    setNumero(numero - 1);
  }

  function resetar() {
    setNumero(numero - numero);
  }
  return (
    <div id="contador">
      <div>
        <div>
          <button id="menos" className='botao-contar' onClick={diminuir}>-</button>
        </div>

        <span id="valor" >{numero}</span>

        <div>
          <button id="mais" className='botao-contar' onClick={aumentar}>+</button>
        </div>
      </div>

      <button id="resetar" onClick={resetar}>resetar</button>

    </div>

  )
}

export default App
