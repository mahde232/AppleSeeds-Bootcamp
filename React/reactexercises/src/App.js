import './App.css';
// import HelloWorld from './components/2.1-hello-world/2.1.helloWorld';
// import Basics from './components/2.2-basics-of-jsx/2.2-basics-of-jsx';
// import Boxes from './components/3.1-boxes/3.1-boxes';
// import Quiz from './components/3.2-quiz/3.2-quiz';
// import Button from './components/4.1-buttons/Button';
// import Card from './components/4.2-cards/Card';
// import randomImage from './components/4.2-cards/img/img1.png'
// import Card from './components/6.1-class-based-components/Card';
// import Counter from './components/7.1-increment/Counter';
// import DisappearingBox from './components/7.2-hide-and-seek/DisappearingBox';
// import MyComponent from './components/8.1-life-cycle-methods/MyComponent';
// import AnimatedBox from './components/8.2-box-animations/AnimatedBox';
// import ChangingBox from './components/8.3-changing-box/ChangingBox';
// import Spinner from './components/9.1-spinner/Spinner';
// import ChuckNorris from './components/12.1-ChuckNorrisAPI/ChuckNorrisAPI';
// import Q11_1 from './components/11.1-child-to-father/main';
// import Checkbox from './components/11.2-checkbox/Checkbox';
// import Q11_3 from './components/11.3-form-review/main';
import DataMassaging from './components/13.1-data-massaging/DataMassaging';

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
      {/* <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Card imgURL='https://source.unsplash.com/random' title='Picture 1' description='Random Description for picture 1'/>
        <Card imgURL='https://picsum.photos/100/200' title='Picture 2' description='Random Description for picture 2'/>
        <Card imgURL={randomImage} title='Picture 3' description='Random Description for picture 3'/>
      </div> */}
      {/* <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Card imgURL='https://source.unsplash.com/random' title='Picture 1' description='Random Description for picture 1'/>
        <Card>
          <button>Test</button>
        </Card>
        <Card imgURL='https://picsum.photos/100/200' title='Picture 2' description='Random Description for picture 2'/>
      </div> */}
      {/* <Counter /> */}
      {/* <DisappearingBox/> */}
      {/* <MyComponent/> */}
      {/* <AnimatedBox/>
      <AnimatedBox/>
      <AnimatedBox/> */}
      {/* <ChangingBox/> */}
      {/* <Spinner isActive={true}/> */}
      {/* <ChuckNorris></ChuckNorris> */}
      {/* <Q11_1></Q11_1> */}
      {/* <div id='Q11_2'>
        <Checkbox text='I read the terms of the app' isChecked=''></Checkbox>
        <Checkbox text='I accept the terms of the app' isChecked=''></Checkbox>
        <Checkbox text='I want to get weekly news letter' isChecked='true'></Checkbox>
        <Checkbox text='I want to get sales and offers' isChecked='true'></Checkbox>
      </div> */}
      {/* <Q11_3></Q11_3> */}
      <DataMassaging />
    </div>
  );
}

export default App;