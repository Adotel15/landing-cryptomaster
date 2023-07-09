import { createContext, useEffect, useState } from "react";
import Web3 from "web3";
import contractABI from "../contract/MyToken.json";

type typeState = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  scAddress: string;
  buildContract: () => Promise<any>;
};

export const AppContext = createContext<typeState>({
  address: "",
  setAddress: () => {},
  scAddress: "",
  buildContract: () => Promise.resolve(),
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string>("");
  const [scAddress, setScAddress] = useState<string>("");

  useEffect(() => {
    handleGetSC();
  }, []);

  const handleGetSC = async () => {
    try {
      const apiCall = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + "/api/get-sc-address",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await apiCall.json();
      setScAddress(response.address);
    } catch (error) {
      console.log(error);
    }
  };

  const buildContract = async () => {
    const web3 = new Web3(window.ethereum);
    const SCABI = contractABI;
    const contract = new web3.eth.Contract(SCABI, scAddress);
    return contract;
  };

  return (
    <AppContext.Provider
      value={{ address, setAddress, scAddress, buildContract }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
