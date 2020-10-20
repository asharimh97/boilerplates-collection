import { render as rtlRender } from "@testing-library/react";
import { create as rtrCreate } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

const render = (component, options) => rtlRender(component, options);

const create = component => rtrCreate(component);

export * from "@testing-library/react";

export { render, create };
