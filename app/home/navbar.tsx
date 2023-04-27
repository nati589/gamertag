import React from "react";

export default function Navbar() {
  const headers: string[] = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
  ];
  const randHeader: number = Math.floor(Math.random() * 7);
  return (
    <header className="">
      <img
        src={headers[randHeader]}
        alt="Page Header"
        className="object-cover h-52 w-full"
      />
    </header>
  );
}
