import React from 'react'
import "./DesignCards.css"

const DesignCards = () => {
  return (
   <section id="design-cards">
            <div className="design-cards-div">
                <figure className="figure-section">
                    <img src="./assets/placeholder image 1.png" alt="" height="130px" width="130px"></img>
                    <figcaption>
                        <h3>Product design</h3>
                        <p>&nbsp;&nbsp;This is a template Figma file, turned into code using Anima. Learn more at
                            AnimaApp.com</p>
                    </figcaption>
                </figure>

                <figure className="figure-section">
                    <img src="./assets/placeholder image 2.png" alt="" height="130px" width="130px"></img>
                    <figcaption>
                        <h3> Art direction</h3>
                        <p>&nbsp;&nbsp;This is a template Figma file, turned into code using Anima. Learn more at
                            AnimaApp.com</p>
                    </figcaption>
                </figure>

                <figure className="figure-section">
                    <img src="./assets/placeholder image 3.png" alt="" height="130px" width="130px"></img>
                    <figcaption>
                        <h3>Visual design</h3>
                        <p>&nbsp;&nbsp;This is a template Figma file, turned into code using Anima. Learn more at
                            AnimaApp.com</p>
                    </figcaption>
                </figure>

            </div>
        </section>
  )
}

export default DesignCards;