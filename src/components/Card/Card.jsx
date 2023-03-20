import { useEffect, useState } from 'react';
import img from '../../images/img.png';
import logo from '../../images/Logo.png';
import {
  Avatar,
  AvatarContainer,
  BgImage,
  InfoItem,
  InfoList,
  LogoImage,
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
  }, [userStat]);

  return (
    <Wrap>
      <LogoImage src={logo} alt="logo" />
      <BgImage src={img} alt="backgroundImage" />
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" />
      </AvatarContainer>
      <InfoList>
        <InfoItem>
          <p>{tweets.toLocaleString()} TWEETS</p>
        </InfoItem>
        <InfoItem>
          <p>{userStat.followers.toLocaleString()} FOLLOWERS</p>
        </InfoItem>
      </InfoList>
      <button type="button" onClick={followersHandle}>
        {userStat.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </Wrap>
  );
};
