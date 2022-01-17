import { Component } from 'react'

export default class Contador extends Component {

  state = {
    contador: 0
  }

  constructor (props) {
    super(props)
    this.state.contador = props.inicial
  }

  increment = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  subtract = () => {
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render () {
    return (
      <div>
        <h2>Contador</h2>
        <h4>{this.state.contador}</h4>
        <div>
          <button onClick={this.subtract}>Subtrair</button>
          <button onClick={this.increment}>Somar</button>
        </div>
      </div>
    )
  }
}
