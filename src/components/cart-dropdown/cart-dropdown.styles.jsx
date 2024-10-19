import styled from "styled-components";
import {
  BaseButton,
  GoogleButton,
  InvertedButton,
} from "../button/button.styles.jsx";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  /*
   * component Button yang ada dalam CartDropdownContainer
   * akan apply css berikut
   */
  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CardItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
