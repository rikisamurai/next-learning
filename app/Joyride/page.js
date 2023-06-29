'use client';
import React, { useState } from 'react';
import Joyride, { STATUS, ACTIONS, EVENTS } from 'react-joyride';

const App = () => {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    {
      target: '.my-first-step',
      content: 'Check out our first awesome feature!',
      disableBeacon: true, // You can disable the beacon for this step
      placement: 'bottom', // Placement of the tooltip
      styles: {
        tooltipContainer: {
          textAlign: 'left'
        },
        buttonNext: {
          backgroundColor: 'green'
        },
        buttonBack: {
          marginRight: 10
        }
      }
    },
    {
      target: '.my-second-step',
      content: "Now, let's move to another feature!",
      placement: 'bottom'
    },
    {
      target: 'body',
      content: 'You can also target the body element for full screen steps.',
      placement: 'center',
      locale: { skip: <strong aria-label="skip">Skip</strong> } // You can also customize the button text
    }
  ];

  const handleJoyrideCallback = (data) => {
    const { status, type } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setStepIndex(
        (prevStepIndex) =>
          prevStepIndex + (data.action === ACTIONS.PREV ? -1 : 1)
      );
    }

    console.log('joyride callback data:', data);
  };

  const startTour = () => {
    setRun(true);
  };

  return (
    <div className="flex h-[300px] w-[300px] flex-col items-center justify-center gap-3 bg-gray-50">
      <button onClick={startTour}>Start Tour</button>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        run={run}
        scrollToFirstStep
        stepIndex={stepIndex}
        steps={steps}
        styles={{
          options: {
            zIndex: 10000
          }
        }}
      />
      <div className="my-first-step h-[100px] w-[100px] bg-amber-50">
        Step 1 content...
      </div>
      <div className="my-second-step h-[100px] w-[100px] bg-amber-50">
        Step 2 content...
      </div>
    </div>
  );
};

export default App;
