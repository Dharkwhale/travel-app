


import {Navbar} from "./components/Navbar";
import {Sidebar} from "./components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        <div className="flex gap-10 bg- px-4 py-8">
          <Sidebar />
          <main className="main-content flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
