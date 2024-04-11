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
                       I've honed my skills in HTML,CSS,JavaScript,Jquery,React and Typescript  , constantly staying updated with the
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
      
      

      {/* End Portfolio Section */}
     
     {/* features */}
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

      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
           
            <h1 className="mb-5"> Project Features</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                  <i className="fa fa-car-side fa-2x me-3" />
                  <h4 className="m-0">SharpChop</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                  <i className="fa fa-car fa-2x me-3" />
                  <h4 className="m-0">Petmart</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                  <i className="fa fa-cog fa-2x me-3" />
                  <h4 className="m-0">GarageKing</h4>
                </button>
                
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: '350px'}}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/assets/img/sharpcop.png"  style={{objectFit: 'cover'}} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">SharpChop</h3>
                      <p className="mb-4">Simplified dining app: Choose restaurant, 
                      order from menu, pay securely. Hassle-free process ensures timely food delivery, with options for credit card or cash payments. 
                      Enjoy the convenience of receiving food precisely as scheduled.</p>
                    
                      <p><i className="bi bi-check text-success me-3" /> Implement Add to Cart feature for product selection</p>
                      <p><i className="bi bi-check text-success me-3" />Integrate Notification System for order updates</p>
                      <p><i className="bi bi-check text-success me-3" />Developed Track Order functionality. </p>
                      <p><i className="bi bi-check text-success me-3" />Designed Shop Display Homepage and dashboard for users </p>
                      {/* <a href className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3" /></a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: '350px'}}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/assets/img/petmart.png" style={{objectFit: 'cover'}} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Petmart</h3>
                      <p className="mb-4">Petmart: Register, upload pet pics, explore adorable pet gallery.
                       Personalize profile to showcase furry friends.
                       Dive into a vibrant pet-loving community where your pets shine.</p>
                      <p><i className="bi bi-check text-success me-3" />Implemented a streamlined login and registration 
                      </p>
                      <p><i className="bi bi-check text-success me-3" />Added a feature to upload captivating pet videos and images</p>
                      <p><i className="bi bi-check text-success me-3" />Meticulously designed the gallery page for an immersive exploration of adorable pets.






</p>

                      {/* <a href className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3" /></a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: '350px'}}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="/assets/img/garage.png"  style={{objectFit: 'cover'}} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">GarageKing</h3>
                      <p className="mb-4">GarageKing: Comprehensive garage management software. 
                      Streamline operations, boost efficiency, cut costs, and optimize profits. Manage appointments, track inventory, and enhance customer satisfaction with ease.
                       Your ultimate solution for garage management needs.</p>
                      <p>Crafted a captivating homepage layout, 
                      meticulously designing each section for optimal user engagement. Seamlessly integrated navigation and intuitive user interface elements to enhance user experience. Created visually appealing sections to 
                      showcase key information and capture user interest effectively.</p>
                     
                      {/* <a href className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3" /></a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{minHeight: '350px'}}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-4.jpg" style={{objectFit: 'cover'}} alt="" />
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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