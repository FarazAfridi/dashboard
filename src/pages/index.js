import { Poppins } from "next/font/google";
import Dashboard from "@/components/dashboard/dashboard";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Header />
      <Dashboard />
    </main>
  );
}
