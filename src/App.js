import FunctionalComp from './components/FunctionalComp';
import { ClassComp, ClassComp1 } from './components/ClassComp';
import Click from './components/Click';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div>
      {/* <ClassComp />
      <ClassComp1 />
      <FunctionalComp />
      <Click />
      <Counter /> */}
      <ParentComp />
    </div>
  );
}

export default App;
