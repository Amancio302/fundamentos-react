import './styles/Card.css'

export default function Card (props) {

  const cardStyle = {
    backgroundColor: props['background-color'] || '#888',
    borderColor: props['border-color'] || props['background-color'] || '#888',
    color: props.color || '#000'
  }

  return (
    <div className="outer-card card-outlined" style={cardStyle}>
      <div className="title-text-card title-text-card-outlined">{ props.title } </div>
      <div className="subtitle-text-card subtitle-text-card-outlined"> { props.subtitle } </div>
      <div className="body-text-card">{ props.children }</div>
    </div>
  )
}
