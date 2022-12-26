import { ModalProps } from "antd";
import { Modal } from "components/Feedback";
import { Textarea } from "components/Form";
import useInput from "hooks/useInput";
import { useState } from "react";

interface ModalRejectProps extends ModalProps {
  onReject: (message: string) => void;
}

function ModalReject({ onReject, ...props }: ModalRejectProps) {
  const [message, setMessage] = useInput("");
  const [error, setError] = useState("");

  const handleReject = async () => {
    if (!message) {
      setError("Harap isi alasan penolakan");
      return;
    }

    onReject(message);
  };

  return (
    <Modal
      title="Konfirmasi Tolak"
      onOk={handleReject}
      okText="Kirim"
      cancelText="Batalkan"
      destroyOnClose={true}
      {...props}
    >
      <Textarea
        label="Alasan penolakan"
        value={message}
        onChange={setMessage}
        required
        errorMessage={error}
      />
    </Modal>
  );
}

export default ModalReject;
