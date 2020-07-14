import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Typeahead,
} from 'react-bootstrap-typeahead';
import _isEqual from 'lodash/isEqual';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTypeAheadList } from '../../../redux/action/incident';

import './style.scss';

class CustomTypeAhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      options: [],
      tabId: 1,
      text: false,
    };
    this.typeInput = React.createRef();
  }

  componentDidMount() {
    const { tabIndex } = this.props;
    this.typeInput.current.clear();
    this.props.getTypeAheadList(tabIndex)
      .then((data) => {
        this.updateState({
          tabId: tabIndex,
          selected: [],
          text: false,
          options: data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.tabIndex !== prevState.tabId) {
      this.typeInput.current.clear();
      this.props.getTypeAheadList(this.props.tabIndex)
        .then((data) => {
          this.updateState({
            tabId: this.props.tabIndex,
            options: data,
            text: false,
            selected: [],
          });
        });
    }
    if (!_isEqual(prevState.options, this.props.typeList)) {
      this.updateState({
        options: this.props.typeList,
        text: '',
        selected: [],
      });
    }
  }

  onChangeType(selected) {
    console.log('selected', selected);
    this.props.onSetData(`tab_${this.props.tabIndex}_field_action-type_0`, selected);
    this.setState({ selected, text: true });
  }

  updateState(option) {
    this.setState({
      ...option,
    });
  }

  cancel() {
    this.updateState({
      text: false,
      selected: [],
    });
    this.typeInput.current.clear();
  }

  render() {
    const { selected, options, text } = this.state;
    const { tabIndex } = this.props;
    return (
      <>
        <Typeahead
          defaultSelected={options.slice(0, 4)}
          selected={selected}
          id={`should-select-${tabIndex}`}
          emptyLabel={<span style={{ width: 0, height: 0 }} />}
          onChange={(selected) => this.onChangeType(selected)}
          options={options}
          minLength={2}
          ref={this.typeInput}
          labelKey="type"
          onKeyDown={() => { this.setState({ text: true }); }}
          placeholder="Type"
        />
        {
          text && (
            <span className="typeahead__cancel-button" onClick={this.cancel}>×</span>
          )
        }
      </>
    );
  }
}

CustomTypeAhead.propTypes = {
  typeList: PropTypes.array,
  tabIndex: PropTypes.number,
  getTypeAheadList: PropTypes.func.isRequired,
  onSetData: PropTypes.func.isRequired,
};

CustomTypeAhead.defaultProps = {
  typeList: [],
  tabIndex: 1,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getTypeAheadList,
  },
  dispatch,
);

const mapStateToProps = (store) => ({
  typeList: store.incidentData.typeList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTypeAhead);
