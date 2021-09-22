import '~/styles/globals.ts';
import type { AppProps } from 'next/app';

import { PokemonProvider } from '~/Context/PokemonContext';
import GlobalStyle from '~/styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </PokemonProvider>
  );
}

export default MyApp;
