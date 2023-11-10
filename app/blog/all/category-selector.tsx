import type { Category } from "@prisma/client";

export interface CategorySelectorProps {
  categories: Category[];
  selectCategory: (id: number | null) => void;
  selectedCategoryId: number | null;
}

export function CategorySelector({
  categories,
  selectCategory,
  selectedCategoryId,
}: CategorySelectorProps) {
  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div className="my-4 flex flex-col justify-center">
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => selectCategory(category.id)}
            className={`mb-4 mr-4 inline-block rounded-full px-4 py-2 text-xl text-white ${
              bgClasses[index]
            } ${selectedCategoryId === category.id ? "neo-shadow" : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCategoryId ? (
        <button
          className="cursor-pointer underline"
          key="remove selection"
          onClick={() => selectCategory(null)}
        >
          Remove Selection
        </button>
      ) : null}
    </div>
  );
}
