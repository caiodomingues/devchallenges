import styled from "styled-components";

export const Container = styled.div`
  font-family: "Raleway";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10% 25%;

  a {
    text-decoration: none;
    color: #000;
  }

  .author {
    justify-content: flex-start;
    width: 100%;

    h1 {
      margin-top: 0;
    }
  }

  button {
    position: absolute;
    top: 100px;
    right: 150px;
    background-color: transparent;
    padding: 5px 15px;
    border: 0;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #4f4f4f;
    cursor: pointer;
  }

  .me {
    position: absolute;
    margin: 0 auto;
    bottom: 15px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #a9a9a9;
  }

  svg {
    padding: 0 6px;
  }
`;
