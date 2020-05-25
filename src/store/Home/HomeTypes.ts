/* REDUCER STATE */

export interface HomeReducerState {
    images: IImage[];
    selectedImages: string[];
}

/* ACTION TYPES */

export enum HomeActionType {
    UpdateTooltip = 'UPDATE_TOOLTIP',
    UpdateSelectedImages = 'UPDATE_SELECTED_IMAGES',
    DeleteImages = 'DELETE_IMAGES',
    AddImage = 'ADD_IMAGE',
    ClearSelectedImages = 'CLEAR_SELECTED_IMAGES'
}

/* ACTIONS */

export interface UpdateTooltipAction {
    type: HomeActionType.UpdateTooltip;
    payload: {
        imageId: string;
        data: Partial<ITooltip>
    }
}

export interface UpdateSelectedImagesAction {
    type: HomeActionType.UpdateSelectedImages;
    payload: {
        id: string;
    }
}

export interface DeleteImagesAction {
    type: HomeActionType.DeleteImages;
}

export interface AddImageAction {
    type: HomeActionType.AddImage;
    payload: {
        image: IImage
    }
}

export interface ClearSelectedImages {
    type: HomeActionType.ClearSelectedImages
}


/* FIELD TYPES */

export interface IImage {
    id: string;
    tooltip: ITooltip;
    image: string;
}

export interface ITooltip {
    title: string;
    position: TooltipPosition;
    color: 'dark' | 'light';
}

export enum TooltipPosition {
    RIGHT = 'RIGHT',
    LEFT = 'LEFT',
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
}

export type HomeActions = UpdateTooltipAction | UpdateSelectedImagesAction | DeleteImagesAction | AddImageAction |
    ClearSelectedImages;

export type HomeReducer = (state: HomeReducerState, action: HomeActions) => HomeReducerState;
