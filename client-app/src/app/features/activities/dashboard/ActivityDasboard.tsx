import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../forms/ActivityForm";
import ActivityList from "./ActivityList";

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
}

export const ActivityDasboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList activities={activities} selectActivity={selectActivity}/>
      </Grid.Column>
      <Grid.Column width={6}>
          {selectedActivity && <ActivityDetails activity={selectedActivity}/>}
        
        <ActivityForm/>
      </Grid.Column>
    </Grid>
  );
};
