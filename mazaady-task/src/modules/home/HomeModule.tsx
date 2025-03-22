"use client";
import React from "react";
import OwnerInfo from "./components/OwnerInfo";
import QrCode from "./components/QrCode";
import ProductSection from "./components/ProductSection";
import DynamicFormComponent from "@/common/components/DynamicFormComponent";

const HomeModule = () => {
	return (
		<div className="container  h-full flex flex-col sm:flex-row items-center justify-center py-2 gap-4 overflow-hidden">
			<div className="flex flex-col flex-[100%] w-[90%] sm:w-full sm:flex-[30%] h-full gap-3">
				<div className="bg-white  rounded-xl w-full flex-[50%]">
					<OwnerInfo />
				</div>
				<div className=" bg-white rounded-xl w-full flex-[50%]">
					<QrCode />
				</div>
			</div>
			<div className="bg-white rounded-xl w-[90%] sm:w-full h-full  flex-[100%] sm:flex-[70%] overflow-scroll">
				<DynamicFormComponent />
				<ProductSection />
			</div>
		</div>
	);
};

export default HomeModule;
