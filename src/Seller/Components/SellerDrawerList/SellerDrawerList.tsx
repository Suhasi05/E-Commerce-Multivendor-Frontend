import { AccountBalanceWallet, AccountCircle, Add, Dashboard, Inventory, Logout, Receipt, ShoppingBag } from "@mui/icons-material";
import DrawerList from "../../../Component/DrawerList";

const menu = [
    {
        name: "Dashboard",
        path: "/seller",
        icon: <Dashboard className="text-primary-color" />,
        activeIcon: <Dashboard className="text-white" />
    }, 
    {
        name: "Orders",
        path: "/seller/orders",
        icon: <ShoppingBag className="text-primary-color" />,
        activeIcon: <ShoppingBag className="text-white" />
    }, 
    {
        name: "Products",
        path: "/seller/products",
        icon: <Inventory className="text-primary-color" />,
        activeIcon: <Inventory className="text-white" />
    }, 
    {
        name: "Add Product",
        path: "/seller/add-product",
        icon: <Add className="text-primary-color" />,
        activeIcon: <Add className="text-white" />
    }, 
    {
        name: "Payment",
        path: "/seller/payments",
        icon: <AccountBalanceWallet className="text-primary-color" />,
        activeIcon: <AccountBalanceWallet className="text-white" />
    }, 
    {
        name: "Transaction",
        path: "/seller/transaction",
        icon: <Receipt className="text-primary-color" />,
        activeIcon: <Receipt className="text-white" />
    }, 
];

const menu2 = [
    {
        name: "Account",
        path: "/seller/account",
        icon: <AccountCircle className="text-primary-color" />,
        activeIcon: <AccountCircle className="text-white" />
    },
    {
        name: "Logout",
        path: "/logout",
        icon: <Logout className="text-primary-color" />,
        activeIcon: <Logout className="text-white" />
    }
];

function SellerDrawerList({toggleDrawer}: {toggleDrawer: any}) {
  return (
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
  )
}

export default SellerDrawerList
