import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard() {
  return (
    <Card className="text-center" style={{ width: '18rem', }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex blanditiis fuga ratione magnam magni fugit eligendi quos at dolorum labore.
        </Card.Text>
        <Button variant="primary">Find Out More!</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
