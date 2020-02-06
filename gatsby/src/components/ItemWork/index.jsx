import React from "react"
import { Background, Title, Image } from "./styles"

export default ({ work }) => {
  return (
    <div>
      <Background item xs={12} sm={6} md={4}>
        <Title>{work.titulo}</Title>
        <p>{work.cargo}</p>
        <Image url={work.url} />
      </Background>
    </div>
  )
}
