import React, { Suspense } from 'react';
import Preloader from '../components/Сommon/Preloader/Preloader';


export const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    };
}