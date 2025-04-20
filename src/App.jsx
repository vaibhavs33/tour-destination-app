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

  //Task 3 - Render tours with TourCard and implement Not Interested removal
  
  //Removes a tour by ID and resets filter if needed
  const removeTour = (id) => {
    setTours((prevTours) => {
      //Filter out the tour with the given ID
      const updatedTours = prevTours.filter((tour) => tour.id !== id);

      //Task 4 - Display message and refresh button when all tours are removed

      //If no tours remain for the selected destination, reset the filter to 'all'
      if (
        selectedTour !== 'all' &&
        updatedTours.filter((tour) => tour.name === selectedTour).length === 0
      ) {
        setSelectedTour('all');
      }

      //Return the updated list of tours
      return updatedTours;
    });
  };

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

      {/* Task 3 - Render tours with TourCard and implement Not Interested removal */}

      {/* Component to display the list of tours */}
      <Gallery
        //Filtered list of tours
        tours={filteredTours} 
        
        //Function to update the tours list
        setTours={setTours}

        //Function to remove a tour
        onRemove={removeTour}
      />
    </main>
  )
}

//Exporting the main App component as the default export
export default App;