import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-5 mt-6">
      <div className="flex justify-evenly items-center border-b border-gray-700 py-11">
        <div className="flex flex-col">
          <a href="/o-nas" className="mb-2">
            O Nas
          </a>
          <a href="/autentycznosc">Autentyczność</a>
          <a href="/faq" className="mt-2">
            FAQ
          </a>
        </div>
        <div className="flex flex-col">
          <a href="/zwroty-i-wymiany" className="mb-2">
            Zwroty i wymiany
          </a>
          <a href="/polityka-prywatnosci">Polityka Prywatności</a>
          <a href="/regulamin" className="mt-2">
            Regulamin
          </a>
        </div>
        <div className="flex flex-col">
          <a href="/reklamacje" className="mb-2">
            Reklamacje
          </a>
          <a href="/kontakt">Kontakt</a>
        </div>
        <div className="flex flex-col items-center">
          <a href="mailto:orders@sneakersjoint.com" className="mb-2">
            orders@sneakerfinder.com
          </a>
          <a href="tel:+48571285098">+48 571 285 098</a>
          <p className="mt-2">Poniedziałek – piątek od 9:00 do 18:00</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-3 my-5">
        <a
          href="https://www.facebook.com"
          aria-label="Facebook"
          className="hover:opacity-75"
        >
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={50}
            height={50}
            className="bg-slate-50"
          />
        </a>
        <a
          href="https://www.instagram.com"
          aria-label="Instagram"
          className="hover:opacity-75"
        >
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={50}
            height={50}
            className="bg-slate-50"
          />
        </a>
        <a
          href="https://www.tiktok.com"
          aria-label="TikTok"
          className="hover:opacity-75"
        >
          <Image
            src="/icons/tiktok.svg"
            alt="TikTok"
            width={50}
            height={50}
            className="bg-slate-50"
          />
        </a>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-2 text-xs">
          <p>English</p>
          <p>|</p>
          <p>Polish</p>
        </div>
        <div className="flex-1 text-center text-xs">
          <p>©2023 Sneakers Joint. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
