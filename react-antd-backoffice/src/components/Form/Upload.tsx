import { Upload as AntUpload, UploadProps as AntUploadProps } from "antd";
import { styled } from "configs/stitches.config";
import useId from "hooks/useId";
import { useEffect, useState } from "react";
import Input from "./Input";
import { BaseInputProps, InputStatus } from "./types";
import { renderError, renderHelper, renderLabel } from "./utils";
import { Flex } from "../Base";

const FileUpload = styled(AntUpload, {
  width: "100%",

  "& .ant-upload": {
    width: "100%",
  },
});

interface UploadProps extends BaseInputProps, AntUploadProps {
  status?: InputStatus;
  value?: any; // could be string or File object
  onChange?: (file: any) => void;
  [key: string]: any;
}

//TODO: Implement onChange
function Upload({
  css = {},
  label,
  required,
  errorMessage,
  helper,
  status,
  ...props
}: UploadProps) {
  const { value } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = props.id || useId("upload");
  const [file, setFile] = useState("");
  // const hasMessage = !!(errorMessage || helper);

  useEffect(() => {
    if (value) {
      const valueType = typeof value;

      if (valueType === "string") {
        setFile(value);
        // if the value is object file, use the filename instead
      } else if (valueType === "object" && value?.name) {
        setFile(value.name);
      }
    }
  }, [value]);

  const componentStyle = {
    ...css,
    // mb: hasMessage ? "8px" : "12px",
  };

  const handleChange = (info: any) => {
    if (info.file.status !== "uploading") {
      if (info.file) {
        // @ts-ignore
        props.onChange(info.file);
        setFile(info.file.name);
      }
    }
  };

  return (
    <Flex direction="column" w="100%">
      {renderLabel(id, label, required)}
      <Flex w="100%" css={componentStyle}>
        <FileUpload
          beforeUpload={() => false}
          showUploadList={false}
          onChange={handleChange}
          {...props}
        >
          <Input
            disabled
            status={status}
            value={file}
            id={id}
            addonAfter="Browse"
          />
        </FileUpload>
      </Flex>
      {renderHelper(helper, errorMessage)}
      {renderError(errorMessage)}
    </Flex>
  );
}

Upload.defaultProps = {
  onChange: () => {},
};

export default Upload;
