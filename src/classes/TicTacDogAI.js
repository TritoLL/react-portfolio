// milliseconds
const moveDelay = 650;

class TicTacDogAI {
    static makeMove = async () => {
        await new Promise((r) => setTimeout(r, moveDelay));
        return 1;
    };
}

export default TicTacDogAI;
