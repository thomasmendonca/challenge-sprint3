interface MCardProps{
    chidren: React.ReactNode
};

export const MemberCard = ({children}:MCardProps) => {
  return <div className="card">{children}</div>
}