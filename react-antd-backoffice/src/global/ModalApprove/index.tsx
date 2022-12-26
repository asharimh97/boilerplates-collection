import { ModalProps } from "antd";
import { Modal } from "components/Feedback";

interface ModalApproveProps extends ModalProps {
  onApprove: (params?: any) => void;
}

function ModalApprove({ onApprove, ...props }: ModalApproveProps) {
  return (
    <Modal
      title="Konfirmasi Setuju"
      onOk={onApprove}
      okText="Ya, Yakin"
      cancelText="Batalkan"
      {...props}
    >
      Apakah kamu yakin ingin menyetujui request ini? Silakan input data dibawah
      ini jika kamu yakin.
    </Modal>
  );
}

export default ModalApprove;
