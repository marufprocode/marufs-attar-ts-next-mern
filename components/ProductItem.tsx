import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }: any) => {
  return (
    <div className="flex items-center justify-center w-72 max-w-full sm:w-80">
      <div className="w-full p-3">
        <div className="flex flex-col justify-center p-7 bg-white rounded-lg shadow-xl min-h-[450px] h-fit relative">
          <div className="prod-title absolute top-0 left-0 right-0 w-full p-5">
            <p className="text-xl font-bold text-gray-900 uppercase">{product.name}</p>
            <p className="text-sm text-gray-400 uppercase">
              {product?.brand}
            </p>
          </div>
          <div className="prod-img">
            <Image
              src={product?.image}
              className="object-cover w-full h-[260px]"
              alt="ProductImage"
              width="292"
              height="357"
              placeholder="blur"
              blurDataURL="../assets/products-images/BlurImage.jpg"
            />
          </div>
            <div className="absolute bottom-0 right-0 w-full flex flex-col items-center justify-between text-gray-900 md:flex-row p-5">
              <p className="text-xl font-bold">{product?.price} $</p>
              <Link href={`/products/${product?.productId}`} className="pdt-details-btn">
                View Details
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
