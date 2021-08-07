import { useState, useEffect } from 'react';

export function TodoList() {
  const [todo, setTodo] = useState([]);

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
          let title = data.slice(0, 3);
          console.log(title);
          setTodo(title);
        });
      })
      .catch(err => {
        console.log('Fetch Error:-S', err);
      });
  }, []);

  return (
    <header className="App-header">
      {todo.length === 0 && <div>No Data</div>}
      <ul>
        {todo.map((titles, idx) => (
          <li key={idx}>{titles.title}</li>
        ))}
      </ul>
    </header>
  );
}
