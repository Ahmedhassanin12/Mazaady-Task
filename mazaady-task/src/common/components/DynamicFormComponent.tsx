import { mazaadyApiClient } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { type ChangeEvent, useState } from "react";
import type { Category } from "../types/category.type";
import type { PropertyOption, SubCategory } from "../types/subCategory.type";

const DynamicFormComponent = () => {
	const { data: mainCategories } = useQuery({
		queryKey: ["MAIN_CATEGORY"],
		queryFn: async () => {
			const response = await mazaadyApiClient<Category[]>("all-categories/web");

			return response.data;
		},
	});

	const [mainCategory, setMainCategory] = useState("11");
	const { data: subCategories } = useQuery({
		queryKey: ["SUB_CATEGORY"],
		queryFn: async () => {
			const response = await mazaadyApiClient<SubCategory[]>(
				`properties/${mainCategory}`,
			);

			return response.data;
		},
		enabled: !!mainCategory,
	});
	const [subCategoryId, setSubCategoryId] = useState("33");
	const { data: propertyOptions } = useQuery({
		queryKey: ["OPTION_PROPERTIES"],
		queryFn: async () => {
			const response = await mazaadyApiClient<SubCategory[]>(
				`option-properties/${subCategoryId}`,
			);

			return response.data;
		},
		enabled: !!subCategoryId,
	});
	const [properties, setProperties] = useState<PropertyOption[]>([]);
	const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
		{},
	);

	const handleMainCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setMainCategory(e.target.value);
		setSubCategoryId("");
		setProperties([]);
		setSelectedValues({});
	};

	const handleSubCategoryIdChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedSub = e.target.value;
		setSubCategoryId(selectedSub);
		// TODO : fix the type here
		// @ts-expect-error<unknown>
		setProperties(propertyOptions?.[selectedSub] || []);
	};

	const handlePropertyChange = (property: number, value: string) => {
		setSelectedValues((prev) => ({ ...prev, [property]: value }));
	};

	const handleSubmit = () => {
		alert(JSON.stringify(selectedValues, null, 2));
	};

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Filter Products</h2>

			<div className="flex items-center gap-2.5">
				<select
					className="w-full mb-4 p-2 border border-[#e24248] rounded-md outline-0"
					onChange={handleMainCategoryChange}
					value={mainCategory}
				>
					<option value="">Select Main Category</option>
					{mainCategories?.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>

				{mainCategory ? (
					<select
						className="w-full mb-4 p-2 border border-[#e24248] rounded-md outline-0"
						onChange={handleSubCategoryIdChange}
						value={subCategoryId}
					>
						<option value="">Select Subcategory</option>
						{subCategories?.map((subcategory) => (
							<option key={subcategory.id} value={subcategory.id}>
								{subcategory.name}
							</option>
						))}
					</select>
				) : null}
			</div>

			{properties.map((property) => (
				<div key={property.id} className="mb-4">
					<label htmlFor={`select-${property.id}`} className="block mb-1">
						{property.name}
					</label>
					<select
						id={`select-${property}`}
						className="w-full p-2 border border-[#e24248] rounded-md outline-0"
						onChange={(e) => handlePropertyChange(property.id, e.target.value)}
					>
						<option value="">Select {property.name}</option>
						<option value="Other">Other</option>
					</select>
					{selectedValues[property.id] === "Other" && (
						<input
							type="text"
							className="w-full p-2 mt-2 border border-[#e24248] rounded-md outline-0"
							placeholder={`Enter ${property}`}
							onChange={(e) =>
								handlePropertyChange(property.id, e.target.value)
							}
						/>
					)}
				</div>
			))}

			<button
				type="button"
				className="hidden sm:flex btn border-0 rounded-xl bg-[linear-gradient(90deg,_#D20653_0%,_#FF951D_100%)]"
				onClick={handleSubmit}
			>
				Submit
			</button>

			{Object.keys(selectedValues).length > 0 && (
				<table className="mt-4 w-full border">
					<thead>
						<tr>
							<th className="border px-2 py-1">Property</th>
							<th className="border px-2 py-1">Value</th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(selectedValues).map(([key, value]) => (
							<tr key={key}>
								<td className="border px-2 py-1">{key}</td>
								<td className="border px-2 py-1">{value}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default DynamicFormComponent;
