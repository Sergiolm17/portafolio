import React, { useState, useEffect } from "react"
import { P, App } from "./styles"
import { useFetch } from "../../hooks/useFetch"
import Image from "../../components/image"
export default () => {
  const data = useFetch({
    url: "https://sergiolazaromondargo.firebaseio.com/profile.json",
    init: {},
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    let max_number = data.Subtitle ? data.Subtitle.length : 1
    let inter = setInterval(() => {
      setCount(c => (c >= max_number - 1 ? 0 : c + 1))
    }, 3000)

    return () => {
      clearInterval(inter)
    }
  }, [data])
  return (
    <App url={data.MainImage}>
      <P>{data.Title} </P>
      <P>{data.Subtitle && data.Subtitle[count]}</P>
      <Image src="Hero.jpg" background={"center"} />
    </App>
  )
}
