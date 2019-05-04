import React from 'react';
import styled from 'styled-components';


const TopBarStyle = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Containerstyle = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const Containerleft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const Containercenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const Containerright = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const Spanleft = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const Spancenter = styled.span `
  cursor: pointer;
  margin-right: 5%;
`;

const Spanright = styled.span `
  cursor: pointer;
`;
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarStyle>
      <Containerstyle>
        <Containerleft>
          <Spanleft>TOPICS</Spanleft><span>SEARCH</span>
        </Containerleft>
        <Containercenter>
          <Spancenter>GENERAL</Spancenter><Spancenter>BROWNBAG</Spancenter><Spancenter>RANDOM</Spancenter><Spancenter>MUSIC</Spancenter><Spancenter>ANNOUNCEMENTS</Spancenter>
        </Containercenter>
        <Containerright>
          <Spanright>LOG IN</Spanright>
        </Containerright>
      </Containerstyle>
    </TopBarStyle>
  )
}

export default TopBar;