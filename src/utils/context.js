
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme,  lightTheme} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [chain.rinkeby],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Bearbingo Mint",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function ContextProvider({ children, theme }) {
  return (
    <WagmiConfig client={wagmiClient} >
      <RainbowKitProvider chains={chains} theme={theme === 'dark' ? darkTheme() : lightTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default ContextProvider;