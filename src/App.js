import { x as f, y, Test } from "./module";
import Test2 from "./module";
import { default as app } from "./module";
function App() {
  return (
    <div className="App">
      Hello React {f + y}
      {Test()}
      {Test2()}
      {app()}
    </div>
  );
}

export default App;
