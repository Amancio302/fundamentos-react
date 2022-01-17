import React, { useState } from "react"

import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai (props) {
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)

  return (
    <div>
      <div>Pai</div>
      <div>
        {nome} - {idade} anos - {nerd ? 'Sim' : 'Não'}
      </div>
      <IndiretaFilho
        generate={(nome, idade, nerd) => {
          setNome(nome)
          setIdade(idade)
          setNerd(nerd)
        }}
      />
    </div>
  )
}