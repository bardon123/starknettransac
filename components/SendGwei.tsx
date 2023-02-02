import { useAccount, useStarknetExecute } from "@starknet-react/core";
import { useCallback, useState, useMemo } from "react";
import { STARKETH_CONTRACT_ADDRESS } from "@/types/constants";

function SendGwei() {
  const { address: address1 } = useAccount();
  const address2 = 0x07447516989c1bd3d67e448f844753212686f0ffd262bbb8c45056ec9b772b0e; //recipent address

  const [count, setCount] = useState(0);

  const calls = useMemo(() => {
    const tx = {
      contractAddress: STARKETH_CONTRACT_ADDRESS,
      entrypoint: "transfer",

      calldata: [address1, address2, [1, 0]],
    };
    return Array(count).fill(tx);
  }, [address1, address2, count]);

  const { execute } = useStarknetExecute({ calls });

  const inc = useCallback(() => setCount((c) => c + 1), [setCount]);
  const dec = useCallback(
    () => setCount((c) => Math.max(c - 1, 0)),
    [setCount]
  );

  return (
    <>
      <p>Sending {count} transactions</p>
      <p>
        <button onClick={dec}> Decrement</button>
        <button onClick={inc}>Increment</button>
      </p>
      <p>
        <button onClick={execute}>Execute</button>
      </p>
    </>
  );
}

export default SendGwei;
