//Task 2 - Add destination filter dropdown and manage selected tour state

//Importing tools from React - useState to manage values
import React, { useState } from 'react';

//Importing the Gallery component to display the list of tours
import Gallery from './components/Gallery';

//Importing the DestinationSelector component to filter tours
import DestinationSelector from './components/DestinationSelector';

//Importing the CSS file for styling the app
import './styles/styles.css';

//This is the main component of the app
function App() {
  //State to store the list of tours (initially an empty array)
  const [tours, setTours] = useState([]);
  
  //State to track the currently selected destination (default is 'all')
  const [selectedTour, setSelectedTour] = useState('all'); 

  //Task 2 - Add destination filter dropdown and manage selected tour state

  //Filter the tours based on the selected destination
  const filteredTours =
    selectedTour === 'all'
      ? tours //If 'all' is selected, show all tours
      : tours.filter((tour) => tour.name === selectedTour); //Otherwise, show tours matching the selected destination

  
  return (
    <main>
      {/* App title */}
      <h1>Our Tours</h1>

      {/* Component for selecting a destination to filter the tours */}
      <DestinationSelector
        //List of all tours
        tours={tours} 

        //Currently selected destination
        selectedTour={selectedTour} 

        //Function to update the selected destination
        setSelectedTour={setSelectedTour}
      />
