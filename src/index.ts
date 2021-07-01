import { SampleRequest, SampleResponse } from "./types";

export const sampleFunction1 = ({ param1, param2 }: SampleRequest): SampleResponse =>
  param1 + param2;
