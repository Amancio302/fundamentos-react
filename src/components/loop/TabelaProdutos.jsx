/* eslint-disable import/no-anonymous-default-export */
export default props => {
  const produtos = props.produtos.map(produto => {
    return (
      <li key={produto.id}>
          {produto.nome} ({produto.id}) - {produto.preco.toLocaleString(undefined, { style: 'currency', currency: 'BRL' })}
      </li>
    )
  })
  return (
    <div>
      <ul style={{
        listStyle: 'none'
      }}>
        {produtos}
      </ul>
    </div>
  )
}
