import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full h-[700px]">
    <Image
      src="/cover.jpg"
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      quality={100}
      className="z-[-1]"  // Ensure image stays behind the content
    />
    
    {/* Hero Text */}
    <div className="absolute inset-0 flex flex-col  text-white px-4">
      {/* <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-xl mb-8">Your adventure starts here. Discover more with us.</p> */}
      <Link href="#explore" className="absolute bottom-[200px] right-[420px] bg-bermuda2 text-white px-6 py-2 rounded-lg text-lg">
        اشتراك
      </Link>
    </div>
  </section>
  
  );
}
