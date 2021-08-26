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

const CardImage = styled.img`
    border: 5px solid ${(props) => props.theme.border};
    border-radius: 5%;
    padding: 2px;
    margin: 0px 25px;
`;

const GameContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        margin-top: 25px;
    }
`;

const GameControls = styled.div`
    display: flex;
    order: 3;

    @media (min-width: 768px) {
        order: 2;
        flex-direction: column;
    }
`;

const GameButton = styled.button`
    box-sizing: border-box;
    padding: 5px;
    margin: 10px;
    border-radius: 5%;
    font-size: 2em;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.border};

    :hover,
    :focus {
        background-color: ${(props) => props.theme.body};
    }

    :active {
        background-color: ${(props) => props.theme.main};
    }

    @media (min-width: 768px) {
        margin: 10px 0;
    }
`;

const FirstCardImage = styled(CardImage)`
    order: 1;

    @media (min-width: 768px) {
        order: 1;
    }
`;

const SecondCardImage = styled(CardImage)`
    order: 2;

    @media (min-width: 768px) {
        order: 3;
    }
`;

const HigherOrLower = () => {
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
    if (error !== "") errorMessage = <ErrorHeading>{error}</ErrorHeading>;

    return (
        <>
            {errorMessage}
            <GameHeader>
                <GameTitle>Higher or Lower</GameTitle>
            </GameHeader>
            <GameInstructions>
                Guess if the next card will be higher or lower than the current
                card.
            </GameInstructions>
            <GameContainer>
                <FirstCardImage
                    src={firstCard.image}
                    alt={`${firstCard.value} ${firstCard.suit}`}
                />
                <GameControls>
                    <GameButton>Higher</GameButton>
                    <GameButton>Lower</GameButton>
                </GameControls>
                <SecondCardImage
                    src={secondCard.image}
                    alt={`${secondCard.value} ${secondCard.suit}`}
                />
            </GameContainer>
        </>
    );
};

export default HigherOrLower;
