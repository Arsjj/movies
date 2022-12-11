import { useLocation } from "react-router-dom"

function useMediaType(arg) {
    return useLocation().pathname.includes(arg)
}

export default useMediaType