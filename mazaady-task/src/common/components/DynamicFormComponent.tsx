import { useQuery } from "@tanstack/react-query";
import { type ChangeEvent, useState } from "react";
import type { Category } from "../types/category.type";
import type { ApiResponse } from "../types/globale.type";
import { mazaadyApiClient } from "@/lib/api";

type PropertyOption = {
	id: string;
	name: string;
	child?: boolean;
};

type Property = {
	id: string;
	name: string;
	options: PropertyOption[];
	isRequired?: boolean;
	slug?: string;
	parent?: string;
	type?: string;
};

// Selected values type
type SelectedValue = {
	value: string;
	other?: string;
};

type SelectedValues = Record<string, SelectedValue>;

const DynamicFormComponent = () => {
	// Main categories fetch
	const { data: mainCategories } = useQuery({
		queryKey: ["MAIN_CATEGORY"],
		queryFn: async () => {
			const response =
				await mazaadyApiClient<ApiResponse<Category>>("all-categories/web");
			return response.data;
		},
	});

	const [mainCategory, setMainCategory] = useState<string>("");
	const [selectedValues, setSelectedValues] = useState<SelectedValues>({});
	const [childProperties, setChildProperties] = useState<Property[]>([]);

	// Subcategories fetch
	const { data: subCategories } = useQuery({
		queryKey: ["SUB_CATEGORY", mainCategory],
		queryFn: async () => {
			const response = await mazaadyApiClient<ApiResponse<Property[]>>(
				`properties/${mainCategory}`,
			);
			return response.data;
		},
		enabled: !!mainCategory,
	});

	const handleMainCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setMainCategory(e.target.value);
		setSelectedValues({});
		setChildProperties([]);
	};

	const handlePropertyChange = async (
		propertyId: string,
		optionId: string,
		isParent = false,
	) => {
		const newValues = { ...selectedValues };

		// Clear child properties when parent changes
		if (isParent) {
			setChildProperties([]);
		}

		newValues[propertyId] = { value: optionId };

		if (optionId === "Other") {
			newValues[propertyId].other = "";
		} else {
			// Fetch child properties if exists

			const selectedOption = subCategories?.data
				// @ts-expect-error<s>
				?.find((p) => p.id === propertyId)
				// @ts-expect-error<s>
				?.options.find((o) => o.id === optionId);

			if (selectedOption?.child) {
				const childResponse = await mazaadyApiClient<ApiResponse<Property[]>>(
					`option-properties/${optionId}`,
				);
				// @ts-expect-error<s>
				setChildProperties((prev) => [...prev, ...childResponse.data.data]);
			}
		}

		setSelectedValues(newValues);
	};

	const handleOtherInputChange = (propertyId: string, value: string) => {
		setSelectedValues((prev) => ({
			...prev,
			[propertyId]: {
				...prev[propertyId],
				other: value,
			},
		}));
	};

	const handleSubmit = () => {
		const result = Object.entries(selectedValues).map(
			([propertyId, value]) => ({
				property:
					// @ts-expect-error<s>
					subCategories?.data?.find((p) => p.id === propertyId)?.name ||
					"Unknown",
				value: value.value === "Other" ? value.other : value.value,
			}),
		);

		alert(JSON.stringify(result, null, 2));
	};

	const renderPropertyDropdowns = (properties: Property[]) => {
		return (
			<div className="flex items-center flex-wrap gap-2 w-full">
				{properties.map((property) => (
					<div
						key={property.id}
						className="w-full flex flex-col items-center gap-2"
					>
						<label
							className="w-full font-medium"
							htmlFor={`select-${property.id}`}
						>
							{property.name}
						</label>
						<select
							id={`select-${property.id}`}
							className="w-full p-2 border border-[#e24248] rounded-md outline-0"
							onChange={(e) =>
								handlePropertyChange(property.id, e.target.value, true)
							}
							value={selectedValues[property.id]?.value || ""}
						>
							<option value="">Select {property.name}</option>
							{property.options.map((option) => (
								<option key={option.id} value={option.id}>
									{option.name}
								</option>
							))}
							<option value="Other">Other</option>
						</select>

						{selectedValues[property.id]?.value === "Other" && (
							<>
								<label
									className="w-full text-[#e24248] font-medium"
									htmlFor={`Enter ${property.name}`}
								>
									{`Write ${property.name}`}
								</label>
								<input
									type="text"
									className="w-full p-2  border border-[#e24248] rounded-md outline-0"
									placeholder={`Enter ${property.name}`}
									value={selectedValues[property.id]?.other || ""}
									onChange={(e) =>
										handleOtherInputChange(property.id, e.target.value)
									}
								/>
							</>
						)}
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Filter Products</h2>

			<div className="mb-6">
				<select
					className="w-full mb-4 p-2 border border-[#e24248] rounded-md outline-0"
					onChange={handleMainCategoryChange}
					value={mainCategory}
				>
					<option value="">Select Main Category</option>
					{mainCategories?.data.categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
				{subCategories?.data.length ? (
					<div className="mb-2">
						<h3 className="text-xl font-semibold mb-2">Properties</h3>
						{/*  @ts-expect-error<s> */}
						{renderPropertyDropdowns(subCategories.data)}
						{renderPropertyDropdowns(childProperties)}
					</div>
				) : null}
			</div>

			<button
				type="button"
				className="btn border-0 rounded-xl bg-gradient-to-r from-[#D20653] to-[#FF951D] px-6 py-2 text-white"
				onClick={handleSubmit}
			>
				Submit
			</button>

			{Object.keys(selectedValues).length > 0 && (
				<div className="mt-6">
					<h3 className="text-xl font-semibold mb-4">Selected Values</h3>
					<table className="w-full border-collapse">
						<thead>
							<tr className="bg-gray-100">
								<th className="border p-2">Property</th>
								<th className="border p-2">Value</th>
							</tr>
						</thead>
						<tbody>
							{Object.entries(selectedValues).map(([propertyId, value]) => {
								const propertyName =
									// @ts-expect-error<s>
									subCategories?.data?.find((p) => p.id === propertyId)?.name ||
									childProperties.find((p) => p.id === propertyId)?.name ||
									"Unknown Property";
								return (
									<tr key={propertyId}>
										<td className="border p-2">{propertyName}</td>
										<td className="border p-2">
											{value.value === "Other" ? value.other : value.value}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default DynamicFormComponent;
