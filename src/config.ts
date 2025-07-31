import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Get your date NFT",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr1ks5lrm6uf2qq2fyyq0cl7ay025d00rl7d9dsmlq9qn30hfyhcr8qqvvjq6",
            cw721: "andr1ghhcjshej920ls5406pqcea02520k8xqfguxpe83ru9q3kcnlmjsdkwfqm",
            name: "The Date Collection",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1",
        }
    ],
};

export default CONFIG;
