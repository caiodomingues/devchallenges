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
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  cursor: pointer;
  padding: 2.5%;
  transition: all 0.2s ease-in-out;

  a {
    text-decoration: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #4f4f4f;
  }

  p {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    color: #828282;
  }

  :hover {
    background-color: #333333;
    transition: all 0.2s ease-in-out;

    a {
      color: #f2f2f2;
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
