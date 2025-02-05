import { Divider } from "@mui/material"
import ProfileFieldCard from "../../../Component/ProfileFieldCard"

function UserDetails() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
            <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div>
            <ProfileFieldCard keys="Name" value="Suhasi" />
            <Divider />
            <ProfileFieldCard keys="Email" value="s123@gmail.com" />
            <Divider />
            <ProfileFieldCard keys="Mobile" value="7894512361" />
        </div>
      </div>
    </div>
  )
}

export default UserDetails
