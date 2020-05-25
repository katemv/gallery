import {HomeReducerState, IImage, ITooltip} from "../store/Home/HomeTypes";


export interface HomeProviderProps {
    children?: any;
}
export interface IHomeStateContext {
    state: HomeReducerState;
}
export interface IHomeActionsContext {
    updateTooltip: (payload: { imageId: string, data: Partial<ITooltip> }) => void;
    updateSelectedImages: (payload: { id: string }) => void;
    clearSelectedImages: () => void;
    deleteImages: () => void;
    addImage: (payload: { image: IImage }) => void;
}


