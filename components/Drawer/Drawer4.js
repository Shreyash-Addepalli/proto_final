import { useEffect, useState } from "react";
import { headingDistanceTo } from "geolocation-utils";
import Home from "../CandyMachine/Home";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

var dist;

const Drawer4 = (props) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  const [wrapperClicked, setWrapperClicked] = useState(false);
  const [show, setShow] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setShow(
        navigator.geolocation.watchPosition(
          (position) => {
            dist = headingDistanceTo(
              { lat: position.coords.latitude, lng: position.coords.longitude },
              { lat: 19.08042222222222, lng: 72.87868055555555 }
            );
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: Infinity,
          }
        )
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleClick = (e) => {
    setWrapperClicked(!wrapperClicked);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className={`wrapper ${
          wrapperClicked === false ? "slide-down" : "slide-up"
        } ${
          `${Math.floor(dist?.distance)}` < 100
            ? "value-absent"
            : "value-present"
        } `}
      >
        <div className="menu-container">
          <div className="menu-opener">
            <div className="btn">
              <a href="#">
                <i
                  className={`fa fa-solid ${
                    wrapperClicked === false
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                ></i>
              </a>
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "white",
                  width: "80%",
                }}
              />
              <div
                onClick={handleClick}
                className={`distance-from-mint ${
                  wrapperClicked === false ? "slide-down" : "slide-up"
                } ${
                  `${Math.floor(dist?.distance)}` < 100
                    ? "value-absent"
                    : "value-present"
                }`}
              >
                <div>
                  {`${Math.floor(dist?.distance)}` < 100 ? (
                    wrapperClicked === false ? (
                      <span>Click Here to Mint</span>
                    ) : (
                      <span>Connect Wallet to Continue</span>
                    )
                  ) : (
                    <>
                      <span style={{ color: "#EF0066" }}>
                        {`${Math.floor(dist?.distance)}`} m
                      </span>{" "}
                      from {props.name}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="menu-content-container">
            <div className="clearfix">
              <div className="image">
                <img
                  className="img2"
                  src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/4.png"
                  alt="Pineapple"
                />
              </div>
              <div className="text">
                <section className="name-1">Web3 Conf</section>
                <section className="name-2">{props.loc}</section>
                <section className="name-3">19.0804,72.8786</section>
              </div>
            </div>
            <hr style={{ height: "1px", backgroundColor: "white" }} />
            {/* <div className="row">
              <div className="column1">
                Mint ends in
                <br />
                <section className="time">20 : 45 : 15</section>
              </div>
              <div className="column2">
                Remaining
                <br />
                <section className="count">18</section>
              </div>
              <div className="column3">
                Price
                <br />
                <section className="price">0.5 SOL</section>
              </div>
            </div> */}
          </div>
          <div>
            {`${Math.floor(dist?.distance)}` < 100 ? (
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletModalProvider>
                    <Home />
                  </WalletModalProvider>
                </WalletProvider>
              </ConnectionProvider>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer4;
