import { FC } from "react"
import { Spin, Result } from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

import { CardProps } from "./Card.interface"

import { BaseCard, Error } from './Card.styles';

const Card: FC<CardProps> = ({ children, title, css, status }) => {
    const getTitle = () => {
        if (!!status) {
            switch (status) {
                case 'loading':
                    return "Загрузка данных..."
                case "success":
                    return title
                case "error":
                    return "Ошибка при загрузке данных"
                case "idle":
                    return "Ожидается начало загрузки"
                default:
                    return "Ошибка"
            }
        } else {
            return title
        }
    }

    return <BaseCard title={getTitle()} css={css}>
        {status === "loading" || status === "idle" && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
        {status === "error" && <Error status="error" />}
        {(status === "success" || !status) && children}
    </BaseCard>
}

export default Card