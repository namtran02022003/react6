import './App.css';


function App () {
    return (
        <div className='div-black'>
        <div className="menu-10">
          <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" width="100%" style={{marginBottom: '-6px'}} />
          <a href="#" className="a-menu-10 div-black div-black-hover">
            <i style={{fontSize: '45px'}} className="fa fa-home " />
            <p style={{margin: 0}}>HOME</p>
          </a>
          <a href="#" className="a-menu-10 div-hover">
            <i style={{fontSize: '45px'}} className="fa fa-user " />
            <p style={{margin: 0}}>ABOUT</p>
          </a>
          <a href="#" className="a-menu-10 div-hover">
            <i style={{fontSize: '45px'}} className="fa fa-eye " />
            <p style={{margin: 0}}>PHOTOS</p>
          </a>
          <a href="#" className="a-menu-10 div-hover">
            <i style={{fontSize: '45px'}} className="fa fa-envelope " />
            <p style={{margin: 0}}>CONTACT</p>
          </a>
        </div>
        <div className="menu-90">
          <div className="menu-90-content">
            <header className="header">
              <h1 style={{fontSize: '64px'}}>I'm John Doe.</h1>
              <p style={{fontSize: '20px'}}>Photographer and Web Designer.</p>
              <img src="https://www.w3schools.com/w3images/man_smoke.jpg" alt="boy" className="w3-image" width={992} height={1108} />
            </header>
            <div className=" div-color">
              <h1>MY NAME</h1>
              <hr style={{width: '250px', opacity: '0.6', margin: 0}} />
              <p style={{color: '#757575'}}>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing
                elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>
              <h2>My Skills</h2>
              <p style={{letterSpacing: '5px', color: '#757575'}}>Photography</p>
              <div className="div-big">
                <div className="div-small">
                </div>
              </div>
              <p style={{letterSpacing: '5px', color: '#757575'}}>Web Design</p>
              <div className="div-big">
                <div style={{width: '80%'}} className="div-small">
                </div>
              </div>
              <p style={{letterSpacing: '5px', color: '#757575'}}>Photoshop
              </p>
              <div className="div-big">
                <div style={{width: '75%'}} className="div-small">
                </div>
              </div>
              <div className="menu-for">
                <div className="menu-for-small">
                  <h2 style={{marginBottom: 0}}>11+</h2>
                  <p style={{marginTop: 0}}>Partners</p>
                </div>
                <div className="menu-for-small">
                  <h2 style={{marginBottom: 0}}>55+</h2>
                  <p style={{marginTop: 0}}>Projects Done</p>
                </div>
                <div className="menu-for-small">
                  <h2 style={{marginBottom: 0}}>89+</h2>
                  <p style={{marginTop: 0}}>Happy Clients</p>
                </div>
                <div className="menu-for-small">
                  <h2 style={{marginBottom: 0}}>150+</h2>
                  <p style={{marginTop: 0}}>Meetings</p>
                </div>
              </div>
              <button className="button-menu-for">
                <i className="fa fa-download" />
                Download Resume
              </button>
              <h1>My Price</h1>
              <div className="div-flex">
                <div className="menu-flex-opacity">
                  <h1 style={{margin: 0, padding: '30px 0', backgroundColor: '#616161', color: '#fff', borderBottom: '1px solid #ddd'}}>
                    BASSIC</h1>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>Web Design</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>Photography</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>5GB Storage</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>Mail Support</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>
                    <b style={{fontSize: '24px'}}>$ 10</b><br />
                    per month
                  </p>
                  <button className="button-opacity">Sign up</button>
                </div>
                <div className="menu-flex-opacity">
                  <h1 style={{margin: 0, padding: '30px 0', backgroundColor: '#616161', color: '#fff', borderBottom: '1px solid #ddd'}}>
                    PRO</h1>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>Web Design</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>Photography</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>5GB Storage</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>Mail Support</p>
                  <p style={{borderBottom: '1px solid #ddd', margin: 0, padding: '12px'}}>
                    <b style={{fontSize: '24px'}}>$ 25</b><br />
                    per month
                  </p>
                  <button className="button-opacity">Sign up</button>
                </div>
              </div>
              <h1>My Reputation</h1>
              <div className="menu-float">
                <div style={{marginRight: '10px'}} className="menu-float-image">
                  <img style={{borderRadius: '50px'}} src="https://www.w3schools.com/w3images/bandmember.jpg" width="80px" />
                </div>
                <div className="menu-float-image">
                  <p style={{margin: 0}}><span style={{marginRight: '10px'}}>Chris Fox.</span>CEO at Mighty Schools.</p>
                  <p>John Doe saved us from a web disaster.
                  </p>
                </div>
              </div>
              <div className="menu-float">
                <div style={{marginRight: '10px'}} className="menu-float-image">
                  <img style={{borderRadius: '50px'}} src="https://www.w3schools.com/w3images/avatar_g2.jpg" width="80px" />
                </div>
                <div className="menu-float-image">
                  <p style={{margin: 0}}><span style={{marginRight: '10px'}}>Rebecca Flex.</span> CEO at Company.</p>
                  <p>No one is better than John Doe.
                  </p>
                </div>
              </div>
              <h1 style={{marginTop: '90px'}}>My Photos</h1>
              <hr style={{margin: 0, width: '25%'}} />
              <div style={{marginTop: '20px'}} className="div-flex">
                <div className="menu-flex-image-small">
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/wedding.jpg" width="100%" />
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/rocks.jpg" width="100%" />
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/sailboat.jpg" width="100%" />
                </div>
                <div className="menu-flex-image-small">
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/underwater.jpg" width="100%" />
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/chef.jpg" width="100%" />
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/wedding.jpg" width="100%" />
                  <img style={{marginBottom: '10px'}} src="https://www.w3schools.com/w3images/p6.jpg" width="100%" />
                </div>
              </div>
              <h1 style={{marginTop: '150px'}}>Contact Me</h1>
              <hr style={{margin: 0, width: '25%'}} />
              <div className="list-icon-text">
                <p>
                  <i style={{fontSize: '36px', marginRight: '20px', minWidth: '35px', textAlign: 'center'}} className="fa fa-map-marker " /> Chicago, US
                </p>
                <p>
                  <i style={{fontSize: '36px', marginRight: '20px', minWidth: '35px', textAlign: 'center'}} className="fa fa-phone " /> Phone: +00 151515
                </p>
                <p>
                  <i style={{fontSize: '36px', marginRight: '20px', minWidth: '35px', textAlign: 'center'}} className="fa fa-envelope " />  Email: mail@mail.com
                </p>
              </div>
              <div className="form-input">
                <label>Let's get in touch. Send me a message:</label>
                <input className="input-footer" type="text" placeholder="name" />
                <input className="input-footer" type="text" placeholder="email" />
                <input className="input-footer" type="text" placeholder="subject" />
                <input className="input-footer" type="text" placeholder="message" />
                <button className="button-footer">
                  <i className="fa fa-paper-plane" />SEND MESSAGE
                </button>
              </div>
              <div className="list-icon-footer">
                <i className="fa fa-facebook-official w3-hover-opacity" />
                <i className="fa fa-instagram w3-hover-opacity" />
                <i className="fa fa-snapchat w3-hover-opacity" />
                <i className="fa fa-pinterest-p w3-hover-opacity" />
                <i className="fa fa-twitter w3-hover-opacity" />
                <i className="fa fa-linkedin w3-hover-opacity" />
                <p style={{fontSize: '15px'}}>Powered by w3.css</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};
 export default App;