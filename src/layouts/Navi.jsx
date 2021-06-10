import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed = "top">
                <Container>
                    <Menu.Item
                        name='ana sayfa'

                    />
                    <Menu.Item
                        name='mesajlar'

                    />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Diller'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Giriş Yap</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
