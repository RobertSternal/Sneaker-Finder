import BrandsCard from "@/components/BrandsCard";
import H1 from "@/components/H1";
import React from "react";

export default function PopularBrands() {
  return (
    <>
      <H1 className="px-12">Popularne Marki</H1>
      <div className="flex space-x-10 text-center justify-center">
        <BrandsCard name="Nike" />
        <BrandsCard name="Nike" />
        <BrandsCard name="Nike" />
        <BrandsCard name="Nike" />
      </div>
    </>
  );
}
