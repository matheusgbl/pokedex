import React from 'react';

import { useRouter } from 'next/dist/client/router';

import { Container } from '~/styles/pages/pokeInfo';

export default function PokeInfo() {
  const router = useRouter();
  const id = router.query.id || [];

  return <Container>PokéInfo: {id}</Container>;
}
