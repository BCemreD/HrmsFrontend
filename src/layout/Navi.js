import React from 'react'
import { Container, Header } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Container fluid>
                <p className="main">
                    <Header as='h2'>
                        Welcome
                    </Header>
                </p>
                <p>
                    <Header as='h4'> 
                     This site is for finding Job postings and avaible candidates.
                    </Header>
                      
                </p>
            </Container>
        </div>
            )
}
