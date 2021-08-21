import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  /* DARK AND LIGHT MODE COLORS */
  --light-color: #ffffff;
  --dark-color: #262626;

  /* POKÉMON TYPES COLORS */
  --bug-color: #92bc2c;
  --dark-color: #595761;
  --dragon-color: #0c69c8;
  --electric-color: #f2d94e;
  --fairy-color: #ee90e6;
  --fire-color: #dc872f;
  --fight-color: #D3425F;
  --flying-color: #a1bbec;
  --grass-color: #5fbd58;
  --ghost-color: #5f6dbc;
  --ground-color: #da7c4d;
  --ice-color: #75d0c1;
  --normal-color: #a0a29f;
  --poison-color: #b763cf;
  --psychic-color: #ff2ca8;
  --rock-color: #a38c21;
  --steel-color: #5695a3;
  --water-color: #539ddf;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: var(--dark-color);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
