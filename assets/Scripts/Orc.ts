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

@ccclass("Orc")
export class Orc extends Component {
  @property({
    type: CCInteger,
    step: 5,
    max: 100,
    min: 0,
    slide: true,
  })
  speed: number = 0;

  isWalking: boolean = false;
  protected onLoad(): void {
    this.node.on(Input.EventType.MOUSE_DOWN, (event: EventMouse) => {
      this.speed += 5;
      console.log(event.currentTarget.name);
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
      this.getComponent(Animation).crossFade("walking");
    } else {
      this.getComponent(Animation).stop();
    }
  }

  onKeyDown(event: EventKeyboard): void {
    switch (event.keyCode) {
      case KeyCode.ARROW_RIGHT:
        this.isWalking = true;
        break;
    }
  }

  onKeyUp(event: EventKeyboard): void {
    switch (event.keyCode) {
      case KeyCode.ARROW_RIGHT:
        this.isWalking = false;
        break;
    }
  }
}
