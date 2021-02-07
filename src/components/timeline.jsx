import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Partnership Potential</span>
                <h2 className="colorlib-heading animate-box">How We Can Help You</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-chart-line"/>
                      </div>
                      <div className="timeline-label">
                        <h2>We know the operational load of building a business</h2>
                        <p>We recognize that you have a vision for how your business is going to shape technology for decades to come. We want to come in and free up mind-share by handling the operational tasks that eat up your time so you can focus on what you do best: building.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-arrow-up3" />
                      </div>
                      <div className="timeline-label">
                        <h2>We love getting into the weeds right there alongside you and helping you scale</h2>
                        <p>While our checks are relatively small, we look to provide 10x the value of any investor on your cap table by rolling up our sleeves and getting involved in sourcing high quality hires and accounts, reviewing/generating marketing collateral, and if/when you deem it necessary helping out with grueling financial/KPI modeling to enable you to quantitatively drive your business forward.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-heart" />
                      </div>
                      <div className="timeline-label">
                        <h2>We're fans of yours -- and we would love nothing more than to be your partner in this journey you've set out on</h2>
                        <p>As you can probably tell by now, we're regular users and huge fans of your work: building this site was made much easier due to your visionary construction of the React library. We know you're a builder at heart, conceiving delightful products that people far and wide use each and every day. We want to clear the path ahead of you as much as possible so you can continue creating products people love, and making the tech ecosystem a happier, more creative place.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
