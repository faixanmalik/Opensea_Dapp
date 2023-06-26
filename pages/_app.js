import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      chainRpc={{
        [ChainId.Mumbai]: 'https://goerli.infura.io/v3/170289bb18184537bc5409f0687329ab'
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  </>
}

export default MyApp
