import NavbarWrapper from "./Navbar.style";
import useAppState from "@/hooks/useAppState";

const Navbar = () => {
  const { address, setAddress } = useAppState();
  const connectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAddress(accounts[0]);
  };
  return (
    <NavbarWrapper>
      <div>
        <h2>Solidity Bonus Token</h2>
      </div>
      <div>
        {address ? (
          <div>
            <p className="wallet">Wallet conectada: </p>
            <p>
              {address.slice(0, 10) +
                "..." +
                address.slice(address.length - 5, address.length)}
            </p>
          </div>
        ) : (
          <button className="connect-button" onClick={connectWallet}>
            Conectar Wallet
          </button>
        )}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
