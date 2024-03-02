import React from 'react';
import { Platform } from 'react-native';

/*
import { apiRegisterDevice } from 'modules/notification/src/api';
import FirebaseUtils from 'services/firebase';

const useFirebase = () => {
    const [firebaseInstance, setFirebaseInstance] = React.useState<FirebaseUtils | null>(null);

    React.useEffect(() => {
        const onUpdateToken = (token?: string) => {
            apiRegisterDevice({ type: Platform.OS, deviceToken: token });
        };
        const firebase = FirebaseUtils.getInstance();
        setFirebaseInstance(firebase);
        firebase.init?.({
            onUpdateToken,
        });
    }, []);

    return {
        firebaseInstance,
    };
};

export default useFirebase;

*/