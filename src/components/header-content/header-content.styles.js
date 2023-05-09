import styled from "styled-components";

export const SContentMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2d2641;
  flex: 1;
  height: 600px;
  margin-bottom: 200px;
  .description-side {
    max-width: 540px;
    margin-top: 169px;
    margin-right: 30px;
  }

  .title-humanizing {
    border-top: 1px solid #96a9c6;
    padding-top: 10px;
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 64px;
    letter-spacing: -1px;
    color: #ffffff;
    margin-bottom: 16px;
  }

  .description-humanizing {
    font-family: "Karla";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  .view-plans-button {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;

    color: #ffffff;
    border: 1.5px solid #ffffff;
    padding: 13px 28.5px 12px 28.5px;
    background: none;
  }
`;
