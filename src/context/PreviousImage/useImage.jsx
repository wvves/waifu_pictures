import { useContext } from "react";
import { PreviousImageContext } from "./PreviousImageContext";

export const useImage = () => useContext(PreviousImageContext);