import React, { useEffect, useState } from "react";
import styled from "styled-components";

const gapSize = 20;
const tileBorderSize = 5;
const mobileTileSize = 175;
const desktopTileSize = 225;

const GameContainer = styled.div`
    display: grid;
    grid-column-gap: ${gapSize + 2 * tileBorderSize}px;
    grid-row-gap: ${gapSize}px;
    grid-template-columns: repeat(3, ${mobileTileSize}px);
    justify-content: center;
    margin: 0 auto;
    padding: 50px 0px;
    width: 80%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, ${desktopTileSize}px);
    }
`;

const GameSquare = styled.div`
    width: ${mobileTileSize}px;
    height: ${mobileTileSize}px;
    border: ${tileBorderSize}px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.main};
    text-color: ${(props) => props.theme.text};
    display: flex;

    :hover {
        background-color: ${(props) => props.theme.border}66;
    }

    @media (min-width: 768px) {
        width: ${desktopTileSize}px;
        height: ${desktopTileSize}px;
    }
`;

const TicTacDog = () => {
    const [playersTurn, setPlayersTurn] = useState(true);

    const squareClicked = (e) => {
        const img = e.target.querySelector("img");
        if (playersTurn && img != null) {
            markSquare(img);
            if (!aPlayerHasWon()) {
                //setPlayersTurn(!playersTurn);
            } else {
                console.log("someone won");
                // win or lose message
                // restart the game
            }
        }
    };

    const markSquare = (img) => {
        if (img != null) {
            let dog = playersTurn ? "belle" : "mindy";
            img.setAttribute("src", `./images/${dog}.jpg`);
        }
    };

    const aPlayerHasWon = () => {
        // find all of the images
        const allImages = document.querySelectorAll(`${GameSquare} > img`);

        // find the "src" attribute of all images
        const allImagePaths = [...allImages].map((img) =>
            img.getAttribute("src")
        );

        // [0][1][2]
        // [3][4][5]
        // [6][7][8]
        let result =
            // [X][X][X]
            // [ ][ ][ ]
            // [ ][ ][ ]
            (allImagePaths[0] === allImagePaths[1] &&
                allImagePaths[1] === allImagePaths[2]) ||
            // [ ][ ][ ]
            // [X][X][X]
            // [ ][ ][ ]
            (allImagePaths[3] === allImagePaths[4] &&
                allImagePaths[4] === allImagePaths[5]) ||
            // [ ][ ][ ]
            // [ ][ ][ ]
            // [X][X][X]
            (allImagePaths[6] === allImagePaths[7] &&
                allImagePaths[7] === allImagePaths[8]) ||
            // [X][ ][ ]
            // [X][ ][ ]
            // [X][ ][ ]
            (allImagePaths[0] === allImagePaths[3] &&
                allImagePaths[3] === allImagePaths[6]) ||
            // [ ][X][ ]
            // [ ][X][ ]
            // [ ][X][ ]
            (allImagePaths[1] === allImagePaths[4] &&
                allImagePaths[4] === allImagePaths[7]) ||
            // [ ][ ][X]
            // [ ][ ][X]
            // [ ][ ][X]
            (allImagePaths[2] === allImagePaths[5] &&
                allImagePaths[5] === allImagePaths[8]) ||
            // [X][ ][ ]
            // [ ][X][ ]
            // [ ][ ][X]
            (allImagePaths[0] === allImagePaths[4] &&
                allImagePaths[4] === allImagePaths[8]) ||
            // [ ][ ][X]
            // [ ][X][ ]
            // [X][ ][ ]
            (allImagePaths[2] === allImagePaths[4] &&
                allImagePaths[4] === allImagePaths[6]);

        return result;
    };

    return (
        <>
            <GameContainer>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare onClick={squareClicked}>
                    <img src="" alt="" />
                </GameSquare>
            </GameContainer>
        </>
    );
};

export default TicTacDog;
