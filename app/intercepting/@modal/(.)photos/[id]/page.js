import Modal from '../../../../../components/modal';

export default function PhotoModal({ params: { id: photoId } }) {
  return (
    <Modal>
      <div
        className={
          'flex h-[100px] w-full items-center justify-center bg-green-300'
        }
      >
        modal photo: {photoId}
      </div>
      <div
        className={
          'ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md'
        }
      >
        111
      </div>
    </Modal>
  );
}
