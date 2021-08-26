import React, { useEffect, useState } from "react";
import styled from "styled-components";

let debugging = true;
let debugDeckID = "0kpu32kr6ner";

const ErrorHeading = styled.h1`
    color: red;
`;

const HigherOrLower = () => {
    const [deckID, setDeckID] = useState("");
    const [firstCard, setFirstCard] = useState({ value: "", suit: "" });
    const [secondCard, setSecondCard] = useState({ value: "", suit: "" });
    const [error, setError] = useState("");

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

        do {
            try {
                cardData = await drawCards(1);
                if (cardData !== null && !cardData["success"]) {
                    await shuffleDeck();
                }
            } catch (error) {
                console.log("Error:", error);
            }
        } while (cardData === null || !cardData["success"]);

        return cardData["cards"][0];
    };

    let errorMessage;
    if (error !== "") errorMessage = <ErrorHeading>{error}</ErrorHeading>;

    return (
        <>
            {errorMessage}
            <h1>Deck ID: {deckID}</h1>
            <img
                src={firstCard.image}
                alt={`${firstCard.value} ${firstCard.suit}`}
            />
            <img
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
