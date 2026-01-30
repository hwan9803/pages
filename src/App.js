import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">π
      <header className="App-header" style={{height:'20vh'}}>
        <p>
          안녕하세요!
          <br />
          개발자 hwan의 Github Pages 입니다.
        </p>
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px'
        }}>
          <a style={{color: 'white', margin:'15px'}}>Home</a>
          <a style={{color: 'white', margin:'15px'}}>About</a>
          <a style={{color: 'white', margin:'20px'}}>Project</a>
        </div>
      </header>
      <div style={{height: '100px'}}>
        <div id="category-area" style={{
          width: '25%',
          height: '100%',
          float:'left',
          borderRight: '1px solid grey',
          padding: '10px 0',
          boxSizing: 'border-box'
        }}>
          empty
        </div>
        <div id="content-area" style={{
          display: 'inline-block',
          background: '',
          width: '75%',
          height: '100%',
          float: 'right',
          padding: '10px 0',
          // margin: '0% 3% 0% 3%'
        }}>
          아직 개발중인 페이지 입니다
        </div>
      </div>
    </div>
  );
}

export default App;
