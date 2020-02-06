import React, { useState, useEffect } from "react"
import { P, App, Body } from "./styled"
import { useFetch } from "../../hooks/useFetch"
import { Col } from "react-grid"

export default () => {
  const data = useFetch({
    url: "https://sergiolazaromondargo.firebaseio.com/profile.json",
    init: {},
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    let max_number = data.Subtitle || 1
    let inter = setInterval(() => {
      setCount(c => (c >= max_number ? 0 : c + 1))
    }, 3000)
    return () => {
      clearInterval(inter)
    }
  }, [data])

  return (
    <>
      <App
        url={"http://robgrabowski.me/wp-content/uploads/2019/11/estee-bg.jpg"}
      >
        <P>{data.Title} </P>
        <P>{data.Subtitle && data.Subtitle[count]}</P>
      </App>
      <Body
        container
        spacing={0}
        url={"http://robgrabowski.me/wp-content/uploads/2019/11/estee-bg.jpg"}
      >
        <Col item xs={12} sm={9} md={8}>
          <h2>{data.Title} </h2>
          <p>
            I’ve most recently worked as a full-time freelancer for Estée Lauder
            Online in New York City. I managed and maintained their Bumble and
            bumble brand’s website for nearly three years and helped facilitate
            their transition from outdated and hardcoded web practices to usage
            of a sustainable Drupal CMS platform.
          </p>
        </Col>
        <Col item xs={12} sm={3} md={4}>
          <h2>Service</h2>
          <p>
            Drupal Development, Version Control Updates, Web Design, Web
            Development, UI/UX, Email Campaigns, Social Media Integration.
          </p>
        </Col>
        <img
          src="http://robgrabowski.me/wp-content/uploads/2019/11/estee-mocks-all.jpg"
          alt="cero"
          style={{ width: "100%" }}
        />
      </Body>
    </>
  )
}
