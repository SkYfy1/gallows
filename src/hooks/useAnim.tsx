import { useSpring } from "@react-spring/web"

const useAnim = () => {
    const [spring, api] = useSpring(() => ({
        from: {
            width: 0,
            opacity: 0,
            height: 0,
            scale: 1
        },
        config: {
            duration: 600
        }
    }))

    const fn = (num: number) => {
        api.start({
            width: num === 2 ? 100 : num >= 6 ? 20 : 0,
            opacity: 1,
            height: num === 1 ? 100 : num === 3 ? 25 : num === 5 ? 50 : 0,
            scale: num === 4 ? 15 : 1
        })
    }
    // useEffect(() => {
    //     const fn = () => {
    //         api.start({
    //             width: num === 1 ? 100 : num >= 6 ? 20 : 0,
    //             opacity: 1,
    //             height: num === 2 ? 100 : num === 3 ? 25 : num === 5 ? 50 : 0,
    //             scale: num === 4 ? 15 : 1
    //         })
    //     }
    //     fn()
    // }, [])

    return { spring, fn }
}

export default useAnim
