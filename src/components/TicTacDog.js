import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";

const debugging = true;
const gapSize = 20;
const tileBorderSize = 5;
const mobileTileSize = 175;
const desktopTileSize = 200;

const GameTitle = styled.h1`
    font-size: 5vw;
    padding-top: 15px;
    text-align: center;
    font-style: italic;

    @media (min-width: 768px) {
        font-size: 3vw;
    }
`;

const GameHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-text: center;
`;

const ScoreText = styled.h3`
    position: absolute;
    font-size: 5.5em;
    justify-content: center;
    text-align: center;
    text-shadow: 5px 4px 2px black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ScoreImage = styled.img`
    width: 7em;
    margin: 15px 30px 0px 30px;
    border-radius: 100%;
    border: ${tileBorderSize * 2}px solid
        ${(props) => (props.active ? props.theme.border : props.theme.main)};
`;

const GridContainer = styled.div`
    display: grid;
    box-sizing: border-box;
    grid-column-gap: ${gapSize}px;
    grid-row-gap: ${gapSize}px;
    grid-template-columns: repeat(3, ${mobileTileSize}px);
    justify-content: center;
    margin: 0 auto;
    padding: 15px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, ${desktopTileSize}px);
    }
`;

const GameOverContainer = styled.div`
    position: absolute;
    margin: 25px auto;
    padding: 50px 0px;
    justify-content: center;
    text-align: center;
    font-size: 10vw;
    width: 80%;
    background-color: ${(props) => props.theme.main}DD;

    @media (min-width: 768px) {
        font-size: 8vw;
        width: 100%;
    }
`;

const ScoreContainer = styled.div`
    position: relative;
`;

const GameSquare = styled.div`
    box-sizing: border-box;
    width: ${mobileTileSize}px;
    height: ${mobileTileSize}px;
    border: ${tileBorderSize}px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.main};

    display: flex;
    justify-content: center;
    text-align: center;

    :hover {
        background-color: ${(props) => props.theme.border}66;
    }

    @media (min-width: 768px) {
        width: ${desktopTileSize}px;
        height: ${desktopTileSize}px;
    }
`;

const PlayAgainButton = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

const TicTacDog = () => {
    const [gameActive, setGameActive] = useState(true);
    const [playersTurn, setPlayersTurn] = useState(true);
    const [belleScore, setBelleScore] = useState(0);
    const [mindyScore, setMindyScore] = useState(0);
    const [winner, setWinner] = useState("");

    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        const playerImages = document.querySelectorAll(`${ScoreImage}`);

        if (!gameActive) {
            playerImages[0].style.borderColor = `${themeContext.main}`;
            playerImages[1].style.borderColor = `${themeContext.main}`;
        } else {
            if (playersTurn) {
                playerImages[0].style.borderColor = `${themeContext.border}`;
                playerImages[1].style.borderColor = `${themeContext.main}`;
            } else {
                playerImages[0].style.borderColor = `${themeContext.main}`;
                playerImages[1].style.borderColor = `${themeContext.border}`;
            }
        }
    }, [gameActive, playersTurn, themeContext.border, themeContext.main]);

    const squareClicked = (e) => {
        const img = e.target.querySelector("img");
        if (gameActive && img != null && (playersTurn || debugging)) {
            markSquare(img);
        }
    };

    const markSquare = (img) => {
        if (gameActive && img != null) {
            let dog = playersTurn ? "belle" : "mindy";

            img.setAttribute("src", `./images/${dog}.jpg`);
            img.setAttribute("alt", `${dog}`);

            endTurn(findNameOfWinner());
        }
    };

    const endTurn = (winner) => {
        if (winner === "") {
            setPlayersTurn(!playersTurn);
        } else {
            setWinner(winner);
            setGameActive(false);

            if (winner === "Belle") {
                setBelleScore(belleScore + 1);
            } else if (winner === "Mindy") {
                setMindyScore(mindyScore + 1);
            }
        }
    };

    const findNameOfWinner = () => {
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
                return allImagePaths[winningCombinations[i][0]].includes(
                    "belle"
                )
                    ? "Belle"
                    : "Mindy";
            }
        }

        // check if all tiles are taken, and if they are, return that the game was a draw
        let tilesTaken = 0;

        for (let i = 0; i < allImagePaths.length; i++) {
            tilesTaken += allImagePaths[i] !== "" ? 1 : 0;
        }

        return tilesTaken === 9 ? "Neither Dog" : "";
    };

    const clearAllImages = () => {
        const allImages = document.querySelectorAll(`${GameSquare} > img`);

        allImages.forEach((img) => {
            img.setAttribute("src", "");
            img.setAttribute("alt", "");
        });
    };

    const restartGame = () => {
        clearAllImages();
        setWinner("");
        setPlayersTurn(true);
        setGameActive(true);
    };

    let gameOverPanel;

    if (gameActive) {
        gameOverPanel = null;
    } else {
        gameOverPanel = (
            <GameOverContainer>
                {winner} Won!
                <br />
                <PlayAgainButton onClick={restartGame}>
                    Play Again?
                </PlayAgainButton>
            </GameOverContainer>
        );
    }

    return (
        <>
            <GameHeader>
                <ScoreContainer>
                    <ScoreImage src="./images/belle.jpg" alt="Belle Score" />
                    <ScoreText>{belleScore}</ScoreText>
                </ScoreContainer>
                <GameTitle>Tic-Tac-Dog</GameTitle>
                <ScoreContainer>
                    <ScoreImage src="./images/mindy.jpg" alt="Mindy Score" />
                    <ScoreText>{mindyScore}</ScoreText>
                </ScoreContainer>
            </GameHeader>
            {gameOverPanel}
            <GridContainer>
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
            </GridContainer>
        </>
    );
};

export default TicTacDog;
