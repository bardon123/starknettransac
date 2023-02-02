import SendGwei from "@/components/SendGwei";

import ConnectWalletButton from "@/components/ConnectWalletButton";
import DisplayNetworkModal from "@/components/modals/DisplayNetworkModal";
export default function Home() {
  return (
    <>
      <ConnectWalletButton />
      <DisplayNetworkModal />
      <SendGwei />
    </>
  );
}
