// 容器组件，负责和react-redux 交互
import {connect} from 'react-redux'
import App from '../components/App'
import{increasement, decreasement, increasementAsync} from '../store/actions'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
// const mapStateToProps = state => {
//   return {
//     count: state
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increasement: number => {
//       dispatch(increasement(number))
//     },
//     decreasement: number => {
//       dispatch(decreasement(number))
//     }
//   }
// }

export default connect(
  state => ({count: state.counter}),
  {increasement, decreasement, increasementAsync}
  )(App)