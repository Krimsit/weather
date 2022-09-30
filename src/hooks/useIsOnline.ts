import { useState, useEffect } from "react"

const useIsOnline = () => {
    const [status, setStatus] = useState<boolean>(navigator.onLine)

    const handleSetStatus = () => {
        setStatus(navigator.onLine)
    }

    useEffect(() => {
        window.addEventListener('online', handleSetStatus);
        window.addEventListener('offline', handleSetStatus);

        return () => {
            window.removeEventListener('online', handleSetStatus);
            window.removeEventListener('offline', handleSetStatus);
        }
    }, [navigator])

    return status
}

export default useIsOnline