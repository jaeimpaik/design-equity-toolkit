/* ============================================================
   YOUR CONTENT LIVES HERE. To add a card, copy one block and edit it.
   - id: short, lowercase, hyphens. It becomes part of the NFC URL, so
     don't change it after you've written it onto a sticker.
   - phase: must match one "key" in PHASES below.
   - image: file name inside assets/illustrations/ (swap anytime).
   - imageAlt: describes the illustration for screen readers + audio users.
   - steps: any number. Numbers are added automatically. A step can be plain text,
     contain a link written as [words](https://address), or have sub-steps written as
     { text: "main step", sub: ["point one", "point two"] }.
   ============================================================ */

const PHASES = [
  { key: "empathy",   name: "Empathy",          bg: "#6698CC", ink: "#0F2236" },
  { key: "define",    name: "Define",           bg: "#B4B534", ink: "#2B2C04" },
  { key: "ideate",    name: "Ideate",           bg: "#F08C21", ink: "#3D1F00" },
  { key: "prototype", name: "Prototype & Test", bg: "#E36888", ink: "#4A0C20" },
  { key: "iterate",   name: "Iterate",          bg: "#A07FCC", ink: "#1A0B30" }
];

const CARDS = [
  {
    id: "paseo-protocol",
    phase: "empathy",
    title: "Paseo Protocol",
    question: "How can we reflect on our own positionality to approach our project being aware of our biases and assumptions?",
    image: "paseo-protocol.png",
    imageAlt: "Five small circles spaced evenly around a larger dotted circle, like a ring of people.",
    steps: [
      "Do a personal positionality reflection for 10 minutes, either using the “Exploring Positionality” card or a web of identities.",
      "Go outdoors as a team and stand in two concentric circles, one inner circle and one outer circle. Individuals should pair up, one facing the other.",
      "Using questions from Step 3 on [this link](https://www.clee.org/resources/paseo-or-circles-of-identity/), take turns answering the question based on your personal reflection. Shift the outer circle once after each question to talk to a new partner."
    ],
    citations: [
      "Laidley, Debbi, et al. The Paseo or Circles of Identity. School Reform Initiative, 2001."
    ]
  },
  {
    id: "exploring-positionality",
    phase: "empathy",
    title: "Exploring Positionality",
    question: "How does our own positionality and background impact our current design project, both positively and negatively?",
    image: "exploring-positionality.png",
    imageAlt: "Three stacked boxes joined by downward arrows, reading identity, then influence on project, then emotional connection.",
    steps: [
      "Brainstorm dimensions of your social identity that are important to you. (E.g., gender, sexual orientation, ability, race and ethnicity, citizenship status, education, and economic/social class.)",
      "Consider how these identities shape your current day-to-day life, including your current design project. Consider how these identities both positively and negatively shape your day-to-day life.",
      "Then, consider how each identity shapes your inner emotional world—what emotion is a particular identity associated with? Consider how these dimensions elicit positive and negative emotions. Are any emotions associated with feelings of being an insider or outsider?",
      "Finally, reflect on how different identities (e.g., race and gender) overlap in any way and draw lines between identities that shape aspects of your daily life and emotions in new ways when considered together. What new impacts on daily life and emotions emerge when these identities co-occur?"
    ],
    citations: [
      "Daly, Hannah, et al. Exploring Individual and Institutional Positionality: A Tool for Equity in Community Engagement and Collaboration. Urban Institute, Dec. 2023."
    ]
  },
  {
    id: "iceberg",
    phase: "empathy",
    title: "Iceberg",
    question: "Can we try to understand the underlying system to understand people’s behavior?",
    image: "iceberg.png",
    imageAlt: "Outline of an iceberg with a dotted waterline across it near the top. An arrow points at the small tip above the line, and most of the shape lies below the line.",
    steps: [
      {
        text: "The iceberg model has 4 layers. Using the description of the layers below, take the observations you have made and dig deeper.",
        sub: [
          "Events: Observable behaviours. What happened, what did you see?",
          "Patterns of Behavior: Trends. What has been happening over time?",
          "Underlying systemic structure: What are the structural forces at play contributing to these patterns?",
          "Mental Model: What is it about our thinking that creates the systems and supports them persisting?"
        ]
      }
    ],
    citations: [
      "Acaroglu, Leyla. “Tools for Systems Thinkers: Systems Mapping.” Medium, Disruptive Design, 20 Sept. 2017, medium.com/disruptive-design/tools-for-systems-thinkers-systems-mapping-2db5cf30ab3a. Accessed 29 Oct. 2026."
    ]
  },
  {
    id: "categorizing-oppression",
    phase: "define",
    title: "Categorizing Oppression",
    question: "What forms of oppression might be affecting our user?",
    image: "categorizing-oppression.png",
    imageAlt: "Four tall boxes side by side, labeled internalized, interpersonal, institutional and structural, with short lines connecting neighboring boxes.",
    steps: [
      "Brainstorm examples of oppression that might be affecting your user and their need in the context of your project. Make a list of these examples.",
      {
        text: "Categorize these examples of oppression into one (or more) of these four categories:",
        sub: [
          "Internalized oppression is when an oppressed group believes the negative stereotypes that they hear about their own group and acts against their own group by discriminating against them.",
          "Interpersonal oppression takes place between people, where people who are part of a dominant group discriminate against people from a minority group based on race, gender, age, class, ability status, etc",
          "Institutional oppression is when the policies and systems of an organization discriminate against specific groups of people.",
          "Structural oppression is when oppression and discrimination become ingrained in a society and are part of the culture. They are seen as \"just the way things are.\""
        ]
      },
      "Know that examples can fit more than one category of oppression."
    ],
    citations: [
      "Shea, Andrew. Designing for Social Change: Strategies for Community-Based Graphic Design. New York, Princeton Architectural Press, 2012, pp. 1–53."
    ]
  },
  {
    id: "stakeholder-map",
    phase: "define",
    title: "Stakeholder Map",
    question: "Who are we designing for? Who are we NOT designing for?",
    image: "stakeholder-map.png",
    imageAlt: "A web of hand-drawn circles joined by curved lines. Some circles are labeled A, B and C, and others are blank.",
    steps: [
      "Draw a circle in the center of your paper and write down the need/problem your team is working on.",
      "In circles around the center, write all stakeholders who might be involved in, connected to, or may influence the problem at hand. Use lines to show connections between stakeholders.",
      "Then observe who is missing. Who is NOT on the map at all? Are they part of marginalized populations? Why are they not on the map?"
    ],
    citations: [
      "Acaroglu, Leyla. “Tools for Systems Thinkers: Systems Mapping.” Medium, Disruptive Design, 20 Sept. 2017, medium.com/disruptive-design/tools-for-systems-thinkers-systems-mapping-2db5cf30ab3a. Accessed 29 Oct. 2026."
    ]
  },
  {
    id: "scrutinize-pov",
    phase: "define",
    title: "Scrutinize the POV",
    question: "Are there stereotypes or assumptions in our POV?",
    image: "scrutinize-pov.png",
    imageAlt: "A magnifying glass with the letters POV written inside the lens.",
    steps: [
      "Write your POV in the center of your paper.",
      "Focus on the user, and scrutinize the user description. Are we making any assumptions when describing the user about their identity? Are we generalizing characteristics that are not actually reflective of them? Are we using previous, biased judgments about a certain population in the description?",
      "List these assumptions out, and see how they can be addressed by rewording the user description."
    ],
    citations: [
      "Costanza-Chock, Sasha. Design Justice: Community-Led Practices to Build the Worlds We Need. The MIT Press, 2020, pp. 69–101."
    ]
  },
  {
    id: "assumption-storm",
    phase: "ideate",
    title: "Assumption Storm",
    question: "What assumptions do we hold when generating ideas?",
    image: "assumption-storm.png",
    imageAlt: "Three lightning bolts of different sizes in the center, surrounded by two curved arrows that form a cycle.",
    steps: [
      "Reflecting on your own personality and privileges, look at your list of generated ideas and see if any of them are based on assumptions (for instance, if it is a handheld tool, is there an assumption that everyone is equally able to use their hands?)",
      "Try to turn these assumptions on their head. Flip them!",
      "Using flipped assumptions, try to regenerate a new list of ideas."
    ],
    citations: [
      "Wise, Susie, and Stanford d.school. Design for Belonging. Ten Speed Press, 19 Apr. 2022."
    ]
  },
  {
    id: "dont-reinvent-wheel",
    phase: "ideate",
    title: "Don’t Reinvent the Wheel",
    question: "What work and ideas already exist in the world? How can we use existing ideas and amplify them?",
    image: "dont-reinvent-wheel.png",
    imageAlt: "A cluster of hand-drawn ovals joined by lines. Three of the ovals say idea and the others are blank.",
    steps: [
      "Do some research on products, systems, regulations, organizations, etc. that already exist and try to address the need you are trying to solve for.",
      "Map these existing ideas using a cluster map format, dumping all of them on paper.",
      "Begin to see links between existing ideas and draw lines to show these connections.",
      "Go back to your own ideation to see if you can use the existing ideas and the positive impact of these ideas and expand or amplify them."
    ],
    citations: [
      "Noel, Lesley-Ann, and Stanford d.school. Design Social Change. Ten Speed Press, 28 Nov. 2023.",
      "Costanza-Chock, Sasha. Design Justice: Community-Led Practices to Build the Worlds We Need. The MIT Press, 2020, pp. 69–101."
    ]
  },
  {
    id: "complex-systems-mapping",
    phase: "ideate",
    title: "Complex Systems Mapping",
    question: "Are our ideas addressing the need from unique angles and at various scales?",
    image: "complex-systems-mapping.png",
    imageAlt: "Three nested circles that touch at the bottom, labeled from largest to smallest: ecological, industrial, human.",
    steps: [
      "Consider the three main levels of systems at play in the world: social (humans & communities), industrial (products), and ecological (environment).",
      "Draw concentric circles that represent each level and write the need you are targeting below.",
      "Sort your existing list of ideas into each system level, keeping in mind how it relates to the need at that level. Are you missing ideas in any circle? How could you ideate to address a different system level?"
    ],
    citations: [
      "Leyla Acaroglu. “Tools for Systems Thinkers: 7 Steps to Move From Insights to Interventions.” Medium, Disruptive Design, 9 Oct. 2017, medium.com/disruptive-design/tools-for-systems-thinkers-7-steps-to-move-from-insights-to-interventions-dcefd8e74753. Accessed 29 Oct. 2026.",
      "Shea, Andrew. Designing for Social Change: Strategies for Community-Based Graphic Design. New York, Princeton Architectural Press, 2012, pp. 1–53."
    ]
  },
  {
    id: "biomimicry",
    phase: "prototype",
    title: "Biomimicry",
    question: "How can we turn to nature for inspiration for our prototypes?",
    image: "biomimicry.png",
    imageAlt: "The outline of a leaf inside a circle.",
    steps: [
      "Observe similarities between your prototype and other organisms or phenomena you have seen in nature.",
      "Refer to the [Principles of Emergent Strategies](https://jenniferlphillips.com/blog/2023/8/31/emergent-strategy) and brainstorm ideas on how you can apply systems in nature to your prototype."
    ],
    citations: [
      "Brown, Adrienne Maree. Emergent Strategy: Shaping Change, Changing Worlds. Chico, CA, AK Press, 2017, pp. 1–31."
    ]
  },
  {
    id: "bullseye-map",
    phase: "prototype",
    title: "Bullseye Map",
    question: "Who might be impacted by our prototype, and in what way? Are we taking accountability for these impacts?",
    image: "bullseye-map.png",
    imageAlt: "Three concentric circles with a dotted horizontal line through the middle. The top half is labeled positive and the bottom half negative, and three dots sit in different rings.",
    steps: [
      "Draw three concentric circles with a horizontal dotted line in the middle. Label the top “positive” and bottom “negative.”",
      "Place the user and the prototype in the center of the concentric circles.",
      "Think about the immediate impacts of the prototype on the user and write them in the center circle. Categorize these effects as positive or negative.",
      "As you move further out in the concentric circles, think about other, more distant individuals, communities, and environments your prototype might affect. Categorize these effects as positive or negative too.",
      "Reflect as designers on whether you are addressing some of the potential negative impacts of your idea, and how."
    ],
    citations: [
      "Leyla Acaroglu. “Tools for Systems Thinkers: 7 Steps to Move From Insights to Interventions.” Medium, Disruptive Design, 9 Oct. 2017, medium.com/disruptive-design/tools-for-systems-thinkers-7-steps-to-move-from-insights-to-interventions-dcefd8e74753. Accessed 29 Oct. 2026."
    ]
  },
  {
    id: "tester-testee-dynamics",
    phase: "prototype",
    title: "Tester-Testee Dynamics",
    question: "Is the test done in a safe environment where power is balanced? Or is there any oppression or power dynamics during the test?",
    image: "tester-testee-dynamics.png",
    imageAlt: "A seesaw tilted with its right end raised higher, with a simple person figure sitting at each end.",
    steps: [
      "Consider yourself as a tester and the users you are testing the prototype with.",
      "Imagine both on either end of a seesaw, with the power, authority, and voice you have being the cause for the seesaw teetering one way or the other.",
      "Do you have more power, authority, or voice than the testee in this situation? Why or why not?",
      "How might you change the structure of the test and feedback collection to make this seesaw more balanced?"
    ],
    citations: []
  },
  {
    id: "who-is-at-the-table",
    phase: "prototype",
    title: "Who’s at the Table?",
    question: "Who is at the table? Who is NOT, and how can we invite them?",
    image: "who-is-at-the-table.png",
    imageAlt: "A rectangular table with six circles, each representing a person, placed around it at different distances.",
    steps: [
      "Draw a table and seats around the table.",
      "Write the names of people who have so far been involved in the design process. Place them close to the table if they have been heavily involved, and further away if less so.",
      "Then, think about who is NOT at the table. Are there any potential users or people who eventually will be impacted that are NOT represented? Why? How might we invite them?"
    ],
    citations: []
  },
  {
    id: "steeple-framework",
    phase: "iterate",
    title: "STEEPLE Framework",
    question: "How might our prototype impact systems of oppression?",
    image: "steeple-framework.png",
    imageAlt: "The word STEEPLE written in tall, thin, hand-drawn capital letters.",
    steps: [
      {
        text: "Each letter of the acronym represents a different aspect to consider when reflecting on our prototype.",
        sub: [
          "Social: What social trends might impact the effectiveness of our prototype?",
          "Technological: What trends in technology might impact our prototype/ideas?",
          "Economic: What macro-economic trends are relevant?",
          "Environmental: What environmental trends and impacts are important to consider?",
          "Political: What political trends might help (or hinder) how our prototype is used?",
          "Legal: What legal and regulatory considerations are important here?",
          "Ethical: What ethical issues are critical to consider, both in how our prototype is used and later disposed of?"
        ]
      },
      "Think about your prototype and feedback from tests, and reflect on each aspect in the context of your idea."
    ],
    citations: []
  },
  {
    id: "causal-loop-diagram",
    phase: "iterate",
    title: "Causal Loop Diagram",
    question: "How do we minimize unintended consequences?",
    image: "causal-loop-diagram.png",
    imageAlt: "A loop of arrows running clockwise around a rectangle, with the words cause & effect in the middle.",
    steps: [
      "Given your prototype, draw a line coming out of the prototype and write the first (positive or negative) consequence that might arise from the prototype being used.",
      "Then, think of the following consequence due to that event happening and draw an arrow to map it.",
      "Continue this cycle until you find that there may be an unintended consequence from your idea.",
      "Brainstorm as a team how you might reduce these consequences or stop the causal loop."
    ],
    citations: [
      "Acaroglu, Leyla. “Tools for Systems Thinkers: Systems Mapping.” Medium, Disruptive Design, 20 Sept. 2017, medium.com/disruptive-design/tools-for-systems-thinkers-systems-mapping-2db5cf30ab3a. Accessed 29 Oct. 2026."
    ]
  },
  {
    id: "participatory-design-map",
    phase: "iterate",
    title: "Participatory Design Map",
    question: "Are we truly engaging in a participatory design process?",
    image: "participatory-design-map.png",
    imageAlt: "A hand-drawn graph with a vertical axis and a horizontal axis labeled design cycle. Four wavy lines rise, fall and cross one another.",
    steps: [
      "Draw a chart with an x- and y-axis. The x-axis represents time passing throughout the design process, and the y-axis is the amount of collaboration.",
      "Each team member chooses a color and draws their journey in collaborating in the design process across time. The lines should overlap and look messy.",
      "Observe the map and see if there are any patterns or unusual lines. Discuss how this might connect to ensuring an equitable, collaborative, and participatory design process."
    ],
    citations: []
  }
];
