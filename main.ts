namespace KeyBoard{
    let keystate = 'down'
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
    //% block='set KeyBoard state %state%'
    export function setKeyBoard(state: KeyBoardState){
        let tostate = state.toString()
        if(tostate == 'Up' && keystate == 'down'){
            keystate = 'up'
        }else if(keystate == 'up'){
            keystate = 'down'
        }
    }
}