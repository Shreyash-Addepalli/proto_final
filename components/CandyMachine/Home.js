import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import CandyMachine from ".";
// Constants

const Home = () => {
  const wallet = useWallet();

  const renderNotConnectedContainer = () => (
    <div>
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  return (
    <div className="header-container">
      {wallet.publicKey ? (
        <CandyMachine walletAddress={wallet} />
      ) : (
        renderNotConnectedContainer()
      )}
    </div>
  );
};

export default Home;
