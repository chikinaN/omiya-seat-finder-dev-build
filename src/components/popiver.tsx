"use client"

import type { ReactNode } from "react";
import { useState } from "react"

export function Popover({
  title,
  children
} : {
  title: ReactNode,
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded hover:bg-gray-100 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-md rounded z-10">
          {children}
        </div>
      )}
    </div>
  )
}