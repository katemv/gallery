// Core
import React, {memo} from 'react';
import {ChangeEvent, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {useCallbackOne} from "use-memo-one";

// Context
import {HomeActionsContext, HomeStateContext} from '../../providers/HomeProvider';

// Types
import {useTheme} from "../../theme/ThemeContext";
import {IImage, TooltipPosition} from '../../store/Home/HomeTypes';

// Components
import Button from '../../components/Button/Button.component';
import Tooltip from '../../components/Tooltip/Tooltip.component';
import {ButtonsContainer, Container, Grid, Header, Heading, HiddenInput, Image, Item} from './styles';
import {getUniqueID} from "../../utils/getUniqueId";

const Home = () => {
    const { toggle, mode } = useTheme();
    const { state: { images, selectedImages } } = HomeStateContext();
    const { updateSelectedImages, deleteImages, addImage, clearSelectedImages } = HomeActionsContext();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const input = useRef<HTMLInputElement | null>(null);

    const handleEdit = useCallbackOne(() => {
        setIsEditing(!isEditing);

        if (isEditing) {
            deleteImages();
            clearSelectedImages();
        }
    }, [isEditing]);

    const handleSelect = useCallbackOne((id: string) => {
        if (isEditing) {
            updateSelectedImages({ id });
        }
    }, [isEditing]);

    const handleAdd = useCallbackOne(() => {
        if (input && input.current) {
            input.current!.click();
        }
    }, [input]);

    const handleUpload = useCallbackOne((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            const src = window.URL.createObjectURL(e.target.files[0]);
            const id = getUniqueID();

            const newImage: IImage = {
                id: `_fake_${id}`,
                tooltip: {
                    title: `${id}`,
                    position: TooltipPosition.TOP,
                    color: 'dark'
                },
                image: src
            };

            addImage({image: newImage});
        }
    }, []);

    const handleCancel = useCallbackOne(() => {
        clearSelectedImages();
        setIsEditing(false);
    }, []);

    return (
        <Container>
            <Header>
                <Heading>Gallery</Heading>
                <Button onClick={toggle}>
                    {mode === 'dark' ? '☀️ ️light mode' : '🌙 dark mode'}
                </Button>
            </Header>
            <ButtonsContainer>
                {!isEditing && <Button onClick={handleAdd}>+ Add</Button>}
                <Button onClick={handleEdit}>{isEditing ? 'Delete selected' : 'Edit list'}</Button>
                {isEditing && <Button onClick={handleCancel}>cancel</Button>}
            </ButtonsContainer>
            <HiddenInput type="file" ref={input} onChange={handleUpload}/>
            <Grid>
                {images.map((el: IImage) => (
                    <Item
                        key={el.id}
                        selected={selectedImages.includes(el.id)}
                        active={!isEditing}
                        onClick={() => handleSelect(el.id)}
                    >
                        <Link to={`/details/${el.id}`}>
                            <Tooltip
                                title={el.tooltip.title}
                                position={el.tooltip.position}
                                color={el.tooltip.color}
                            >
                                <Image src={el.image} />
                            </Tooltip>
                        </Link>
                    </Item>
                ))}
            </Grid>
        </Container>
    )
};

export default memo(Home);
