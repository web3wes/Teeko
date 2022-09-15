import web3 from "./web3";
import Ticket from "./build/Tickets.json";

// const instance = (address) => {
//   return new web3.eth.Contract(JSON.parse(Ticket.interface), '0x0A44c553C687570C3172D99FcED0c3da06b476d0');
// };

// export default instance;

const instance = new web3.eth.Contract(
  JSON.parse(Ticket.interface),
  // '0xB07Ff2bB7a4905FCCB65305F8F877fE5F0b44d8b'
  // "0x544aB7D5741863278E85383B933A7e15Cb7e809f"
  // "0x5AF7F47323853Ef28553554a409d113ba49b498b"
  // "0xB9319048E575A1A93a6a8D464Bdcd0F98d06EDD4"
  "0xca3241C705B08d643E372E515461CA455E003271"
);

export default instance;
