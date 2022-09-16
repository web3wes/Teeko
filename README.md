
## About Teeko

Teeko is web3 ticketing platform that allows artists to post shows split payments programatically at the time of purchase. Music is hard! Payments should be easy. 

(Develop is most current branch)


## 🤝 Contributing

TODO: 
Add contribution guidelines

## ⚙️ Setup

### Using Local Environment

```sh
npm install
npm run dev
```

visit http://localhost:3000

**How to demo**

You'll need a Metamask wallet with test MATIC on the mumbai network. 

**Seeing shows**
- Click Find Upcoming Event on the land page. 
- This should prompt you to connect a wallet
- The show page displays contracts representing events
- Click 'show details' to see information about the show

**Buying tickets/See tickets**
- The click get tickets to test the purchase feature
- Click get tickets in the top right to see all the tickets addresses associated with your wallet. (clicking them will lead to an example transaction, but the real show up as a contrat interaction in your wallet.)




**Known issues**

1: **Can't create new shows** 

Currently the create show components in non-functional as I'm in the process of refactoring the payees subcomponent to allow for mutiple payment receipents. 





2: **Layout issues:** 

The initial design for this site was not responsive. That's being address on the UI/Adding-Responsive-Layout branch ([Preview](https://teeko-2-git-ui-adding-responsive-layout-web3wes.vercel.app/)) has the most recent updates on the responsive layout. 




3: **No mobile support:** 

This app currently doesn't support mobile wallets, but there is a plan to build a React Native companion app with mobile support. 



4: **Some pages are flow dependant**

At present, wallet addresses are passed as props through page navigation, so attempting to navigate the wallet or shows page through from their links along will result in a 404 Error

This a High priority issue that I'll be fixing in parallel updating the layout. 



