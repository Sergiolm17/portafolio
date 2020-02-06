import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ImgBack = styled(Img)`
  min-height: 87.5vh;
  min-width: 100vw;
  position: absolute !important;
  z-index: -4;

  img {
    object-position: ${props => props.background} !important;
  }
`
function renderImage(file, background) {
  console.log(background)

  if (background)
    return (
      <ImgBack
        fluid={file.node.childImageSharp.fluid}
        background={background}
      />
    )

  return <Img fluid={file.node.childImageSharp.fluid} />
}

const MyImg = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === props.src),
          props.background
        )
      }
    />
  )
}
export default MyImg
