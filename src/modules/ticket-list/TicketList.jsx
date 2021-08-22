import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash';
import tickets from './tickets.json';

export const TicketList = () => {
  // const stations = tickets.map(ticket => ticket['起站']);
  // const uniqueStations = _.uniq(stations);

  const groups = _.groupBy(tickets, '起站');
  console.log(groups);

  return (
    <>
      <div>起站</div>
      <List>
        {Object.entries(groups).map(([station, destinations]) => (
          <ListItem key={station}>
            <ListItemText
              primary={station}
              secondary={destinations.map(d => d['訖站']).join(', ')}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
