import React, { useState } from "react";
import Button from "./Button";

type Props = {};

export default function SearchForm({}: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex m-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="p-2 rounded-lg flex-grow mr-5 w-96 opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
          placeholder="Wpisz szukaną frazę..."
        />

        <Button name="Szukaj" className="w-36" />
      </form>
    </>
  );
}
