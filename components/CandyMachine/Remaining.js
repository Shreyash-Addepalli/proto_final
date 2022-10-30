import React, { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { candyMachineProgram } from "./helpers";
export const Remaining = () => {
  const [cmState, setcmState] = useState(null);

  useEffect(() => {
    getCandyMachineState();
  }, []);

  const opts = {
    preflightCommitment: "processed",
  };

  const getProvider = () => {
    const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;
    // Create a new connection object
    const connection = new Connection(rpcHost);

    // Create a new Solana provider object
    const provider = new AnchorProvider(
      connection,
      window.solana,
      opts.preflightCommitment
    );

    return provider;
  };

  const getCandyMachineState = async () => {
    const provider = getProvider();
    const idl = await Program.fetchIdl(candyMachineProgram, provider);
    const program = new Program(idl, candyMachineProgram, provider);
    const candyMachine = await program.account.candyMachine.fetch(
      process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
    );

    const itemsAvailable = candyMachine.data.itemsAvailable.toNumber();
    const itemsRedeemed = candyMachine.itemsRedeemed.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    const goLiveData = candyMachine.data.goLiveDate.toNumber();
    const presale =
      candyMachine.data.whitelistMintSettings &&
      candyMachine.data.whitelistMintSettings.presale &&
      (!candyMachine.data.goLiveDate ||
        candyMachine.data.goLiveDate.toNumber() > new Date().getTime() / 1000);

    const goLiveDateTimeString = `${new Date(goLiveData * 1000).toGMTString()}`;

    // Add this data to your state to render
    setcmState({
      id: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID,
      program,
      state: {
        itemsAvailable,
        itemsRedeemed,
        itemsRemaining,
        goLiveData,
        goLiveDateTimeString,
        isSoldOut: itemsRemaining === 0,
        isActive:
          (presale ||
            candyMachine.data.goLiveDate.toNumber() <
              new Date().getTime() / 1000) &&
          (candyMachine.endSettings
            ? candyMachine.endSettings.endSettingType.date
              ? candyMachine.endSettings.number.toNumber() >
                new Date().getTime() / 1000
              : itemsRedeemed < candyMachine.endSettings.number.toNumber()
            : true),
        isPresale: presale,
        goLiveDate: candyMachine.data.goLiveDate,
        treasury: candyMachine.wallet,
        tokenMint: candyMachine.tokenMint,
        gatekeeper: candyMachine.data.gatekeeper,
        endSettings: candyMachine.data.endSettings,
        whitelistMintSettings: candyMachine.data.whitelistMintSettings,
        hiddenSettings: candyMachine.data.hiddenSettings,
        price: candyMachine.data.price,
      },
    });
  };

  return (
    <div>
      {cmState?.state?.itemsRemaining}&nbsp;{cmState?.state?.price}
    </div>
  );
};
