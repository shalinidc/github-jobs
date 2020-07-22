import { useReducer } from "react"

export default function useFetchJobs(params, page) {

    const ACTIONS = {
        MAKE_REQUEST : 'make-request',
        GET_DATA: 'get-data',
        ERROR: 'error'
    }

    
    function reducer(state, action) {

        switch (action.type) {
            case ACTIONS.MAKE_REQUEST : return {
                ...state,
                loading: true,
                jobs: []
            }
            case ACTIONS.GET_DATA : return {
                ...state,
                loading: false,
                jobs : action.payload.jobs
            }
            case ACTIONS.ERROR : return {
                ...state,
                loading: false,
                error : action.payload.error,
                jobs : []
            }
            default: return state
        }

    }

    const [state, dispatch] = useReducer(reducer, {jobs:[], loading: false, error: false})
    return {
        jobs: [3,4,56,6],
        loading: true,
        error: true
    }

}