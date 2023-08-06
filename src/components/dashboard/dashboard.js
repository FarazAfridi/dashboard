import DashboardTable from "./dashboardTable";
import Sidebar from "./sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardTable />
    </div>
  );
}
