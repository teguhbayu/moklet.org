import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
 
export const metadata: Metadata = {
  title: 'Not Found'
};
export default function NotFound() {
  return (
    <section className="min-h-[744px] w-full">
    <div className="w-full">
      <Link href={"/"}>
        <Image
          src={"/horizontal.svg"}
          alt="Logo"
          width={110}
          height={40}
          className="pointer-events-none h-[40px] w-[110px]"
        />
      </Link>
    </div>
    <div className="relative w-full"></div>
  </section>
  )
}