import UserAddressCard from "./UserAddressCard"

function Address() {
  return (
    <div className="space-y-3">
      {[1, 1, 1, 1, 1, 1].map(() => <UserAddressCard />)}
    </div>
  )
}

export default Address
