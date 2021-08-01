import { connect } from 'react-redux';

// Import du composant qui a besoin de data ou d'actions
import Demo from 'src/components/Demo';

// Action Creators
import { doSomething } from 'src/actions/demo';

// Data / State
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  message: state.message,
});

// Actions / Dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  doAction: () => {
    dispatch(doSomething('Hello'));
  },
});

const DemoContainer = connect(mapStateToProps, mapDispatchToProps)(Demo);

export default DemoContainer;
