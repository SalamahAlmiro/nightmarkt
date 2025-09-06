import "../index.css";


function Header() {


  return (
    <header className="bg-gradient-to-r from-gray-950 to-blue-900 p-2 flex items-center justify-between z-10">
      <div className="flex items-between gap-2">
          <a href="/" className="text-4xl text-gray-300 font-bold font-[Trebuchet_MS]">
            Market<span className="text-[#3f96e3]">Place</span>
         </a>
      </div>
    </header>
  );
}

export default Header;



