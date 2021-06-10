import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisementsByReleaseDateDesc().then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <div>
            <Table celled inverted style={{ marginTop: '0.5em' }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İlan Tanımı</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer?.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.job?.position}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.minSalary}-{jobAdvertisement.maxSalary}TL</Table.Cell>
                                <Table.Cell>{jobAdvertisement.expiryDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
