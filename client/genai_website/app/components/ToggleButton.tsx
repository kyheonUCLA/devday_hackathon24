"use client";
import { Dispatch, SetStateAction } from "react";

export default function ToggleButton({ isParentDark, setParentDark }: { isParentDark: boolean, setParentDark: Dispatch<SetStateAction<boolean>> }) {
  return (
    <input type="checkbox" onChange={() => setParentDark(!isParentDark)}></input>
  )
}