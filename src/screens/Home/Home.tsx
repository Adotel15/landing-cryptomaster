import HomeWrapper from "./Home.style";
import useAppState from "@/hooks/useAppState";
import Navbar from "@/components/Navbar/Navbar";

const Home = () => {
  const { scAddress } = useAppState();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { address } = e.currentTarget;
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    // const provider = new ethers.providers.Web3Provider(ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(scAddress, abi, signer);
    // const tx = await contract.transfer(address.value, 100);
    // await tx.wait();
    alert("Transferencia exitosa!");
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
              <h2>Balance:</h2>
              <p>{"10"} My Token</p>
            </div>
            <form className="form" onSubmit={onSubmit}>
              <h2>Transferir My Token:</h2>
              <input
                className="input"
                type="text"
                name="address"
                id="address"
                placeholder="Dirección a transferir..."
              />
              <input
                className="input"
                type="number"
                name="cantidad"
                id="cantidad"
                placeholder="Cantidad a transferir..."
              />
              <input className="submit" type="submit" value="Enviar" />
            </form>
            <div className="getTokens">
              <h2>Consigue tus primers 200 My Token totalmente gratis!</h2>
              <button>Conseguir Tokens</button>
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
