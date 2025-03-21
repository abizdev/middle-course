import { useDispatch } from "react-redux";
import type { AppDispatch } from "../config/store"; // Adjust based on your setup

export const useAppDispatch: () => AppDispatch = useDispatch;
