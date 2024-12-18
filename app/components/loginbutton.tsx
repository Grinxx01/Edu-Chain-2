import { ConnectButton } from "thirdweb/react";
import { client } from "../lib/client";

import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

function LoginButton() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme={"light"}
      connectButton={{ label: "Login" }}
      connectModal={{ size: "wide" }}
    />
  );
}

export default LoginButton