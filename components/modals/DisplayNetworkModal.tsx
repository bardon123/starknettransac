import { useNetwork } from "@starknet-react/core";

function DisplayNetworkModal() {
  const { chain } = useNetwork();
  return <span>Connected to : {chain.name}</span>;
}

export default DisplayNetworkModal;
