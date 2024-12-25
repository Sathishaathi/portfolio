function ProfileImage() {
  return (
    <div className="relative">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent" />
        <img 
          src="/your-profile.jpg" 
          alt="Sathish - Mechanical Product Design Engineer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default ProfileImage