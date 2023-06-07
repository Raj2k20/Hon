import React, { useState } from 'react';
import { Dropdown } from '@nextui-org/react';

function FeaturesBlocks() {
  const batsmanOptions = ['Virat Kohli', 'Rohit Sharma', 'Suryakumar Yadav'];
  const bowlerOptions = ['Jasprit Bumrah', 'Mohammed Shami', 'Yuzvendra Chahal'];
  const wicketOptions = ['Caught', 'Bowled', 'Run Out'];
  const shotOptions = ['Straight Drive', 'Cover Drive', 'Pull Shot'];
  const runsOptions = ['0', '1', '2', '3', '4', '6'];

  const [selectedBatsman, setSelectedBatsman] = useState(new Set(['']));
  const [selectedBowler, setSelectedBowler] = useState(new Set(['']));
  const [selectedWicket, setSelectedWicket] = useState(new Set(['']));
  const [selectedShot, setSelectedShot] = useState(new Set(['']));
  const [selectedRuns, setSelectedRuns] = useState(new Set(['']));
  const handleBatsmanSelection = (selected) => {
    setSelectedBatsman(selected);
  };
  const handleBowlerSelection = (selected) => {
    setSelectedBowler(selected);
  };
  const handleWicketSelection = (selected) => {
    setSelectedWicket(selected);
  };
  const handleShotSelection = (selected) => {
    setSelectedShot(selected);
  };
  const handleRunsSelection = (selected) => {
    setSelectedRuns(selected);
  };

  const selectedBatsmanValue = React.useMemo(
    () => Array.from(selectedBatsman).join(', ').replaceAll('_', ' '),
    [selectedBatsman]
  );
  const selectedBowlerValue = React.useMemo(
    () => Array.from(selectedBowler).join(', ').replaceAll('_', ' '),
    [selectedBowler]
  );
  const selectedWicketValue = React.useMemo(
    () => Array.from(selectedWicket).join(', ').replaceAll('_', ' '),
    [selectedWicket]
  );
  const selectedShotValue = React.useMemo(
    () => Array.from(selectedShot).join(', ').replaceAll('_', ' '),
    [selectedShot]
  );
  const selectedRunsValue = React.useMemo(
    () => Array.from(selectedRuns).join(', ').replaceAll('_', ' '),
    [selectedRuns]
  );
  const handleSubmit = () => {
    // Collect the selected values from the dropdowns
    const selectedBatsmanValues = selectedBatsman.map((key) => batsmanOptions[key]);
    const selectedBowlerValues = selectedBowler.map((key) => bowlerOptions[key]);
    const selectedWicketValues = selectedWicket.map((key) => wicketOptions[key]);
    const selectedShotValues = selectedShot.map((key) => shotOptions[key]);
    const selectedRunsValues = selectedRuns.map((key) => runsOptions[key]);
  
    // Perform actions with the selected values
    // ...
  
    // Clear the selected values or perform any other necessary cleanup
    // ...
  
    // Optional: Show a success message or trigger any other UI updates
    // ...
  };
  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Keywords Selection</h2>
            <p className="text-xl text-gray-400">Submit a query using the keywords from the following dropdowns</p>
          </div>
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Batsman</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedBatsmanValue || 'Select your Batsman'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Batsman selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedBatsman}
                  onSelectionChange={handleBatsmanSelection}
                >
                  {batsmanOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Bowlers</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedBowlerValue || 'Select your Bowler'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Bowler selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedBowler}
                  onSelectionChange={handleBowlerSelection}
                >
                  {bowlerOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Type of Wicket</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedWicketValue || 'Select the Type of Wicket'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Wicket selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedWicket}
                  onSelectionChange={handleWicketSelection}
                >
                  {wicketOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Type of Shot</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedShotValue || 'Select the Type of Shot'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Shot selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedShot}
                  onSelectionChange={handleShotSelection}
                >
                  {shotOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* 5th item
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Runs Scored</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedRunsValue || 'Select the Runs Scored'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Runs selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedRuns}
                  onSelectionChange={handleRunsSelection}
                >
                  {runsOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            6th item
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Type of Wicket</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedWicketValue || 'Select the Type of Wicket'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Wicket selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedWicket}
                  onSelectionChange={handleWicketSelection}
                >
                  {wicketOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            7th item
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-blocks]">
              <h4 className="h4 mb-2">Type of Wicket</h4>
              <Dropdown>
                <Dropdown.Button flat color="primary" css={{ tt: 'capitalize', borderRadius: '0' }}>
                  {selectedWicketValue || 'Select the Type of Wicket'}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Wicket selection"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="multiple"
                  selectedKeys={selectedWicket}
                  onSelectionChange={handleWicketSelection}
                >
                  {wicketOptions.map((option) => (
                    <Dropdown.Item key={option} eventKey={option}>
                      {option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </div>
          <div className="flex justify-center mt-8">
          <button className="btn text-white w-full sm:w-auto sm:ml-4" type="submit" style={{ backgroundColor: "#0072f5" }}>
            Submit
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
