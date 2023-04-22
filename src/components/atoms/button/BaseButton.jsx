export const BaseButton = (props) => {
  const { children, onClick } = props
  return (
    <button onClick={onClick} className="btn">{children}</button>
  )
}