# Metamask / Sepolia integration project

Full-stack application composed of a **Node.js backend** and a **frontend client**, including **Web3 integration with MetaMask** and interaction with a **smart contract deployed on Sepolia**.

---

## Overview

This project implements a full-stack solution with:

- Backend API for business logic and data handling
- Frontend client for user interaction
- Integration with **MetaMask** for wallet connection
- Interaction with a **smart contract on Sepolia testnet**

> 🔗 Smart Contract (Sepolia): [0xc5DcBe660f4ba6fAA31eE5131f3EBe791A5C8b02](https://sepolia.etherscan.io/address/0xc5DcBe660f4ba6fAA31eE5131f3EBe791A5C8b02)

---

## Project Structure

```
.
├── server/        # Backend (Node.js)
├── client/        # Frontend
├── README.md
```

---

# Frontend

## Description
The frontend is responsible for:
- Rendering the UI
- Connecting to MetaMask
- Interacting with the smart contract (investment of fixed amount from the loged in wallet in Metamask)
- Communicating with the backend API

## Features
- Wallet connection via **MetaMask**
- Smart contract interaction (transact with it)
- CRUD API

## Web3 Integration
- Uses `window.ethereum` to connect to MetaMask
- Handles wallet connection and network selection
- Sends transactions to the smart contract deployed on Sepolia

## Running the Frontend

```bash
npm install
npm start
```

The app will be available at:
http://localhost:3000

## Requirements
- MetaMask installed in browser - handled error if not
- Connected to **Sepolia testnet**

---

# Backend

## Description
The backend is a Node.js server that:
- Exposes API endpoints
- Handles business logic
- Manages application data
- Acts as a bridge between frontend and backend logic (non-blockchain)

## Features
- REST API endpoints
- Modular structure (routes, controllers, models, middleware)
- Basic validation and error handling
- Lightweight data persistence (in-memory array)

## Architecture

```
server/
├── routes/
├── controllers/
├── models/
├── middleware/
├── utils/
├── app.js
└── server.js
```

## Running the Backend

```bash
cd server
npm install
npm start
```

The server will run on:
http://localhost:8080

---

# Smart Contract Integration

The application interacts with a smart contract deployed on the **Sepolia testnet**.

## Details
- Network: Sepolia
- Wallet: MetaMask
- Interaction: Frontend directly communicates with the contract

> 🔗 Contract Address / Explorer: [0xc5DcBe660f4ba6fAA31eE5131f3EBe791A5C8b02](https://sepolia.etherscan.io/address/0xc5DcBe660f4ba6fAA31eE5131f3EBe791A5C8b02)

## Capabilities
- Send transactions via MetaMask
- Handle basic blockchain interactions

---

# Testing

- Manual testing of frontend flows
- Manual testing of backend endpoints
- MetaMask transaction testing on Sepolia

---

# Trade-offs

- No authentication/authorization layer
- No production-grade validation
- No automated or unit tests (could be added)
- Simplified error handling
- Backend does not verify blockchain state (frontend handles Web3)

---

# Future Improvements

- Add automated testing (unit + integration + e2e)
- Improve validation (e.g. Zod / Joi)
- Add authentication (JWT / OAuth)
- Persist data in a real database
- Backend verification of blockchain events
- Better UX for wallet interactions
- Network/chain switching handling

---

# Notes

This project was built as part of a **technical assessment**, prioritizing:
- Code clarity
- Simplicity
- Demonstration of full-stack + Web3 integration

---

# Author

Guillermo Pastor 
