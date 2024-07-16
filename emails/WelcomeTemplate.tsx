import React, { CSSProperties } from "react";
import {
  Html,
  Preview,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
      <Preview>Hello World</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-5xl">Welcome {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
// const body:CSSProperties ={
//       fontSize: "30px"
// }

export default WelcomeTemplate;
