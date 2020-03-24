import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div >
      <p className="indent">
      St Stevens, a non-profit working in South Minneapolis, provides resources and outreach services to people sleeping outside. Twice a year outreach workers are tasked with conducting a count of all the people sleeping in cars, under bridges, in parks and openly on sidewalks in our community.
      </p>
 
      <p className="indent">  
      On the night of the count the director of this effort breaks up his team of outreach workers into groups and assigns them responsibilities. They go into the city and do the best job they can to carry out this difficult responsibility.
      </p>
       
      <p className="indent">
      The documentation for each survey is in paper form. Each outreach worker needs to carry around a stack of papers and a clipboard, into the elements and then keep track of these documents throughout the night. After the count, in the early hours of the morning the director will manually tally up all the stats--which can take up to several additional hours. This paper process works, but it is a little inefficient and chaotic, and it also opens the door to human error.
      </p>
  
      <p className="indent">
      The Street Outreach Assistant digitizes this process. My app would allow a user to login or create an account. Once an account is created, the user would be directed to the user home page where they will be able to choose a survey. The first survey will have three pages to collect a total of nine data inputs. Once data is collected the user will be brought to a summary page where they can choose to edit or delete the most recently completed survey. Once the survey is completed, the user will be brought back to their home page. In addition to the surveys, admins will be given access to delete any user account, as well as pull statistics from the database.

    </p>
    </div>
  </div>
);

export default AboutPage;
