import {inject, reactive} from "vue";

export type State = {
    count: number,
    times: number
}
export const UseState = () => inject('storeCount');
export const CountState = () => {
    const state = reactive<State>({
        count: 0,
        times: 0
    });

    const countUp = (): void => {
        state.count++
        state.times++
    }

    const countDown = (): void => {
        state.count--
        state.times++
    }

    return {
        state,
        countUp,
        countDown
    }
}
