import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector