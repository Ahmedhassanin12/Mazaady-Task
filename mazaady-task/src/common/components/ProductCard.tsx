import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
type IProductCardProps = {
	image: string;
	prodDescription: string;
	price: number;
};

const ProductCard = ({ image, price, prodDescription }: IProductCardProps) => {
	return (
		<li className="list-row">
			<div>
				<Image
					className="size-28 rounded-box"
					src={image}
					alt="prod"
					width={120}
					height={120}
				/>
			</div>
			<div className="flex flex-col gap-2.5">
				<div className="text-[#333333] text-md sm:text-lg font-normal">
					{prodDescription}
				</div>
				<div className="text-xs uppercase font-semibold opacity-60">
					<p className="text-[#828282]">
						starting price{" "}
						<span className="text-[#333333] font-semibold">{price} EGP</span>
					</p>
				</div>
				<div className="flex items-center flex-wrap sm:flex-nowrap gap-2">
					<p>Lot starts in</p>
					<div className="flex items-center gap-1  py-2 px-4 bg-[#fff5e9] rounded-xl">
						<p className="text-[#FF951D] font-bold">2</p>
						<p className="text-sm font-medium text-[#FF951D]">Days</p>
					</div>
					<div className="flex items-center gap-1  py-2 px-4 bg-[#fff5e9] rounded-xl">
						<p className="text-[#FF951D] font-bold">12</p>
						<p className="text-sm font-medium text-[#FF951D]">Hours</p>
					</div>
					<div className="flex items-center gap-1 py-2 px-4 bg-[#fff5e9] rounded-xl">
						<p className="text-[#FF951D] font-bold">50</p>
						<p className="text-sm font-medium text-[#FF951D]">Mins</p>
					</div>
				</div>
			</div>

			<button type="button" className="btn btn-square btn-ghost">
				<CiHeart className="text-xl" />
			</button>
		</li>
	);
};

export default ProductCard;
