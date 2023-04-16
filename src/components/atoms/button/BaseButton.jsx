export const BaseButton = (props) => {
  const { children } = props
  return (
    <button className="btn">{children}</button>
  )
}