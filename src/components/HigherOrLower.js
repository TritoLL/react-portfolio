import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HigherOrLower = () => {
    const [deckID, setDeckID] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            fetch(
                "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
            )
                .then((response) => response.json())
                .then((data) => setDeckID(data["deck_id"]));
        } catch (error) {
            setError(
                "Something went wrong when fetching a new deck.\nPlease try refreshing the page."
            );
        }
    }, []);

    let errorMessage;
    if (error !== "") errorMessage = `<h1 style="color:red;">${error}</h1>`;

    return (
        <>
            {errorMessage}
            <h1>{deckID}</h1>
        </>
    );
};

export default HigherOrLower;
