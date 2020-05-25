import {HomeActions, HomeActionType, HomeReducer, HomeReducerState} from './HomeTypes';
import {images} from '../../_mock';

export const homeInitialState: HomeReducerState = {
    images: images,
    selectedImages: []
};

export const homeReducer: HomeReducer = ( state = homeInitialState, action: HomeActions ): HomeReducerState => {
    let updatedImages;

    switch (action.type) {
        case HomeActionType.UpdateTooltip:
            updatedImages = state.images.map(el => {
                if (el.id === action.payload.imageId) {
                    return {
                        ...el,
                        tooltip: {
                            ...el.tooltip,
                            ...action.payload.data
                        }
                    }
                }

                return el;
            });

            return {
                ...state,
                images: updatedImages
            };
        case HomeActionType.UpdateSelectedImages:
            const selectedImageId = action.payload.id;
            const isImageSelected = state.selectedImages.findIndex(el => el === selectedImageId) !== -1;

            const updatedSelectedImages = isImageSelected ? state.selectedImages.filter(el => el !== selectedImageId)
                : [...state.selectedImages, selectedImageId];

            return {
                ...state,
                selectedImages: updatedSelectedImages
            };
        case HomeActionType.ClearSelectedImages:
            return {
                ...state,
                selectedImages: []
            };
        case HomeActionType.DeleteImages:
            updatedImages = state.images.filter(image => !state.selectedImages.includes(image.id));

            return {
                ...state,
                images: updatedImages
            };
        case HomeActionType.AddImage:
            return {
                ...state,
                images: [
                    action.payload.image,
                    ...state.images
                ]
            };
        default:
            return state;
    }
};
