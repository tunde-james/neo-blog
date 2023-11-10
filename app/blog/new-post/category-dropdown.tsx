"use client";

import { useState } from "react";

type SelectOption = {
  id: number;
  name: string;
};

interface Props {
  list: SelectOption[];
  selected: number | null;
  setSelected: (select: number) => void;
}

function CategoryDropdown({ list, selected, setSelected }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  function toggleOpenCategory() {
    setOpen((prevOpen) => !prevOpen);
  }

  function selectOption(id: number) {
    setSelected(id);
    setOpen(false);
  }

  const currentSelection = list.find((item) => item.id === selected) || {
    name: "Select a category",
  };

  return (
    <div className="my-6">
      <button
        type="button"
        onClick={toggleOpenCategory}
        className="rounded-md border bg-yellow-500 px-3 py-3"
      >
        {currentSelection.name}
      </button>
      {open ? (
        <div className="neo-shadow absolute mt-2 rounded-md border bg-white">
          {list.map((item) => (
            <div
              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
              key={item.id}
              onClick={() => selectOption(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default CategoryDropdown;
