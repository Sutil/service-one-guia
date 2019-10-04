import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eee;
`;

export const JobList = styled.FlatList`
  padding: 10px;
  margin-bottom: 5px;
`;

export const JobContainer = styled.TouchableOpacity`
  background: #9575cd;
  padding: 20px;
  border-radius: 12px;
  margin: 10px 0;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const JobTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const JobInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const JobDate = styled.Text`
  color: #eee;
  font-size: 16px;
`;

export const JobValue = styled.Text`
  color: #b9f6ca;
  font-size: 20px;
`;

export const ResumeCard = styled.View`
  margin-top: 5px;
  padding: 5px 20px 10px;
  border-top-width: 1px;
  border-top-color: #999;
  justify-content: space-between;
  background: #eee;
`;

export const AddButton = styled.TouchableOpacity`
  background: #ff8b0d;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const TotalJobs = styled.Text`
  font-size: 25px;
  color: #49265c;
`;

export const TotalValue = styled.Text`
  font-size: 25px;
  color: #ff8b0d;
`;
