import { _decorator, Button, Component, director, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainScript')
export class MainScript extends Component {
    @property({
        type: Button
    })
    private button = null;

    protected onLoad(): void {
        director.preloadScene("Game");
        this.button.node.on(Button.EventType.CLICK, ()=>{
            director.loadScene("Game");
        });

    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


