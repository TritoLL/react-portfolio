// milliseconds
const moveDelay = 1000;

class TicTacDogAI {
    static makeMove = async (images) => {
        await new Promise((r) => setTimeout(r, moveDelay));
        return this.#determineMove(images);
    };

    static #determineMove = (images) => {
        const validImages = [...images].map((img) =>
            img.getAttribute("src").includes("belle")
                ? false
                : img.getAttribute("src").includes("mindy")
                ? true
                : null
        );
        console.log(validImages);
        return images[0];
    };
}

export default TicTacDogAI;
