import { getAddress } from "viem";

export const TOKEN_CONTRACT = process.env.NEXT_PUBLIC_TOKEN_CONTRACT!;

export const MANAGER_CONTRACT = {
    "1": "0xce0d114c11fc8de8b28e019589a7e48ccc6f8e8f",
    "10": "0xaa42c1e7e767cefcd41536aa73e03bdf16cf1c34",
}[process.env.NEXT_PUBLIC_TOKEN_NETWORK ?? "1"]!;

export const CRTV_AND_KIDZ_MULTISIG = getAddress("0x85a56a9572145260d40e8d8f55c8468c18773da0");
