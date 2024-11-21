import { _decorator, AudioClip, AudioSource, Component } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Orc")
export class Orc extends Component {
  @property({
    type: AudioClip
  })
  private hit = null;

  audioSource: AudioSource = new AudioSource();

  onLoad() {}
  start() {}

  update(deltaTime: number) {}

  onHit(){
    this.audioSource.playOneShot(this.hit);
  }
  
}
