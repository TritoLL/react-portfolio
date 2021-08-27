import React, { useEffect, useState } from "react";
import {
    GameHeader,
    GameTitle,
    GameInstructions,
} from "../styles/CustomStyles";
import styled from "styled-components";

let debugging = true;
let debugDeckID = "0kpu32kr6ner";
let noCardImage = "./images/card_unknown.png";

const ErrorHeading = styled.h1`
    color: red;
`;

const ScoreText = styled(GameInstructions)`
    text-align: center;
    font-size: 1.5em;
`;

const Card = styled.div`
    padding: 2px;
    width: 100%;

    :nth-of-type(1) {
        margin-right: 10px;
    }
    :nth-of-type(2) {
        margin-left: 10px;
    }
`;

const CardTitle = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => props.theme.border};
`;

const CardImage = styled.img`
    box-sizing: border-box;
    border: 5px solid ${(props) => props.theme.border};
    border-radius: 5%;
    padding: 2px;
    width: 100%;
`;

const GameContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: block;
    margin-top: 10px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        max-width: 40em;
    }
`;

const GameCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GameControls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    width: 100%;
`;

const GameButton = styled.button`
    box-sizing: border-box;
    padding: 5px;
    margin: 5px 0;
    width: 100%;
    text-align: center;
    border-radius: 0%;
    font-size: 5vw;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    border: 4px solid ${(props) => props.theme.border};

    :hover,
    :focus {
        background-color: ${(props) => props.theme.body};
    }

    :active {
        background-color: ${(props) => props.theme.main};
    }

    @media (min-width: 768px) {
        font-size: 2.5em;
    }
`;

const HigherOrLower = () => {
    const [gameActive, setGameActive] = useState(false);
    const [deckID, setDeckID] = useState("");
    const [error, setError] = useState("");
    const [firstCard, setFirstCard] = useState({
        image: `${noCardImage}`,
        value: "",
        suit: "",
    });
    const [secondCard, setSecondCard] = useState({
        image: `${noCardImage}`,
        value: "",
        suit: "",
    });

    useEffect(() => {
        if (!debugging) {
            try {
                fetch(
                    "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
                )
                    .then((response) => response.json())
                    .then((data) => setDeckID(data["deck_id"]));
            } catch (error) {
                console.log("Error:", error);
                setError("Could not fetch a deck, try refreshing the page.");
            }
        } else {
            setDeckID(debugDeckID);
        }
    }, []);

    const shuffleDeck = async () => {
        try {
            await fetch(
                `http://deckofcardsapi.com/api/deck/${deckID}/shuffle/`
            );
        } catch (error) {
            console.log("Error:", error);
            setError("Could not shuffle the deck, try refreshing the page.");
        }
    };

    const drawCards = async (n) => {
        try {
            return await fetch(
                `http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${n}`
            ).then((response) => response.json());
        } catch (error) {
            console.log("Error:", error);
            return null;
        }
    };

    const nextCard = async () => {
        let cardData;
        let tries = 5;

        do {
            try {
                cardData = await drawCards(1);
                if (cardData !== null && !cardData["success"]) {
                    await shuffleDeck();
                }
            } catch (error) {
                console.log("Error:", error);
            }

            if (cardData === null) tries--;
        } while (tries > 0 && (cardData === null || !cardData["success"]));

        if (tries > 0) return cardData["cards"][0];
        else {
            setError("Could not draw a card, try refreshing the page.");
            return { value: "", suit: "", image: "" };
        }
    };

    let errorMessage;
    errorMessage = error !== "" ? <ErrorHeading>{error}</ErrorHeading> : null;

    let gameButtons;
    gameButtons = gameActive ? (
        <>
            <GameButton>Higher</GameButton>
            <GameButton>Lower</GameButton>
        </>
    ) : (
        <GameButton
            onClick={async () => {
                setFirstCard(await nextCard().then(setGameActive(true)));
            }}
        >
            Draw Card
        </GameButton>
    );

    return (
        <>
            {errorMessage}
            <GameHeader>
                <GameTitle>Higher or Lower</GameTitle>
            </GameHeader>
            <GameInstructions>
                Guess if the next card will be higher or lower than your card.
            </GameInstructions>
            <ScoreText>Score: 0 &nbsp; Best Score: 0</ScoreText>
            <GameContainer>
                <GameCards>
                    <Card>
                        <CardTitle>Your Card</CardTitle>
                        <CardImage
                            src={firstCard.image}
                            alt={`${firstCard.value} ${firstCard.suit}`}
                        />
                    </Card>
                    <Card>
                        <CardTitle>Next Card</CardTitle>
                        <CardImage
                            src={secondCard.image}
                            alt={`${secondCard.value} ${secondCard.suit}`}
                        />
                    </Card>
                </GameCards>
                <GameControls>{gameButtons}</GameControls>
            </GameContainer>
        </>
    );
};

export default HigherOrLower;
