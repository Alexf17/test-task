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

export const Circle = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  z-index: 5;
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
`;
