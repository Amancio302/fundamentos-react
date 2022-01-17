/* eslint-disable import/no-anonymous-default-export */
import './App.css';

import First from './components/basics/First'
import Second from './components/basics/Second'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

import Card from './components/layout/Card'

import TabelaProdutos from './components/loop/TabelaProdutos';

import IndiretaPai from './components/comunicacao/IndiretaPai';

import Input from './components/form/Input';

import Contador from './components/contador/Contador';

import listaProdutos from './data/listaProdutos'

export default () =>
(
  <div id="app">
    <div className='cards'>
    <Card title="#8" color="#000" background-color="#088088">
      <Contador inicial={10}/>
    </Card>

    <Card title="#7" color="#000" background-color="#088880">
      <Input/>
    </Card>

    <Card title="#6" color="#000" background-color="#880880">
      <IndiretaPai/>
    </Card>

    <Card title="#5" color="#000">
      <TabelaProdutos
        produtos={listaProdutos}
      />
    </Card>

    <Card title="#4" subtitle="Subtitulo aqui" text="Texto de um card qualquer como esse aqui">
      <Random
        min={10}
        max={11}
      />
    </Card>

    <Card title="#3" subtitle="Subtitulo aqui" text="Texto de um card qualquer como esse aqui" background-color="#008">
      <Fragment />
    </Card>

    <Card title="#2" subtitle="Subtitulo aqui" text="Texto de um card qualquer como esse aqui" background-color="#800" color="#12ae12">
      <Second
        title="Segundo componente"
        subtitle="completasso"
        num={9.45}
      />
    </Card>

    <Card title="#1" subtitle="Subtitulo aqui" text="Texto de um card qualquer como esse aqui" background-color="#080">
      <First />
    </Card>
    </div>
  </div>
)
