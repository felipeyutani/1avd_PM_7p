interface Props {
  ambientSelect: string;
}

import { Container, Ambiente0 } from './styles'

export function Ambiente({ ambientSelect }: Props) {
  return (
    <Container>
      <Ambiente0>{ambientSelect}</Ambiente0>
    </Container>
  )
}