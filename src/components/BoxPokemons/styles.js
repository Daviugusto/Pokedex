import styled from 'styled-components'

export const ContainerB = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;

  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    color: #333;
  }
`

export const PokemonsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const PokemonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
  }
`

export const PokemonItemName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: capitalize;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  button {
    padding: 10px 20px;
    font-size: 14px;
    background-color: #ff4400;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      background-color: #e63c00;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 68, 0, 0.3);
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`