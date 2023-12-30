// import Frame from '../../../../components/frame/Frame'
import Modal from '../../../components/modal/Modal'
import Login from '../../login/page';

export default function PhotoModal({ params: { id: photoId } }) {
  return (
    <Modal>
      {/* <Frame photo={photo} /> */}
      <Login></Login>
    </Modal>
  )
}
