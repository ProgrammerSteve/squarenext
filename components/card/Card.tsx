import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  alt: string;
  src: string;
  quantity: number;
  price: number;
}

const Card: React.FC<Props> = ({ name, alt, src, quantity, price }) => {
  return (
    <div className=" w-64 xxs:w-80 xs:w-52 sm:w-64 md:w-52 lg:w-56 xl:w-56 aspect-[2/3] bg-slate-200 rounded-2xl hover:ring-4 hover:scale-105 cursor-pointer">
      <div className="relative aspect-[2/3] w-full overflow-clip rounded-t-2xl">
        <Image alt={alt} src={src} layout="fill" />
      </div>
      <div className="text-2xl px-3">{name}</div>

      <div className="grid grid-cols-2 justify-between px-3">
        <div className="col-span-1 ">
          Price:{" "}
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>

        <div className="col-span-1 pb-2">
          <div className="text-right">Qty: {quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
