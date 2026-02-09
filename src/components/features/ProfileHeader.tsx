interface ProfileHeaderProps {
  name: string
  email: string
  avatarUrl?: string
}

export function ProfileHeader({ name, email }: ProfileHeaderProps) {
  const initials = name.slice(0, 2)

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-500 to-blue-600 px-4 pb-8 pt-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-white bg-white/30 text-lg font-bold text-white">
        {initials}
      </div>
      <h1 className="mt-3 text-lg font-bold text-white">{name}</h1>
      <p className="mt-0.5 text-[13px] text-white/70">{email}</p>
    </div>
  )
}
