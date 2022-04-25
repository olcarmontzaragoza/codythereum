import React, { Component } from "react";
import "../styles/Landing.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

function Landing() {
  // constructor(props) {
  //   super(props);
  // }

  const [stake, setStake] = useState(0);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const startPayment = async ({ ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
    } catch (err) {}
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await startPayment({
      ether: stake,
      addr: data.get("addr"),
    });
  };

  const stakeAmount = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setStake(data.get("stake"));
    console.log({ stake });
  };

  return (
    <div className="landing__background">
      <div className="landing__topLeft">
        <img
          className="landing__profilePhoto"
          src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/272401328_7119681694709443_145450356369664909_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4KNYypwRJxkAX-0DBvq&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_YXHmgeh4jhF5mU8qRFIgRFd4UAhQHmaE5ZxEhgZCUng&oe=626293FF"
        />

        <div className="landing__topLeftText">
          <div className="landing__name">Oliver David</div>
          <div className="landing__ethers">5 eth</div>
        </div>

        <button className="landing__donationHistoryButton">
          Donation History
        </button>
      </div>

      <Link to="/login" className="mainGame__goBackButton">
        Sign Out
      </Link>

      <div className="landing__games">
        <form className="m-4" onSubmit={stakeAmount}>
          <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
            <main className="mt-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                Stake an amount before playing the game
              </h1>
              <div className="">
                <div className="my-3">
                  <input
                    name="stake"
                    type="text"
                    className="input input-bordered block w-full focus:ring focus:outline-none"
                    placeholder="Amount in ETH"
                  />
                </div>
              </div>
            </main>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Stake Amount
              </button>
            </footer>
          </div>
        </form>

        <form className="m-4" onSubmit={handleDonate}>
          <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
            <main className="mt-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                You staked {stake} ETH
              </h1>
              <div className="">
                <div className="my-3">
                  <input
                    name="addr"
                    type="text"
                    className="input input-bordered block w-full focus:ring focus:outline-none"
                    placeholder="Recipient Address"
                  />
                </div>
              </div>
            </main>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Donate ETH
              </button>
            </footer>
          </div>
        </form>

        <Link to="/tic-tac-toe" className="landing__gameBox">
          <div className="landing__gameBoxHeader">
            <div className="landing__gameBoxHeaderText">Tic Tac Toe</div>
          </div>

          <div className="container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"
              className="landing__gameBoxImage"
            />
            <div className="overlay">
              <div className="landing__playGameText">Play Game! 🕹️</div>
            </div>
          </div>
        </Link>

        <div className="landing__gameBoxSpacing"></div>

        <Link to="/wordle" className="landing__gameBox">
          <div className="landing__gameBoxHeader">
            <div className="landing__gameBoxHeaderText">Wordle</div>
          </div>

          <div className="container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/1200px-Wordle_196_example.svg.png"
              className="landing__gameBoxImage"
            />
            <div className="overlay">
              <div className="landing__playGameText">Play Game! 🕹️</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
