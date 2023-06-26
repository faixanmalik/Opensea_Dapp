import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Main from '../components/Home/index'

export default function Home() {
  const connectwithMetaMask = useMetamask()
  const address = useAddress()

  return <>
    <main className="bg-black text-white">
      <div className="flex flex-col h-screen justify-center items-center">
        {!address && <button onClick={connectwithMetaMask} className="bg-black hover:bg-white hover:text-black border-white border-2 text-white py-4 px-10 font-bold text-2xl rounded-full" type="submit">Connect to MetaMask !</button>}
        {address && <Main/>}
      </div>
    </main>
  </>

}