import styled from "styled-components";

const CustomHeader = styled.header`
    margin: 0 auto;
    padding-bottom: 20px;
`;

export default function Header() {
    return (
        <CustomHeader>
            <h1>Animal Crossing: New Horizons</h1>
            <h2>Critter Information</h2>
        </CustomHeader>
    );
}
