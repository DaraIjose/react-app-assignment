import background from "./Images/bg-intro-desktop.png";
import backgroundmobile from "./Images/bg-intro-mobile.png";

import './App.css';

function App() {
  return (

        <main>

          <img src={background} alt="background design"/>

          <div className="container">

            <div className="sec-1">
              <button className="button1">Try it free 7 days then $20/mo. thereafter</button>
            </div>
            <div className="sec-2">
              <h1 className="learn">Learn to code by watching others</h1>
              <p className="see">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>
            <div className="sec-3">
              <input type="" name="firstname" placeholder="First Name"/>
              <input type="text" name="lastname" placeholder="Last Name"/>
              <input type="text" name="email" placeholder="Email Address"/>
              <input type="text" name="password" placeholder="Password"/>
              <div>
                <button className="button2">CLAIM YOUR FREE TRIAL </button>
              </div>
              <div>
                <p className="footer">By clicking the button you are agreeing to the Terms and Services</p>
              </div>
            </div>

          </div>

        </main>

  );
}

export default App;
