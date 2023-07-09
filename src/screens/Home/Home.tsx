import HomeWrapper from "./Home.style";
import useAppState from "@/hooks/useAppState";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

const Home = () => {
  const { scAddress, buildContract, address } = useAppState();
  const [addressTo, setAddressTo] = useState<string>("");
  const [numberTokens, setNumberTokens] = useState<number>(0);

  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    getBalance();
  }, [address, scAddress]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    }

    if (address === "" || numberTokens === 0) {
      alert("Llena todos los campos!");
      return;
    }

    await window.ethereum.enable();
    const contract = await buildContract();
    try {
      await contract.methods
        .transfer(addressTo, numberTokens)
        .send({ from: address });
    } catch (error) {
      console.log(error);
      return;
    }

    alert("Transferencia exitosa!");
  };

  const getTokens = async () => {
    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    }

    if (address === "") {
      alert("Conecta tu wallet para conseguir tus tokens!");
      return;
    }

    await window.ethereum.enable();
    const contract = await buildContract();

    try {
      await contract.methods
        .getTokens()
        .send({ from: address })
        .once("transactionHash", function (hash: string) {
          console.log("transactionHash", hash);
        })
        .on("error", function (error: Error) {
          console.log(error);
          alert("Hubo un error en la transacción");
        })
        .then(function (receipt: any) {
          console.log("receipt", receipt);
          alert("Tokens transferidos!");
        });
    } catch (error) {
      console.log(error);
      return;
    }

    alert("Tokens transferidos!");
  };

  const getBalance = async () => {
    if (window.ethereum && address !== "") {
      const contract = await buildContract();

      try {
        await contract.methods
          .balanceOf(address)
          .call()
          .then((res: any) => {
            setBalance(res.toString());
          });
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };

  return (
    <HomeWrapper>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="app-content">
        <div className="personal-info-container">
          <div className="personal-info">
            <div className="balance">
              {address !== "" ? (
                <>
                  <h2>Balance:</h2>
                  <p>{balance} My Token</p>
                </>
              ) : (
                <h2>Conecta tu wallet para ver tu balance!</h2>
              )}
            </div>
            <form className="form" onSubmit={onSubmit}>
              <h2>Transferir My Token:</h2>
              <input
                className="input"
                type="text"
                name="address"
                value={addressTo}
                placeholder="Dirección a transferir..."
                onChange={(e) => setAddressTo(e.target.value)}
              />
              <input
                className="input"
                type="number"
                name="cantidad"
                value={numberTokens}
                placeholder="Cantidad a transferir..."
                onChange={(e) => setNumberTokens(parseInt(e.target.value))}
              />
              <input className="submit" type="submit" value="Enviar" />
            </form>
            <div className="getTokens">
              <h2>Consigue tus primers 200 My Token totalmente gratis!</h2>
              <button onClick={getTokens}>Conseguir Tokens</button>
            </div>
          </div>
        </div>
        <div className="sc-info-container">
          <div className="sc-info">
            <div className="sc-address">
              <span>Dirección del contrato:</span>
              <p>{scAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
