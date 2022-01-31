import { AccountContainer, AccountText, Balance, Container, Greetings } from "./styles";
import { FiEye, FiEyeOff } from 'react-icons/fi'

export function UserBalance() {
    return (
        <Container>
            <Greetings>Olá, João Sipauba Silva Pessoa</Greetings>

            <AccountContainer>
                <AccountText>Conta</AccountText>
                <FiEye size={16}/>
            </AccountContainer>

            <Balance>R$ 4030,07</Balance>
        </Container>
    )
}