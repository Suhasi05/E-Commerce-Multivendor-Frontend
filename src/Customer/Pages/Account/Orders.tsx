import OrderItems from "./OrderItems"

function Orders() {
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {[1, 1, 1, 1, 1].map(() => <OrderItems />)}
      </div>
    </div>
  )
}

export default Orders
