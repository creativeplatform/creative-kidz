
export const ETHERSCAN_BASEURL = {
    "1": "https://etherscan.io",
    "10": "https://optimistic.etherscan.io",
}[process.env.NEXT_PUBLIC_TOKEN_NETWORK ?? "1"];

export const ETHER_ACTOR_BASEURL = "https://ether.actor";
export const IPFS_GATEWAY = process.env.NEXT_PUBLIC_IPFS_GATEWAY || "https://gateway.pinata.cloud/ipfs/";

export const FARCASTER_URL = "https://warpcast.com/~/channel/yellow";
