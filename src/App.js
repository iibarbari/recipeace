import React, {
  useEffect,
  useState
} from 'react';
import {
  Form, FormGroup,Input, Container,Button,Col,Row
} from 'reactstrap';
import Recipe from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const APP_ID = '7447076d';
  const APP_KEY = '5472686536fac79e650534ecb711ba69';

  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async (query) => {
    var response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    var data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }
  const setSubmittedQuery = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  useEffect(() => {
    getRecipes(query);
    console.log(`${query} searched!!`);
  }, [query]);

  return (
      <div className="App">
        <Container className='m-5'>
          <Form onSubmit = {(e)=>setSubmittedQuery(e)}>
            <FormGroup row className='justify-content-center'>
            <Col sm='6'>
                  <Input type="text" name="query" placeholder="Search a recipe" value={input} onChange= {(e)=> setInput(e.target.value)} />
                </Col>
                <Col sm='2'>
                  <Button>Submit</Button>
                </Col>
                </FormGroup>
              </Form> 
        </Container>
            <Container className='recipes'>
            <Row>
            {recipes.map(recipe => (
              <Recipe
              key={recipe.recipe.label} 
              recipe={recipe.recipe}/>
            ))}
            </Row>
            </Container> 
          </div>
  );
}

export default App;