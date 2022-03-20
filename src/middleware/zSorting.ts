import { Instructions, Middleware } from '../types';

const zSorting: Middleware = (instructions: Instructions): Instructions => {
  return instructions.sort((inst1, inst2) => {
    return (inst1.data.z || 0) - (inst2.data.z || 0);
  });
};

export default zSorting;
