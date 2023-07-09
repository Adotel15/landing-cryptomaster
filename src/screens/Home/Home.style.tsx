import styled from "styled-components";

const HomeWrapper = styled.section`
  background: linear-gradient(139.73deg, #e5fdff, #f3efff);
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .navbar {
    width: 100%;
    height: 90px;
  }
  .app-content {
    width: 100%;
    max-width: 1300px;
    height: calc(100% - 90px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 50px;
      height: auto;
      padding-top: 50px;
    }
    .personal-info-container {
      width: 50%;
      height: 100%;
      max-height: 700px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        width: 90%;
        max-height: auto;
        height: 700px;
      }
      .personal-info {
        width: 100%;
        height: 90%;
        background-color: #fff;
        border: 1px solid #e7e3eb;
        border-radius: 50px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        h2 {
          font-size: 20px;
        }
        .balance {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          p {
            font-size: 20px;
          }
        }
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
          .input {
            width: 300px;
            height: 50px;
            border: none;
            background-color: #f3efff;
            border-radius: 10px;
            font-size: 16px;
            padding: 0 10px;
            font-weight: 400;
            &:focus {
              outline: 2px solid #1fc7d4;
            }
          }
          .submit {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 40px;
            border: none;
            background-color: #7a6eaa;
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
        }
        .getTokens {
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          h2 {
            text-align: center;
          }
          button {
            border: none;
            background-color: #1fc7d4;
            color: #fff;
            padding: 12px 40px;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 700;
            font-size: 16px;
            text-transform: uppercase;
            &:hover {
              background-color: #1d787f;
            }
          }
        }
      }
    }
    .sc-info-container {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        padding-bottom: 100px;
      }
      .sc-info {
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        .sc-address {
          span {
            font-weight: 700;
            font-size: 24px;
          }
          p {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default HomeWrapper;
