import { useAccount, useContract, useStarknetCall } from "@starknet-react/core";
import { useStarkEthContract } from "./StarkEthContract";

function Userbalance() {
  const { contract } = useStarkEthContract();
  const { address } = useAccount();
  const { data, loading, error, refresh } = useStarknetCall({
    contract: contract,
    method: "balanceOf",
    args: [address],
    options: {
      watch: false,
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error}</span>;

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <p>Balance: {JSON.stringify(data)}</p>
    </div>
  );
}

export default Userbalance;
