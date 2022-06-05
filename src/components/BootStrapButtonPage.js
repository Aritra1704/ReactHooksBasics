import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootStrapButtonPage = () => {
    return (
        <>
            <p>Normal buttons</p>
            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </>
            <p>Outline buttons</p>
            <>
                <Button variant="outline-primary">Primary</Button>{' '}
                <Button variant="outline-secondary">Secondary</Button>{' '}
                <Button variant="outline-success">Success</Button>{' '}
                <Button variant="outline-warning">Warning</Button>{' '}
                <Button variant="outline-danger">Danger</Button>{' '}
                <Button variant="outline-info">Info</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-dark">Dark</Button>
            </>
            <p>Button tags</p>
            <>
                <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
                <Button as="input" type="button" value="Input" />{' '}
                <Button as="input" type="submit" value="Submit" />{' '}
                <Button as="input" type="reset" value="Reset" />
            </>
            <p>Sizes Button</p>
            <>
                <div className="mb-2">
                    <Button variant="primary" size="lg">
                    Large button
                    </Button>{' '}
                    <Button variant="secondary" size="lg">
                    Large button
                    </Button>
                </div>
                <div>
                    <Button variant="primary" size="sm">
                    Small button
                    </Button>{' '}
                    <Button variant="secondary" size="sm">
                    Small button
                    </Button>
                </div>
            </>
            <Button size="lg" >
                Show Message
            </Button>
        </>
    )
}

export { BootStrapButtonPage as default};