// useBlockContacts.tsx -> 지인 차단 기능 Async
/*
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Contacts from 'react-native-contacts';

import { checkContactPermission, getMyContacts, postContactsToServer } from 'utils/contacts';
import { openSettings } from 'utils/permissions';
import { extractMobileFromContacts } from 'utils/phone';
import { mmkv } from 'utils/storages';

const today = dayjs().format('YYMMDDHH');
console.log(today);

const useContacts = () => {
    const [isAlreadyBlock, setIsAlreadyBlock] = useState<boolean>(false);
    const [blockedContacts, setBlockedContacts] = useState<string[]>([]);
    const [nextRequestTime, setNextRequestTime] = useState<string>(today);
    const [isBlockContactModalVisible, setIsBlockContactModalVisible] = useState<boolean>(false);

    useEffect(() => {
        getBlockContactsState();
    }, []);

    const getBlockContactsState = () => {
        // TEST CODE
        // mmkv.set("@block-contacts-state", false);
        // mmkv.set("@block-contacts-list", '');
        // mmkv.set("@block-contacts-date", today);

        const _isAlreadyBlock = !!mmkv.getBoolean('@block-contacts-state');
        const _blockedContacts = mmkv.getString('@block-contacts-list');
        const _storedDate = mmkv.getString('@block-contacts-date');

        const _stringifiedContacts = _blockedContacts ? _blockedContacts.split(',') : [];
        const _nextRequestTime = _storedDate ?? today;

        setIsAlreadyBlock(_isAlreadyBlock);
        setBlockedContacts(_stringifiedContacts);
        setNextRequestTime(_nextRequestTime);

        const _isModalOpen = !_isAlreadyBlock && today >= _nextRequestTime;
        setIsBlockContactModalVisible(_isModalOpen);
    };

    // 유저가 다음에 보기 클릭시 3일간 차단
    const requestNextTime = async () => {
        const _nextRequestTime = dayjs().add(3, 'day').format('YYMMDDHH');
        setIsBlockContactModalVisible(false);

        try {
            setNextRequestTime(_nextRequestTime);
            mmkv.set('@block-contacts-date', _nextRequestTime);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    // 지인 차단하기 params: 차단할 유저의 전화번호 목록
    const requestBlockContacts = async () => {
        setIsBlockContactModalVisible(false);
        try {
            const { success } = await checkContactPermission();

            // 연락처 접근권한이 없는 경우
            if (!success) {
                await openSettings('연락처');
                return {
                    success: false,
                    message: '연락처 접근권한이 없습니다.\nTheFitlove 앱 설정에서 연락처 접근권한을 허용해주세요.',
                };
            }

            const contacts = await getMyContacts();
            const phoneNumbers = extractMobileFromContacts(contacts);

            // const successUpdateToServer = await postContactsToServer({ user_id: user.id, phoneNumbers })
            // if (!successUpdateToServer) return { success: false, message: "서버에 연락처를 업데이트하는데 실패했어요..." }

            const stringifiedContacts = [...phoneNumbers].join(',');
            mmkv.set('@block-contacts-state', true);
            mmkv.set('@block-contacts-list', stringifiedContacts);

            setIsAlreadyBlock(true);
            setBlockedContacts(phoneNumbers);
            Alert.alert('지인 차단 목록이 성공적으로 업데이트 되었어요!');
            return;
        } catch (error) {
            console.log(error);
            Alert.alert('지인 차단 목록 업데이트에 실패했어요...');
            return;
        }
    };

    // 연락처 저장하기 params: 저장할 유저의 닉네임, 전화번호
    const requestSaveContact = async (user: { nickname: string; phone: string }) => {
        const { success } = await checkContactPermission();

        if (!success) {
            await openSettings('연락처');
            return;
        }

        const newPerson = {
            givenName: user.nickname,
            phoneNumbers: [{ label: 'mobile', number: `0${user.phone}` }],
        };

        try {
            await Contacts.addContact(newPerson);
            Alert.alert('🎉🎉', `${user.nickname}님의 연락처를 성공적으로 저장했어요!`);
        } catch (err) {
            console.error(err);
            Alert.alert('😞', '알 수 없는 이유로 연락처 저장에 실패했어요...');
        }
    };

    return {
        isBlockContactModalVisible,
        isAlreadyBlock,
        blockedContacts,
        nextRequestTime,
        requestNextTime,
        requestBlockContacts,
        requestSaveContact,
    };
};

export default useContacts;
*/