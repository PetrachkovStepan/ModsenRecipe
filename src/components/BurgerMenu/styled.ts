import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  position: fixed;
  width: 390px;
  height: 100%;
  padding-top: 16px;
  right: calc(-391px);
  top: 150px;
  bottom: 0;
  z-index: 3;
  background-color: white;
  transition: right 0.3s, box-sadow 0.1s;

  @media (max-width: 698px) {
    right: 0;
    box-shadow: -5px 0px 10px #b2b2b2;
  }
`