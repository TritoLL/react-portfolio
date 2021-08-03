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
        }
    };

    const markSquare = (img) => {
        if (img != null) {
            let dog = playersTurn ? "belle" : "mindy";
            img.setAttribute("src", `./images/${dog}.jpg`);

            checkForAWin();
        }
    };

    const checkForAWin = () => {
        let winner = findWinningPlayer();
        if (winner === "") {
            // let the next player have their turn
            setPlayersTurn(!playersTurn);
        } else {
            // display a win or lose message and restart the game
            console.log(`${winner} won!`);
        }
    };

    const findWinningPlayer = () => {
        // find all of the images
        const allImages = document.querySelectorAll(`${GameSquare} > img`);

        // find the "src" attribute of all images
        const allImagePaths = [...allImages].map((img) =>
            img.getAttribute("src")
        );

        //[0][1][2]
        //[3][4][5]
        //[6][7][8]
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        let winner = "";

        for (let i = 0; i < winningCombinations.length; i++) {
            // if any of the squares we are checking are empty, check the next combination immediately
            if (
                allImagePaths[winningCombinations[i][0]] === "" ||
                allImagePaths[winningCombinations[i][1]] === "" ||
                allImagePaths[winningCombinations[i][2]] === ""
            ) {
                continue;
            }

            // check for a win
            let result =
                allImagePaths[winningCombinations[i][0]] ===
                    allImagePaths[winningCombinations[i][1]] &&
                allImagePaths[winningCombinations[i][1]] ===
                    allImagePaths[winningCombinations[i][2]];

            // if someone won, find out who it was and break out of the loop
            if (result) {
                winner = allImagePaths[winningCombinations[i][0]];
                break;
            }
        }

        // if the winner string is not empty, return who actually won, otherwise return an empty string
        return winner !== ""
            ? winner.includes("belle")
                ? "Belle"
                : "Mindy"
            : "";
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
