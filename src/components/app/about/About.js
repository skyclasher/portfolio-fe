import React from 'react';
import './About.css';

let about = () =>{
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About Me</h2>
            <h3 className="about text-muted" style={{textAlign: "left"}}>Hello ! My name is Ahmad Syafiq. You can call me Syafiq. <br />
                                        I am a programmer and a web developer specializing in Microsoft technology back-end and web-based production. <br />
                                        I have been doing programming for almost 4 years. <br />
                                        Eventhough, i already have 4 years of experience, I still have a lot of things to learn as technology is always evolving.  <br />
                                        I have experience in C#, ASP.NET, .Net Framework, .Net Core, MSSQL, JavaScript, JQuery, MYSQL, Android Studio, PHP, and Framework in Laravel & MVC 5. <br />
                                        <br />          
                                        I’m always open to exciting new job opportunities, with my Curriculum Vitae available on request. Please get in touch, it would be great to hear from you. <br />
                                        <br />
                                        Three words to describe myself : <br/>
                                        <ol>
                                          <li>Ambitious</li>
                                          <li>Easy-going</li>
                                          <li> Conscientious</li> 
                                        </ol>         
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
