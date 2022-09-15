import './styles.css'
import './about.scss';
import './home.scss';
import './index.scss';
import './header.scss';


import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "regenerator-runtime/runtime";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [80001, 4];

  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;