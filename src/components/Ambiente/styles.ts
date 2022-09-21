import styled from 'styled-components/native'
import { RFValue }
  from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(90)}px;
  height: ${RFValue(30)}px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.colors.shape};
  margin-top: 10px;
`;

export const Ambiente0 = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`