import {
    createContext,
    useContext,
    ReactNode,
    FC,
    useReducer,
    useEffect,
} from 'react';
import { QueryStatus } from 'react-query';
import { Button, Result } from 'antd';

import { useGetCurrentLocation } from "../hooks"
import { useGeoInformation } from "../dto/hooks"

import { GeoDetail} from "../dto/types/Geo"

interface State extends GeoDetail {
    status: QueryStatus
}

type Action = {
    type: "GEO:GET",
    payload: State
} | {
    type: "GEO:STATUS",
    payload: QueryStatus
}

type Dispatch = (action: Action) => void

type ProviderProps = {
    children: ReactNode
}

const initialState: State = {
    status: "idle",
    city: "",
    lat: 0,
    lon: 0
}

const StateContext = createContext<State>(initialState)
const DispatchContext = createContext<Dispatch | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'GEO:GET': {
            return { ...state, ...action.payload }
        }
        case 'GEO:STATUS': {
            return { ...state, status: action.payload }
        }
        default: {
            throw new Error(`Unhandled action`)
        }
    }
}

export const GeoProvider: FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { location: currentLocation, getCurrentLocation } = useGetCurrentLocation()

    const geoQuery = useGeoInformation({
        data: { lat: currentLocation.data?.coords.latitude as number, lon: currentLocation.data?.coords.longitude as number },
        enabled: currentLocation.status === "success",
    })

    const handleRefetchGeo = () => {
        getCurrentLocation()
        geoQuery.refetch()
    }

    useEffect(() => {
        dispatch({ type: "GEO:STATUS", payload: geoQuery.status })

        if (geoQuery.status === "success") {
            dispatch({ type: "GEO:GET", payload: { ...geoQuery.data, status: "success" } })
        }
    }, [geoQuery.status])

    return <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
            {geoQuery.status === "error" || currentLocation.status === "error" && <Result status="500" title="Возникли ошибки" subTitle={currentLocation.error || "Ошибка при получении данных"} extra={<Button type="primary" onClick={handleRefetchGeo}>Попробовать снова</Button>} style={{ height: "100%" }} />}
            {currentLocation.status === "success" && children}
        </DispatchContext.Provider>
    </StateContext.Provider>
}

export const useGeoState = (): State => {
    const context = useContext(StateContext)

    if (context === undefined) {
        throw new Error(
            'useGeoState must be used within a GeoProvider',
        )
    }

    return context
}

export const useGeoDispatch = (): Dispatch => {
    const context = useContext(DispatchContext)

    if (context === undefined) {
        throw new Error(
            'useGeoDispatch must be used within a GeoProvider',
        )
    }

    return context
}