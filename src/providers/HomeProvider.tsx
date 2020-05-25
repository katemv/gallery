import {HomeProviderProps, IHomeActionsContext, IHomeStateContext} from './types';
import {homeReducer, homeInitialState} from '../store/Home/HomeReducer';
import {HomeReducer} from '../store/Home/HomeTypes';
import React, {useMemo, useReducer} from 'react';
import createCtx from '../utils/createCtx';
import {
    updateTooltip,
    updateSelectedImages,
    deleteImages,
    addImage,
    clearSelectedImages
} from '../store/Home/HomeActions';

const [stateContext, StateProvider] = createCtx<IHomeStateContext>();
const [actionsContext, ActionsProvider] = createCtx<IHomeActionsContext>();

function HomeProvider(props: HomeProviderProps): React.ReactElement {
    const [state, dispatch] = useReducer<HomeReducer>(homeReducer, homeInitialState);

    const actions = useMemo(
        () => ({
            updateTooltip: updateTooltip(dispatch),
            updateSelectedImages: updateSelectedImages(dispatch),
            deleteImages: deleteImages(dispatch),
            addImage: addImage(dispatch),
            clearSelectedImages: clearSelectedImages(dispatch),
        }), []
    );

    return (
        <StateProvider value={{state:state}}>
            <ActionsProvider value={actions}>
                {props.children}
            </ActionsProvider>
        </StateProvider>
    );
}

export {
    stateContext as HomeStateContext,
    actionsContext as HomeActionsContext,
    HomeProvider,
};
