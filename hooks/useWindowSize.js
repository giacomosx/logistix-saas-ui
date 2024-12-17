import {useEffect, useState} from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        setWindowSize(window.innerWidth);

        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        })
        return () => {
            window.removeEventListener('resize', () => {
                setWindowSize(window.innerWidth);
            })
        }
    })
    return windowSize;
}