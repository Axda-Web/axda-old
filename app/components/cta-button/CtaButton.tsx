import { ComponentPropsWithoutRef } from "react"

type CtaButtonProps = ComponentPropsWithoutRef<'button'>

const CtaButton = ({ type, disabled, children }: CtaButtonProps) => {
  return (
    <button type={type} disabled={disabled} className="uppercase border-b-2 border-secondary pb-2.5 font-bold hover:text-secondary transition-colors duration-300">{children}</button>
  )
}

export default CtaButton