import { useEffect, useState } from 'react';
import img from '../../images/img.png';
import logo from '../../images/Logo.png';
import { Avatar, AvatarContainer, Wrap } from './Card.styled';

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
      <img src={logo} alt="logo" />
      <img src={img} alt="backgroundImage" />
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" />
      </AvatarContainer>
      <ul>
        <li>
          <p>{tweets.toLocaleString()} TWEETS</p>
        </li>
        <li>
          <p>{userStat.followers.toLocaleString()} FOLLOWERS</p>
        </li>
      </ul>
      <button
        type="button"
        onClick={followersHandle}
        isFollowing={userStat.isFollowing}
      >
        {userStat.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </Wrap>
  );
};
