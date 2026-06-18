import Layout from "../components/Layout";

function Orders() {
  return (
    <Layout>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-gray-500">
          Manage customer orders and dispatches
        </p>
      </div>
    </Layout>
  );
}

export default Orders;