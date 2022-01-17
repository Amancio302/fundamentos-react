export default function cu ({ min, max }) {
  const random = Math.floor(Math.random() * (max - min + 1)) + min
  return (
    <div>
      { random }
    </div>
  )
}
