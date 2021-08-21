import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash';
import tickets from './tickets.json';

export const TicketList = () => {
  const stations = tickets.map(ticket => ticket['起站']);
  const uniqueStations = _.uniq(stations);

  return (
    <>
      <div>起站</div>
      <List>
        {uniqueStations.map(station => (
          <ListItem>
            <ListItemText primary={station} secondary={station} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
