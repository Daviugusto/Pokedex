import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  min-width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

`

export const Pokedex = styled.div`
  background: linear-gradient(145deg, #e74c3c, #c0392b);
  border-radius: 30px 30px 60px 30px;
  padding: 20px;
  box-shadow: 
    0 20px 60px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.2),
    -5px -5px 15px rgba(0,0,0,0.3),
    5px 5px 15px rgba(0,0,0,0.3);
  position: relative;
  border: 3px solid #a93226;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 30px;
    background: radial-gradient(circle, #2c3e50, #1a252f);
    border-radius: 50%;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
    z-index: 10;
  }

  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.98; }
  }
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  letter-spacing: 2px;
  margin: 0;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 10px;
`

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #fff;
  border-radius: 20px;
  font-size: 14px;
  background: #fff;
  outline: none;
  transition: all 0.3s;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);

  &:focus {
    transform: scale(1.02);
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1), 0 0 10px rgba(255,255,255,0.5);
  }
`

export const Button = styled.button`
  padding: 12px 25px;
  background: linear-gradient(145deg, #f39c12, #d68910);
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  text-transform: uppercase;
  font-size: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }

  &:active {
    transform: translateY(0);
  }
`

export const Card = styled.div`
  background: linear-gradient(145deg, #2c3e50, #34495e);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: inset 0 4px 10px rgba(0,0,0,0.4);
  border: 3px solid #1a252f;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.1),
        rgba(0,0,0,0.1) 2px,
        transparent 2px,
        transparent 4px
      );
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }

  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.98; }
  }
`

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
`

export const PokemonName = styled.h2`
  color: #2ecc71;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  text-transform: capitalize;
  margin: 0;
  position: relative;
  z-index: 2;
`

export const Info = styled.p`
  color: #3498db;
  font-size: 14px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  margin: 5px 0 0 0;
  position: relative;
  z-index: 2;
`

export const Pke = styled.div`
  background: linear-gradient(145deg, #ecf0f1, #bdc3c7);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
`

export const InfoPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const InfoItem = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`

export const InfoLabel = styled.div`
  font-size: 11px;
  color: #666;
  font-weight: bold;
  text-transform: uppercase;
`

export const InfoValue = styled.div`
  font-size: 16px;
  color: #2c3e50;
  font-weight: bold;
  margin-top: 3px;
  text-transform: capitalize;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

export const ButtonCircle = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3px solid #fff;
  cursor: pointer;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
  }
`

export const ButtonRed = styled(ButtonCircle)`
  background: linear-gradient(145deg, #e74c3c, #c0392b);
`

export const ButtonYellow = styled(ButtonCircle)`
  background: linear-gradient(145deg, #f39c12, #d68910);
`

export const ButtonBlue = styled(ButtonCircle)`
  background: linear-gradient(145deg, #3498db, #2980b9);
`