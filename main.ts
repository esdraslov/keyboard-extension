let keystate = 'down'
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
    //% block='switch KeyBoard state'
    export function setKeyBoard(){
        if(keystate == 'down'){
            keystate = 'up'
        }else if(keystate == 'up'){
            keystate = 'down'
        }
    }
    //% block='get value'
    export function value(){
        return 'test'
    }
}
namespace Logic {
    //% block='KeyBoard is up?'
    export function isUp() {
        if (keystate == 'down') {
            return false
        } else {
            return true
        }
    }
}