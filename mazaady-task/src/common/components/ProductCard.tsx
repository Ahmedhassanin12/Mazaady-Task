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
				<div className="text-[#333333] text-lg font-normal">
					{prodDescription}
				</div>
				<div className="text-xs uppercase font-semibold opacity-60">
					<p className="text-[#828282]">
						starting price{" "}
						<span className="text-[#333333] font-semibold">{price} EGP</span>
					</p>
				</div>
				<p>Lot starts in</p>
			</div>

			<button type="button" className="btn btn-square btn-ghost">
				<CiHeart className="text-xl" />
			</button>
		</li>
	);
};

export default ProductCard;
