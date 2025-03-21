"use client";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import outfit from "../../../../public/outfit.jpeg";
import outfit2 from "../../../../public/outfit2.jpeg";
import outfit3 from "../../../../public/e6c6f653a71f3343ab26fca8d573f90e.jpeg";
import ProductCard from "@/common/components/ProductCard";

type BtnType = "Products" | "Articles" | "Reviews";

const ProductSection = () => {
	const [activeBtn, setActiveBtn] = useState<BtnType>("Products");
	return (
		<div className="p-4">
			<div className="flex items-center justify-between">
				<div className="flex gap-1.5">
					<button
						type="button"
						className={`btn btn-outline rounded-2xl ${activeBtn === "Products" ? "bg-[#FFF5E9] text-[#FF951D]" : "bg-[#ffffff] text-gray-400 border-1"}  border-0 `}
						onClick={() => setActiveBtn("Products")}
					>
						Products
					</button>
					<button
						type="button"
						className={`btn btn-outline rounded-2xl ${activeBtn === "Articles" ? "bg-[#FFF5E9] text-[#FF951D]" : "bg-[#ffffff] text-gray-400 border-1"}  border-0 `}
						onClick={() => setActiveBtn("Articles")}
					>
						Articles
					</button>
					<button
						type="button"
						className={`btn btn-outline rounded-2xl ${activeBtn === "Reviews" ? "bg-[#FFF5E9] text-[#FF951D]" : "bg-[#ffffff] text-gray-400 border-1"}  border-0 `}
						onClick={() => setActiveBtn("Reviews")}
					>
						Reviews
					</button>
				</div>

				<button
					type="button"
					className="hidden sm:flex btn border-0 rounded-xl bg-[linear-gradient(90deg,_#D20653_0%,_#FF951D_100%)]"
				>
					<IoIosAddCircleOutline /> Add Review
				</button>
			</div>
			<h3 className="py-2 text-2xl font-bold">Products</h3>
			<ul className="list  rounded-box shadow-md">
				<ProductCard
					image={outfit.src}
					prodDescription="Six-piece clothing set (blouse - pants - hat and ..."
					price={1000}
				/>
				<ProductCard
					image={outfit2.src}
					prodDescription="Six-piece clothing set (blouse - pants - hat and ..."
					price={600}
				/>
				<ProductCard
					image={outfit3.src}
					prodDescription="Six-piece clothing "
					price={400}
				/>
			</ul>
		</div>
	);
};

export default ProductSection;
