import styled from 'styled-components';

export const Table = styled.table`
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

export const TableHead = styled.thead`
  height: 50px;
  background-color: #80daeb;
  color: white;
`;

export const TableRow = styled.tr`
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  
`;

export const TableData = styled.td`
  height: 40px;
  text-align: center;
  background-color: #f3f6f9;
`;