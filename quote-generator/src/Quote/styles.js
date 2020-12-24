import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 5px solid #f7df94;
  padding-left: 7.5%;
  width: 100%;
  margin-top: 5%;

  h1 {
    margin: 0;
    font-weight: normal;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15%;
  cursor: pointer;
  padding: 2.5%;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);

  a {
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: #4f4f4f;
  }

  p {
    color: #828282;
    margin-top: 4px;
  }

  :hover {
    background-color: #333333;
    transition: all 0.2s ease-in-out;

    a,
    p {
      color: #fff;
    }

    svg {
      display: block;
    }
  }

  svg {
    position: relative;
    left: 95%;
    bottom: 40px;
    margin: auto 0;
    display: hidden;
  }
`;
