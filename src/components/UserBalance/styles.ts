import { styled } from "../../../stitches.config";

export const Container = styled('div', {
    color: '$whiteText',
    // height: '65%',
    // padding: '0 1rem',

    // backgroundColor: "$orange",
})

export const Greetings = styled('h1', {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: '$montserrat'
})

export const AccountContainer = styled('div', {
    marginTop: '1rem',
    marginBottom: '0.4rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
})

export const AccountText = styled('h2', {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: '$montserrat'
})

export const Balance = styled('p', {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: '$montserrat'
})