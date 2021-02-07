import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Are We?</h2>
                    <p><b>We strive to be a first check investor, first call relationship, and above all a first class partner. Our investment philosophy is rooted in three key principles: </b> </p>
                    <p> <b>(1) Morality is the foundation of business. </b> <br></br> A reputation is built behind closed doors, and morals are what guide your decisions when no one is watching. We look to partner with founders that share in this perspective and operate with the highest degree of integrity in both business and life.</p>
                    <p> <b>(2) Capital is a commodity; relationships are not. </b> <br></br> Any investor can provide capital, but few provide a first-call relationship. We believe that it is our duty to hold you accountable, challenge your thinking, and serve as an unmatched resource through the highs and lows of the entrepreneurial journey. We aim to be not only an investor, but also a trusted confidant.</p>
                    <p> <b>(3) Respect is earned through action. </b> <br></br> Our belief is that words provide little value if not backed by action. This is why we commit a meaningful portion of our time to performing executional work for our portfolio companies. We, much like our founders, focus with a relentless obsession on delivering tangible value to our partners.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do we do?</span>
                <h2 className="colorlib-heading">Some of our ops expertise:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-social-linkedin-circular"/>
                </span>
                <div className="desc">
                    <h3>Source prospective hires for [X] role that you’re looking to fill</h3>
                    <p>We can scrape LinkedIn profiles, email addresses, and even draft emails on your behalf to ensure you have access to the best software, product, and business talent your industry has to offer.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-clipboard" />
                </span>
                <div className="desc">
                    <h3>Identify customers that fit [Y] persona</h3>
                    <p>We’ll put together a curated, extensive list of potential accounts, similar to the hires list, and search through our personal networks as well.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-lightbulb" />
                </span>
                <div className="desc">
                    <h3>Review [Z] piece of marketing collateral and give it a copy/design refresh</h3>
                    <p> Alternatively, we can create something net new for your business -- we’ll take a crack at a v1 draft of a one-pager, deck, or piece of sales enablement material.</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
