import { ethers } from "ethers";
import InvestmentABI from "../abi/Investment.json";
import { CONTRACT_ADDRESS } from "../config";

export async function getContract() {

  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    InvestmentABI.abi,
    signer
  );

  return contract;
}