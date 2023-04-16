import { BaseButton } from "./BaseButton"

export const SecondaryButton = (props) => {
  const { children } = props
  return (
    <BaseButton className="secondary">{children}</BaseButton>
  )
}