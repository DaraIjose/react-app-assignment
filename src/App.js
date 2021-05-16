import './App.css';

function App() {
  return (

        <main className="container">
            <div className="sec-2">
              <h1 className="learn">Learn to code by watching others</h1>
              <p className="see">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>

            <div className="sec-3">
              <div className="">
               
                <div className="button1">
                  <a href="/"><strong>Try it free 7 days</strong> then $20/mo. thereafteer</a>
                </div>
              </div>
              <form action="" className="form-container">
                <input type="text" name="firstname" placeholder="First Name"/>
                <input type="text" name="lastname" placeholder="Last Name"/>
                <input type="email" name="email" placeholder="Email Address"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit" className="button2">CLAIM YOUR FREE TRIAL </button>
              </form>
                <p className="terms">
                  By clicking the button you are agreeing to the 
                  <a href="/">Terms and Services</a>
                </p>
            </div>
        </main>

  );
}

export default App;
