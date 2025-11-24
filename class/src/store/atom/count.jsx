import { atom, selector } from 'recoil'
export const CountAtom = atom({
    key : "CountAtom",
    default : 0
})

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(CountAtom);
        return count % 2 === 0;
    }
})