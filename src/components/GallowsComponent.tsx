import AnimatedElem from "./AnimatedElem"

const GallowsComponent = ({ mistakes }: { mistakes: number }) => {
    return (
        <div className="animationBox">
            <AnimatedElem mistakes={mistakes} num={1} styles={{ width: '1px', backgroundColor: 'black', color: 'transparent', position: 'absolute', left: 0, bottom: 0 }} />
            <AnimatedElem mistakes={mistakes} num={2} styles={{ height: '0.5px', backgroundColor: 'black', color: 'transparent', position: 'absolute' }} />
            <AnimatedElem mistakes={mistakes} num={3} styles={{ width: '0.5px', backgroundColor: 'black', color: 'transparent', position: 'absolute', right: 0, top: 0 }} />
            <AnimatedElem mistakes={mistakes} num={4} styles={{ width: '1px', height: '1px', borderRadius: '100%', backgroundColor: 'black', color: 'transparent', position: 'absolute', right: -1, top: 20 }} />
            <AnimatedElem mistakes={mistakes} num={5} styles={{ width: '0.5px', backgroundColor: 'black', color: 'transparent', position: 'absolute', right: 0, top: 20 }} />
            <AnimatedElem mistakes={mistakes} num={6} styles={{ height: '0.5px', backgroundColor: 'black', color: 'transparent', position: 'absolute', right: 0, top: 40 }} />
            <AnimatedElem mistakes={mistakes} num={6} styles={{ height: '0.5px', backgroundColor: 'black', color: 'transparent', position: 'absolute', left: 100, top: 40 }} />
            <AnimatedElem mistakes={mistakes} num={7} styles={{ height: '1px', backgroundColor: 'black', color: 'transparent', position: 'absolute', right: -3, top: 75, transform: 'rotate(-45deg)' }} />
            <AnimatedElem mistakes={mistakes} num={7} styles={{ height: '1px', backgroundColor: 'black', color: 'transparent', position: 'absolute', left: 96, top: 75, transform: 'rotate(45deg)' }} />
            <div style={{ width: '40%', height: '1px', backgroundColor: 'black', color: 'transparent', position: 'absolute', left: -10, bottom: 0 }}> -</div>
        </div>
    )
}

export default GallowsComponent
