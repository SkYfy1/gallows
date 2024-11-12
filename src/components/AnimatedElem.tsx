import { animated } from "@react-spring/web"
import useAnim from '../hooks/useAnim'
import { useEffect } from "react";

const AnimatedElem = ({ num, styles, mistakes }: { num: number, styles: any, mistakes: number }) => {
    const { spring, fn } = useAnim();

    useEffect(() => {
        if ( mistakes === num ) {
            fn(num)
        }
    }, [mistakes])

    return (
        <div>
            <animated.div style={{ ...spring, ...styles }}></animated.div>
        </div>
    )
}

export default AnimatedElem
