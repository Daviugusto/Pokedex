import styled from "styled-components";

export const ContainerH = styled.header`
  width: 100vw;
  height: 100px;
  background: linear-gradient(145deg, #e74c3c, #c0392b);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
  border-bottom: 3px solid #a93226;
  a{
    text-decoration: none;

    a:active{
      color: black;
      text-decoration: none;
    }
  }
`;

export const PáginaInicial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: auto;
  height: auto;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  
  &:hover {
    color: #ffeb3b;
    background-color: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  svg {
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }
`;

export const Pokédex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: auto;
  height: auto;
  font-size: 30px;
  cursor: pointer;
  color: white;
  background: linear-gradient(145deg, #f39c12, #d68910);
  padding: 15px 30px;
  border-radius: 8px;
  border: 3px solid #fff;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  
  &:hover {
    background: linear-gradient(145deg, #ffb830, #f39c12);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    border: 3px solid #ffeb3b;
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    width: 40px;
    height: 40px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }
`;
