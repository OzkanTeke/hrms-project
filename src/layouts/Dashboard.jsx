import React from 'react'
import EmployerList from '../pages/EmployerList'
import JobSeekerList from '../pages/JobSeekerList'
import Users from './Sidebar'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Users />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <EmployerList />
                        <JobSeekerList />
                        <JobAdvertisementList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
