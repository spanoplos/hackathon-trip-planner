import { Panel } from 'gca-react-components';
import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { fetchTrip, getHotels, getPoi, Trip } from '../store/tripPlanner/tripPlanner';
import { Dispatch, State } from '../store/types';
import ItemView from './ItemView';

interface SP {
  error: boolean;
  loading: boolean;
  getLodging: Trip[];
}

interface DP {
  fetchTrip: () => void;
}

export type Props = DP & SP & InjectedIntlProps;

class TripView extends React.Component<Props> {
  public render() {
    const {
      getLodging,
    } = this.props;

    const hotels = getLodging;

    return (
      <Panel title="My Trip">
        <section className="gca-trip-plan">
          <div className="content-container">
            <div className="category-text">Lodging</div>
            <ItemView {...hotels} />
          </div>
          <div className="content-container">
            <div className="category-text">Dining</div>
          </div>
          <div className="content-container">
            <div className="category-text">Activities</div>
          </div>
        </section>
      </Panel>
    );
  }

  public componentWillMount() {
    this.props.fetchTrip();
  }
}

const mapState = (state: State) => {
  return {
    error: state.tripPlanner.error,
    // getActivities: getPoi(state),
    getLodging: getHotels(state),
    loading: state.tripPlanner.loading,
  };
};

const mapDispatch = (dispatch: Dispatch) => ({
  fetchTrip() {
    dispatch(fetchTrip.started(true));
  },
});

export default connect(mapState, mapDispatch)(injectIntl(TripView));
