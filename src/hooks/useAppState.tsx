import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

const useAppState = () => useContext(AppContext);

export default useAppState;
