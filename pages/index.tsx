import SendGwei from "@/components/SendGwei";

import ConnectWalletButton from "@/components/ConnectWalletButton";
export default function Home() {
  return (
    <>
      <ConnectWalletButton />
      <SendGwei />
    </>
  );
}
