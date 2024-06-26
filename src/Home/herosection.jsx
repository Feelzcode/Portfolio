import React from 'react'

const Herosection = () => {
  return (
    <div id="hero" className="hero route bg-image" style={{backgroundImage: 'url(assets/img/new.jpg)'}}>
    <div className="overlay-itro" />
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          {/*<p class="display-6 color-d">Hello, world!</p>*/}
          <h1 className="hero-title mb-4">I am Ali <span >Samuel</span>  Chidera</h1>
          <p className="hero-subtitle" ><span className="typed"
            data-typed-items="web Designer, Frontend Developer, Freelancer," /></p>
          {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Herosection