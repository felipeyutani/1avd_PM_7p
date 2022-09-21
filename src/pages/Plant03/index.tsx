import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  TextHeader,
  AmbientChoose
} from "./styles";

import { Ambiente } from "../../components/Ambiente";


export function Plant03() {
  const ambientes = ["Sala", "Quarto", "Cozinha", "Banheiro"]
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Felipe</UserName>
            </User>
          </UserInfo>
          <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/82685484?v=4' }}
            />
        </UserWrapper>
      </Header>

      <TextHeader>
        Em qual ambiente 
        você quer colocar a sua planta?
      </TextHeader>

      <AmbientChoose>
          {ambientes.map(ambient => (
            <Ambiente ambientSelect={String(ambient)} />
          ))}
        </AmbientChoose>
    </Container>
  )
}
