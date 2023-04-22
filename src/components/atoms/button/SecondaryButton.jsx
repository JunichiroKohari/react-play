import { BaseButton } from "./BaseButton"

export const SecondaryButton = (props) => {
  const { children, onClick } = props
  return (
    <BaseButton onClick={onClick} className="secondary">{children}</BaseButton>
  )
}