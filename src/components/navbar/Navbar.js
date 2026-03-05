import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
// Import contract utils 
import { getContract } from "../../utils/contract";
// Immport ethers for interacting with web3
import { ethers } from "ethers";

function NavBar() {
  const [walletAddress, setWalletAddress] = useState("");

  // Invest on deployed contract
  async function invest(amount) {

    // force switch to Sepolia
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }] // (11155111) Sepolia
    });

    try {

      const contract = await getContract();

      const tx = await contract.invest({
        value: ethers.parseEther(amount)
      });

      await tx.wait();

      alert("Investment successful");

    } catch (err) {

      console.error(err);
      alert("Transaction failed");

    }
  }

  async function connectWallet() {

    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    setWalletAddress(accounts[0]);
  }

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => invest("0.000001")}
              >
            Invest 0.000001 ETH
          </Button>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
            onClick={connectWallet}
          >
            {walletAddress
              ? walletAddress.slice(0,6) + "..." + walletAddress.slice(-4)
              : "Connect Wallet"}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
