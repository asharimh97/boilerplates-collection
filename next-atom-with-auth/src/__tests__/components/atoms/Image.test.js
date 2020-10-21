import { Image } from "components/atoms";
import { create, render } from "utils/testUtils";

test("renders `Image` without error", () => {
  const { getByTestId, getByRole } = render(
    <Image data-testid="image-component" src="/static/images/error-401.svg" />
  );

  expect(getByTestId("image-component")).toBeInTheDocument();
  expect(getByRole("img")).toBeInTheDocument();
});

const setup = props => create(<Image {...props} />).toJSON();

test("renders `Image` with prop `rounded`", () => {
  const image = setup({ src: "lorem-ipsum.png", rounded: true });

  expect(image).toMatchSnapshot();
  expect(image).toHaveStyleRule("border-radius", "8px");
});

test("renders `Image` with prop `fullRounded`", () => {
  const image = setup({
    src: "lorem-ipsum.png",
    height: 20,
    fullRounded: true
  });

  expect(image).toMatchSnapshot();
  expect(image).toHaveStyleRule("border-radius", "calc(20px / 2)");
});
