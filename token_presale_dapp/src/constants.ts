export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

interface IAddresses {
  [key: number]: { [key: string]: string };
}
export const addresses: IAddresses = {
  43114: {
    BUSD_ADDRESS: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    TOKEN_ADDRESS: "0x7184bdedE9a652d7e0A55e214d996CeeA7E7e6C5",
    PRESALE_ADDRESS: "0xDdB80a7a5E2a914b848A0A4d3A52e5B4c62f356D"
  },
  4: {
    BUSD_ADDRESS: "0xb202aBAaF4e344FF43E611675167dF66BB287c68",
    TOKEN_ADDRESS: "0x9105cd8A2f4E7609AE4F35d5fC3d818582E52b81",
    PRESALE_ADDRESS: "0xef01b1E54e6Bbf4AEA7D0f18Fc25220e7e34b6cf"
  },
};
