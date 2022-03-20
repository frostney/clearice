import { Instructions } from './Instruction';

export type Middleware = (instructions: Instructions) => Instructions;
