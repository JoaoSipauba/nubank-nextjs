import { Span, Text } from "./styles";

interface Props {
    text: String
}

export function HeaderOption(props: Props){

    return (
        <Span>
            <Text>{props.text}</Text>
        </Span>
    )

}  