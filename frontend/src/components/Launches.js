import React, { Component } from 'react'
import gql from 'graphql-tag';
import LaunchItem from './LaunchItem';
import {Query}  from 'react-apollo';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <React.Fragment>
                <h3 className="display-4 my-3"><span role="img" aria-label="">🚀</span>SpaceX Launches</h3>
                <p>Indicators</p>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({ loading, error, data })=>{
                            if(loading) return <h5>Loading...</h5>
                            if(error) return <h5>Error loading data...</h5>
                            {/* console.log(data) */}

                            return <React.Fragment>
                                {
                                    data.launches.map(launch =>(
                                        <LaunchItem key={launch.flight_number}
                                            launch={launch}
                                        />
                                    ))
                                }
                            </React.Fragment>
                        }
                    }
                </Query>
            </React.Fragment>
        )
    }
}

export default Launches
