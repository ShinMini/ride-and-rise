/*
import { useState } from 'react';
import { Alert, Linking } from 'react-native';
import CodePush, { DownloadProgress } from 'react-native-code-push';
import VersionCheck from 'react-native-version-check';

import EventBus, { EventBusName } from 'services/event-bus';

const codePushOptions = {
    installMode: CodePush.InstallMode.IMMEDIATE,
    mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
    updateDialog: {
        mandatoryUpdateMessage: '필수 업데이트가 있어 설치 후 앱을 재시작합니다.',
        mandatoryContinueButtonLabel: '재시작',
        optionalIgnoreButtonLabel: '나중에',
        optionalInstallButtonLabel: '재시작',
        optionalUpdateMessage: '업데이트가 있습니다. 설치하시겠습니까?',
        title: '업데이트 안내',
    },
};

const useVersionCheck = () => {
    // CODE PUSH VERSION CHECK
    const [codePushProgress, setSyncProgress] = useState<DownloadProgress>({
        totalBytes: 0,
        receivedBytes: 0,
    });

    const eventEmitter = EventBus.getInstance();

    const checkCodePushVersion = () => {
        eventEmitter.post({ type: EventBusName.VERSION_UPDATE_CHECK_CODE_PUSH });
        CodePush.checkForUpdate()
            .then(update => {
                // 코드푸쉬가 필요한 경우 코드 푸시 작업을 실행합니다.
                if (update?.isMandatory) {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_PENDING });
                } else {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DONE_CODE_PUSH });
                }
                return;
            })
            .catch(err => {
                eventEmitter.post({ type: EventBusName.VERSION_UPDATE_ERROR });
                console.log(err);
            });
    };

    const checkStoreVersion = () => {
        VersionCheck.needUpdate()
            .then(result => {
                eventEmitter.post({ type: EventBusName.VERSION_UPDATE_CHECK_STORE });
                if (result?.isNeeded && result?.storeUrl) {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_PENDING, payload: result });
                } else {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DONE_STORE });
                }
            })
            .catch(err => {
                eventEmitter.post({ type: EventBusName.VERSION_UPDATE_ERROR });
                console.error(err);
            });
    };

    const updateCodePushVersion = () => {
        CodePush.sync(
            codePushOptions,
            status => {
                if (status === CodePush.SyncStatus.SYNC_IN_PROGRESS) {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DOWNLOAD_PROGRESS });
                } else if (status === CodePush.SyncStatus.CHECKING_FOR_UPDATE) {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_CHECK_CODE_PUSH });
                } else if (status === CodePush.SyncStatus.UPDATE_INSTALLED) {
                    eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DONE_CODE_PUSH });
                }
            },
            downloadProgress => setSyncProgress(downloadProgress),
        ).catch(_err => {
            eventEmitter.post({ type: EventBusName.VERSION_UPDATE_ERROR });
            return false;
        });
    };

    const updateStoreVersion = ({ isNeeded, storeUrl }: { isNeeded: boolean; storeUrl?: string }) => {
        console.log('updateStoreVersion', storeUrl);

        try {
            if (isNeeded && storeUrl) {
                Alert.alert('새로운 버전이 준비되었습니다.', '지금 앱 업데이트 후 이용해 주세요.', [
                    {
                        text: '다음에 할래요',
                        onPress: () => {
                            eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DONE_STORE });
                            console.log('다음에 할래요 버튼 클릭');
                            return;
                        },
                    },
                    {
                        text: '업데이트 하러가기',
                        onPress: async () => {
                            const canOpen = await Linking.canOpenURL(storeUrl);
                            if (!canOpen) {
                                await Linking.openURL(
                                    decodeURI(
                                        'https://apps.apple.com/kr/app/%EB%8D%94-%ED%95%8F%EB%9F%BD/id6451230670',
                                    ),
                                );
                                eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DONE_STORE });
                                return;
                            }
                            await Linking.openURL(storeUrl);
                            eventEmitter.post({ type: EventBusName.VERSION_UPDATE_DONE_STORE });
                            return;
                        },
                    },
                ]);
            }
            return;
        } catch (err) {
            eventEmitter.post({ type: EventBusName.VERSION_UPDATE_ERROR });
            console.error(err);
            return;
        }
    };

    return { codePushProgress, checkStoreVersion, updateStoreVersion, updateCodePushVersion, checkCodePushVersion };
};

export default useVersionCheck;
*/