import { FC } from "react"

import { CardProps } from "./Card.interface"

import { BaseCard } from "./Card.styles"

const Card: FC<CardProps> = ({ children, title, css }) => {
  return (
    <BaseCard title={title} css={css}>
      {children}
    </BaseCard>
  )
}

export default Card
