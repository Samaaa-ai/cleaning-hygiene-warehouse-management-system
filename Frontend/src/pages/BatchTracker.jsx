import Layout from "../components/Layout";

function BatchTracker() {
  return (
    <Layout>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Batch Tracker</h1>
        <p className="text-gray-500">
          Monitor expiry dates and stock batches
        </p>
      </div>
    </Layout>
  );
}

export default BatchTracker;