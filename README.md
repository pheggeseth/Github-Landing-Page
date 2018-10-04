# Custom Github Landing Page
I custom-created this Github landing page using React, styled-components, and CSS Grid.

I first created some constant variables to hold certain values that remain consistent throughout the page, such as screen width breakpoints, as well as information such as margin and padding. I also created larger objects of constant values to hold information such as box shadow values, website colors, and relative file paths for icons.

Below that, I created a series of components with their own encapsulated CSS styles through styled-components. These components represent abstract pieces of the page, such as the container for card, the card itself, the card's content or its image (if there is one). Utilizing styled-components' system of defining component styles as template literals, I am able to interpolate styling values as needed from the constant variables I previously defined.

After these are created, I define a series of functional React components representing individual instances of a card, such as the "About Me" card, the "Skills" card, or cards highlighting my past projects.

All of these cards are organized in a responsive, "masonry" style format using CSS Grid. When viewed on a mobile device, this grid changes orientation to a single column.