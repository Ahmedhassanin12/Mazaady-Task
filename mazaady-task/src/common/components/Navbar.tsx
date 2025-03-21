"use client";
import Image from "next/image";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVBAR_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/gifts", label: "Gifts" },
];

const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className="flex items-center justify-center bg-white shadow-sm ">
			<div className="navbar container flex items-center">
				<div className="flex items-center  gap-6 flex-1">
					<div className="flex sm:hidden dropdown dropdown-bottom">
						<button type="button" tabIndex={0}>
							<IoIosMenu className=" text-3xl" />
						</button>
						<ul className="menu dropdown-content bg-gray-50 rounded-box z-1 w-52 p-2 shadow-sm">
							{NAVBAR_LINKS.map((el) => (
								<li
									key={el.label}
									className={`${pathname === el.href ? "font-semibold  text-[#D20653] border-b-3  border-[#D20653]" : "text-[#828282]"} `}
								>
									<Link href={el.href}>{el.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<Image
						src={"https://mazaady.com/images/mazaady-logo.svg"}
						alt="logo"
						width={120}
						height={35}
					/>

					<ul className="hidden sm:flex items-center gap-5">
						{NAVBAR_LINKS.map((el) => (
							<li
								key={el.label}
								className={`${pathname === el.href ? "font-semibold  text-[#D20653] border-b-3  border-[#D20653]" : "text-[#828282]"} `}
							>
								<Link href={el.href}>{el.label}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-3">
							<CiSearch className="text-xl" />
							<IoNotificationsOutline className="text-xl" />
						</div>
						<div className="w-10 rounded-full avatar">
							<Image
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								width={25}
								height={25}
								className="rounded-full"
							/>
						</div>
						<button
							type="button"
							className="hidden sm:flex btn border-0 rounded-xl bg-[linear-gradient(90deg,_#D20653_0%,_#FF951D_100%)]"
						>
							<IoIosAddCircleOutline /> Add new product
						</button>
					</div>
					<div className="hidden sm:flex dropdown dropdown-end">
						<div className="flex items-center gap-2">
							<IoEarthOutline />|<p>En</p>
						</div>
						<ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li>
								<p className="justify-between">
									Profile
									<span className="badge">New</span>
								</p>
							</li>
							<li>
								<p>Settings</p>
							</li>
							<li>
								<p>Logout</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
