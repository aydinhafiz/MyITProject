import styled from "styled-components";

export const SMainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .main-content__title {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 64px;
    letter-spacing: -1px;

    color: #2c2830;
    margin-bottom: 96px;
  }

  .find-more-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: #2d2641;
    width: 1110px;
    height: 250px;
    margin-top: 30px;
    margin-bottom: 100px;
  }

  .describle {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.777778px;

    color: #ffffff;
    width: 475px;
    margin-right: 150px;
  }

  .how-we-work-button {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;

    color: #ffffff;
    border: 1.5px solid #ffffff;
    padding: 13px 25.5px 12px 24.5px;
    background: none;
    width: 160px;
    height: 50px;
    cursor: pointer;
    margin-right: 75px;
  }
`;
