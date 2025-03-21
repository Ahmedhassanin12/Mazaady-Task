import type { JSX } from "react";

const UserStatics = ({
	label,
	icon,
	count,
}: { label: string; icon: JSX.Element; count: number }) => {
	return (
		<div className="flex items-center gap-4 bg-[#fff5ea] min-w-[150px] px-3 py-1 rounded-2xl">
			{icon}
			<div className="flex flex-col">
				<p className="font-bold">{count}</p>
				<p className="font-semibold text-[#FF951D]">{label}</p>
			</div>
		</div>
	);
};

export default UserStatics;
