import React from 'react'

const Index = () => {
  return (
    
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src="assets/img/profile.png" className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p><span className="title-s">Name: </span> <span>Ali Samuel Chidera</span></p>
                          <p><span className="title-s">Profile: </span> <span>frontend developer</span></p>
                          <p><span className="title-s">Email: </span> <span>alisamuel500@gmail.com</span></p>
                          <p><span className="title-s">Phone: </span> <span>+2348160486223</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>Bootstrap</span> <span className="pull-right">50%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>JAVASCRIPT</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>React</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>C#</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>Asp.Net webApi</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      <p className="lead">
                      I'm a passionate frontend developer with a keen eye for detail and a love for crafting seamless user
                       experiences. With 3 years of experience in the field, I've had the privilege 
                      of working on a diverse range of projects, from responsive websites to interactive web applications.
                      </p>
                      <p className="lead">
                      My journey in frontend development began with a fascination for how technology
                       can transform ideas into visually stunning and intuitive interfaces. Over the years, 
                       I've honed my skills in HTML, CSS,JavaScript and React, constantly staying updated with the
                       latest trends and best practices in the ever-evolving landscape of web development.
                      </p>
                      <p className="lead">
                      What excites me most about frontend development is the opportunity to blend creativity with
                       functionality. Whether it's optimizing performance for speed, ensuring cross-browser compatibility, 
                      or implementing pixel-perfect designs, I thrive on the challenge of turning concepts into reality.
                      </p>
                      <p className='lead'>I'm excited about the opportunity to leverage my frontend development skills to
                       create innovative and impactful digital experiences that delight users and drive business success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End About Section */}
      {/* ======= Services Section ======= */}
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Services
                </h3>
                <p className="subtitle-a">
                  Check out my services
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="bi bi-code" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title"> Frontend Web Development</h2>
                  <p className="s-description text-center">
                  Offering custom frontend web development services tailored to meet the unique needs of businesses and
                   individuals. From simple landing pages to complex web applications,
                    I specialize in crafting user-friendly, responsive, and visually appealing frontend solutions using the latest technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="bi bi-lightbulb" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Website Redesign and Optimization</h2>
                  <p className="s-description text-center">
                   Providing website redesign and optimization services to revamp outdated or underperforming websites.
                   By analyzing user behavior, improving user experience, and optimizing performance, I transform websites into modern, 
                  efficient, and conversion-focused platforms that drive results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="bi bi-people" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Frontend Training Services</h2>
                  <p className="s-description text-center">
                  Offering consultancy and training services to individuals and teams looking 
                  to enhance their frontend development skills and practices. 
                  From architectural guidance to code reviews and training workshops,
                   I provide valuable insights and resources 
                  to help teams improve their frontend development
                   workflows and outcomes.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>{/* End Services Section */}
      {/* ======= Counter Section ======= */}
      <div className="section-counter paralax-mf bg-image" style={{backgroundImage: 'url(assets/img/counters-bg.jpg)'}}>
        <div className="overlay-mf" />
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="bi bi-check" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={1} className="counter purecounter" />
                  <span className="counter-text">WORKS COMPLETED</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="bi bi-journal-richtext" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={1} className="counter purecounter" />
                  <span className="counter-text">YEARS OF EXPERIENCE</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="bi bi-people" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start={0} data-purecounter-end={2} data-purecounter-duration={1} className="counter purecounter" />
                  <span className="counter-text">TOTAL CLIENTS</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="bi bi-award" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start={0} data-purecounter-end={0} data-purecounter-duration={1} className="counter purecounter" />
                  <span className="counter-text">AWARD WON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End Counter Section */}
      {/* ======= Portfolio Section ======= */}
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Portfolio
                </h3>
                <p className="subtitle-a">
                Explore Previous Projects
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/sharpcop.png" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Sharpchop</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date"> July. 2023</span>
                        <p className="card-description">
                        <b>Description:</b>  A web application that simplifies the 
                        dining experience by allowing users
to seamlessly choose a restaurant, place an order by selecting from available menu
options, and conveniently make payments using their preferred method, be it credit
card or cash. The app ensures a hassle free process, providing users the convenience
of receiving their food precisely at the scheduled time.

                  </p>
                  <p className="card-description">
                        <b>Role:</b> Lead Frontend developer
                  </p>
                  <p className="card-description">
                        <b>Technologies:</b> React,Html,Css, Bootsrap, Javascript,Jquery, Asp.Net webApi,C#
                  </p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://sharpchop.bivisoft.com"> <span className="bi bi-plus-circle" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/petmart.png" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Petmart</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date"> Sep. 2023</span>
                        <p className="card-description">
                        <b>Description:</b> Petmart is your go-to pet gallery app! You can Register, 
                        upload adorable pictures of your pets, and explore a delightful collection of pet photos from fellow users. You can create and personalize
                         your profile to showcase your furry friends. It Dives into a community where pets take the spotlight.
                  </p>
                  <p className="card-description">
                        <b>Role:</b> Lead Frontend developer and designer
                  </p>
                  <p className="card-description">
                        <b>Technologies:</b> React, Html, Css, Javascript, .Net, C#
                  </p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://github.com/Feelzcode/Petmart"> <span className="bi bi-plus-circle" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/garage.png" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">GarageKing</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">Jan. 2024</span>
                        <p className="card-description">
                        <b>Description:</b> A fully comprehensive and user-friendly garage management software. Designed to streamline your operations, increase efficiency, reduce costs, and maximise profits. GarageKing is your
                         go-to solution for managing appointments, tracking inventory, and enhancing customer satisfaction.
                  </p>
                  <p className="card-description">
                        <b>Role:</b> Frontend designer
                  </p>
                  <p className="card-description">
                        <b>Technologies:</b> Html, Css, Javascript,Jquery, C#
                  </p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a href="https://garageKing.uk"> <span className="bi bi-plus-circle" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
     
      
      {/* ======= Contact Section ======= */}
      <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(assets/img/overlay-bg.jpg)'}}>
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    
                    <div className="col-md-10">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">
                          Get in Touch
                        </h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                        You can reach me through my address, my phone number,
                         my email or any of my social media accounts.I am always available.
                        </p>
                        <ul className="list-ico">
                          <li><span className="bi bi-geo-alt" />Abakpa Nike, Enugu Nigeria </li>
                          <li><span className="bi bi-phone" /> +2348160486223</li>
                          <li><span className="bi bi-envelope" /> alisamuel500@gmail.com</li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li><a href><span className="ico-circle"><i className="bi bi-facebook" /></span></a></li>
                          <li><a href><span className="ico-circle"><i className="bi bi-instagram" /></span></a></li>
                          <li><a href><span className="ico-circle"><i className="bi bi-twitter" /></span></a></li>
                          <li><a href><span className="ico-circle"><i className="bi bi-linkedin" /></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  )
}

export default Index