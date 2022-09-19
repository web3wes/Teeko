import { useWeb3 } from "@3rdweb/hooks"
import { Link } from "../routes"
import { Card, Button } from "semantic-ui-react"

export default function Connect() {
  const { connectWallet, address, error } = useWeb3()

  return (
    <div className="flex flex-col items-center justify-center ">
      {address ? (
        // <p className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100">
        //   {address}
        // </p>

        <Link route={`/wallet/${address}`}>
          {/* onSelectLanguage={this.handleLanguage} */}
          <a>
            <Button
              floated="right"
              content=" Show Wallet"
              icon="add circle"
              primary
            />
          </a>
        </Link>
      ) : (
        <Link route="/campaigns/new">
          <Button
            floated="right"
            content=" Show Wallet"
            icon="add circle"
            primary
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </Button>
        </Link>
      )}
    </div>
  )
}
