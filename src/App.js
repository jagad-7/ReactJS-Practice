import './App.css';
import Profile from './ComponentsOne/Profile'
import UseStateExam from './ComponentsOne/UseStateExam'
import UseStateExamTwo from './ComponentsOne/UseStateExamTwo';
import UseStateExamThree from './ComponentsOne/UseStateExamThree';
import UseEffectOne from './ComponentsTwo/UseEffectOne'
import UseEffectTwo from './ComponentsTwo/UseEffectTwo'
import UseEffectThree from './ComponentsTwo/UseEffectThree'
import UseEffectFour from './ComponentsTwo/UseEffectFour'
import WithoutUseContext from './ComponentsThree/WithoutUseContext'
import UseContextExam from './ComponentsThree/UseContextExamOne';


function App() {
  return (
    <div className="App">
     <Profile />
     <UseStateExam />
     <UseStateExamTwo />
     <UseStateExamThree />
     <UseEffectOne />
     <UseEffectTwo />
     <UseEffectThree />
     <UseEffectFour />
     <UseContextExam />
     <WithoutUseContext />
    </div>
  );
}

export default App;
