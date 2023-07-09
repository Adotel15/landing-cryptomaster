import styled from "styled-components";

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e7e3eb;
  .connect-button {
    border: none;
    background-color: #1fc7d4;
    color: #fff;
    padding: 12px 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 700;
    font-size: 16px;
    &:hover {
      background-color: #1d787f;
    }
  }
  .wallet {
    font-size: 16px;
    font-weight: 700;
  }
`;

export default NavbarWrapper;
