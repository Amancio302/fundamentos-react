export default function IndiretaFilho (props) {
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={() => props.generate('José', 49, true)}
      >
        Gerar
      </button>
    </div>
  )
}