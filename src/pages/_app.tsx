import '~/styles/globals.ts';

import type { AppProps } from 'next/app';

import { PokemonProvider } from '~/Context/PokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  );
}

export default MyApp;
