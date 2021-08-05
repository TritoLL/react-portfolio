// milliseconds
const moveDelay = 1000;

class TicTacDogAI {
    static makeMove = async (images) => {
        await new Promise((r) => setTimeout(r, moveDelay));
        return images[0];
    };
}

export default TicTacDogAI;
