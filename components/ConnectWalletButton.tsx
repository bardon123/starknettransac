import { useAccount, useConnectors } from "@starknet-react/core";
import { useState } from "react";
import ConnectWalletMenuModal from "./modals/ConnectWalletMenuModal";
import Userbalance from "../hooks/Userbalance";
import { shortenAddress } from "@/types/utils";
import DisplayNetworkModal from "./modals/DisplayNetworkModal";
import SendGwei from "./SendGwei";

function ConnectWalletButton() {
  const { account, address, status } = useAccount();
  const [showConnectWalletMenuModal, setShowConnectWalletMenuModal] =
    useState(false);
  const { available, disconnect } = useConnectors();

  return (
    <>
      {status === "disconnected" ? (
        <button onClick={() => setShowConnectWalletMenuModal(true)}>
          Connect Wallet
        </button>
      ) : (
        <div>
          Status: Connected <br></br>
          <DisplayNetworkModal /> <br></br>
          Account: {shortenAddress(address)} <Userbalance />
          <br></br>
          <SendGwei />
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )}
      {showConnectWalletMenuModal ? (
        <ConnectWalletMenuModal
          connectors={available}
          close={() => setShowConnectWalletMenuModal(false)}
        />
      ) : null}
    </>
  );
}
export default ConnectWalletButton;
