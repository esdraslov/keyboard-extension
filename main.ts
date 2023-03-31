namespace KeyBoard{
    export enum Key {
        //% block='Q'
        Q,
        //% block='W'
        W,
        //% block='E'
        E,
        //% block='R'
        R,
        //% block='T'
        T,
        //% block='Y'
        Y,
        //% block='U'
        U,
        //% block='I'
        I,
        //% block='O'
        O,
        //% block='P'
        P,
        //% block='A'
        A,
        //% block='S'
        S
    }
    export enum Event {
        //% block='key up'
        KeyUp,
        //% block='key down'
        KeyDown
    }
    export enum KeyBoardState {
        //% block='up'
        Up,
        //% block='down'
        Down
    }
    export function setKeyBoard(state: KeyBoardState){

    }
}