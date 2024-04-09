import React, { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export default function AuthInput({
  type,
  label,
  placeholder,
}: AuthInputProps) {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {label}
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block"
        placeholder={placeholder}
      />
    </label>
  );
}
