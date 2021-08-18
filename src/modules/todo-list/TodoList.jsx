import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function TodoList() {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [todos, setTodos] = useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code:' + response.status);
          return;
        }
        // Examine the text in the response
        return response.json().then(function (data) {
          // console.log('response data', data);
          let title = data;
          // console.log(title);
          setTodos(title);
        });
      })
      .catch(err => {
        console.log('Fetch Error:-S', err);
      });
  }, []);

  return (
    <header className={classes.root}>
      <List>
        {todos.length === 0 && <div>No Data</div>}
        {todos.map((value, idx) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={idx} role={undefined} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.title}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      {/* {todos.length === 0 && <div>No Data</div>}
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo.title}</li>
        ))}
      </ul> */}
    </header>
  );
}
