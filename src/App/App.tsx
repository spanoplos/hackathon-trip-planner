/**
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { AsyncContent, Layout } from 'gca-react-components';
import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import { fetchTrip } from '../store/tripPlanner/tripPlanner';
import TripView from '../TripView/TripView';

import { Dispatch, State } from '../store/types';
import './App.scss';

export const enum Routes {
  TripPlanner = '/trip-planner',
}

interface SP {
  error: boolean;
  loading: boolean;
}

interface DP {
  fetchTrip: () => void;
}

type OP = RouteComponentProps<{}>;
type Props = SP & DP & OP & InjectedIntlProps;

class App extends React.Component<Props, {}> {
  public render() {
    const { loading, error } = this.props;
    return (
      <Layout title={'OpenTable Trip Planner'}>
          {/* <AsyncContent
            isLoading={this.props.loading}
            isError={this.props.error}
            errorTitle={'Error'}
            errorMessage={'Error'}
          >
          <Switch>
          </Switch>
          </AsyncContent> */}
          <TripView />
      </Layout>
    );
  }

  // public componentDidMount() {
  //   this.props.fetchTrip();
  // }
}

const mapState = (state: State): SP => ({
  error: state.tripPlanner.error,
  loading: state.tripPlanner.loading,
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchTrip() {
    dispatch(fetchTrip.started(true));
  },
});

const WithIntl = injectIntl<Props>(App);
const Connected = connect<SP, DP, OP>(mapState, mapDispatch)(WithIntl);
const WithRouter = withRouter(Connected);

export default WithRouter;
export { App as PureApp };
