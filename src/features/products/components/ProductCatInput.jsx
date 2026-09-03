import React from "react";
import Select from "react-select";

const categoryOptions = [
  { value: "Electronics", label: "Electronics" },
  { value: "Books", label: "Books" },
  { value: "Clothing", label: "Clothing" },
  { value: "Games", label: "Games" },
  { value: "Home & Kitchen", label: "Home & Kitchen" },
  { value: "Beauty", label: "Beauty" },
  { value: "Sports", label: "Sports" },
  { value: "Toys", label: "Toys" },
  { value: "Art & Collectibles", label: "Art & Collectibles" },
  { value: "Music", label: "Music" },
];

const selectStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    minWidth: "20rem",
    height: "2.75rem",
    paddingLeft: "0.2rem",
    backgroundColor: state.isFocused ? "white" : "rgba(255, 255, 255, 0.5)",
    borderRadius: "0.25rem",
    borderColor: "transparent",
    boxShadow: state.isFocused
      ? "0 0 0 2px rgb(17, 16, 98), 0 10px 15px -3px rgba(11, 9, 94, 0.5)"
      : undefined,
    transition: "all 0.2s ease",
    "&:hover": state.isFocused ? {
      cursor: "pointer"
    }
    
    : {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow:
        "0 10px 15px -3px rgba(10, 5, 102, 0.4), 0 4px 6px -4px rgba(0,0,0,0.1)",
      cursor: "pointer"
    },
    
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#4b5563", 
    "&:hover": {
      color: "#4b5563", 
    },
  }),

  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "#4b5563",
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#020222", 
    color: "white",
    zIndex: 10,
    borderRadius: "0.25rem",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? "rgba(11, 3, 88, 0.3)"
      : "transparent",
    color: "white",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  }),
};

export default function ProductCatInput ({ value, onChange, label = "Category" }) {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor="category" className="text-gray-300 text-lg">{label}</label>
            <Select
                inputId="category"
                placeholder=""
                aria-label="Product Category"
                options={categoryOptions}
                value={categoryOptions.find((opt) => opt.value === value)}
                onChange={(selectedOption) => onChange(selectedOption.value)}
                styles={selectStyles}
                isSearchable={true}
            />
    </div>
    );
}