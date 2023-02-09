import { useDisplay } from "../../features/home/hooks/use.display";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const context = useDisplay();

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
