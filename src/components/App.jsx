import { useState } from "react";
import { useEffect } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

const App =()=> {
  const [good,setGood] = useState (0) ;
   const [neutral,setNeutral] = useState (0) ;
   const [bad,setBad] = useState (0) ;

  onClickHandler = option => {
  prevState => prevState[option] + 1;
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, value) => sum + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

   
  
  const buttonSet = Object.keys(this.state);
   const markup = (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonSet}
            onLeaveFeedback={this.onClickHandler}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
