import Navbar from "../component/sidebar/page";
import Topbar from "../component/navbar/page";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-white">

      <Navbar />

      <div className="flex min-w-0 flex-1 flex-col">

        <div className="sticky top-0 z-50 shrink-0">
          <Topbar />
        </div>

        <main className="min-w-0 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
}