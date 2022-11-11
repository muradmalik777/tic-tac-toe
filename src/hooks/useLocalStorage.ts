import { Dispatch, SetStateAction, useState } from "react";

function useLocalStorage<Type>(key: string, defaultValue: Type): [Type, Dispatch<SetStateAction<Type>>] {
    const localStorageItem = window.localStorage.getItem(key);
    const initData = localStorageItem ? (JSON.parse(localStorageItem) as Type) : defaultValue;

    const [value, setValue] = useState(initData);
    return [value, setValue];
}

export default useLocalStorage;
