import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { AnchorTitle, CustomParagraph } from "../styles/CustomStyles";

const Key = styled.span`
    color: ${(props) => props.theme.border};
    font-size: ${(props) => props.theme.bigText * 0.6}vw;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.smallText * 0.75}vw;
    }
`;

const AboutMe = () => {
    const today = dayjs(Date.now());
    const myBirthday = dayjs("1995-09-19");

    const years = today.diff(myBirthday, "year");
    const months = today.diff(myBirthday, "month") - years * 12;

    const yearsString = `${years} years`;
    const monthsString = months > 0 ? `, ${months} months` : "";

    return (
        <section>
            <CustomParagraph size="big" left="25" width="55">
                const <AnchorTitle href="#aboutme">aboutMe</AnchorTitle> =
                &#123;
            </CustomParagraph>
            <CustomParagraph size="small" left="30" width="50">
                <Key>myName:</Key> 'Alex',
                <br />
                <Key>myAge:</Key> '{yearsString}
                {monthsString}',
                <br />
                <Key>myLocation:</Key> 'Manitoba, Canada',
                <br />
                <Key>myInterests:</Key> ['Game Development', 'Software
                Development', 'Web Development', 'Video Games', 'Cute Dogs'],
                <br />
                <Key>aComment:</Key> '
                <i>
                    Welcome to my portfolio! Here you'll find information about
                    me, my personal projects, my education, and this portfolio
                    website.
                </i>
                ',
                <br />
            </CustomParagraph>
            <CustomParagraph size="big" left="25" width="10">
                &#125;
            </CustomParagraph>
        </section>
    );
};

export default AboutMe;
