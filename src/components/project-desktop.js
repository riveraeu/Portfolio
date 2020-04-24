import React from "react"

const ProjectMobile = props => (
  <div className="project-mobile-container">
    <h1 style={{textAlign: "center"}}>{props.content.title}</h1>
    <div className="project-copy">
      <p>{props.content.p1}</p>
    </div>
    <div class="project-images-inset" data-sal="zoom-in">
      <img className="w-75" src={props.content.img1} alt={props.content.title}/>
      <img className="w-75" src={props.content.img2} alt={props.content.title}/>
    </div>
    <div className="project-copy">
      <p>{props.content.p2}</p>
      <br />
      <p>{props.content.p3}</p>
    </div>
    <div class="project-images-inset" data-sal="zoom-in">
      <img className="w-75" src={props.content.img3} alt={props.content.title}/>
      <img className="w-75" src={props.content.img4} alt={props.content.title}/>
    </div>
    <div className="project-copy">
      <p>{props.content.p4}</p>
      <br />
      <p>{props.content.p5}</p>
    </div>
    <div class="project-images-inset" data-sal="zoom-in">
      <img data-sal="zoom-in" className="w-75" src={props.content.img5} alt={props.content.title}/>
      <img data-sal="zoom-in" className="w-75" src={props.content.img6} alt={props.content.title}/>
    </div>
    <div className="project-copy">
      <p>{props.content.p6}</p>
    </div>
  </div>
)

export default ProjectMobile