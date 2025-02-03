function DealCard() {
  return (
    <div className="w-[13rem] cursor-pointer">
      <img className="border-x-[7px] border-t-[7px] border-rose-400 w-full h-[12rem] object-cover object-top" src="https://imgs.search.brave.com/rEq5yslHAyHoFhgMOvUB8NSDW1bYMtH82Tr4ED6GWjI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/MzI4Mjg2L3Bob3Rv/L3NtYXJ0d2F0Y2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVuczFVMmZqYzBN/NURJenhXOHFvOFdt/X0s3YWZ4Zk5sd1JX/YWlYczQ2UE09" alt="" />
      <div className="border-4 border-black bg-black text-white p-2 text-center">
        <p className="text-lg font-semibold">Smart Watch</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-balance text-lg">Shop now</p>
      </div>
    </div>
  )
}

export default DealCard
