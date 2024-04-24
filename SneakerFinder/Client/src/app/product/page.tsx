import ProductDescription from "@/containers/ProductDescription";
import ProductInfo from "@/containers/ProductInfo";
import ProductPhotos from "@/containers/ProductPhotos";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Product() {
  return (
    <main>
      <Navbar />
      <div>
        <div className="flex justify-around items-center">
          <ProductPhotos />
          <ProductInfo />
        </div>
        <ProductDescription />
      </div>
      <Footer />
    </main>
  );
}
