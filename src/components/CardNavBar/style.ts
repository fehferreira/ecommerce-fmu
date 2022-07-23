import styled from 'styled-components';

export const CardContainer = styled.div<{ isActive?: boolean }>`
  width: fit-content;
  height: 56px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;
  padding: 8px 10px 4px 10px;
  background-color: ${(props) => (props.isActive ? '#EBF2FF' : 'transparent')};
  color: ${(props) => (props.isActive ? '#2979ff' : '#787885')};

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
`;

export const CardLabel = styled.label``;
