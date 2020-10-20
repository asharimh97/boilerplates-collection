import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { create as rtrCreate } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

export const render = (component, options) => rtlRender(component, options);

export const create = component => rtrCreate(component);

export const fireEvent = userEvent;
