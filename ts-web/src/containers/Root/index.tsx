import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import DisplayMessage from '../../components/DisplayMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import MessageCards from '../../components/MessageCards';
import { SharedMessageType, StateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import { expandMessage, fetchSharedMessages } from './actions';
import * as styles from './styles.css';

interface IStateProps {
  displayMessage?: string;
  expandedMessage?: number;
  loading: boolean;
  sharedMessages: SharedMessageType[];
}

interface IDispatchProps {
  expandMessage(id?: number);
  fetchSharedMessages();
}

function mapStateToProps(state: StateType): IStateProps {
  return {
    displayMessage: state.sharedMessages.displayMessage,
    expandedMessage: state.sharedMessages.expandedMessage,
    loading: state.sharedMessages.loading,
    sharedMessages: state.sharedMessages.messages
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    expandMessage: (payload) => (dispatch(expandMessage(payload))),
    fetchSharedMessages: () => (dispatch(fetchSharedMessages()))
  };
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Root extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.fetchSharedMessages();
  }

  render() {
    if (this.props.loading ||
        !this.props.sharedMessages ||
        this.props.sharedMessages.length === 0) {
      return <LoadingSpinner />;
    }
    if (this.props.displayMessage) {
      return <DisplayMessage message={this.props.displayMessage} />;
    }
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1><FormattedMessage id="container.Root.heading" /></h1>
          <button
            className={styles.reload}
            onClick={() => this.props.fetchSharedMessages()}>
            ↻
          </button>
        </div>
        <MessageCards
          expand={this.props.expandMessage}
          expandedMessage={this.props.expandedMessage}
          sharedMessages={this.props.sharedMessages}
        />
      </div>
    );
  }

}

export default withUserProfile(Root);
