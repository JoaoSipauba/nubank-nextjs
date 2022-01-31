import Image from "next/image";
import { HeaderOption } from "../HeaderOption";
import { Container } from "./styles";

export function Header(){

    return (
        <Container>
            <Image src="/nu.svg" alt="Logo" width={44} height={24} />
            <HeaderOption text="Acessar outra conta"/>
        </Container>
    )

}  