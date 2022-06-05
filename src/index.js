import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppRouter />
);
{/* <React.StrictMode>
    <NoteApp />
  </React.StrictMode> */}

// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     console.log('This should only run once')
//   }, [])

//   useEffect(() => {
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])
//   // const increment = () => {
//   //   setCount(count + 1)
//   // }
//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(props.count)}>Reset</button>
//       <button onClick={() => setCount(count +1)}>+1</button>

//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//       {/* <button onClick={increment}>+1</button> */}
//     </div>
//   )
// }
// App.defaultProps = {
//   count: 0
// }

// root.render(
//   <React.StrictMode>
//     <App count={0}  />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
