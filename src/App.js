import "./App.css";
import Counter from "./Counter";
import Practice from "./Practice";

function App() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      {arr.forEach((ele) => (
        <div>{ele}</div>
      ))}

      <h1>hello</h1>
      <Counter></Counter>
      <Practice></Practice>
    </>
  );
}

export default App;
