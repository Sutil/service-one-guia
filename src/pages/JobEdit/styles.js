import styled from 'styled-components/native';
import DateTimeInput from '../../components/DateTimeInput';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const DateTimeInputC = styled(DateTimeInput)`
  height: 50px;
  line-height: 50px;
  background: #fff;
  margin: 20px 0;
  border-radius: 12px;
  padding: 0 10px;
  font-size: 18px;
  border: 1px;
  border-color: #999;
  color: #333;
`;
