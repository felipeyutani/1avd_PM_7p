import styled from 'styled-components/native'
import { RFPercentage, RFValue }
  from 'react-native-responsive-fontsize'
import { Fontisto } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 100px;
`;

export const Icon = styled(Fontisto)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(60)}px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: ${RFValue(24)}px;
  text-align: center;
  width: 50%;
  font-family: ${({ theme }) => theme.fonts.bold};
  padding-bottom: 20px;
`;

export const Input = styled.TextInput`
  color: #0005;
  font-size: ${RFValue(20)}px;
  width: 70%;
  border: 1px solid;
  border-radius: 20px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const Button0 = styled.TouchableOpacity`
  width: ${RFValue(60)}%;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};;
`;

export const Button = styled.View`
  width: ${RFValue(100)}%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;
