import { IItem, IInitOptions, IValidationStatus } from "libs-interface-item-player/src/interface-item";

class ItemPlayer implements IItem {

    destroy() {
    //TBD    
    }

    focalise() {
        //TBD
    }

    getOptimumDimensions() {
        //TBD
        return null;
    }

    getState() {
        //TBD
    }

    hasHints() {
        //TBD
        return null;
    }

    hide() {
        //TBD
    }

    hideHints() {
        //TBD
    }

    initItem(uid: string, container: HTMLElement, initOptions: IInitOptions) {
        //TBD
    }

    lock() {
        //TBD
    }

    redo(options: any) {
        //TBD
    }

    remainingHints() {
        //TBD
        return null;
    }

    resetDimensions() {
        //TBD
    }

    setState(state: any) {
        //TBD
    }

    show() {
        //TBD
    }

    showHints() {
        //TBD
        return null;
    }

    subscribe(eventName: string, eventHandler: Function) {
        //TBD
    }

    unlock() {
        //TBD
    }

    unsubscribe(eventName: string, eventHandler: Function) {
        //TBD
    }

    validateResponse() {
        //TBD
        return null;
    }
}