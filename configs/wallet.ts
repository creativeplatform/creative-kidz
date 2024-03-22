import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { mainnet, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { zoraTestnet, zora, optimism } from "@wagmi/chains";
import { createPublicClient, http } from "viem";
import { mainnet as mainnetViem } from "viem/chains";

const selectedChain = {
    "1": mainnet,
    "999": zoraTestnet,
    "7777777": zora,
    "10": optimism,
}[process.env.NEXT_PUBLIC_TOKEN_NETWORK ?? "1"]!;

export const RPC_URL = {
    "1": `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY}`,
    "999": "https://testnet.rpc.zora.energy",
    "7777777": "https://rpc.zora.energy",
    "10": `https://optimism-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_OPTIMISM_ALCHEMY_KEY}`,
}[process.env.NEXT_PUBLIC_TOKEN_NETWORK ?? "1"]!;

export type ChainId = "1"| "999" | "7777777" | "10";

const { chains, provider } = configureChains(
    [selectedChain],
    [
        jsonRpcProvider({
            rpc: (_) => {
                return { http: RPC_URL };
            },
            stallTimeout: 1000,
        }),
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: "Creative Kidz",
    chains,
    projectId: "c59aed3de5fcc3ec19ecba08a0c03c8f",
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

const viemMainnetClient = createPublicClient({
    chain: mainnetViem,
    transport: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY}`),
});

export { wagmiClient, chains, viemMainnetClient };
