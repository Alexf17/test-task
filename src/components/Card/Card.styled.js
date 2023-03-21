import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  margin-bottom: 30px;
  align-items: center;
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
  top: 28px;
  left: 36px;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 178px;
  margin-bottom: 26px;
  width: 80px;
  height: 80px;

  &::after {
    position: absolute;
    top: 214px;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const Circle = styled.div`
  width: 62px;
  height: 62px;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid #ebd8ff;
  /* box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff; */
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const InfoList = styled.ul`
  margin: 0 auto;
  margin-bottom: 26px;
  text-align: center;
`;

export const InfoItem = styled.li`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background: ${p => (p.isFollowing ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin: 0 auto;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
`;
