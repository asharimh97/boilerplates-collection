import { Text } from "../Base";

export function renderLabel(
  id: string = "",
  label: string = "",
  required: boolean = false,
) {
  return (
    label && (
      <Text as="label" htmlFor={id} size="$sm" color="$coolGray700" mb="8px">
        {label}
        {required && (
          <Text as="span" color="$red500" ml="4px">
            *
          </Text>
        )}
      </Text>
    )
  );
}

export function renderHelper(helper: string = "", errorMessage: string = "") {
  return (
    helper &&
    !errorMessage && (
      <Text size="$sm" color="$coolGray500" mb="8px">
        {helper}
      </Text>
    )
  );
}

export function renderError(errorMessage: string = "") {
  return (
    errorMessage && (
      <Text size="$sm" color="$red500" mb="8px">
        {errorMessage}
      </Text>
    )
  );
}
