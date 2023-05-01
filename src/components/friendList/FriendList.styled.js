import styled from 'styled-components';

export const List = styled.ul`
  background-color: white;
  margin-top: 30px;
  width: 500px;
  height: auto;
  border-radius: 15px;
  padding: 10px 10px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 500ms;
  cursor: pointer;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
  display: flex;
  border: 1px solid black;
  gap: 10px;
  border-radius: inherit;
  margin-bottom: 10px;
  background-color: #f3f6f9;
  border-color: #c0c0c0;
  padding: 20px;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const Name = styled.li`
    font-size: 30px;
    margin-top: auto;
`;

export const FriendStatus = styled.li`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.status ? 'green' : 'red')};
  
`;