import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
export default function Navbar() {
  return (
    <nav className="p-2 shadow-sm bg-bermuda">
      <div className="container mx-auto flex justify-between items-center">
        <div><Image src="/logo2.png" alt="Logo" width={200} height={200}/></div>
     
        <div className="hidden lg:flex items-center">
         

          <Link href="/" className="text-slate-900 hover:text-slate-500 mr-6">
            الرئيسية
          </Link>

          <Link href="/" className="text-slate-900 hover:text-slate-500 mr-6">
            الفديوهات
          </Link>

          <Link href="/" className="text-slate-900 hover:text-slate-500 mr-6">
            المنشورات
          </Link>
          <Link href="/" className="text-slate-900 hover:text-slate-500 mr-6">
            من نحن
          </Link>
          <Link href="/" className="text-slate-900 hover:text-slate-500 mr-6">
            تواصل معنا
          </Link>
          {/* <Link href="/" className="text-white py-2 px-6 mr-6 rounded-full bg-bermuda2">
            اشترك
          </Link> */}
        </div>
        {/* <div className="flex items-center">
          <Link href="/signup">
            <FaFacebook className="h-6 w-6 mr-6 text-blue-500" />
          </Link>
          <Link href="/signup">
            <FaInstagramSquare className="h-6 w-6 mr-6 text-pink-500" />
          </Link>
          <Link href="/signup">
            <IoLogoYoutube className="h-6 w-6 mr-6 text-red-500" />
          </Link>
          <Link href="/signup">
            <AiFillTikTok className="h-6 w-6 mr-6 text-black-500" />
          </Link>
          <Link href="/signup">
            <FaTelegram className="h-6 w-6 mr-6 text-blue-600" />
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
