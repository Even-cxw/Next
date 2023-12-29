import { connect } from 'react-redux'

// Component
function Component(props) {

}


const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch) => ({
  countUpBy: dispatch.count.upBy
})

connect(mapStateToProps, mapDispatchToProps)(Component)