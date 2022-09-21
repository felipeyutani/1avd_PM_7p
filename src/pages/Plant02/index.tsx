import {
  Container,
  Icon,
  Title,
  Text,
  Button,
  TextButton
} from "./styles"

export function Plant02() {
  return(
    <Container>
      <Icon name="smile-beam" />
      <Title>
        Prontinho
      </Title>
      <Text>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado
      </Text>
      <Button>
        <TextButton>
          Começar
        </TextButton>
      </Button>
    </Container>
  )
}