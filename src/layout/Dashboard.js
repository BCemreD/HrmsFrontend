import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Segment inverted>
                <Button inverted>Menu</Button>
                <Button inverted color='red'>
                    Job Postings
                </Button>
                <Button inverted color='orange'>
                    Job Positions
                </Button>
                <Button inverted color='yellow'>
                    Job Titles
                </Button>
                <Button inverted color='olive'>
                    Candidates
                </Button>
                {/* <Button inverted color='green'>
                    Green
                </Button>
                <Button inverted color='teal'>
                    Teal
                </Button>
                <Button inverted color='blue'>
                    Blue
                </Button>
                <Button inverted color='violet'>
                    Violet
                </Button>
                <Button inverted color='purple'>
                    Purple
                </Button>
                <Button inverted color='pink'>
                    Pink
                </Button>
                <Button inverted color='brown'>
                    Brown
                </Button>
                <Button inverted color='grey'>
                    Grey
                </Button>
                <Button inverted color='black'>
                    Black
                </Button> */}
            </Segment>
        </div>
    )
}
