export const Input = (props) => {
  const { placeholder = "" } = props
  return (
    <input type="text" className="input-text" placeholder={placeholder} />
  )
}