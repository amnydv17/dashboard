import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-10 bg-white border h-24">
      {/* Logo Section */}
      <div className="flex items-center ml-5">
        <div>
          <Image
            src="/logo.png" // Replace with the path to your logo
            alt="Logo"
            width={180} // Adjust width as needed
            height={70}
            className="object-contain"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white p-2.5 rounded-lg border border-gray-200">
          <div className="w-6 h-6 rounded-full overflow-hidden mr-3 border-black">
            <Image
              src="/Aman.jpg" // Replace with the path to the profile picture
              alt="Profile"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-black font-bold  text-sm">Aman Yadav</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
