import React from 'react'
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react'
import Post from '../Post'

const Forecasters = () => (
  <Grid>
  

    <Grid.Row columns={3}>
      <Grid.Column>
          <Card className="forecaster-card">
    <Image className="forecaster-image" src='https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/black-background-studio-portrait.jpg' />
    <Card.Content className="forecaster-content">
      <Card.Header>
        Sandy Ressner
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
      Sandy is a forecaster  living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Subscribers
      </a>
      <Button className="forecaster-btn primary">  Follow</Button>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column>
      <Card className="forecaster-card">
    <Image className="forecaster-image" src='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg' />
    <Card.Content className="forecaster-content">
      <Card.Header>
        Sandy Ressner
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
      Sandy is a forecaster  living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Subscribers
      </a>
      <Button className="forecaster-btn primary">  Follow</Button>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column>
      <Card className="forecaster-card">
    <Image className="forecaster-image" src='https://kelley.iu.edu/images/vitae/tlemper-768.jpg' />
    <Card.Content className="forecaster-content">
      <Card.Header>
        Sandy Ressner
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
      Sandy is a forecaster  living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Subscribers
      </a>
      <Button className="forecaster-btn primary">  Follow</Button>
    </Card.Content>
  </Card>
  
      </Grid.Column>
      
    </Grid.Row>



  </Grid>
)

export default Forecasters