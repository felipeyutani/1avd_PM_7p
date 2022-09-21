import { TouchableOpacity } from "react-native"
import {
  Container,
  Icon,
  Title,
  Input,
  Button,
  Button0,
  TextButton
} from "./styles"

export function Plant01() {
  return(
    <Container>
      <Icon name="smiley" />
      <Title>
        Como podemos 
        chamar você?
      </Title>
      <Input title="Digite um nome">
      Digite um nome
      </Input>
      <Button>
        <Button0>
          <TextButton>
            Enviar
          </TextButton>
        </Button0>
      </Button>
    </Container>
  )
}