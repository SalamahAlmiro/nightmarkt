export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-purple-950 text-white fixed top-0 left-0 flex flex-col p-4">
      <p className="text-[35px] text-purple-900 font-bold mb-6">NightMarkt</p>
      <ul className="space-y-4">
        <li><a href="#" className="hover:text-purple-400">Dashboard</a></li>
        <li><a href="#" className="hover:text-purple-400">Products</a></li>
        <li><a href="#" className="hover:text-purple-400">Orders</a></li>
        <li><a href="#" className="hover:text-purple-400">Settings</a></li>
      </ul>
    </div>
  );
}