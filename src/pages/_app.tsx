import '~/styles/globals.ts';
import '~/index.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { PokemonProvider } from '~/Context/PokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </ThemeProvider>
  );
}

export default MyApp;
