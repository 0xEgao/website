const LOGO_SRC = `${import.meta.env.BASE_URL}openswap-bw.svg`

export default function OpenSwapLogo({ className = '', ...props }) {
  return (
    <img
      src={LOGO_SRC}
      alt=""
      aria-hidden="true"
      className={className}
      draggable="false"
      {...props}
    />
  )
}
