import {
    _decorator,
    Animation,
    CCInteger,
    Component,
    EventKeyboard,
    EventMouse,
    input,
    Input,
    KeyCode,
    Node,
    UITransform,
  } from "cc";
const { ccclass, property } = _decorator;

@ccclass('KeyboardInputs')
export class KeyboardInputs extends Component {
    @property({
        type: CCInteger,
        step: 5,
        max: 100,
        min: 0,
        slide: true,
      })
      speed: number = 0;
      animationComponent: Animation = null;
    
      isWalking: boolean = false;
      protected onLoad(): void {
        this.animationComponent = this.getComponent(Animation);
        this.node.on(Input.EventType.MOUSE_DOWN, (event: EventMouse) => {
          console.log(event.currentTarget.name + "Clicked");
        });
    
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
      }
      start() {}
    
      update(deltaTime: number) {
        if (this.isWalking) {
          this.node.setPosition(
            this.node.getPosition().x + this.speed * deltaTime,
            this.node.position.y
          );
          this.animationComponent.crossFade("walking");
        } 
      }
    
      onKeyDown(event: EventKeyboard): void {
        switch (event.keyCode) {
          case KeyCode.ARROW_RIGHT:
            this.isWalking = true;
            break;
          case KeyCode.SPACE:
            this.animationComponent.crossFade("attack");
        }
      }
    
      onKeyUp(event: EventKeyboard): void {
        switch (event.keyCode) {
          case KeyCode.ARROW_RIGHT:
            this.animationComponent.stop();
            this.animationComponent.play("idle");
            this.isWalking = false;
            break;
        }
      }
    
}


