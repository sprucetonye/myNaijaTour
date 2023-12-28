import { Fragment } from "react";

function ListGroup() {
    const items = [
        'Rivers State',
        'Kano State',
        'Bayelsa State',
        'Akwa Ibom State',
        'Lagos State',
        'Ogun State',
        'Abuja, Federal Capital Territry'
    ];

    
  return (
        
   

  <Fragment>
      
        <ul className="list-group list-group-flush">
            <h4>List of States I have visited in Nigeria</h4>
        {items.map((item => <li key={item}>{item}</li>))}
          {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
      
  </Fragment>
  );
  
}

export default ListGroup;
