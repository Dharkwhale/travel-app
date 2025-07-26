


import {Navbar} from "./components/Navbar";
import {Sidebar} from "./components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
        <div className="flex gap-10 bg-[#f0f2f5] px-4 py-8">
          <Sidebar />
          <main className="main-content flex-1">{children}</main>
        </div>
    </> 
  );
}
