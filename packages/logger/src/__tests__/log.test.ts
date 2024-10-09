import { log } from "..";

jest.spyOn(global.console, "log");

describe("@stackshift-ui/logger", () => {
  it("prints a message", () => {
    log("hello");
    // eslint-disable-next-line no-console -- testing console
    expect(console.log).toBeCalledWith("LOGGER: ", "hello");
  });
});
