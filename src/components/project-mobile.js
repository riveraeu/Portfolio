import React from "react"

const ProjectMobile = props => (
  <div className="container-project container-mobile-project">
    <h1 style={{textAlign: "center", paddingBottom: "50px"}}>{props.content.title}</h1>
    <img data-sal="zoom-in" className="w-75" src={props.content.img1} alt={props.content.title}/>
    <p>{props.content.p1}</p>
    <img data-sal="zoom-in" className="w-75" src={props.content.img2} alt={props.content.title}/>
    <p>{props.content.p2}</p>
    <img data-sal="zoom-in" className="w-75" src={props.content.img3} alt={props.content.title}/>
    <p>{props.content.p3}</p>
    <img data-sal="zoom-in" className="w-75" src={props.content.img4} alt={props.content.title}/>
    <p>{props.content.p4}</p>
    <img data-sal="zoom-in" className="w-75" src={props.content.img5} alt={props.content.title}/>
    <p>{props.content.p5}</p>
    <img data-sal="zoom-in" className="w-75" src={props.content.img6} alt={props.content.title}/>
    <p>{props.content.p6}</p>
  </div>
)

export default ProjectMobile