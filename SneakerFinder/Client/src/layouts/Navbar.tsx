import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <header>
      <nav
        className="flex items-center justify-center p-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-center space-x-8">
          <Link href="/" passHref>
            <Image src="/logo.png" alt="hhh" width={300} height={300} />
          </Link>

          <Link href="/" className="text-gray-600 hover:text-gray-800 pl-16 ">
            Nowości
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Buty
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Ubrania
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Akcesoria
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Kontakt
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800 pr-16">
            Promocje
          </Link>

          <Button className="" name="Zaloguj się" />
        </div>
      </nav>
    </header>
  );
}
