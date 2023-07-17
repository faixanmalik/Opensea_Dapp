import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <>
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      chainRpc={{
        [ChainId.Mumbai]: 'https://goerli.infura.io/v3/170289bb18184537bc5409f0687329ab'
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  </>
}

export default MyApp
