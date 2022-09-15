import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // '0xaD3823b46281F5e2874dc706F330543B825fa1eA'
  // '0x5e639ba29cad2baea970543db18459529d2d6f49'
  // "0x4Ae96e1b4c11bCF967bb9c95F1391976F63F5F83"
  "0xf138de126c30f8FcE2d9D12B3a6301372F169D91"
);

export default instance;
