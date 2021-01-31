import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import ActivityStore from '../../stores/activityStore';


const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Reactivities
        </Menu.Item>    
        <Menu.Item name='Activities'>

        </Menu.Item>
        <Menu.Item>
            <Button onClick={activityStore.openCreateForm} positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);