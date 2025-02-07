import DrawerList from "../../Component/DrawerList"

function AdminDrawerList({menu, menu2, toggleDrawer}: any) {
  return (
    <div>
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default AdminDrawerList
