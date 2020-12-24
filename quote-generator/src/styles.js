import styled from "styled-components";

export const Container = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    :hover {
      background-color: #4f4f4f;
      color: #fff;
      transition: all 0.1s ease-in-out;

      svg {
        fill: #fff;
        transition: all 0.1s ease-in-out;
      }
    }
  }

  .me {
    position: absolute;
    margin: 0 auto;
    bottom: 15px;
    font-weight: bold;
    color: #4f4f4f;
  }

  svg {
    padding-right: 6px;
  }
`;
