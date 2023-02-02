import { useNetwork } from "@starknet-react/core";

function DisplayNetworkModal() {
  const { chain } = useNetwork();
  return <span>Network : {chain.name}</span>;
}

export default DisplayNetworkModal;
