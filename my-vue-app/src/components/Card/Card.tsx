interface MCardProps{
    children: React.ReactNode
    img? : string
};

export const Card = ({children, img}:MCardProps) => {
  return (
    <>
      <img src={img} alt="" />
      {children}
    </>
  )
}