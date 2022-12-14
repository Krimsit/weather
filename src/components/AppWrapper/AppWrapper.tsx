import { FC } from "react"

import { Button, Result } from "antd"
import { QueryWrapper } from ".."

import { AppWrapperProps } from "./AppWrapper.interface"

const AppWrapper: FC<AppWrapperProps> = ({
  children,
  status,
  isError,
  refetch
}) => {
  if (isError || status === "error") {
    return (
      <Result
        status="500"
        title="Возникли ошибки"
        subTitle="Возникли непредвиденные ошибки"
        extra={
          <Button type="primary" onClick={refetch}>
            Попробовать снова
          </Button>
        }
        style={{ height: "100%" }}
      />
    )
  }

  return <QueryWrapper status={status}>{children}</QueryWrapper>
}

export default AppWrapper
