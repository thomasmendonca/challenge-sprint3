interface MCardProps{
    children: React.ReactNode
};

export const MemberCard = ({children}:MCardProps) => {
  return <div className="card">{children}</div>
}