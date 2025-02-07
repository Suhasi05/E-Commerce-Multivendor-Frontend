import { Route, Routes } from "react-router-dom"
import Dashboard from "../Seller/Pages/SellerDashboard/Dashboard"
import Products from "../Seller/Pages/Products/Products"
import AddProducts from "../Seller/Pages/Products/AddProducts"
import Order from "../Seller/Pages/Orders/Order"
import Profile from "../Seller/Pages/Account/Profile"
import Payment from "../Seller/Pages/Payment/Payment"
import Transaction from "../Seller/Pages/Payment/Transaction"

function SellerRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProducts />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/inventory" element={<Products />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  )
}

export default SellerRoutes
