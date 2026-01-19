import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <Card className="text-center" style={{ width: '18rem', }}>
      <Card.Img variant="top" src="holder.js/500px325" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex blanditiis fuga ratione magnam magni fugit eligendi quos at dolorum labore.
        </Card.Text>
          </Card.Body>
        <Card.Footer>
       <Button variant="primary">Find Out More!</Button>
      </Card.Footer>
    
    </Card>
  );
}

export default MyCard;
