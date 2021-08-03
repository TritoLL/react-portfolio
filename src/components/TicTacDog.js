import React from "react";
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

    p {
        pointer-events: none;
        position: relative;
        margin: auto;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 10em;
    }

    :hover,
    :active {
        background-color: ${(props) => props.theme.border}66;
    }

    @media (min-width: 768px) {
        width: ${desktopTileSize}px;
        height: ${desktopTileSize}px;
    }
`;

const TicTacDog = () => {
    return (
        <>
            <GameContainer>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
                <GameSquare>
                    <img src="" alt="" />
                </GameSquare>
            </GameContainer>
        </>
    );
};

export default TicTacDog;
