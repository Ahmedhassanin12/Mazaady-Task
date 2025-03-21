import HomeModule from "@/modules/home/HomeModule";

export default function Home() {
	return (
		<main className="mt-[60px] sm:h-[calc(100vh-60px)] overflow-auto flex justify-center p-2.5">
			<HomeModule />
		</main>
	);
}
