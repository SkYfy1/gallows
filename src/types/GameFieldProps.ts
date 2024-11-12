interface GameProps {
    word: string[],
    res: any,
    onEnd: (res: any, result: string) => void
};

export default GameProps;