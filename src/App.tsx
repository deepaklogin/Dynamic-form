import React, { useState, useEffect } from 'react';
import './App.css';
import FormModal from './Components/form';
import { formData } from './service/data.form';
import { Card, Button, Table } from 'react-bootstrap';
import { FormContext } from './FormContext';
function App() {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formData.questions[page]);
  const [elements, setElements] = useState({});
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const upcomingPageData = formData.questions[page];
    setCurrentPageData(upcomingPageData);
  }, [page]);
  const prev = () => {
    setPage(page - 1)
  }
  const next = () => {
    setPage(page + 1)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowResult(true)
  }
  const handleChange = (id: any, event: any) => {
    setShowResult(false)
    currentPageData.questionoption.forEach((element: any, i: any) => {
      // console.log(id , currentPageData.questionoption.que)
      if (currentPageData.questiontype !== 'Checkbox') {
        element['field_value'] = event.target.value;
        setElements(prevValue => ({ ...prevValue, [currentPageData.question]: event.target.value }));
      }
      else {
        // console.log("hello");
        if (id === currentPageData.questionoption[i].optionid) {
          console.log(event.target.checked)
          var checkedArray: any = []
          if (event.target.checked) {
            element['field_value'] = event.target.value;
            // const valueis = [...currentPageData.questionoption]
            // console.log(valueis)

            currentPageData.questionoption.forEach((data: any) => {
              checkedArray.push(data.field_value);
            })
            setElements(prevValue => ({ ...prevValue, [currentPageData.question]: checkedArray }));
          }
          else {
            // const valueis = [...currentPageData.questionoption]
            element['field_value'] = "";
            currentPageData.questionoption.forEach((data: any) => {
              checkedArray.push(data.field_value);
            })

            setElements(prevValue => ({ ...prevValue, [currentPageData.question]: checkedArray }));
          }
        }
        // console.log(currentPageData)
      }

    });
  }
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card>
          <Card.Body>
            <Card.Title>
              {currentPageData.question}
            </Card.Title>
            <Card.Text>
              <form>
                {
                  currentPageData && currentPageData.questionoption.map((field, i) => {
                    return (
                      <FormModal field={field} inputType={currentPageData.questiontype} key={i} />
                    )
                  })
                }
                {page === formData.questions.length - 1 && <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit Data</Button>}
              </form>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: 5 }}>
              <div>

                {page > 0 && <Button onClick={prev}>&#8249; Prev</Button>}
              </div>
              <div>

                {page < formData.questions.length - 1 && <Button onClick={next}>Next &#8250;</Button>}
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
      <br></br>
      {
        showResult && <div style={{padding:"10px"}}>
          <Card>
            <Card.Body>
                <Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>Form Result</div>
                </Card.Title>
              <Card.Text>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Questions</th>
                      <th>Answer</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      Object.entries(elements).map(([key, value]: any) => {
                        return (<tr key={key}><td>{key}</td><td>{value}</td></tr>)
                      })
                    }

                  </tbody>
                </Table >
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      }

    </FormContext.Provider>
  );
}

export default App;
