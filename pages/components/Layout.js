// components/Layout.js
import Sidebar from './SideBar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen"> {/* Ensure the layout takes full height */}
      <Sidebar />
      <main className="flex-1 bg-gray-50">{children}</main> {/* Sidebar and main content side-by-side */}
    </div>
  );
}
