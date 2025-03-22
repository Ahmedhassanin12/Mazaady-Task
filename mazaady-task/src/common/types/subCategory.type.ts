export type PropertyOption = {
  "id": number,
  "name": string,
  "has_child": boolean
}

export type SubCategory = {
  "id": number,
  "name": string,
  "type": string,
  "parent_id": string | null,
  options: PropertyOption[]
}