import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "mutationobserver-shim";
import "babel-polyfill";

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

Enzyme.configure({
  adapter: new Adapter(),
});

(global as any).document.createRange = () => ({
  setStart: () => null,
  setEnd: () => null,
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));
