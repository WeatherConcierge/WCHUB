import React from 'react'
import { Card, Icon, Image, Modal, Header, Button,Comment, Form} from 'semantic-ui-react'

const CardExampleImageCard = (props) => (
  <Card className="post">
    <Image className="post-image" src={props.image} />
    <Card.Content>
      <Card.Header> {props.headertext}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='like outline' />
        {props.likes} likes
      </a>

    <Modal trigger={<Button className="story-btn primary" >Read More</Button>} className="story-modal">
    <Modal.Header>{props.headertext}</Modal.Header>
    <Modal.Content image>
      <Image  className="Modal-Image" src={props.image} />
      <Modal.Description>
     
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 

Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. 

Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. 

Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. 
</p>

 <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
      
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there.</p>
          <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
          <Icon name='like outline' />
        165 likes
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/assets/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
    <div> 

      
    </div>
      </Modal.Description>
    </Modal.Content>
 
  </Modal>

    </Card.Content>

    
    
  </Card>
)

export default CardExampleImageCard