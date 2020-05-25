import styled from 'styled-components';

export const Container = styled.div`
    background: ${({theme}) => theme.data.primary800};
    height: 100%;
    width: 100%;
    padding: 50px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
    width: 50%;
    padding-bottom: 46%;
    position: relative;
`;

export const Image = styled.div<{src: string}>`
    background-image: url(${({src}) => src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Input = styled.input`
    height: 45px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 3px solid ${({theme}) => theme.data.primary100};
    outline: none !important;
    color: ${({theme}) => theme.data.textContrast};
    font-size: 16px;
    margin-bottom: 20px;
    
    &:focus {
        border-bottom-color: ${({theme}) => theme.data.accent};
    }
`;

export const EditContainer = styled.form`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content; space-between;
    flex-direction: column;
`;

export const Heading = styled.h1`
    color: ${({theme}) => theme.data.textContrast};
`;

export const RadioContainer = styled.div`
    margin: 10px 0 20px;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    width: 100%;
`;

export const RadioButton = styled.div`
    margin: 5px 0;
    
    & > input {
        margin-left: 20px;
        cursor: pointer;
    }
    
    & > label {
        color: ${({theme}) => theme.data.textContrast};
        letter-spacing: 1px;
        font-weight: 600;
        margin-left: 10px;
        cursor: pointer;
    }
`;

export const Label = styled.label`
    color: ${({theme}) => theme.data.primary100};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    margin-left: 10px;
    margin: 0;
    width: 100%;
    font-size: 12px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    
    & > button {
        color: ${({theme}) => theme.data.accent};
    }
`;
