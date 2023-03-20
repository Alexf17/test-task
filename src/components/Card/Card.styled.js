import styled from 'styled-components';

export const Wrap = styled.div`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const BgImage = styled.img`
  position: absolute;
`;

export const LogoImage = styled.img`
  position: absolute;
`;

export const Circle = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 62px;
  height: 62px;
  background: #5736a3;
  margin: 0 auto;
  margin-top: 178px;
  margin-bottom: 26px;

  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 8px;

    position: absolute;
    /* 
    top: 50%;
    left: 0; */

    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const InfoList = styled.ul`
  margin-bottom: 26px;
`;

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
