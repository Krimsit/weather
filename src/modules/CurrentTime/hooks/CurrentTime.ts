import { useState, useEffect } from "react"
import { DateTime, Settings } from "luxon"

Settings.defaultLocale = "ru"

const useCurrentTime = (): { time: string, date: string } => {
    const [time, setTime] = useState<string>(DateTime.now().toFormat("HH:mm"))
    const [date, setDate] = useState<string>(DateTime.now().toFormat("dd-LL-yyyy"))

    useEffect(() => {
        setInterval(() => {
            setTime(DateTime.now().toFormat("HH:mm"))
        }, 5000)

        setInterval(() => {
            setDate(DateTime.now().toFormat("dd-LL-yyyy"))
        }, 60000)
    }, [])

    return { time, date }
}

export default useCurrentTime