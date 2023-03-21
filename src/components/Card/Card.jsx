import { useEffect, useState } from 'react';
import img from '../../images/img.png';
import logo from '../../images/Logo.png';
import {
  Avatar,
  AvatarContainer,
  BgImage,
  Button,
  Circle,
  InfoItem,
  InfoList,
  LogoImage,
  Text,
  Wrap,
} from './Card.styled';

export const Card = ({ id, avatar, tweets, followers }) => {
  const [userStat, setUserStat] = useState(
    JSON.parse(localStorage.getItem(`user ${id}`)) || {
      followers,
      isFollowing: false,
    }
  );
  const followersHandle = () => {
    setUserStat(prevState => ({
      ...prevState,
      isFollowing: !prevState.isFollowing,
    }));
    if (userStat.isFollowing) {
      setUserStat(prevState => ({
        ...prevState,
        followers: prevState.followers - 1,
      }));
    } else {
      setUserStat(prevState => ({
        ...prevState,
        followers: prevState.followers + 1,
      }));
    }
  };

  useEffect(() => {
    localStorage.setItem(
      `user ${id}`,
      JSON.stringify({
        isFollowing: userStat.isFollowing,
        followers: userStat.followers,
      })
    );
  }, [userStat, id]);

  return (
    <Wrap>
      <LogoImage src={logo} alt="logo" />
      <BgImage src={img} alt="backgroundImage" />
      <AvatarContainer>
        <Circle>
          <Avatar src={avatar} alt="avatar" />
        </Circle>
      </AvatarContainer>
      <InfoList>
        <InfoItem>
          <Text>{tweets.toLocaleString()} TWEETS</Text>
        </InfoItem>
        <InfoItem>
          <Text>{userStat.followers.toLocaleString()} FOLLOWERS</Text>
        </InfoItem>
      </InfoList>
      <Button
        type="button"
        onClick={followersHandle}
        isFollowing={userStat.isFollowing}
      >
        {userStat.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Wrap>
  );
};
