import { Card } from 'components/Card/Card';
import { Wrapper } from './App.styled';

import users from '../../bd/users.json';

export const App = () => {
  return (
    <Wrapper>
      {users.map(user => (
        <Card
          key={user.id}
          id={user.id}
          tweets={user.tweets}
          followers={user.followers}
          avatar={user.avatar}
        />
      ))}
    </Wrapper>
  );
};
