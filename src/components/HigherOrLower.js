import React, { useEffect, useState } from "react";
import { GameHeader, GameTitle } from "../styles/CustomStyles";
import styled from "styled-components";

let debugging = true;
let debugDeckID = "0kpu32kr6ner";

const ErrorHeading = styled.h1`
    color: red;
`;

const CardImage = styled.img``;

const HigherOrLower = () => {
    const [deckID, setDeckID] = useState("");
    const [error, setError] = useState("");
    const [firstCard, setFirstCard] = useState({
        image: "./images/blank.gif",
        value: "",
        suit: "",
    });
    const [secondCard, setSecondCard] = useState({
        image: "./images/blank.gif",
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
            <h1>Deck ID: {deckID}</h1>
            <CardImage
                src={firstCard.image}
                alt={`${firstCard.value} ${firstCard.suit}`}
            />
            <CardImage
                src={secondCard.image}
                alt={`${secondCard.value} ${secondCard.suit}`}
            />
            <button
                onClick={async () => {
                    let firstCard = await nextCard();
                    let secondCard = await nextCard();

                    setFirstCard(firstCard);
                    setSecondCard(secondCard);
                }}
            >
                Draw a Card
            </button>
        </>
    );
};

export default HigherOrLower;
