import "";
import { Avatar } from "components/atoms";
import { create, render } from "utils/testUtils";

test("renders `Avatar` without error", () => {
  const { getAllByTestId } = render(<Avatar data-testid="avatar-component" />);

  expect(getAllByTestId("avatar-component").length).not.toBe(0);
});

const setup = props => create(<Avatar {...props} />).toJSON();

describe("test styled `Avatar`", () => {
  test("render with default style", () => {
    const avatar = setup();

    expect(avatar).toMatchSnapshot();
    expect(avatar).toHaveStyleRule("width", "50px");
    expect(avatar).toHaveStyleRule("height", "50px");
  });
  test("render with prop `small`", () => {
    const avatar = setup({ size: "small" });

    expect(avatar).toMatchSnapshot();
    expect(avatar).toHaveStyleRule("width", "40px");
    expect(avatar).toHaveStyleRule("height", "40px");
  });
  test("render with prop `big`", () => {
    const avatar = setup({ size: "big" });

    expect(avatar).toMatchSnapshot();
    expect(avatar).toHaveStyleRule("width", "65px");
    expect(avatar).toHaveStyleRule("height", "65px");
  });
  test("render with prop `size`", () => {
    const avatar = setup({ size: 30 });

    expect(avatar).toMatchSnapshot();
    expect(avatar).toHaveStyleRule("width", "30px");
    expect(avatar).toHaveStyleRule("height", "30px");
  });
  test("render with prop `size`", () => {
    const avatar = setup({ size: "1em" });

    expect(avatar).toMatchSnapshot();
    expect(avatar).toHaveStyleRule("width", "1em");
    expect(avatar).toHaveStyleRule("height", "1em");
  });
});
