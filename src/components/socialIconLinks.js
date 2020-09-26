import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import Dev from './images/dev'
import Medium from './images/medium'


const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/tech-sam" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="https://www.linkedin.com/in/techsam/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`} />
      </a>
      <a href="https://dev.to/tech_sam/" target="_blank" rel="noopener noreferrer">
        <Dev classes={`${iconClasses}`} />
      </a>
      <a href="https://medium.com/@tech_sam" target="_blank" rel="noopener noreferrer">
        <Medium classes={`${iconClasses}`} />
      </a>
      <a href="https://twitter.com/_tech_sam" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`} />
      </a>
      <a href="https://www.instagram.com/the_tech_sam/" target="_blank" rel="noopener noreferrer">
        <IconInstagram classes={`${iconClasses}`} />
      </a>
    </>
  )
}

export default SocialIconLinks
