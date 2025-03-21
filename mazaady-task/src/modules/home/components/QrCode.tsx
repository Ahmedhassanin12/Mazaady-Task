import React from "react";
import { FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import Image from "next/image";
import QRCode from "react-qr-code";

const QrCode = () => {
	return (
		<div className="p-4 h-full">
			<div className="flex items-center justify-between pb-2">
				<h5 className="font-bold">QR Code</h5>
				<div className="flex items-center gap-2">
					<FaEye className="text-xl" />
					<CiShare2 className="text-xl" />
					<CiSaveDown2 className="text-xl" />
				</div>
			</div>
			<div className="flex items-center gap-1 p-3 py-5 w-full bg-[#fff5e9] rounded-xl">
				<CiStickyNote />
				<p className="text-sm font-medium text-[#333333]">
					Download the QR code or share it with your friends.
				</p>
			</div>
			<div className="max-w-md rounded-3xl p-[16px]  bg-gradient-to-b from-[#D20653] to-[#FF951D] mt-2">
				<div className="flex items-center justify-center flex-col rounded-[calc(1.5rem-1px)] p-2  bg-white">
					<Image
						src={"https://mazaady.com/images/mazaady-logo.svg"}
						alt="logo"
						width={120}
						height={35}
					/>

					<h4 className="font-bold py-1 ">Hala Ahmed</h4>

					<QRCode
						size={150}
						// style={{ height: "auto", maxWidth: "100%", width: "100%" }}
						value={"s"}
						viewBox={"0 0 256 256"}
					/>
					<p className="text-[#363333]">Follow Us on Mazaady</p>
				</div>
			</div>
		</div>
	);
};

export default QrCode;
