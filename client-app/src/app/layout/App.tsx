import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import {Header, Icon, List} from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import { NavBar } from '../features/nav/NavBar';

// interface IState {
//   activities: IActivity[]
// }

const App = () =>{

  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    });
  }, []);

    return (
      <div>
          {/* <Header as='h2'>
            <Icon name='user'/>
            <Header.Content>Reactivities</Header.Content>
          </Header> */}
          <NavBar/>
          <List>
            {activities.map((activity) => (
              <List.Item key={activity.id}>{activity.title}</List.Item>
            ))}          
          </List>
      </div>
    );
  
}

export default App;
