import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";

const debugging = true;
const gapSize = 20;
const tileBorderSize = 5;

const GameTitle = styled.h1`
    user-select: none;
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
    user-select: none;
`;

const ScoreText = styled.h3`
    user-select: none;
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
    user-select: none;
    width: 6em;
    margin: 15px 20px 0px 20px;
    border-radius: 100%;
    border: ${tileBorderSize * 2}px solid
        ${(props) => (props.active ? props.theme.border : props.theme.main)};
`;

const GridContainer = styled.div`
    user-select: none;
    display: grid;
    grid-column-gap: ${gapSize}px;
    grid-row-gap: ${gapSize}px;
    grid-template-columns: repeat(3, minmax(30%, 1fr));
    justify-content: center;
    margin: 0 auto;
    padding: 15px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(200px, 10%));
    }
`;

const GameOverContainer = styled.div`
    user-select: none;
    position: absolute;
    z-index: 1;
    margin: 25px auto;
    padding: 50px 0px;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 10vw;
    background-color: ${(props) => props.theme.main}DD;

    @media (min-width: 768px) {
        font-size: 8vw;
    }
`;

const ScoreContainer = styled.div`
    user-select: none;
    position: relative;
`;

const GameSquare = styled.div`
    user-select: none;
    position: relative;
    box-sizing: border-box;
    border: ${tileBorderSize}px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.main};
    justify-content: center;
    text-align: center;

    ::before {
        content: "";
        display: block;
        padding-top: 100%;
        pointer-events: none;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    :hover {
        background-color: ${(props) => props.theme.border}66;
    }

    @media (min-width: 768px) {
    }
`;

const PlayAgainButton = styled.a`
    user-select: none;
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

    const validMove = (img) => {
        return gameActive && img != null && img.getAttribute("src") === "";
    };

    const squareClicked = (e) => {
        const img = e.target.querySelector("img");
        if (validMove(img) && (playersTurn || debugging)) {
            markSquare(img);
        }
    };

    const markSquare = (img) => {
        if (validMove(img)) {
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
