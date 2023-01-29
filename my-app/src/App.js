
import './App.css';
import img2 from './static/imag1.png';
function App() {
  return (
    <>
    <h1>bootstrap course</h1>
    <div className="text-uppercase">
      <h2 className="bg-primary">Typography</h2>
      <p className="lead">welcome to bootsrtap course</p>
      <p className="text-center text-primary" >bootsrtap is a free and open-source css framework.</p>
      <img className="rounded-circle" src={img2} alt="bootstrap logo" width="250" height="250"  />
      <img className="img-thumbnail" src={img2} alt="bootstrap logo" width="250" height="250"  />
      <button className="btn">
              Notification <span className="badge badge-primary text-primary"></span>
      </button>
      <a name="ehab" id="" className="btn btn-primary" href="#" role="button"> ehab</a>
    </div>
    </>
  );
}

export default App;
