import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome5 } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: ${RFValue(120)}px;
`;
export const Icon = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(60)}px;
  padding-bottom: 30px;
`;
export const Title = styled.Text`
  color: #000;
  font-size: ${RFValue(24)}px;
  text-align: center;
  width: ${RFPercentage(20)}%;
  font-family: ${({ theme }) => theme.fonts.bold};
  padding-bottom: 20px;
`;
export const Text = styled.Text`
  color: #000;
  font-size: ${RFValue(20)}px;
  width: ${RFPercentage(50)};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  padding-bottom: 40px;
`;
export const Button = styled.TouchableOpacity`
  padding: ${RFValue(24)}px;
  width: ${RFValue(80)}%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};;
`;