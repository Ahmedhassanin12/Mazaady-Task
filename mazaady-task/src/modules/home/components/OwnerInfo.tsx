import Image from "next/image";
import UserImage from "../../../../public/2d50fb172fe960160bb083cc04daa842.jpeg";
import UserStatics from "@/common/components/UserSatitics";
import { CiUser } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

const OwnerInfo = () => {
	return (
		<div className="p-4">
			<Image
				width={90}
				height={40}
				className="h-[80px] object-cover rounded-xl"
				src={UserImage.src}
				alt="User"
			/>
			<h4 className="font-bold py-1 ">Hala Ahmed</h4>
			<p className="text-[#4f4f4f]">
				I am Hala Ahmed, I am the owner of the local brand called Beauty which
				is for Mackeup and Skin Care.
			</p>

			<div className="w-full flex flex-wrap sm:flex-nowrap  gap-2 py-5">
				<UserStatics icon={<CiUser />} label="Following" count={15} />
				<UserStatics icon={<FiUsers />} label="Followers" count={20} />
				<UserStatics icon={<CiStar />} label="rate" count={4} />
			</div>

			<button
				type="button"
				className="w-full flex btn border-0 rounded-xl bg-[linear-gradient(90deg,_#D20653_0%,_#FF951D_100%)]"
			>
				follow
			</button>
		</div>
	);
};

export default OwnerInfo;
