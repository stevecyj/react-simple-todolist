import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import incidences from './incidences.json';

export const Incidences = () => {
  const interceptions = incidences
    .filter(item => item['路口名稱'].length > 0)
    .map(incidence => incidence['路口名稱']);

  return (
    <>
      <div>路口名稱</div>
      <List>
        {interceptions.map(interception => (
          <ListItem>
            <ListItemText primary={interception + '##'} secondary={interception} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
