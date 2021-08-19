import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
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
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function TodoList() {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [todos, setTodos] = useState([]);
  // pagi
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(0);
  const [pageTodos, setPageTodos] = useState([]);
  const handleChange = (event, value) => {
    setPage(value);
  };

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
        return response.json().then(function (data) {
          let title = data;
          setTodos(title);
          setPageCounts(Math.ceil(title.length / itemsPerPage));
        });
      })
      .catch(err => {
        console.log('Fetch Error:', err);
      });
  }, []);

  useEffect(() => {
    const start = itemsPerPage * (page - 1);
    const end = itemsPerPage * page;
    setPageTodos(todos.slice(start, end));
  }, [todos, page]);

  return (
    <header className={classes.root}>
      {/* {todos.length === 0 && <div>No Data</div>} */}
      <List>
        {pageTodos.map((value, idx) => {
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
      <Divider />
      <Pagination count={pageCounts} onChange={handleChange} />
    </header>
  );
}
