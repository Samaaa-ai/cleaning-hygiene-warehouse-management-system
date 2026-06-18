import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <div className="ml-64">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;