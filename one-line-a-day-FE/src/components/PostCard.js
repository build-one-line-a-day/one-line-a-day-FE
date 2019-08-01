import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

export default function PostCard({ title, date, id }) {
		// formats the date
		const changedate = date.split("-");
		const item3 = changedate[2];
		const item3split = item3.split("T");
		const datedisplay =  `${changedate[1]} ${item3split[0]}, ${changedate[0]}`;
    
    return(
        <div className="fixed">
            <Grid columns={1} className="card-container">
                <Grid.Column>
                    <Card className="card-container">
											<Link to={`/post/${id}`}>
                        <Card.Content>
                            <Card.Header><div className="date">{datedisplay}</div></Card.Header>
                            <Card.Meta>
                                <div className="post-title">{title}</div>
                            </Card.Meta>
                        </Card.Content>
											</Link>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}