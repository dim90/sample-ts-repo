import { sampleFunction1 } from "./";
import { SampleRequest, SampleResponse } from "./types";

const getRandomNumber = () => Math.floor(Math.random() * 11);

describe("Index Module", () => {
  describe("sampleFunction1", () => {
    test("[Sample 1] - should return the numerical addition of the given parameters", () => {
      const givenRequestData: SampleRequest = {
        param1: getRandomNumber(),
        param2: getRandomNumber(),
      };

      const result: SampleResponse = sampleFunction1(givenRequestData);

      expect(result).toBe(givenRequestData.param1 + givenRequestData.param2);
    });

    test("[Sample 2] - should return the textual addition of the given parameters", () => {
      const givenRequestData: SampleRequest = {
        param1: getRandomNumber().toString(),
        param2: getRandomNumber().toString(),
      };

      const result: SampleResponse = sampleFunction1(givenRequestData);

      expect(result).toBe(givenRequestData.param1 + givenRequestData.param2);
    });

    test("[Sample 3] - should not return the textual addition of the given parameters", () => {
      const givenRequestData: SampleRequest = {
        param1: getRandomNumber(),
        param2: getRandomNumber(),
      };

      const result: SampleResponse = sampleFunction1(givenRequestData);

      expect(result).not.toBe(
        givenRequestData.param1.toString() + givenRequestData.param2.toString()
      );
    });
  });
});
