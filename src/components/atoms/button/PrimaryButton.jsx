import { BaseButton } from "./BaseButton"

export const PrimaryButton = (props) => {
  const { children } = props
  return (
    <BaseButton className="primary">{children}</BaseButton>
  )
}