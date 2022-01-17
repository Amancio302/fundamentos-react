import { useState } from "react"

import './style/Input.css'

export default function Input (props) {

  const [valor, setValor] = useState('Inicial')

  function onInput (e) {
    setValor(e.target.value)
  }

  return (
    <div>
      <input
        className="input"
        type="text"
        value={valor}
        onInput={onInput}
      />
    </div>
  )
}