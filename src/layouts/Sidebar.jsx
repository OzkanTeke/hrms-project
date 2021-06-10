import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Users() {
    return (
        <div>
            <Menu inverted pointing vertical>
                <Menu.Item
                    name='ana sayfa'
                />
                <Menu.Item
                    name='mesajlar'
                />
                <Menu.Item
                    name='arkadaşlar'
                />
            </Menu>
        </div>
    )
}
