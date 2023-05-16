import styled from "styled-components";

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2000cd;
  padding: 35px;
  .logo-bar {
    margin-left: 168px;
    width: 111.22px;
    height: 18px;
  }

  .options :nth-child(1) {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;

    color: #ffff;
    margin-right: 26px;
    cursor: pointer;
    :hover {
      color: #ffff;
    }
  }
  .options :nth-child(2) {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;

    color: #ffff;
    margin-right: 10px;
    cursor: pointer;
    :hover {
      color: #a060ff;
    }
  }
  .options :nth-child(3) {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;

    color: #ffff;
    margin-right: 33px;
    cursor: pointer;
    :hover {
      color: #a060ff;
    }
  }
  .options :nth-child(4) {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;

    background: #ffa84e;

    color: #ffffff;
    margin-right: 165px;
    border: 1.5px solid #2c2830;
    padding: 13px 5px 12px 28.5px;
    cursor: pointer;
    text-decoration: none;
  }

  .options :nth-child(4):hover {
    background: linear-gradient(
      135deg,
      #a060ff 0%,
      #cb30e3 49.21%,
      #ffa84e 100%
    );
    border: 1.5px solid #2c2830;
    color: #ffffff;
    transition: 1s;
  }

  .logo-img {
    width: auto;
    height: 30px;
  }
`;
