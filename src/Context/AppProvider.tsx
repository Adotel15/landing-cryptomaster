import { createContext, useEffect, useState } from "react";

type typeState = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  scAddress: string;
};

export const AppContext = createContext<typeState>({
  address: "",
  setAddress: () => {},
  scAddress: "",
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string>("");
  const [scAddress, setScAddress] = useState<string>("");

  useEffect(() => {
    handleGetSC();
  }, []);

  const handleGetSC = async () => {
    try {
      const apiCall = await fetch("http://localhost:3000/api/get-sc-address", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await apiCall.json();
      setScAddress(response.address);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider value={{ address, setAddress, scAddress }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
