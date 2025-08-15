import React from "react";
import { productsData } from "./productsData";
import Image from "next/image";

interface Props {}

const Products = (props: Props) => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 mx-auto max-w-7xl py-20">
      <div className="text-center mb-16">
        <p className="text-primary font-bold mb-1">Best for you</p>
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
          Our Beverages
        </h2>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productsData.map((product) => (
          <li key={product.name}>
            <article className="group">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={`${product.name} - product image`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.06] group-hover:rotate-[2.5deg]"
                  sizes="(min-width: 1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  loading="lazy"
                  draggable={false}
                />
              </div>
              <div className="text-center py-6">
                <p className="text-lg font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">{product.tagline}</p>
              </div>
            </article>
          </li>
          //   <div key={product.name}>
          //     <div className="relative w-[300px] h-[450px] lg:h-[500px]">
          //       <Image
          //         src={product.image}
          //         fill
          //         alt={product.name}
          //         className="rounded-md"
          //       />
          //     </div>
          //     <div className="text-center py-6">
          //       <p className="text-center">{product.name}</p>
          //       <p>{product.tagline}</p>
          //     </div>
          //   </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
