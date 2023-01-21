import "./styles.css";
import LeftC from "./leftC";
import RightC from "./right";
export default function App() {
  return (
    <div className="App">
      <h1>Nandkishor Sharma</h1>
      <h5>Full Stack Web Developer</h5>
      <p>
        To work hard with full dedication for the achievement of organizational
        objectives under satisfying job contact, hence enhancing my skills and
        knowledge.
      </p>
      <div className="row">
        <LeftC />
        <div className="col-1"></div>
        <RightC />
      </div>
    </div>
  );
}
