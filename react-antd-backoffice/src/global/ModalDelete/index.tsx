import { Modal } from "components/Feedback";

interface ModalDeleteProps {
  visible: boolean;
  children?: React.ReactNode;
  onDelete: (params?: any) => void;
  onCancel: (params?: any) => void;
}

function ModalDelete({
  visible,
  onDelete,
  onCancel,
  children,
}: ModalDeleteProps) {
  return (
    <Modal
      title="Konfirmasi Hapus"
      visible={visible}
      onOk={onDelete}
      onCancel={onCancel}
      okText="Ya, Hapus"
      cancelText="Batalkan"
    >
      {children
        ? children
        : "Apakah Kamu yakin menghapus data ini? Aksi ini tidak dapat dibatalkan."}
    </Modal>
  );
}

export default ModalDelete;
