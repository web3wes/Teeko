const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  // "churn start game blanket build vicious nothing rate language allow place jelly",
  "spare quick end stand canvas forest clump crucial exotic tiny give alien",
  // remember to change this to your own phrase!
  // "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
  "https://polygon-mumbai.infura.io/v3/a1a0e9e4075840a69639b0d6efa43635"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
