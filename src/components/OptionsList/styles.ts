import { styled } from "../../../stitches.config";

export const Container = styled('section', {
    backgroundColor: '$whiteText',
    width: '250px',
    padding: '2rem',
    marginLeft: '2rem',
    marginTop: '1.5rem',

    borderRadius: 12,
    borderColor: '#E8E8F0',
    borderWidth: 1,
    borderStyle: 'solid'
})

export const Option = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0'
})

export const OptionIdentity = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

export const OptionText = styled('p', {
    fontFamily: '$montserrat',
    fontWeight: 500,
    fontSize: 14,
    color: '$darkerGray',
    lineHeight: '24px',

    marginLeft: 20 
})

export const OptionDivider = styled('hr', {
    backgroundColor: '$buttonGray',
    height: '1px',
    border: 'none'
})