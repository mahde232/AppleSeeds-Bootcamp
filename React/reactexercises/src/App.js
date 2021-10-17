import './App.css';
// import HelloWorld from './components/2.1-hello-world/2.1.helloWorld';
// import Basics from './components/2.2-basics-of-jsx/2.2-basics-of-jsx';
// import Boxes from './components/3.1-boxes/3.1-boxes';
// import Quiz from './components/3.2-quiz/3.2-quiz';
// import Button from './components/4.1-buttons/Button';
import Card from './components/4.2-cards/Card';
import randomImage from './components/4.2-cards/img/img1.png'

function App() {
  return (
    <div>
      <h1>Exercises</h1>
      {/* <HelloWorld/> */}
      {/* <Basics/> */}
      {/* <Boxes/> */}
      {/* <Quiz/> */}
      {/* <Button name='Important' weight='900'/>
      <Button name='Not Important' weight='100'/> */}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Card imgURL='https://source.unsplash.com/random' title='Picture 1' description='Random Description for picture 1'/>
        <Card imgURL='https://picsum.photos/100/200' title='Picture 2' description='Random Description for picture 2'/>
        <Card imgURL={randomImage} title='Picture 3' description='Random Description for picture 3'/>
      </div>
    </div>
  );
}

export default App;