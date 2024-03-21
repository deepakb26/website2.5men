import React from "react";
import './Fifth.css';

function App() {

  return (
    <div className='Fifthm ' id="mhs">
        <div className="Fifthmbox">
            <div className="collab">Collaborators.</div>
            <div className="down">
        <div className='mis-vis-eye-par animate__animated animate__fadeInDown' >
            <div className='child-abt-parent-wrap'>
                <div className='child-abt eye-div-wrap'>
                    <div className='dp'>
                    <img src={require("./mee.png")}id="picn"  alt='mission' />
                    </div>
                    <div className="info">Nimit Jain</div> 
                    <a className="gitlink" href="https://github.com/Nimitzzz">
                    <button class="btn" type="button">
                    <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>
                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                    </button>
                    </a>         
                </div>
            </div>
            <div className='child-abt-parent-wrap'>
                <div className='child-abt diamond-div-wrap'>
                    <div className='dp'>
                    <img src={require("./Deepak.jpeg")} id="pic" alt='mission' />
                    </div>
                    <div className="info">Deepak</div>
                    <a className="gitlink" href="https://github.com/deepakb26">
                    <button class="btn" type="button">
                    <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>
                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                    </button>
                    </a>       
                </div>
            </div>
            <div className='child-abt-parent-wrap'>
                <div className='child-abt mission-div-wrap'>
                    <div className='dp'>
                        <img src={require("./harshal.jpg")} id="pic" alt='mission' />
                    </div>
                <div className="info">Harshal Bhure</div>
                <a className="gitlink" href="https://github.com/Harshal-Bhure">
                <button class="btn" type="button">
                <p className="gitpara"><i class="bi bi-github"></i>&nbsp;Github</p>
                <div id="container-stars">
                    <div id="stars"></div>
                </div>
                <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                </button>
                </a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>

  );
}

export default App;
