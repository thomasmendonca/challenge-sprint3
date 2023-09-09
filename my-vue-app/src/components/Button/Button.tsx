import './Button.css'

interface ButtonProps{
    children: string
}

export const Buttonn = ({children, ... rest}: ButtonProps) => {
  return(
    <>
        <button 
        className='button'
        {...rest}>
            {children}
        </button>
    </>
  )
}