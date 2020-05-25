import styled from 'styled-components';

export const Container = styled.div`
    background: ${({theme}) => theme.data.primary800};
    height: 100%;
    width: 100%;
    padding: 50px;
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 -5px;
`;

export const Item = styled.div<{selected?: boolean, active?: boolean}>`
    width: calc(25% - 10px);
    margin: 5px;
    padding-bottom: 23% !important;
    background: ${({theme}) => theme.data.primary600};
    position: relative;
    border: 4px solid ${({theme, selected}) => selected ? theme.data.accent : 'transparent'};
    
    & a {
        pointer-events: ${({active}) => !active && 'none'};
    }
`;

export const Image = styled.div<{ src: string }>`
    background-image: url(${({src}) => src});
    background-size: cover;
    background-position: center;
    transition: all ${({theme}) => theme.data.easing};
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    &:hover {
        transform: scale(1.03);
        box-shadow: ${({theme}) => theme.data.shadowElevation300};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({theme}) => theme.data.textContrast};
`;

export const Heading = styled.h1`
    color: ${({theme}) => theme.data.primary200};
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HiddenInput = styled.input`
    visibility: hidden;
`;


