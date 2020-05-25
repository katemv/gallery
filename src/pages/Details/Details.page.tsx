// Core
import React, {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useHistory, useParams} from "react-router";

// Context
import {HomeActionsContext, HomeStateContext} from "../../providers/HomeProvider";

// Types
import {RouterParams} from "./types";
import {Routes} from "../../navigation/types";
import {TooltipPosition} from "../../store/Home/HomeTypes";

// Components
import {
    Container,
    Image,
    ImageContainer,
    Input,
    EditContainer,
    Heading,
    RadioContainer,
    Label,
    RadioButton,
    ButtonsContainer
} from './styles';
import {ButtonType} from "../../components/Button/types";
import Button from "../../components/Button/Button.component";
import Tooltip from "../../components/Tooltip/Tooltip.component";

const Details = () => {
    const history = useHistory();
    const { imageId } = useParams<RouterParams>();
    const { state: { images } } = HomeStateContext();
    const { updateTooltip } = HomeActionsContext();

    const image = images.find(el => el.id === imageId);

    const [title, setTitle] = useState(image!.tooltip.title);
    const [position, setPosition] = useState(image!.tooltip.position);
    const [color, setColor] = useState(image!.tooltip.color);

    const handleUpdateTooltip = (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            imageId: image!.id,
            data: {
                title,
                position,
                color
            }
        };

        updateTooltip(payload);
        history.push(Routes.HOME);
    };

    return (
        <Container>
            {image && (
                <Fragment>
                    <ImageContainer>
                        <Tooltip
                            title={image.tooltip.title}
                            position={image.tooltip.position}
                            color={image.tooltip.color}
                        >
                            <Image src={image.image}/>
                        </Tooltip>
                    </ImageContainer>
                    <EditContainer>
                        <Heading>Edit tooltip</Heading>
                        <Label>Title</Label>
                        <Input
                            value={title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        />
                        <Label>Position</Label>
                        <RadioContainer>
                            <RadioButton>
                                <input
                                    type="radio"
                                    id="top"
                                    name="position"
                                    value={TooltipPosition.TOP}
                                    checked={position === TooltipPosition.TOP}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(e.target.value as TooltipPosition)}
                                />
                                <label htmlFor="top">top</label>
                            </RadioButton>
                            <RadioButton>
                                <input
                                    type="radio"
                                    id="bottom"
                                    name="position"
                                    value={TooltipPosition.BOTTOM}
                                    checked={position === TooltipPosition.BOTTOM}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(e.target.value as TooltipPosition)}
                                />
                                <label htmlFor="bottom">bottom</label>
                            </RadioButton>
                            <RadioButton>
                                <input
                                    type="radio"
                                    id="right"
                                    name="position"
                                    value={TooltipPosition.RIGHT}
                                    checked={position === TooltipPosition.RIGHT}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(e.target.value as TooltipPosition)}
                                />
                                <label htmlFor="right">right</label>
                            </RadioButton>
                            <RadioButton>
                                <input
                                    type="radio"
                                    id="left"
                                    name="position"
                                    value={TooltipPosition.LEFT}
                                    checked={position === TooltipPosition.LEFT}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(e.target.value as TooltipPosition)}
                                />
                                <label htmlFor="left">left</label>
                            </RadioButton>
                        </RadioContainer>
                        <Label>Color</Label>
                        <RadioContainer>
                            <RadioButton>
                                <input
                                    type="radio"
                                    id="light"
                                    name="color"
                                    value="light"
                                    checked={color === 'light'}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value as 'light' | 'dark')}
                                />
                                <label htmlFor="light">light</label>
                            </RadioButton>
                            <RadioButton>
                                <input
                                    type="radio"
                                    id="dark"
                                    name="color"
                                    value="dark"
                                    checked={color === 'dark'}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value as 'light' | 'dark')}
                                />
                                <label htmlFor="dark">dark</label>
                            </RadioButton>
                        </RadioContainer>
                        <ButtonsContainer>
                            <Button type={ButtonType.LINK} to={Routes.HOME}>
                                Back to gallery
                            </Button>
                            <Button onClick={handleUpdateTooltip}>
                                save
                            </Button>
                        </ButtonsContainer>
                    </EditContainer>
                </Fragment>
            )}
        </Container>
    )
};

export default Details;
