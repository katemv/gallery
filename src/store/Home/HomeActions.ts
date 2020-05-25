import React from 'react';
import {
    AddImageAction, ClearSelectedImages,
    DeleteImagesAction,
    HomeActionType,
    IImage,
    ITooltip,
    UpdateSelectedImagesAction,
    UpdateTooltipAction
} from './HomeTypes';

export const updateTooltip = (dispatch: React.Dispatch<UpdateTooltipAction>) => (payload: { imageId: string, data: Partial<ITooltip> }) => {
    dispatch({
        type: HomeActionType.UpdateTooltip,
        payload: { ...payload },
    });
};

export const updateSelectedImages = (dispatch: React.Dispatch<UpdateSelectedImagesAction>) => (payload: { id: string }) => {
    dispatch({
        type: HomeActionType.UpdateSelectedImages,
        payload: { ...payload }
    });
};

export const clearSelectedImages = (dispatch: React.Dispatch<ClearSelectedImages>) => () => {
    dispatch({
        type: HomeActionType.ClearSelectedImages,
    });
};

export const deleteImages = (dispatch: React.Dispatch<DeleteImagesAction>) => () => {
    dispatch({
        type: HomeActionType.DeleteImages,
    });
};

export const addImage = (dispatch: React.Dispatch<AddImageAction>) => (payload: { image: IImage }) => {
    dispatch({
        type: HomeActionType.AddImage,
        payload: { ...payload }
    });
};

