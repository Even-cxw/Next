import Frame from '../../../../components/frame/Frame'
import Modal from '../../../../components/modal/Modal'
import swagPhotos from '../../../../photos'

export default function PhotoModal({ params: { id: photoId } }) {
  const photos = swagPhotos

  return (
    <Modal>
      {/* <Frame photo={photo} /> */}
      <div>222</div>
    </Modal>
  )
}
