import { Span, Text } from "./styles";

interface Props {
    text: String
}

export function HeaderOption(props: Props){

    return (
        <Span onClick={()=>window.alert("bem vindo ao site")}>
            <Text>{props.text}</Text>
        </Span>
    )

}  