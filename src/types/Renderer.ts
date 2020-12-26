import { Instructions } from './Instruction';

export interface Renderer {
  render(instructions: Instructions): void;
}
