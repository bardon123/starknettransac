import { useSignTypedData } from "@starknet-react/core";

function SigningTx() {
  const { data, signTypedData } = useSignTypedData(message);
  const message = {
    types: {
      Person: [{ name: "name", type: "felt" }],
      Mail: [{ name: "from", type: "Person" }],
    },
    primaryType: "Mail",
    domain: {
      name: "StarkNet Mail",
      version: "1",
      chainId: 1,
    },
    message: {
      from: {
        name: "Alice",
      },
    },
  };

  return (
    <>
      <p>
        <button onClick={signTypedData}>Sign</button>
      </p>
      {data && <p>Signed: {JSON.stringify(data)}</p>}
    </>
  );
}

export default SigningTx;
