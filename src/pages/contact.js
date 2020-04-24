import React from "react"
import Layout from "../components/layout"
import ContactStyles from "./contact.module.css"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <div data-sal="zoom-in" className={ContactStyles.containerContact}>
      <div className={ContactStyles.contactCol1}>
        <img className="w-75" src="./contact/profile-picture.jpg" alt="profile of Eugene" />
      </div>
      <div className={ContactStyles.contactCol2}>
        <p>Eugene was born and raised in the SF Bay Area. He studied computer science in college and has been a freelance web developer since graduating in 2017.</p>
        <p>Like what you see and want to work with Eugene? Good news, he offers web design and development services. 
        Feel free to reach out with your inquires for any small project.</p>
        <p className={ContactStyles.center}><a style={{textDecoration: "underline"}} href="mailto:eugenejrivera@gmail.com">Send Eugene a message</a></p>
        <div className={ContactStyles.containerContactIcons}>
          <a href="https://github.com/riveraeu"><img src="./contact/github-icon.png" alt="github icon" /></a>
          <a href="https://www.linkedin.com/in/riveraeu/"><img src="./contact/linkedin-icon.png" alt="linkedin icon" /></a>
        </div>
      </div>
    </div>
  </Layout>
)