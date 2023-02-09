import { createContext } from "react";
import { useDisplayStructure } from "../../features/home/hooks/use.display";

export const AppContext = createContext({} as useDisplayStructure);
