import React from 'react'

function About() {
  let about = "About My ReactJS"
  let aboutId = about.replace(/\s+/g, '-').toLowerCase()
  let psd = "About My PSD Conversion"
  let psdId = about.replace(/\s+/g, '-').toLowerCase()

  return (
    <div className="container">
      <div className="card card-type-access" aria-labelledby={aboutId}>
        <div className="card-header pb-0">
          <h2 className="heading m-0" id={aboutId}>{about}</h2>
        </div>
        <div className="card-body pb-5">
          <p className="mb-0">
            Hi, if your reading this it means your checking out my front end test.<br />
            This is my first ReactJS with integrated API. At my previous employer, we usually just use ReactJS to implement our company's Design System. Basically, we're documenting all of the UI components we make like Typography, Colors, Buttons, etc… it was just a basic ReactJS and basic routing, no API integration just raw information.
          </p>
        </div>
      </div>
      <div className="card card-type-access" aria-labelledby={psdId}>
        <div className="card-header pb-0">
          <h2 className="heading m-0" id={psdId}>{psd}</h2>
        </div>
        <div className="card-body pb-5">
          <p className="mb-0">
            I decided to not implement the slider when in the mobile view because UX design-wise since it only shows 3 items at a time. If it shows 5 or more items then a horizontal slider is needed. I used the modified bootstrap library I made at my former employer. For JavaScript, It was only a simple target, toggle, and control.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About