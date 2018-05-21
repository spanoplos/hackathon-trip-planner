import { Panel } from 'gca-react-components';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Trip } from '../store/tripPlanner/tripPlanner';
import { Dispatch, State } from '../store/types';

const getItems = (trips: Trip[] | null): string => {
  return (
            'Hello'
            // trips
            //   .map( (item: Trip): Trip[] => item)
            //   .forEach((item) => '<div> item </div>')
  );
}

export interface Props { trips: Trip[] | null };

class ItemView extends React.Component<Props> {

  public render() {
    return ( <div>{getItems(this.props.trips)}</div> );
  };
}

export default ItemView;
