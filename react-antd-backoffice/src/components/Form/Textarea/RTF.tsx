/* eslint-disable import/order */
import { styled } from "configs/stitches.config";
import useId from "hooks/useId";
import ReactQuill from "react-quill";
import { TextareaProps } from "./types";
import { Flex } from "../../Base";
import { renderLabel, renderError, renderHelper } from "../utils";

import "react-quill/dist/quill.snow.css";

const Textarea = styled(ReactQuill, {
  "&.quill": {
    backgroundColor: "$white",
    borderRadius: "$rounded",
  },
  "& .ql-toolbar": {
    borderTopLeftRadius: "$rounded",
    borderTopRightRadius: "$rounded",
  },
  "& .ql-container": {
    borderBottomLeftRadius: "$rounded",
    borderBottomRightRadius: "$rounded",
  },
});

function RTF({
  css = {},
  label,
  helper,
  errorMessage,
  required,
  ...props
}: TextareaProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = props.id || useId("checkbox");
  const hasMessage = !!(errorMessage || helper);

  const componentStyle = {
    ...css,
    mb: hasMessage ? "8px" : "12px",
  };

  return (
    <Flex direction="column" w="100%">
      {renderLabel(id, label, required)}
      <Flex css={componentStyle}>
        {/* @ts-ignore */}
        <Textarea
          theme="snow"
          modules={modules}
          formats={formats}
          {...props}
          id={id}
        />
      </Flex>
      {renderHelper(helper, errorMessage)}
      {renderError(errorMessage)}
    </Flex>
  );
}

export default RTF;
