// SBA301: Frontend Web Development & ReactJS Exam Preparation
// Extracted from docs/sba301-complete-exam-questions-part1-to-part22.docx
export const subject02Questions = [
  {
    "id": "sba301-q001",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "Which statement accurately describes the architectural scope and nature of ReactJS as defined in the slides?",
    "options": [
      {
        "id": "A",
        "text": "React is a full-stack MVC framework that handles database persistence and backend routing."
      },
      {
        "id": "B",
        "text": "React is technically a flexible JavaScript library focused specifically on the view layer."
      },
      {
        "id": "C",
        "text": "React is an imperative programming language compiled directly into browser bytecode."
      },
      {
        "id": "D",
        "text": "React is a server-side runtime designed to manage database query transactions."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The slides explicitly state that while React is often referred to as a framework, it is technically a JavaScript library that functions strictly as the view layer. (Source: Chapter 01. Introduction to ReactJS.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q002",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "multiple",
    "question": "According to the slides, which of the following are recognized as key features of ReactJS? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Two-way automatic model synchronization"
      },
      {
        "id": "B",
        "text": "JSX (JavaScript XML)"
      },
      {
        "id": "C",
        "text": "Virtual DOM"
      },
      {
        "id": "D",
        "text": "One-way Data Binding"
      },
      {
        "id": "E",
        "text": "Component-based architecture"
      }
    ],
    "correctAnswer": [
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "The slides highlight JSX, reusable Components, Virtual DOM, and One-way Data Binding as foundational features of ReactJS. React relies on one-way data flow rather than two-way automatic model synchronization. (Source: Chapter 01. Introduction to ReactJS.pptx, slides 3, 5)"
  },
  {
    "id": "sba301-q003",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "How does React's Virtual DOM improve application rendering performance compared to direct DOM manipulation?",
    "options": [
      {
        "id": "A",
        "text": "By recompiling JavaScript into native machine code at runtime."
      },
      {
        "id": "B",
        "text": "By bypassing HTML parsing and executing directly on the GP"
      },
      {
        "id": "U",
        "text": ""
      },
      {
        "id": "C",
        "text": "By efficiently updating only the necessary parts of the actual DO"
      },
      {
        "id": "M",
        "text": ""
      },
      {
        "id": "D",
        "text": "By eliminating the need for client-side JavaScript execution."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The slides explain that React utilizes a virtual DOM to efficiently update only the necessary parts of the actual DOM rather than re-rendering the whole page. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 5)"
  },
  {
    "id": "sba301-q004",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "What is the primary benefit of React's \"One-way Data Binding\" as outlined in the deck?",
    "options": [
      {
        "id": "A",
        "text": "It allows child components to directly mutate parent states without handler functions."
      },
      {
        "id": "B",
        "text": "Data flows in a single direction, making applications easier to understand and debug."
      },
      {
        "id": "C",
        "text": "It eliminates the need for build tools like Vite and package managers like npm."
      },
      {
        "id": "D",
        "text": "It guarantees that network operations execute synchronously."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The slides explicitly state that one-way data flow ensures data moves in one direction, which makes React applications much easier to reason about, understand, and debug. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 5)"
  },
  {
    "id": "sba301-q005",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "multiple",
    "question": "Which of the following statements correctly characterize Node.js based on the lecture slides? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Node.js is a standalone programming language that completely replaces JavaScript."
      },
      {
        "id": "B",
        "text": "Node.js is an open-source JavaScript runtime built on Chrome's V8 engine."
      },
      {
        "id": "C",
        "text": "Node.js operates on an event-driven, non-blocking I/O model."
      },
      {
        "id": "D",
        "text": "Node.js executes JavaScript on the server side outside of the web browser."
      },
      {
        "id": "E",
        "text": "Node.js spawns a separate physical operating system thread for every concurrent user connection."
      }
    ],
    "correctAnswer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "The slides define Node.js as an open-source runtime built on the V8 engine that allows JavaScript to run server-side using an asynchronous, event-driven, non-blocking model. (Source: Chapter 01. Introduction to ReactJS.pptx, slides 6, 7, 8)"
  },
  {
    "id": "sba301-q006",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "Why does the Google V8 engine provide high execution speed for Node.js applications?",
    "options": [
      {
        "id": "A",
        "text": "It compiles JavaScript code directly to machine code at runtime."
      },
      {
        "id": "B",
        "text": "It converts JavaScript into interpreted SQL database queries."
      },
      {
        "id": "C",
        "text": "It forces all asynchronous network requests to execute synchronously."
      },
      {
        "id": "D",
        "text": "It prevents the execution of external third-party dependencies."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 7 specifies that Google's V8 engine compiles JavaScript to machine code at runtime, which significantly boosts application execution speed. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 7)"
  },
  {
    "id": "sba301-q007",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "Which command is used to quickly initialize a default package.json manifest file in a new project directory without interactive prompts?",
    "options": [
      {
        "id": "A",
        "text": "npm create package.json"
      },
      {
        "id": "B",
        "text": "npm install --save-manifest"
      },
      {
        "id": "C",
        "text": "npm init -y"
      },
      {
        "id": "D",
        "text": "node --init-project"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The slides explicitly state that typing npm init or npm init -y at the prompt initializes a package.json file for your project. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 12)"
  },
  {
    "id": "sba301-q008",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "multiple",
    "question": "According to the setup and development environment slides, which tools and extensions are recommended for React development? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Visual Studio Code (VS Code)"
      },
      {
        "id": "B",
        "text": "React Developer Tools extension for Chrome DevTools"
      },
      {
        "id": "C",
        "text": "ES7+ React/Redux/React-Native snippets extension for VS Code"
      },
      {
        "id": "D",
        "text": "Apache Tomcat Server standalone binary"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 15, 16, and 17 specifically walk through downloading VS Code, adding the React Developer Tools Chrome extension, and installing the ES7+ React/Redux/React-Native snippets extension. (Source: Chapter 01. Introduction to ReactJS.pptx, slides 15, 16, 17)"
  },
  {
    "id": "sba301-q009",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "Which terminal command is specified in the slides to scaffold a new React starter application using the Vite build tool?",
    "options": [
      {
        "id": "A",
        "text": "npx create-react-app name-of-project"
      },
      {
        "id": "B",
        "text": "npm create vite@latest name-of-project"
      },
      {
        "id": "C",
        "text": "vite init react-app name-of-project"
      },
      {
        "id": "D",
        "text": "npm install vite --global-react"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 18 explicitly instructs developers to scaffold a new React project using Vite by typing npm create vite@latest name-of-project. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 18)"
  },
  {
    "id": "sba301-q010",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "After navigating into the newly scaffolded Vite project folder and installing dependencies with npm install, which command launches the local development server, and what is Vite's default local port?",
    "options": [
      {
        "id": "A",
        "text": "npm start on port 3000"
      },
      {
        "id": "B",
        "text": "node server.js on port 8080"
      },
      {
        "id": "C",
        "text": "npm run dev on port 5173"
      },
      {
        "id": "D",
        "text": "vite build on port 5000"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slides 18 and 19 show running npm run dev to start the local Vite server, which launches by default at http://localhost:5173/. (Source: Chapter 01. Introduction to ReactJS.pptx, slides 18, 19)"
  },
  {
    "id": "sba301-q011",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "Who developed Git, and what was its original development purpose as noted in the slides?",
    "options": [
      {
        "id": "A",
        "text": "Brendan Eich, to manage browser standards for Netscape Navigator."
      },
      {
        "id": "B",
        "text": "Linus Torvalds, for managing Linux kernel development."
      },
      {
        "id": "C",
        "text": "Jordan Walke, to support Facebook's internal News Feed system."
      },
      {
        "id": "D",
        "text": "Ryan Dahl, to manage the Node.js package ecosystem."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 21 notes that Git is a distributed version control system developed by Linus Torvalds specifically for managing Linux kernel development. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 21)"
  },
  {
    "id": "sba301-q012",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "multiple",
    "question": "Which Git commands correctly perform the operations described based on the \"Using Git\" slides? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "git add --all stages all changes in the working directory."
      },
      {
        "id": "B",
        "text": "git commit -m \"message\" records staged changes to the repository history."
      },
      {
        "id": "C",
        "text": "git status displays the current state of the working directory and staging area."
      },
      {
        "id": "D",
        "text": "git init downloads a remote repository from GitHub to the local machine."
      },
      {
        "id": "E",
        "text": "git push -u origin master pushes local commits to the remote master branch."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slides 22-24 state that git add --all stages changes, git commit -m commits them, git status checks status, and git push -u origin master pushes changes. git init initializes a local repository, not downloads. (Source: Chapter 01. Introduction to ReactJS.pptx, slides 22, 23, 24)"
  },
  {
    "id": "sba301-q013",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "multiple",
    "question": "Based on the \"History of React\" timeline in the slides, which historical milestones are correctly paired with their years? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "2011: Initial release for Facebook's internal use"
      },
      {
        "id": "B",
        "text": "2013: Open-sourced at JSConf US"
      },
      {
        "id": "C",
        "text": "2015: React Native released for mobile app development"
      },
      {
        "id": "D",
        "text": "2022: React 18 released with concurrent rendering and Suspense"
      },
      {
        "id": "E",
        "text": "2020: React Fiber introduced as a completely new rendering engine"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 25 lists 2011 (internal release), 2013 (open-sourced), 2015 (React Native), and 2022 (React 18). React 17 was released in 2020 focusing on stability; Fiber was introduced earlier in 2016/2017. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 25)"
  },
  {
    "id": "sba301-q014",
    "subjectId": "sba301",
    "topic": "PART 1: Chapter 01. Introduction to ReactJS.pptx",
    "type": "single",
    "question": "How does Node.js handle thousands of concurrent client requests efficiently despite operating on a single-threaded model?",
    "options": [
      {
        "id": "A",
        "text": "By creating additional operating system threads on demand for each incoming connection."
      },
      {
        "id": "B",
        "text": "By utilizing an event-driven, non-blocking I/O architecture managed by an event loop."
      },
      {
        "id": "C",
        "text": "By relying exclusively on browser web workers to process backend business logic."
      },
      {
        "id": "D",
        "text": "By converting all asynchronous queries into synchronous disk reads."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 explains that although Node.js operates in a single-threaded model, its event-driven, non-blocking architecture allows the single thread to use an event loop to manage thousands of concurrent tasks without creating extra threads. (Source: Chapter 01. Introduction to ReactJS.pptx, slide 8)"
  },
  {
    "id": "sba301-q015",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "According to the slides, what is the fundamental definition of a React component?",
    "options": [
      {
        "id": "A",
        "text": "A server-side database schema that serializes data into JSON models."
      },
      {
        "id": "B",
        "text": "A function or JavaScript class that optionally accepts data and returns a React element describing a piece of the user interface."
      },
      {
        "id": "C",
        "text": "A compiled CSS stylesheet that applies styling rules based on browser viewport size."
      },
      {
        "id": "D",
        "text": "An asynchronous network interceptor that coordinates client-server HTTP requests."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The slides define a component as the building block of React applications, implemented as a function or JavaScript class that accepts inputs and returns React elements describing the UI. (Source: Chapter 02. React Component.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q016",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "multiple",
    "question": "Which of the following are explicitly listed in the slides as reasons highlighting the importance of components in React? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Reusability"
      },
      {
        "id": "B",
        "text": "Encapsulation"
      },
      {
        "id": "C",
        "text": "Composition"
      },
      {
        "id": "D",
        "text": "Unidirectional Data Flow"
      },
      {
        "id": "E",
        "text": "Bidirectional Schema Mapping"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 5 explicitly lists five pillars of component importance: Reusability, Encapsulation, Composition, Unidirectional Data Flow, and Efficiency. (Source: Chapter 02. React Component.pptx, slide 5)"
  },
  {
    "id": "sba301-q017",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "Under the hood, what does JSX code represent before being rendered by React?",
    "options": [
      {
        "id": "A",
        "text": "Raw HTML strings injected directly into the browser DOM via innerHTM"
      },
      {
        "id": "L",
        "text": ""
      },
      {
        "id": "B",
        "text": "Shorthand notation representing JavaScript function calls (React.createElement) that evaluate to JavaScript objects."
      },
      {
        "id": "C",
        "text": "Binary assembly instructions executed directly by the Google V8 engine."
      },
      {
        "id": "D",
        "text": "A server-rendered template engine syntax like JSP or Thymeleaf."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 shows that JSX is syntactic shorthand for React.createElement(...) calls, which evaluate to JavaScript objects with properties like type and props. (Source: Chapter 02. React Component.pptx, slide 6)"
  },
  {
    "id": "sba301-q018",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "What is the primary purpose of using React Fragments (<> ... </>) when writing JSX markup?",
    "options": [
      {
        "id": "A",
        "text": "To automatically cache expensive API responses in the browser storage."
      },
      {
        "id": "B",
        "text": "To enforce two-way data synchronization between parent and child components."
      },
      {
        "id": "C",
        "text": "To group together chunks of markup without adding unnecessary structural DOM elements like extra <div> tags."
      },
      {
        "id": "D",
        "text": "To convert functional components into stateful ES6 classes at runtime."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slides 7 and 8 explain that fragments allow developers to group multiple elements together so React only renders the child elements without adding unnecessary div wrappers to the page DOM. (Source: Chapter 02. React Component.pptx, slides 7, 8)"
  },
  {
    "id": "sba301-q019",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "multiple",
    "question": "Which statements correctly describe Class Components as presented in the slides? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "They are declared using ES6 JavaScript classes extending React.Component."
      },
      {
        "id": "B",
        "text": "They are also known as stateful components."
      },
      {
        "id": "C",
        "text": "They are capable of managing internal state and implementing lifecycle methods."
      },
      {
        "id": "D",
        "text": "They return their JSX markup directly from the constructor without requiring a render() method."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 9 states that class components are created using JavaScript classes and manage state and lifecycle methods. They require a render() method to return JSX. (Source: Chapter 02. React Component.pptx, slide 9)"
  },
  {
    "id": "sba301-q020",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "What are the three primary lifecycle stages that every React Class Component progresses through?",
    "options": [
      {
        "id": "A",
        "text": "Creation, Mutation, Destruction"
      },
      {
        "id": "B",
        "text": "Mounting, Updating, Unmounting"
      },
      {
        "id": "C",
        "text": "Initialization, Compilation, Execution"
      },
      {
        "id": "D",
        "text": "Binding, Routing, Fetching"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 explicitly lists the three core lifecycle stages of a class component: Mounting, Updating, and Unmounting. (Source: Chapter 02. React Component.pptx, slide 10)"
  },
  {
    "id": "sba301-q021",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "multiple",
    "question": "Which of the following are standard lifecycle methods available in React Class Components according to the lecture slides? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "componentDidMount()"
      },
      {
        "id": "B",
        "text": "componentDidUpdate(prevProps, prevState, snapshot)"
      },
      {
        "id": "C",
        "text": "componentWillUnmount()"
      },
      {
        "id": "D",
        "text": "constructor(props)"
      },
      {
        "id": "E",
        "text": "useLifecycleEffect()"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 10 lists constructor(props), componentDidMount(), componentDidUpdate(), and componentWillUnmount() as core lifecycle methods. (Source: Chapter 02. React Component.pptx, slide 10)"
  },
  {
    "id": "sba301-q022",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "Based on the lifecycle flow diagram in the slides, which lifecycle method can cancel an ongoing update and prevent re-rendering when it returns false?",
    "options": [
      {
        "id": "A",
        "text": "componentWillUnmount"
      },
      {
        "id": "B",
        "text": "componentDidMount"
      },
      {
        "id": "C",
        "text": "shouldComponentUpdate"
      },
      {
        "id": "D",
        "text": "componentWillReceiveProps"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The lifecycle diagram on slide 11 shows that during the updating phase, shouldComponentUpdate evaluates whether to continue; if it yields false, the update process terminates without calling render. (Source: Chapter 02. React Component.pptx, slide 11)"
  },
  {
    "id": "sba301-q023",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "How does the slide deck characterize a Functional Component in modern React?",
    "options": [
      {
        "id": "A",
        "text": "An abstract base class that must be compiled using an external Babel plugin."
      },
      {
        "id": "B",
        "text": "A pure JavaScript function that returns the HTML/JSX code describing the UI, empowered with Hooks."
      },
      {
        "id": "C",
        "text": "A specialized router component strictly used for handling URL parameters."
      },
      {
        "id": "D",
        "text": "An imperative script that directly manipulates the browser's native DOM API."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 12 explains that a functional component is simply a JavaScript function that uses Hooks to utilize React features and returns the code describing the UI. (Source: Chapter 02. React Component.pptx, slide 12)"
  },
  {
    "id": "sba301-q024",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "In Functional Components, how does the useEffect Hook unify class component lifecycle behavior?",
    "options": [
      {
        "id": "A",
        "text": "It completely eliminates the need for functional components to re-render when state changes."
      },
      {
        "id": "B",
        "text": "It acts as a single unified API replacing componentDidMount, componentDidUpdate, and componentWillUnmount."
      },
      {
        "id": "C",
        "text": "It transforms functional components into class components behind the scenes."
      },
      {
        "id": "D",
        "text": "It replaces JavaScript event listeners with browser web workers."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 13 states that the Effect Hook (useEffect) can be seen as a replacement for componentDidMount, componentDidUpdate, and componentWillUnmount unified into a single API. (Source: Chapter 02. React Component.pptx, slide 13)"
  },
  {
    "id": "sba301-q025",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "What convention must be strictly followed when naming user-defined React components in JSX?",
    "options": [
      {
        "id": "A",
        "text": "The component name must always start with a capital letter (PascalCase)."
      },
      {
        "id": "B",
        "text": "The component name must be written entirely in lowercase letters with hyphens."
      },
      {
        "id": "C",
        "text": "The component name must start with an underscore or dollar sign."
      },
      {
        "id": "D",
        "text": "The component name must end with the suffix _Element."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 15 explicitly specifies that user-defined component names must always start with a capital letter so React compiles them to React.createElement(...), whereas lowercase tags are treated as built-in DOM tags. (Source: Chapter 02. React Component.pptx, slide 15)"
  },
  {
    "id": "sba301-q026",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "multiple",
    "question": "What capabilities and use cases of Higher-Order Components (HOCs) are highlighted in the slides? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Reusing component logic across multiple components to keep them small and focused."
      },
      {
        "id": "B",
        "text": "Modifying incoming props or injecting additional props."
      },
      {
        "id": "C",
        "text": "Abstracting state and wrapping components for context or theming."
      },
      {
        "id": "D",
        "text": "Directly altering database tables on the backend server."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 16 explains that HOCs enable logic reuse, allow modifying props, changing rendering, abstracting state, and wrapping components for context or themes. (Source: Chapter 02. React Component.pptx, slide 16)"
  },
  {
    "id": "sba301-q027",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "single",
    "question": "Consider the following HOC pattern: function withExtraProp(Wrapped) { return (props) => <Wrapped {...props} extraProp=\"I am an extra prop!\" />; } function MyComp(props) { return <div>{props.extraProp}</div>; } const Enhanced = withExtraProp(MyComp); What will <Enhanced /> render?",
    "options": [
      {
        "id": "A",
        "text": "<div>undefined</div>"
      },
      {
        "id": "B",
        "text": "<div>I am an extra prop!</div>"
      },
      {
        "id": "C",
        "text": "<div>props.extraProp</div>"
      },
      {
        "id": "D",
        "text": "An uncaught TypeError error because functional components cannot accept props."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 17 demonstrates that withExtraProp wraps MyComp and injects extraProp=\"I am an extra prop!\", so MyComp renders <div>I am an extra prop!</div>. (Source: Chapter 02. React Component.pptx, slide 17)"
  },
  {
    "id": "sba301-q028",
    "subjectId": "sba301",
    "topic": "PART 2: Chapter 02. React Component.pptx",
    "type": "multiple",
    "question": "How do the slides define \"Component Composition\", and what advantages does it offer? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It is the pattern of assembling complex UIs by piecing together small, reusable components like Lego blocks."
      },
      {
        "id": "B",
        "text": "It promotes reusability, separation of concerns, and testability."
      },
      {
        "id": "C",
        "text": "It forces all application logic and markup to reside inside a single monolithic component file."
      },
      {
        "id": "D",
        "text": "It allows nesting parent components that render child components (such as <App> containing <Header />, <MainContent />, and <Footer />)."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Slides 18 and 19 define component composition as assembling complex UIs from small components like Lego blocks, citing benefits of Reusability, Separation of Concerns, and Testability. (Source: Chapter 02. React Component.pptx, slides 18, 19)"
  },
  {
    "id": "sba301-q029",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "How do the slides define the fundamental architecture and implementation of React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "A direct JavaScript wrapper that injects jQuery and bootstrap.js into the browser DOM at runtime."
      },
      {
        "id": "B",
        "text": "A complete re-implementation of Bootstrap components as native, reusable React components without jQuery dependencies."
      },
      {
        "id": "C",
        "text": "A CSS-in-JS compiler that translates Tailwind utility classes into Bootstrap CSS classes."
      },
      {
        "id": "D",
        "text": "A server-side Java template engine used for rendering responsive HTML in Spring Boot."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 4 states that React-Bootstrap is a complete re-implementation of Bootstrap components using React that has no dependency on either bootstrap.js or jQuery. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q030",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "multiple",
    "question": "According to the slides, what are the primary reasons and architectural advantages of using React-Bootstrap instead of standard Bootstrap? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It eliminates any runtime dependency on bootstrap.js and jQuery."
      },
      {
        "id": "B",
        "text": "It incorporates Bootstrap functionality directly into React's Virtual DO"
      },
      {
        "id": "M",
        "text": ""
      },
      {
        "id": "C",
        "text": "It is a complete re-implementation of Bootstrap components using React."
      },
      {
        "id": "D",
        "text": "It replaces JavaScript event handling with native SQL database triggers."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 4 explicitly lists zero dependency on bootstrap.js/jQuery, complete re-implementation in React, and direct incorporation into React's Virtual DOM. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 4)"
  },
  {
    "id": "sba301-q031",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "Which command is specified in the slides to install React-Bootstrap along with its underlying Bootstrap stylesheet package?",
    "options": [
      {
        "id": "A",
        "text": "npm install react-bootstrap bootstrap"
      },
      {
        "id": "B",
        "text": "npm install @bootstrap/react jquery"
      },
      {
        "id": "C",
        "text": "npm create react-bootstrap@latest"
      },
      {
        "id": "D",
        "text": "npm install react-bootstrap-ui --save-dev"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 6 explicitly gives the installation command as npm install react-bootstrap bootstrap. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 6)"
  },
  {
    "id": "sba301-q032",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "What import statement must be included in your project to ensure Bootstrap's styling rules and layout definitions take effect?",
    "options": [
      {
        "id": "A",
        "text": "import 'bootstrap/dist/js/bootstrap.bundle.js';"
      },
      {
        "id": "B",
        "text": "import 'react-bootstrap/style.css';"
      },
      {
        "id": "C",
        "text": "import 'bootstrap/dist/css/bootstrap.min.css';"
      },
      {
        "id": "D",
        "text": "import '@bootstrap/core/styles';"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 6 states under \"Import Bootstrap CSS\" that developers must add import 'bootstrap/dist/css/bootstrap.min.css';. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 6)"
  },
  {
    "id": "sba301-q033",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "multiple",
    "question": "Which of the following are explicitly listed on slide 5 as features and aspects of React-Bootstrap? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Component-Based"
      },
      {
        "id": "B",
        "text": "Responsive Design"
      },
      {
        "id": "C",
        "text": "Cross-Browser Compatibility"
      },
      {
        "id": "D",
        "text": "Two-way Database Binding"
      },
      {
        "id": "E",
        "text": "Rich Component Library"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slide 5 lists Component-Based, Responsive Design, Rich Component Library, Cross-Browser Compatibility, and Faster Development. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 5)"
  },
  {
    "id": "sba301-q034",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "What CSS layout mechanism powers the React-Bootstrap grid system (Container, Row, Col) as stated in the slides?",
    "options": [
      {
        "id": "A",
        "text": "CSS Float and Clearfix"
      },
      {
        "id": "B",
        "text": "HTML Table Layout"
      },
      {
        "id": "C",
        "text": "Flexbox"
      },
      {
        "id": "D",
        "text": "CSS Absolute Positioning"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 7 explicitly specifies: \"Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.\" (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 7)"
  },
  {
    "id": "sba301-q035",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "How many responsive breakpoint sizes does the <Col> component support for specifying column widths, and which breakpoint list is correct?",
    "options": [
      {
        "id": "A",
        "text": "4 sizes: sm, md, lg, xl"
      },
      {
        "id": "B",
        "text": "5 sizes: xs, s, m, l, xl"
      },
      {
        "id": "C",
        "text": "6 sizes: xs, sm, md, lg, xl, xxl"
      },
      {
        "id": "D",
        "text": "3 sizes: mobile, tablet, desktop"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 9 explicitly notes: \"The Col lets you specify column widths across 6 breakpoint sizes (xs, sm, md, lg, xl and xxl).\" (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 9)"
  },
  {
    "id": "sba301-q036",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "multiple",
    "question": "Based on the Grid layout examples in slides 7–9, which statements regarding <Container> and <Col> are correct? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Adding the fluid prop (<Container fluid>) creates a full-width container that spans the entire width of the viewport."
      },
      {
        "id": "B",
        "text": "When no column widths are specified on <Col>, columns automatically render with equal widths across the row."
      },
      {
        "id": "C",
        "text": "Setting the prop <Col lg={true} /> enables auto-layout column widths at the large breakpoint."
      },
      {
        "id": "D",
        "text": "In <Col sm={8}>, the number 8 specifies that the column spans 8 out of 12 grid units on small screens and above."
      },
      {
        "id": "E",
        "text": "A <Row> can only contain a maximum of 2 <Col> elements regardless of column width definitions."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 8 and 9 confirm fluid containers, unspecified equal-width columns, auto-layout flags, and column spans out of 12 grid units. Rows can contain multiple columns. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slides 8, 9)"
  },
  {
    "id": "sba301-q037",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "Consider the code snippet <Button as=\"a\" variant=\"primary\">Button as link</Button>. How does React-Bootstrap render this component?",
    "options": [
      {
        "id": "A",
        "text": "As a disabled <input type=\"button\"> element with inline CSS styling."
      },
      {
        "id": "B",
        "text": "As an HTML <a> anchor element styled with Bootstrap's primary button appearance classes."
      },
      {
        "id": "C",
        "text": "As an unstyled hyperlink that bypasses the Bootstrap theme."
      },
      {
        "id": "D",
        "text": "As an error alert container rendered at the top of the viewport."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 and slide 11 demonstrate that passing as=\"a\" renders the component as an HTML anchor <a> tag, while variant=\"primary\" applies button styling. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slides 6, 11)"
  },
  {
    "id": "sba301-q038",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "multiple",
    "question": "Which sub-components and props are demonstrated in slide 12 for constructing a standard React-Bootstrap <Card>? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "<Card.Img variant=\"top\" src=\"...\" />"
      },
      {
        "id": "B",
        "text": "<Card.Body>"
      },
      {
        "id": "C",
        "text": "<Card.Title>"
      },
      {
        "id": "D",
        "text": "<Card.Text>"
      },
      {
        "id": "E",
        "text": "<Card.DatabaseTable>"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 12 provides sample code utilizing <Card>, <Card.Img variant=\"top\">, <Card.Body>, <Card.Title>, <Card.Text>, and an embedded <Button>. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 12)"
  },
  {
    "id": "sba301-q039",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "single",
    "question": "In slide 14, how are pills-style navigation and tabs implemented in React-Bootstrap?",
    "options": [
      {
        "id": "A",
        "text": "By importing <Nav> with variant=\"pills\" and using <Tabs defaultActiveKey=\"...\"> containing <Tab eventKey=\"...\" title=\"...\"> elements."
      },
      {
        "id": "B",
        "text": "By writing custom CSS animations attached to native HTML <select> dropdown tags."
      },
      {
        "id": "C",
        "text": "By configuring route parameters inside the package.json file."
      },
      {
        "id": "D",
        "text": "By setting display=\"tabs\" on a <Container> element."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 14 shows both <Nav variant=\"pills\"> with <Nav.Item> / <Nav.Link> and <Tabs defaultActiveKey=\"profile\"> wrapping multiple <Tab eventKey=\"...\" title=\"...\"> components. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slide 14)"
  },
  {
    "id": "sba301-q040",
    "subjectId": "sba301",
    "topic": "PART 3: Chapter 03. Introduction to React-Bootstrap.pptx",
    "type": "multiple",
    "question": "Based on the form control examples in slides 16–18, which React-Bootstrap components are used to construct input fields, select menus, and checkboxes/radios? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "<Form.Group> and <Form.Label>"
      },
      {
        "id": "B",
        "text": "<Form.Control> (with type=\"email\" or as=\"textarea\")"
      },
      {
        "id": "C",
        "text": "<Form.Select>"
      },
      {
        "id": "D",
        "text": "<Form.Check> (with type=\"checkbox\" or type=\"radio\")"
      },
      {
        "id": "E",
        "text": "<Form.SqlDatabase>"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 16, 17, and 18 show <Form.Group>, <Form.Label>, <Form.Control>, <Form.Select>, and <Form.Check>. (Source: Chapter 03. Introduction to React-Bootstrap.pptx, slides 16, 17, 18)"
  },
  {
    "id": "sba301-q041",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "How does the slide deck define the fundamental nature of \"State\" in a React component?",
    "options": [
      {
        "id": "A",
        "text": "Global, immutable data shared automatically across all browser tabs."
      },
      {
        "id": "B",
        "text": "Local information stored in the component that is private and fully controlled by the component itself."
      },
      {
        "id": "C",
        "text": "Read-only configuration attributes passed strictly from child components up to parent components."
      },
      {
        "id": "D",
        "text": "Server-side session variables cached permanently inside the backend database."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines State as local information stored in a component that is private and fully controlled by the component itself. (Source: Chapter 04. Props, State and Context.pptx, slide 3)"
  },
  {
    "id": "sba301-q042",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "In a React Class Component, what is the mandatory rule for declaring and updating component state?",
    "options": [
      {
        "id": "A",
        "text": "Declare state in the constructor and mutate it directly via this.state.count = this.state.count + 1."
      },
      {
        "id": "B",
        "text": "Declare state inside componentDidMount and update it via this.props.updateState()."
      },
      {
        "id": "C",
        "text": "Declare state within the constructor and modify it only using this.setState()."
      },
      {
        "id": "D",
        "text": "Declare state using the useState() Hook inside the class render() method."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 4 notes that in class components, state is declared within the constructor and must only be modified using this.setState(). Direct mutation is prohibited. (Source: Chapter 04. Props, State and Context.pptx, slide 4)"
  },
  {
    "id": "sba301-q043",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "How does declarative UI programming in React fundamentally differ from traditional imperative UI programming?",
    "options": [
      {
        "id": "A",
        "text": "Declarative programming requires writing step-by-step instructions to manipulate each individual DOM element directly."
      },
      {
        "id": "B",
        "text": "Declarative programming describes the different visual states a component can be in and switches between them in response to user input."
      },
      {
        "id": "C",
        "text": "Declarative programming executes exclusively on the backend server before sending raw HTML strings."
      },
      {
        "id": "D",
        "text": "Declarative programming eliminates the use of event handlers and JavaScript functions entirely."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 states that instead of manipulating individual pieces of the UI directly (imperative), React describes different states and switches between them in response to user input. (Source: Chapter 04. Props, State and Context.pptx, slide 6)"
  },
  {
    "id": "sba301-q044",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "multiple",
    "question": "According to slide 8 (\"Thinking about UI declaratively\"), which steps are part of the process of reimplementing a UI declaratively in React? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Identify your component's different visual states"
      },
      {
        "id": "B",
        "text": "Determine what triggers those state changes"
      },
      {
        "id": "C",
        "text": "Represent the state in memory using useState"
      },
      {
        "id": "D",
        "text": "Remove any non-essential state variables"
      },
      {
        "id": "E",
        "text": "Directly manipulate native DOM nodes with document.getElementById inside click handlers"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 8 outlines: (1) Identify visual states, (2) Determine triggers, (3) Represent state with useState, (4) Remove non-essential state, and (5) Connect event handlers. Direct DOM mutation is imperative. (Source: Chapter 04. Props, State and Context.pptx, slide 8)"
  },
  {
    "id": "sba301-q045",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "multiple",
    "question": "Which principles for structuring state are explicitly recommended in slide 9? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Avoid contradictions in state"
      },
      {
        "id": "B",
        "text": "Avoid redundant state"
      },
      {
        "id": "C",
        "text": "Avoid duplication in state"
      },
      {
        "id": "D",
        "text": "Avoid deeply nested state"
      },
      {
        "id": "E",
        "text": "Merge props directly into state variables"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 9 lists four specific principles: \"Avoid contradictions in state\", \"Avoid redundant state\", \"Avoid duplication in state\", and \"Avoid deeply nested state\". (Source: Chapter 04. Props, State and Context.pptx, slide 9)"
  },
  {
    "id": "sba301-q046",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "What is \"Lifting State Up\" in React, and when should developers use it?",
    "options": [
      {
        "id": "A",
        "text": "Moving state from a backend database into a Redux store to bypass client-side rendering."
      },
      {
        "id": "B",
        "text": "Removing state from two components and moving it to their closest common parent when their state needs to always change together."
      },
      {
        "id": "C",
        "text": "Exporting local state variables to the global window object in the browser."
      },
      {
        "id": "D",
        "text": "Converting functional component state into class component instance properties."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 defines lifting state up: when you want the state of two components to change together, move state to their closest common parent and pass it down via props. (Source: Chapter 04. Props, State and Context.pptx, slide 10)"
  },
  {
    "id": "sba301-q047",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "Where does React actually hold component state, and how does it associate state with components between re-renders?",
    "options": [
      {
        "id": "A",
        "text": "Inside the physical DOM nodes under custom data-state attributes."
      },
      {
        "id": "B",
        "text": "Inside the browser's localStorage indexed by component name."
      },
      {
        "id": "C",
        "text": "Inside React, which associates each piece of state with the correct component by where that component sits in the render tree."
      },
      {
        "id": "D",
        "text": "Inside global JavaScript closures compiled during the Vite build step."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 12 explains that state is held inside React, which associates each piece of state with the correct component based on its position in the render tree. (Source: Chapter 04. Props, State and Context.pptx, slide 12)"
  },
  {
    "id": "sba301-q048",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "multiple",
    "question": "Based on the \"Preserving and Resetting State\" rules in slide 12, which statements are true? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The same component rendered at the same position in the render tree preserves its state."
      },
      {
        "id": "B",
        "text": "Different components rendered at the same position reset their state."
      },
      {
        "id": "C",
        "text": "State is automatically preserved when a component is completely unmounted from the DOM tree."
      },
      {
        "id": "D",
        "text": "By default, React preserves state of a component while it stays at the same position."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Slide 12 confirms: same component at same position preserves state; different components at same position reset state; and React preserves state while position is maintained. (Source: Chapter 04. Props, State and Context.pptx, slide 12)"
  },
  {
    "id": "sba301-q049",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "What are component Properties (Props), and what restriction applies to them within the receiving component?",
    "options": [
      {
        "id": "A",
        "text": "Props are mutable variables that child components can modify directly to communicate with parents."
      },
      {
        "id": "B",
        "text": "Props are JSX attributes and children passed to a component as a single object, and they are strictly Read-Only."
      },
      {
        "id": "C",
        "text": "Props are private local variables declared exclusively within the class constructor."
      },
      {
        "id": "D",
        "text": "Props are asynchronous network streams subscribed to via WebSocket endpoints."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 13 states that React bundles JSX attributes and children into a single object called \"props\", and components cannot modify props because they are strictly Read-Only. (Source: Chapter 04. Props, State and Context.pptx, slide 13)"
  },
  {
    "id": "sba301-q050",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "In Functional Components, how are props typically received and accessed according to slide 15?",
    "options": [
      {
        "id": "A",
        "text": "Through this.props inherited from the base function prototype."
      },
      {
        "id": "B",
        "text": "As an argument passed to the function, which can be destructured (e.g., const { prop1, prop2 } = props)."
      },
      {
        "id": "C",
        "text": "By invoking React.getProps() inside an effect handler."
      },
      {
        "id": "D",
        "text": "Through global window variables assigned by the root renderer."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 15 shows a functional component accepting (props) as its argument and extracting values via destructuring: const { prop1, prop2 } = props;. (Source: Chapter 04. Props, State and Context.pptx, slide 15)"
  },
  {
    "id": "sba301-q051",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "multiple",
    "question": "Which of the following demonstrate valid ways of passing and using props as shown in slides 19 and 20? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Passing familiar HTML-like props to native JSX tags (e.g., className, src, alt, width, height to <img>)."
      },
      {
        "id": "B",
        "text": "Passing complex objects as props to custom components (e.g., orchid={{ name: 'Cesar 4N' }})."
      },
      {
        "id": "C",
        "text": "Passing JSX components as nested children wrapped inside container components (e.g., <Card><Avatar /></Card>)."
      },
      {
        "id": "D",
        "text": "Mutating props.size = 500 inside the Avatar component before rendering."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 19 and 20 show passing standard attributes, passing objects, and passing children inside containers. Mutating props is invalid. (Source: Chapter 04. Props, State and Context.pptx, slides 19, 20)"
  },
  {
    "id": "sba301-q052",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "What architectural problem in React is termed \"Prop Drilling\"?",
    "options": [
      {
        "id": "A",
        "text": "Modifying immutable props inside a child component using low-level pointer arithmetic."
      },
      {
        "id": "B",
        "text": "Passing props deeply through many levels of the component tree just to deliver data to distant descendants who need it."
      },
      {
        "id": "C",
        "text": "Injecting SQL queries through form inputs into local state variables."
      },
      {
        "id": "D",
        "text": "An infinite re-render loop caused by calling setState directly inside the render() method."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 26 explains that passing props becomes verbose and inconvenient when a prop must be passed deeply through the tree to distant descendants, leading to \"prop drilling\". (Source: Chapter 04. Props, State and Context.pptx, slide 26)"
  },
  {
    "id": "sba301-q053",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "multiple",
    "question": "According to slides 25 and 27, how does the Context API resolve the prop drilling issue? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It lets a parent component provide data to the entire component tree below it without passing props manually at every level."
      },
      {
        "id": "B",
        "text": "It defines a \"context provider\" that creates data and makes it available to any descendant React component."
      },
      {
        "id": "C",
        "text": "It defines a \"context consumer\" that uses this data anywhere within the context tree."
      },
      {
        "id": "D",
        "text": "It stores all component state permanently on the backend server via HTTP POST requests."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 25 and 27 describe context providers and consumers, noting that context lets a parent provide data to the entire tree below it. (Source: Chapter 04. Props, State and Context.pptx, slides 25, 27)"
  },
  {
    "id": "sba301-q054",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "What are the three sequential steps required to use the React Context API as listed on slide 27?",
    "options": [
      {
        "id": "A",
        "text": "(1) Initialize Redux store, (2) Map state to props, (3) Dispatch action."
      },
      {
        "id": "B",
        "text": "(1) Create a context, (2) Use that context from the component that needs data, (3) Provide that context from the component that specifies data."
      },
      {
        "id": "C",
        "text": "(1) Define class constructor, (2) Call super(props), (3) Invoke this.setState()."
      },
      {
        "id": "D",
        "text": "(1) Fetch API endpoint, (2) Serialize to JSON, (3) Update local storage."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 27 explicitly states: \"There are three steps for using context: (1) Create a context, (2) Use that context from the component that needs the data, (3) Provide that context from the component that specifies the data.\" (Source: Chapter 04. Props, State and Context.pptx, slide 27)"
  },
  {
    "id": "sba301-q055",
    "subjectId": "sba301",
    "topic": "PART 4: Chapter 04. Props, State and Context.pptx",
    "type": "single",
    "question": "What happens when multiple asynchronous state updates are merged in a Class Component using this.setState(), as demonstrated in slide 18?",
    "options": [
      {
        "id": "A",
        "text": "Previous state properties not included in setState() are preserved while updated properties are shallowly merged."
      },
      {
        "id": "B",
        "text": "All previous state properties are immediately erased and replaced with undefined."
      },
      {
        "id": "C",
        "text": "React throws an unhandled ConcurrentModificationException."
      },
      {
        "id": "D",
        "text": "The component unmounts and re-executes its class constructor from scratch."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 18 demonstrates that when setState() is invoked, React shallowly merges the updated fields into this.state, preserving other existing keys. (Source: Chapter 04. Props, State and Context.pptx, slides 17, 18)"
  },
  {
    "id": "sba301-q056",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "In which version of React were Hooks officially introduced, and what core capability do they bring to functional components?",
    "options": [
      {
        "id": "A",
        "text": "React 15.0; they allow functional components to bypass the Virtual DOM entirely."
      },
      {
        "id": "B",
        "text": "React 16.8; they allow developers to use state and other React features without writing a class."
      },
      {
        "id": "C",
        "text": "React 17.0; they convert functional components into Java classes running on the backend."
      },
      {
        "id": "D",
        "text": "React 18.2; they enable two-way automatic database binding."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The slides state that Hooks were introduced in React 16.8 to let developers use state and other React features without writing ES6 class components. (Source: Chapter 05. React Hook.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q057",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "multiple",
    "question": "According to the slides, what are the primary motivations and benefits of introducing React Hooks? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Reusing stateful logic between components without changing component hierarchy"
      },
      {
        "id": "B",
        "text": "Splitting complex, tangled components into smaller functions based on related pieces (such as subscriptions or data fetching)"
      },
      {
        "id": "C",
        "text": "Using React features without needing classes, avoiding complex this binding issues"
      },
      {
        "id": "D",
        "text": "Eliminating the need for client-side JavaScript execution in the browser"
      },
      {
        "id": "E",
        "text": "Enabling functional components to have their own local state"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slides 4 and 5 list the main motivations: reusing stateful logic, avoiding complex this keywords, simplifying giant components with scattered lifecycle logic, and allowing functional components to hold local state. (Source: Chapter 05. React Hook.pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q058",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "What naming convention must ALL React Hooks strictly follow according to the slides?",
    "options": [
      {
        "id": "A",
        "text": "Hook names must be written in all UPPERCASE letters."
      },
      {
        "id": "B",
        "text": "Hook names must start with the prefix use (e.g., useState, useEffect)."
      },
      {
        "id": "C",
        "text": "Hook names must end with the suffix _Hook."
      },
      {
        "id": "D",
        "text": "Hook names must start with the dollar sign $."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly notes that Hooks are JavaScript functions whose names always begin with the lowercase word use. (Source: Chapter 05. React Hook.pptx, slide 3)"
  },
  {
    "id": "sba301-q059",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "multiple",
    "question": "Which of the following statements represent the two mandatory \"Rules of Hooks\" highlighted in the lecture slides? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Only call Hooks at the top level of your component (do not call Hooks inside loops, conditions, or nested functions)."
      },
      {
        "id": "B",
        "text": "Only call Hooks from React function components or from custom Hooks."
      },
      {
        "id": "C",
        "text": "Always call Hooks inside try/catch exception blocks to capture runtime errors."
      },
      {
        "id": "D",
        "text": "Always call Hooks inside the constructor() method of an ES6 class component."
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "explanation": "Slide 6 explicitly defines the two rules of Hooks: (1) \"Only Call Hooks at the Top Level\" and (2) \"Only Call Hooks from React Functions\". (Source: Chapter 05. React Hook.pptx, slide 6)"
  },
  {
    "id": "sba301-q060",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "What does the useState hook return when invoked inside a functional component?",
    "options": [
      {
        "id": "A",
        "text": "A single read-only object containing all global application state."
      },
      {
        "id": "B",
        "text": "An array containing exactly two elements: the current state value and a state updater function."
      },
      {
        "id": "C",
        "text": "A JavaScript Promise that resolves once the component mounts to the DO"
      },
      {
        "id": "M",
        "text": ""
      },
      {
        "id": "D",
        "text": "An integer representing the current position of the component in the render tree."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 7 explains that useState declares a state variable and returns a pair: the current state value and a function that lets you update that state (const [count, setCount] = useState(0)). (Source: Chapter 05. React Hook.pptx, slide 7)"
  },
  {
    "id": "sba301-q061",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "Consider the code: const [count, setCount] = useState(0); What is the correct way to update count by incrementing it by 1 when a button is clicked?",
    "options": [
      {
        "id": "A",
        "text": "onClick={() => { count = count + 1; }}"
      },
      {
        "id": "B",
        "text": "onClick={() => setCount(count + 1)}"
      },
      {
        "id": "C",
        "text": "onClick={() => this.setState({ count: count + 1 })}"
      },
      {
        "id": "D",
        "text": "onClick={() => useState(count + 1)}"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 7 shows updating state in functional components by calling the updater function returned by useState, e.g., setCount(count + 1). (Source: Chapter 05. React Hook.pptx, slide 7)"
  },
  {
    "id": "sba301-q062",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "What is the primary purpose of the useEffect Hook in functional components?",
    "options": [
      {
        "id": "A",
        "text": "To declare global CSS rules for React-Bootstrap components."
      },
      {
        "id": "B",
        "text": "To perform side effects such as data fetching, subscriptions, or manually changing the DO"
      },
      {
        "id": "M",
        "text": ""
      },
      {
        "id": "C",
        "text": "To directly modify immutable props received from parent components."
      },
      {
        "id": "D",
        "text": "To prevent functional components from ever re-rendering."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 states that useEffect lets you perform side effects in function components, serving the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined. (Source: Chapter 05. React Hook.pptx, slide 8)"
  },
  {
    "id": "sba301-q063",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "multiple",
    "question": "In useEffect(callback, dependencyArray), how does the dependency array control when the effect function executes? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "If no dependency array is passed (useEffect(fn)), the effect runs after every single render."
      },
      {
        "id": "B",
        "text": "If an empty array [] is passed, the effect runs only once after the initial render (like componentDidMount)."
      },
      {
        "id": "C",
        "text": "If dependencies [a, b] are passed, the effect re-runs whenever any of those specified dependency values change."
      },
      {
        "id": "D",
        "text": "If an empty array [] is passed, the effect continuously executes on every millisecond timer tick."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 8 and 9 explain: omitting array runs on every render, empty array [] runs once on mount, and specifying dependencies runs only when those values change. (Source: Chapter 05. React Hook.pptx, slides 8, 9)"
  },
  {
    "id": "sba301-q064",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "How does a developer specify cleanup logic (equivalent to componentWillUnmount) within the useEffect Hook?",
    "options": [
      {
        "id": "A",
        "text": "By calling useEffect.cleanup() inside the component body."
      },
      {
        "id": "B",
        "text": "By returning a cleanup function from the callback passed to useEffect."
      },
      {
        "id": "C",
        "text": "By passing { cleanup: true } as the second argument to useEffect."
      },
      {
        "id": "D",
        "text": "By throwing a custom error inside the effect callback."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 9 shows that if your effect returns a function, React will run it when it is time to clean up (e.g., unsubscribing or unmounting). (Source: Chapter 05. React Hook.pptx, slide 9)"
  },
  {
    "id": "sba301-q065",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "How is the useContext hook utilized to consume data from a Context object?",
    "options": [
      {
        "id": "A",
        "text": "const value = useContext(MyContext);"
      },
      {
        "id": "B",
        "text": "const value = useContext(<MyContext.Provider />);"
      },
      {
        "id": "C",
        "text": "const value = useContext(\"MyContextString\");"
      },
      {
        "id": "D",
        "text": "const value = this.context.get(MyContext);"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 10 explains that useContext accepts a context object itself (returned from React.createContext) and returns the current context value. (Source: Chapter 05. React Hook.pptx, slide 10)"
  },
  {
    "id": "sba301-q066",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "multiple",
    "question": "According to slide 11, when is useReducer preferred over useState for state management? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "When you have complex state logic that involves multiple sub-values"
      },
      {
        "id": "B",
        "text": "When the next state depends heavily on the previous state"
      },
      {
        "id": "C",
        "text": "When you need to optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks"
      },
      {
        "id": "D",
        "text": "When you want to eliminate the need for functional components"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 11 states that useReducer is preferable when you have complex state logic involving multiple sub-values or when the next state depends on the previous one, and lets you pass dispatch down. (Source: Chapter 05. React Hook.pptx, slide 11)"
  },
  {
    "id": "sba301-q067",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "What are the two return values produced by const [state, dispatch] = useReducer(reducer, initialArg);?",
    "options": [
      {
        "id": "A",
        "text": "The current state and an asynchronous Promise."
      },
      {
        "id": "B",
        "text": "The current state and a dispatch method used to send action objects to the reducer function."
      },
      {
        "id": "C",
        "text": "A boolean indicating network status and an error handler."
      },
      {
        "id": "D",
        "text": "A DOM reference and an unmount callback."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 shows that useReducer returns the current state paired with a dispatch method: const [state, dispatch] = useReducer(reducer, initialState);. (Source: Chapter 05. React Hook.pptx, slide 11)"
  },
  {
    "id": "sba301-q068",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "multiple",
    "question": "Which statements are true regarding \"Custom Hooks\" as described in slides 12–14? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "A custom Hook is a JavaScript function whose name starts with \"use\" and that may call other Hooks."
      },
      {
        "id": "B",
        "text": "Custom Hooks allow developers to extract and reuse stateful logic between components without adding more components to the tree."
      },
      {
        "id": "C",
        "text": "Two components using the exact same custom Hook share the exact same state instance in memory."
      },
      {
        "id": "D",
        "text": "Custom Hooks are a mechanism for sharing stateful logic (like setting up a subscription and remembering current value), not state itself."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Slides 12-14 explain that custom hooks start with use, call other hooks, and share stateful logic. Crucially, slide 14 clarifies that state is isolated between each call, not shared. (Source: Chapter 05. React Hook.pptx, slides 12, 13, 14)"
  },
  {
    "id": "sba301-q069",
    "subjectId": "sba301",
    "topic": "PART 5: Chapter 05. React Hook.pptx",
    "type": "single",
    "question": "If two independent components, FriendStatus and FriendListItem, both call the same custom hook useFriendStatus(id), what happens to their internal states?",
    "options": [
      {
        "id": "A",
        "text": "They share a single global state object; updating status in one component automatically changes it in the other."
      },
      {
        "id": "B",
        "text": "Each component gets completely isolated, independent state; calling a custom hook simply reuses the stateful logic."
      },
      {
        "id": "C",
        "text": "React throws a duplicate Hook registration error because custom hooks must be singletons."
      },
      {
        "id": "D",
        "text": "The second component is blocked from mounting until the first component unmounts."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 specifically addresses this scenario: \"Custom Hooks are a mechanism to reuse stateful logic, but every time you use a custom Hook, all state and effects inside of it are fully isolated. Each call to a Hook gets isolated state.\" (Source: Chapter 05. React Hook.pptx, slide 14)"
  },
  {
    "id": "sba301-q070",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "According to the slides, how is \"routing\" defined in the context of web applications?",
    "options": [
      {
        "id": "A",
        "text": "The physical process of transmitting IP packets between network hardware routers."
      },
      {
        "id": "B",
        "text": "The process of responding to a URL based on route handler declarations, acting as a mapping from URL to rendered content."
      },
      {
        "id": "C",
        "text": "The automatic generation of SQL database schema relations from JavaScript objects."
      },
      {
        "id": "D",
        "text": "An imperative loop that continuously scans the DOM tree for mouse clicks."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 4 explicitly defines routing as the process of responding to a URL based on route handler declarations, acting as a mapping from the URL to rendered content. (Source: Chapter 06. Handling Navigation with Routes.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q071",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "multiple",
    "question": "Which statements correctly describe the roles of Client Side and Server Side processing as outlined in slide 5? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Client side is the browser, where processing happens on the local machine."
      },
      {
        "id": "B",
        "text": "Server side is where information is processed and then sent through to a browser."
      },
      {
        "id": "C",
        "text": "Technologies on the Client side include the browser, HTML/CSS/JS, React, and Router."
      },
      {
        "id": "D",
        "text": "Technologies on the Server side include the backend database and Node.js."
      },
      {
        "id": "E",
        "text": "Client-side routing requires the browser to request a full HTML document reload from the server for every link clicked."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 5 and 6 define client side and server side technologies. Client-side routing specifically avoids full page reloads. (Source: Chapter 06. Handling Navigation with Routes.pptx, slides 5, 6)"
  },
  {
    "id": "sba301-q072",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "Which router component stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack?",
    "options": [
      {
        "id": "A",
        "text": "<MemoryRouter>"
      },
      {
        "id": "B",
        "text": "<StaticRouter>"
      },
      {
        "id": "C",
        "text": "<BrowserRouter>"
      },
      {
        "id": "D",
        "text": "<NativeRouter>"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 6 states that <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 6)"
  },
  {
    "id": "sba301-q073",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "When is <HashRouter> specifically recommended according to slide 6?",
    "options": [
      {
        "id": "A",
        "text": "In Node.js server-side rendering environments where no browser DOM exists."
      },
      {
        "id": "B",
        "text": "In shared hosting scenarios where the URL should not (or cannot) be sent to the server because you do not have full control over server configuration."
      },
      {
        "id": "C",
        "text": "In automated testing environments where locations must be stored in an internal array."
      },
      {
        "id": "D",
        "text": "Exclusively in React Native mobile applications."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 notes that <HashRouter> is for scenarios like shared hosting where you lack server control, storing the location in the hash portion so it is never sent to the server. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 6)"
  },
  {
    "id": "sba301-q074",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "multiple",
    "question": "Which of the following router types are correctly paired with their primary use case as described in slide 6? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "<MemoryRouter>: Ideal for testing scenarios because it stores locations internally in an array rather than being tied to an external browser history stack."
      },
      {
        "id": "B",
        "text": "<StaticRouter>: Used to render a React Router web app in Node.js server environments."
      },
      {
        "id": "C",
        "text": "<NativeRouter>: Recommended interface for running React Router in a React Native app."
      },
      {
        "id": "D",
        "text": "<BrowserRouter>: Strictly used in shared hosting environments without server configuration access."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 6 details that <MemoryRouter> is used in tests, <StaticRouter> for Node.js rendering, and <NativeRouter> for React Native. <HashRouter> is used for shared hosting. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 6)"
  },
  {
    "id": "sba301-q075",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "Which package must be installed via npm to use <BrowserRouter>, <Routes>, and <Route> in a web application?",
    "options": [
      {
        "id": "A",
        "text": "react-router-dom"
      },
      {
        "id": "B",
        "text": "react-navigation"
      },
      {
        "id": "C",
        "text": "router-bootstrap"
      },
      {
        "id": "D",
        "text": "@react/navigation-web"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 7 specifies the installation command as npm install react-router-dom. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 7)"
  },
  {
    "id": "sba301-q076",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "How does the <Routes> component determine which view to display when the location changes?",
    "options": [
      {
        "id": "A",
        "text": "It renders all child <Route> elements simultaneously in parallel DOM nodes."
      },
      {
        "id": "B",
        "text": "It looks through all its child routes to find the best match and renders that specific branch of the U"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "C",
        "text": "It redirects all unmatched URLs to an external search engine."
      },
      {
        "id": "D",
        "text": "It recompiles the client bundle on the backend server."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 9 explicitly notes: \"Whenever the location changes, <Routes> looks through all its child routes to find the best match and renders that branch of the UI\". (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 9)"
  },
  {
    "id": "sba301-q077",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "What is the role of the <Outlet> component when defining nested routes in React Router?",
    "options": [
      {
        "id": "A",
        "text": "It acts as an external hyperlink to third-party web domains."
      },
      {
        "id": "B",
        "text": "It is used in parent route elements to render their child route elements, allowing nested UI to appear."
      },
      {
        "id": "C",
        "text": "It clears all session data stored in React state."
      },
      {
        "id": "D",
        "text": "It prevents child components from receiving route parameters."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 explains: \"An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered\". (Source: Chapter 06. Handling Navigation with Routes.pptx, slides 10, 11)"
  },
  {
    "id": "sba301-q078",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "What does a <Link> component render in the actual DOM, and how can a developer force it to skip client-side routing to trigger a standard browser reload?",
    "options": [
      {
        "id": "A",
        "text": "It renders a <button> tag; add data-reload=\"true\"."
      },
      {
        "id": "B",
        "text": "It renders an accessible <a> element with a real href; add the reloadDocument prop."
      },
      {
        "id": "C",
        "text": "It renders a <nav> tag; add target=\"_blank\"."
      },
      {
        "id": "D",
        "text": "It renders a <span> tag; add preventDefault={false}."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 states that <Link> renders an accessible <a> tag, and developers can use <Link reloadDocument> to skip client side routing and let the browser reload normally. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 11)"
  },
  {
    "id": "sba301-q079",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "multiple",
    "question": "According to slide 12, what features make <NavLink> distinct from a standard <Link>? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It knows whether it is \"active\", \"pending\", or \"transitioning\"."
      },
      {
        "id": "B",
        "text": "It is useful when building navigation menus/tabs to visually highlight which item is currently selected."
      },
      {
        "id": "C",
        "text": "It provides useful context for assistive technology like screen readers."
      },
      {
        "id": "D",
        "text": "It provides a \"transitioning\" value for finer-grained control over View Transitions."
      },
      {
        "id": "E",
        "text": "It automatically executes SQL mutations on the server backend whenever clicked."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 12 highlights that <NavLink> tracks active, pending, and transitioning states, is ideal for navigation menus, provides screen-reader context, and supports View Transitions. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 12)"
  },
  {
    "id": "sba301-q080",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "What does the <Navigate> component do when it is rendered into the DOM?",
    "options": [
      {
        "id": "A",
        "text": "It renders a breadcrumb navigation bar at the top of the container."
      },
      {
        "id": "B",
        "text": "It changes the current location immediately upon rendering, functioning as a component wrapper around useNavigate."
      },
      {
        "id": "C",
        "text": "It opens a modal dialog box asking the user for confirmation."
      },
      {
        "id": "D",
        "text": "It displays a 404 Not Found error page."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 13 states: \"A <Navigate> element changes the current location when it is rendered. It's a component wrapper around useNavigate, and accepts all the same arguments as props\". (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 13)"
  },
  {
    "id": "sba301-q081",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "multiple",
    "question": "Which React Router hooks are correctly matched with their functionality based on slide 14? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "useLocation: Returns the current location object."
      },
      {
        "id": "B",
        "text": "useNavigate: Returns a function that lets you navigate programmatically."
      },
      {
        "id": "C",
        "text": "useParams: Returns an object of key/value pairs of dynamic parameters matched by <Route path>."
      },
      {
        "id": "D",
        "text": "useSearchParams: Used to read and modify the query string in the URL for the current location."
      },
      {
        "id": "E",
        "text": "useRoutes: Uses JavaScript objects instead of JSX <Route> elements to define routes."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slide 14 explicitly defines all five hooks: useLocation, useNavigate, useParams, useSearchParams, and useRoutes. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 14)"
  },
  {
    "id": "sba301-q082",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "In the logout timer example on slide 16, how is programmatic redirection performed when an inactive user is detected?",
    "options": [
      {
        "id": "A",
        "text": "The browser window closes automatically."
      },
      {
        "id": "B",
        "text": "The application navigates programmatically to /session-timed-out without user interaction using navigate(\"/session-timed-out\")."
      },
      {
        "id": "C",
        "text": "A pop-up prompt asks the user to re-enter their password."
      },
      {
        "id": "D",
        "text": "The page refreshes and remains on the current path."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 16 demonstrates using the navigate function returned by useNavigate() to redirect programmatically to \"/session-timed-out\" when userIsInactive is true. (Source: Chapter 06. Handling Navigation with Routes.pptx, slide 16)"
  },
  {
    "id": "sba301-q083",
    "subjectId": "sba301",
    "topic": "PART 6: Chapter 06. Handling Navigation with Routes.pptx",
    "type": "single",
    "question": "If a route is configured as <Route path=\"/orchids/:id\" element={<OrchidDetail />} /> and the user visits /orchids/3, how should the component extract the route parameter?",
    "options": [
      {
        "id": "A",
        "text": "const { id } = useParams();"
      },
      {
        "id": "B",
        "text": "const id = useLocation().query.id;"
      },
      {
        "id": "C",
        "text": "const id = this.props.match.id;"
      },
      {
        "id": "D",
        "text": "const [id] = useSearchParams();"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slides 20 and 21 specify that route parameters designated with a token (:id) are retrieved using the useParams Hook, which returns { id: \"3\" }. (Source: Chapter 06. Handling Navigation with Routes.pptx, slides 20, 21)"
  },
  {
    "id": "sba301-q084",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "According to slide 3, what is the fundamental definition of the \"Client-Server Architecture\"?",
    "options": [
      {
        "id": "A",
        "text": "A peer-to-peer network protocol where every connected machine holds an identical database copy."
      },
      {
        "id": "B",
        "text": "A computing model where the server hosts, delivers, and manages most of the resources and services consumed by one or more clients."
      },
      {
        "id": "C",
        "text": "A hardware virtualization framework for executing multi-threaded assembly programs."
      },
      {
        "id": "D",
        "text": "An automated continuous integration pipeline for containerizing React bundles."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines client-server architecture as a computing model in which the server hosts, delivers, and manages most of the resources and services to be consumed by the client. (Source: Chapter 07. Client-Server Communication.pptx, slide 3)"
  },
  {
    "id": "sba301-q085",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "multiple",
    "question": "Based on slides 4 and 5, which characteristics and responsibilities correctly describe the Client and the Server? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The Client initiates requests for services or resources to the server."
      },
      {
        "id": "B",
        "text": "The Client typically possesses a graphical user interface (GUI) and handles presentation logic."
      },
      {
        "id": "C",
        "text": "The Server passively waits for requests from clients and processes them."
      },
      {
        "id": "D",
        "text": "The Server manages data, performs complex business logic, and ensures security."
      },
      {
        "id": "E",
        "text": "The Client is solely responsible for managing physical disk input/output for the relational database."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 4 and 5 outline that the client initiates requests, has a GUI, and presents data, while the server processes business logic and securely manages data. Database I/O is a server responsibility. (Source: Chapter 07. Client-Server Communication.pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q086",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "multiple",
    "question": "Slide 6 lists several key advantages of using a Client-Server Architecture. Which of the following are included? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Centralized data and security control"
      },
      {
        "id": "B",
        "text": "Scalability (adding clients or servers independently)"
      },
      {
        "id": "C",
        "text": "Ease of maintenance due to separation of concerns"
      },
      {
        "id": "D",
        "text": "Complete immunity to network latency or server downtime"
      },
      {
        "id": "E",
        "text": "Resource sharing across multiple clients"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slide 6 highlights centralization, scalability, maintainability, and resource sharing. Client-server systems remain vulnerable to network latency and server outages. (Source: Chapter 07. Client-Server Communication.pptx, slide 6)"
  },
  {
    "id": "sba301-q087",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "In the modern React ecosystem, how does Client-Side Rendering (CSR) handle the initial page load compared to traditional Server-Side Rendering (SSR)?",
    "options": [
      {
        "id": "A",
        "text": "The server compiles all JSX into static PDF documents and streams them over WebSocket."
      },
      {
        "id": "B",
        "text": "The server delivers a bare-bones HTML shell and a JavaScript bundle; the browser then executes the JavaScript to build the DOM and render U"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "C",
        "text": "The client directly executes SQL statements against the server database without an intermediate AP"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "D",
        "text": "The browser displays no content until all images across the entire site have finished downloading."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 7 and 8 contrast rendering models: in CSR, the server sends minimal HTML and a JS bundle; the browser downloads the bundle, executes React, and dynamically renders the DOM on the client. (Source: Chapter 07. Client-Server Communication.pptx, slides 7, 8)"
  },
  {
    "id": "sba301-q088",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "multiple",
    "question": "According to slide 9 (\"Client-Server Architecture in ReactJS\"), what role does React play in this two-tier architecture? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "React runs entirely on the client side (browser) as the frontend presentation layer."
      },
      {
        "id": "B",
        "text": "React components fetch raw data (usually JSON) from backend APIs using asynchronous HTTP requests."
      },
      {
        "id": "C",
        "text": "React renders dynamic UI based on the received state and manages user interactions."
      },
      {
        "id": "D",
        "text": "React provides native built-in database drivers to manage SQL transactions directly on the database engine."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 9 emphasizes that React acts as the frontend client that renders UI, captures user actions, and communicates with backend services via HTTP to retrieve JSON. It does not manage SQL drivers. (Source: Chapter 07. Client-Server Communication.pptx, slide 9)"
  },
  {
    "id": "sba301-q089",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "Why is asynchronous communication crucial when a React client communicates with a backend web service?",
    "options": [
      {
        "id": "A",
        "text": "It forces the browser thread to halt until the server responds, ensuring synchronous data consistency."
      },
      {
        "id": "B",
        "text": "It allows the browser UI to remain interactive and responsive while waiting for network responses in the background."
      },
      {
        "id": "C",
        "text": "It encrypts all network packets into binary assembly instructions."
      },
      {
        "id": "D",
        "text": "It eliminates the need for HTTP status codes."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 explains that network requests take time; asynchronous operations ensure that the JavaScript single thread is not blocked, keeping the user interface smooth and responsive. (Source: Chapter 07. Client-Server Communication.pptx, slide 10)"
  },
  {
    "id": "sba301-q090",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "What does the acronym REST stand for in web architecture?",
    "options": [
      {
        "id": "A",
        "text": "Remote Execution and Serialization Technology"
      },
      {
        "id": "B",
        "text": "Representational State Transfer"
      },
      {
        "id": "C",
        "text": "Reliable Endpoint Session Transport"
      },
      {
        "id": "D",
        "text": "Responsive Entity System Template"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 defines REST as \"Representational State Transfer\", an architectural style for designing networked applications. (Source: Chapter 07. Client-Server Communication.pptx, slide 11)"
  },
  {
    "id": "sba301-q091",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "multiple",
    "question": "Which of the following are foundational design principles of RESTful APIs as listed in slides 12 and 13? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Statelessness (no client session state stored on the server between requests)"
      },
      {
        "id": "B",
        "text": "Client-Server separation of concerns"
      },
      {
        "id": "C",
        "text": "Cacheability of responses"
      },
      {
        "id": "D",
        "text": "Uniform Interface"
      },
      {
        "id": "E",
        "text": "Stateful server-side session replication across every HTTP verb"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 12 and 13 detail the core REST constraints: Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, and Code on Demand. REST is strictly stateless. (Source: Chapter 07. Client-Server Communication.pptx, slides 12, 13)"
  },
  {
    "id": "sba301-q092",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "In RESTful API design, what represents the \"Statelessness\" constraint?",
    "options": [
      {
        "id": "A",
        "text": "The client must never retain any local state variables in React components."
      },
      {
        "id": "B",
        "text": "Each request from the client to the server must contain all the information necessary to understand and process the request."
      },
      {
        "id": "C",
        "text": "The server stores all client navigation history in a persistent relational database table."
      },
      {
        "id": "D",
        "text": "API endpoints cannot accept query string parameters."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 13 states that under the stateless constraint, each request from client to server must contain all necessary context, and the server does not store any session state between requests. (Source: Chapter 07. Client-Server Communication.pptx, slide 13)"
  },
  {
    "id": "sba301-q093",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "How are resources correctly identified in a standard RESTful architecture?",
    "options": [
      {
        "id": "A",
        "text": "By unique RPC method names passed in the request body (e.g., executeAction())."
      },
      {
        "id": "B",
        "text": "By clean, noun-based Uniform Resource Identifiers (URIs), such as /api/v1/orchids."
      },
      {
        "id": "C",
        "text": "By dynamic JavaScript function pointers serialized into cookies."
      },
      {
        "id": "D",
        "text": "By random cryptographic hashes generated on every page refresh."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 14 and 15 emphasize that REST uses URIs to identify resources, employing clean nouns in plural form (e.g., /orchids, /users/1) rather than verbs or action names. (Source: Chapter 07. Client-Server Communication.pptx, slides 14, 15)"
  },
  {
    "id": "sba301-q094",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "multiple",
    "question": "Which HTTP methods are correctly matched with their typical CRUD operations in a RESTful service according to slide 16? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "GET - Read / Retrieve resources"
      },
      {
        "id": "B",
        "text": "POST - Create a new resource"
      },
      {
        "id": "C",
        "text": "PUT - Update an existing resource (full replacement)"
      },
      {
        "id": "D",
        "text": "DELETE - Remove a resource"
      },
      {
        "id": "E",
        "text": "GET - Delete all records from a database table"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 16 maps standard HTTP verbs to CRUD: GET -> Read, POST -> Create, PUT -> Update, and DELETE -> Delete. GET is safe and idempotent and cannot perform deletes. (Source: Chapter 07. Client-Server Communication.pptx, slide 16)"
  },
  {
    "id": "sba301-q095",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "Consider the URI design conventions discussed on slide 17. Which of the following URIs best adheres to RESTful best practices for retrieving all comments belonging to orchid with ID 5?",
    "options": [
      {
        "id": "A",
        "text": "GET /getCommentsForOrchid?id=5"
      },
      {
        "id": "B",
        "text": "POST /comments/fetch/orchid/5"
      },
      {
        "id": "C",
        "text": "GET /orchids/5/comments"
      },
      {
        "id": "D",
        "text": "DELETE /orchids/5/all-comments"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 17 outlines hierarchical resource modeling: sub-resources are nested under parent resources using clear nouns, making GET /orchids/5/comments the canonical RESTful pattern. (Source: Chapter 07. Client-Server Communication.pptx, slide 17)"
  },
  {
    "id": "sba301-q096",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "single",
    "question": "What data interchange format is most commonly used for transmitting structured data between a React frontend and a RESTful backend?",
    "options": [
      {
        "id": "A",
        "text": "Binary CSV streams"
      },
      {
        "id": "B",
        "text": "JSON (JavaScript Object Notation)"
      },
      {
        "id": "C",
        "text": "Java Serialized Object Bytecode"
      },
      {
        "id": "D",
        "text": "Plain Text INI files"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 19 and 20 explain that JSON is the de facto standard format for REST APIs due to its lightweight, human-readable, and native JavaScript-compatible nature. (Source: Chapter 07. Client-Server Communication.pptx, slides 19, 20)"
  },
  {
    "id": "sba301-q097",
    "subjectId": "sba301",
    "topic": "PART 7: Chapter 07. Client-Server Communication.pptx",
    "type": "multiple",
    "question": "According to slides 21–23, what are the key characteristics of JSON as a data interchange format? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It is lightweight and text-based."
      },
      {
        "id": "B",
        "text": "It represents data as key-value pairs (\"key\": value) and ordered lists (arrays)."
      },
      {
        "id": "C",
        "text": "It is language-independent, despite being derived from JavaScript object syntax."
      },
      {
        "id": "D",
        "text": "It supports executable binary functions and cyclic object references natively."
      },
      {
        "id": "E",
        "text": "It is natively parsed and stringified in JavaScript via JSON.parse() and JSON.stringify()."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slides 21–23 define JSON as a lightweight, text-based, language-independent format built on key-value pairs and arrays, natively supported via JSON.parse and JSON.stringify. (Source: Chapter 07. Client-Server Communication.pptx, slides 21, 22, 23)"
  },
  {
    "id": "sba301-q098",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "Why are asynchronous operations essential in ReactJS applications according to slide 3?",
    "options": [
      {
        "id": "A",
        "text": "They compile React components into native operating system binaries at runtime."
      },
      {
        "id": "B",
        "text": "They allow non-blocking code execution while fetching data from servers, keeping the user interface smooth and responsive."
      },
      {
        "id": "C",
        "text": "They prevent the browser from saving cached HTTP responses to disk."
      },
      {
        "id": "D",
        "text": "They convert single-threaded JavaScript execution into multi-threaded Java execution."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explains that React applications fetch data from APIs; asynchronous operations allow non-blocking code execution, preventing the UI from freezing. (Source: Chapter 08. Fetching and Caching Data.pptx, slide 3)"
  },
  {
    "id": "sba301-q099",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "What are the three distinct states that a JavaScript Promise can be in according to slide 4?",
    "options": [
      {
        "id": "A",
        "text": "Starting, Processing, Finished"
      },
      {
        "id": "B",
        "text": "Pending, Fulfilled, Rejected"
      },
      {
        "id": "C",
        "text": "Open, Committed, Closed"
      },
      {
        "id": "D",
        "text": "Mounted, Updated, Unmounted"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 4 explicitly defines the three states of a Promise: Pending (initial state), Fulfilled (operation completed successfully), and Rejected (operation failed). (Source: Chapter 08. Fetching and Caching Data.pptx, slide 4)"
  },
  {
    "id": "sba301-q100",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "multiple",
    "question": "According to slides 5 and 8, which of the following are recognized advantages and features of JavaScript Promises? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "They solve the \"callback hell\" (heavily nested callback code) problem."
      },
      {
        "id": "B",
        "text": "They support chaining using .then() for success and .catch() for errors."
      },
      {
        "id": "C",
        "text": "They provide static helper methods such as Promise.all() and Promise.race() for coordinating multiple asynchronous tasks."
      },
      {
        "id": "D",
        "text": "They force all asynchronous network calls to resolve in strict alphabetical order."
      },
      {
        "id": "E",
        "text": "They can immediately return pre-settled outcomes using Promise.resolve(result) or Promise.reject(error)."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slides 5 and 8 highlight that Promises solve callback hell, support chaining, provide Promise.all() / Promise.race(), and allow immediate return via Promise.resolve() and Promise.reject(). (Source: Chapter 08. Fetching and Caching Data.pptx, slides 5, 8)"
  },
  {
    "id": "sba301-q101",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "How do the slides define the async/await syntax in JavaScript?",
    "options": [
      {
        "id": "A",
        "text": "A low-level browser API that creates background web worker threads."
      },
      {
        "id": "B",
        "text": "Syntactic sugar for Promises that makes handling asynchronous functions easier to read and write like synchronous code."
      },
      {
        "id": "C",
        "text": "An external npm compiler required to run React in Node.js."
      },
      {
        "id": "D",
        "text": "A database transaction management system built into modern browsers."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 5 and 9 define async/await as syntactic sugar for Promises that makes handling asynchronous functions easier to read and write like synchronous code. (Source: Chapter 08. Fetching and Caching Data.pptx, slides 5, 9)"
  },
  {
    "id": "sba301-q102",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "multiple",
    "question": "Which of the following statements correctly describe the browser-native Fetch API according to slides 10 and 11? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It is a modern, browser-native API that requires no external third-party dependencies or installations."
      },
      {
        "id": "B",
        "text": "It returns a Promise that resolves to the Response object."
      },
      {
        "id": "C",
        "text": "It supports all standard HTTP methods (GET, POST, PUT, DELETE)."
      },
      {
        "id": "D",
        "text": "It automatically parses response payloads into native JavaScript objects without requiring .json()."
      },
      {
        "id": "E",
        "text": "It allows request customization via configuration options (method, headers, body)."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slides 10 and 11 confirm that Fetch is native, returns a Promise resolving to Response, and supports options. It does not automatically parse JSON (manual response.json() is required). (Source: Chapter 08. Fetching and Caching Data.pptx, slides 10, 11)"
  },
  {
    "id": "sba301-q103",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "How does the Fetch API handle HTTP error status codes like 404 (Not Found) or 500 (Internal Server Error)?",
    "options": [
      {
        "id": "A",
        "text": "Fetch automatically rejects the Promise and triggers the .catch() block."
      },
      {
        "id": "B",
        "text": "Fetch only rejects the Promise on network errors; HTTP errors still resolve, requiring developers to manually check response.ok."
      },
      {
        "id": "C",
        "text": "Fetch re-attempts the HTTP request 3 times before throwing a syntax error."
      },
      {
        "id": "D",
        "text": "Fetch returns null for both response and error."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 explicitly highlights: \"Fetch only rejects on network errors; check response.ok for HTTP errors.\" (Source: Chapter 08. Fetching and Caching Data.pptx, slide 11)"
  },
  {
    "id": "sba301-q104",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "According to slide 11, what is a notable limitation of the Fetch API regarding request cancellation?",
    "options": [
      {
        "id": "A",
        "text": "Fetch does not support request cancellation under any circumstances."
      },
      {
        "id": "B",
        "text": "Fetch has no built-in request cancellation, requiring developers to use the AbortController AP"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "C",
        "text": "Fetch automatically cancels any request that takes longer than 500 milliseconds."
      },
      {
        "id": "D",
        "text": "Fetch requires installing the CancelToken package from npm to cancel requests."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 states as a limitation of Fetch: \"No built-in request cancellation (use AbortController for this)\". (Source: Chapter 08. Fetching and Caching Data.pptx, slide 11)"
  },
  {
    "id": "sba301-q105",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "multiple",
    "question": "According to slides 14 and 15, which features are natively supported by the Axios library? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Automatic JSON parsing into response.data"
      },
      {
        "id": "B",
        "text": "Automatic error rejection for HTTP error status codes (e.g., 404, 500) as well as network failures"
      },
      {
        "id": "C",
        "text": "Interceptors to modify requests or responses globally (such as attaching auth tokens)"
      },
      {
        "id": "D",
        "text": "Built-in request cancellation support using CancelToken"
      },
      {
        "id": "E",
        "text": "Automatic database table indexing on the client machine"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 14 and 15 list automatic JSON parsing (response.data), broad error catching (network + HTTP), interceptors, and request cancellation via CancelToken. (Source: Chapter 08. Fetching and Caching Data.pptx, slides 14, 15)"
  },
  {
    "id": "sba301-q106",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "How are Axios \"Interceptors\" typically utilized based on slide 15?",
    "options": [
      {
        "id": "A",
        "text": "To block browsers from executing React Router navigation hooks."
      },
      {
        "id": "B",
        "text": "To inspect, modify, or inject data into HTTP requests or responses globally (e.g., adding Authorization: Bearer token)."
      },
      {
        "id": "C",
        "text": "To compile JSX directly into CSS files before transmission."
      },
      {
        "id": "D",
        "text": "To convert MongoDB documents into SQL relational schemas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 15 explains that interceptors allow developers to modify requests or responses globally, providing code that injects config.headers.Authorization = 'Bearer token'. (Source: Chapter 08. Fetching and Caching Data.pptx, slide 15)"
  },
  {
    "id": "sba301-q107",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "What is the primary difference in how JSON data is retrieved between Fetch and Axios?",
    "options": [
      {
        "id": "A",
        "text": "Fetch retrieves data synchronously, whereas Axios retrieves data asynchronously."
      },
      {
        "id": "B",
        "text": "Fetch requires an explicit second asynchronous call response.json(), while Axios automatically parses the response into response.data."
      },
      {
        "id": "C",
        "text": "Fetch stores JSON in window.localStorage, while Axios stores JSON in Redux."
      },
      {
        "id": "D",
        "text": "Fetch only accepts XML and must convert it to JSON via external regex."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 11, 15, and 22 explicitly contrast JSON handling: Fetch requires manual parsing via response.json(), whereas Axios parses data automatically into response.data. (Source: Chapter 08. Fetching and Caching Data.pptx, slides 11, 15, 22)"
  },
  {
    "id": "sba301-q108",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "multiple",
    "question": "Based on the \"Fetch vs. Axios: Comparison\" table on slide 22, which comparison rows are factually accurate? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Built-in: Fetch is browser-native (Yes); Axios requires installation (No)."
      },
      {
        "id": "B",
        "text": "JSON Parsing: Fetch is manual (response.json()); Axios is automatic (response.data)."
      },
      {
        "id": "C",
        "text": "Error Handling: Fetch rejects on network errors only; Axios catches network and HTTP errors."
      },
      {
        "id": "D",
        "text": "Interceptors: Fetch supports interceptors natively; Axios does not support interceptors."
      },
      {
        "id": "E",
        "text": "Request Cancellation: Fetch uses AbortController; Axios has built-in CancelToken."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "The comparison table on slide 22 confirms rows A, B, C, and E. Axios supports interceptors, while native Fetch does not. (Source: Chapter 08. Fetching and Caching Data.pptx, slide 22)"
  },
  {
    "id": "sba301-q109",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "single",
    "question": "Consider the following Axios POST request snippet: const onSubmit = async (data) => { const response = await axios.post(baseUrl, data); }; What is the function of axios.post in this workflow?",
    "options": [
      {
        "id": "A",
        "text": "It queries an existing resource from the server and sorts it by I"
      },
      {
        "id": "D",
        "text": ""
      },
      {
        "id": "B",
        "text": "It sends data in the request body to create a new resource on the server."
      },
      {
        "id": "C",
        "text": "It deletes the resource identified by baseUrl from the remote database."
      },
      {
        "id": "D",
        "text": "It resets the component state to an empty array."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 notes: \"The POST method is used to create a new resource on the server or API. When sending a POST request, data is sent with the request and is passed to the server to create a new resource.\" (Source: Chapter 08. Fetching and Caching Data.pptx, slide 19)"
  },
  {
    "id": "sba301-q110",
    "subjectId": "sba301",
    "topic": "PART 8: Chapter 08. Fetching and Caching Data.pptx",
    "type": "multiple",
    "question": "Which Axios convenience methods are presented in slides 16–21 for performing CRUD operations against REST API endpoints? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "axios.get(url) to query and retrieve data"
      },
      {
        "id": "B",
        "text": "axios.post(url, data, config) to create a new resource"
      },
      {
        "id": "C",
        "text": "axios.put(url, data, config) to update an existing resource"
      },
      {
        "id": "D",
        "text": "axios.delete(url, config) to delete a specified resource"
      },
      {
        "id": "E",
        "text": "axios.executeProcedure(url) to trigger remote database stored procedures"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 16 explicitly introduces axios.get, axios.post, axios.put, and axios.delete as convenience methods corresponding to CRUD operations. (Source: Chapter 08. Fetching and Caching Data.pptx, slides 16, 17, 19, 20, 21)"
  },
  {
    "id": "sba301-q111",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "According to slide 3, what is the core architectural concept of a Single Page Application (SPA)?",
    "options": [
      {
        "id": "A",
        "text": "The browser requests and reloads a completely new HTML file from the server on every navigation link clicked."
      },
      {
        "id": "B",
        "text": "The browser loads a single HTML page with a JavaScript bundle that handles rendering and navigation client-side, fetching data dynamically without full page reloads."
      },
      {
        "id": "C",
        "text": "The backend server pre-renders all dynamic user data directly into immutable PDF documents."
      },
      {
        "id": "D",
        "text": "The application eliminates the need for HTTP communication by embedding the SQL database directly into the browser cache."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines an SPA as a web application that loads a single HTML page and dynamically updates its content client-side using a JavaScript bundle and APIs, without requiring full page reloads. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 3)"
  },
  {
    "id": "sba301-q112",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "multiple",
    "question": "Based on the architectural diagrams in slides 4 and 5 comparing Traditional Websites with SPAs, which statements are correct? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "In traditional websites, every new user navigation sends an HTTP request for a distinct HTML document (e.g., Request contactus.html -> Send contactus.html)."
      },
      {
        "id": "B",
        "text": "In an SPA, the initial request returns the web application and assets, while subsequent user clicks send requests that receive JSON data in response."
      },
      {
        "id": "C",
        "text": "In an SPA, clicking a link causes the browser to discard the entire DOM and perform a hard page refresh."
      },
      {
        "id": "D",
        "text": "In traditional websites, the server returns lightweight JSON payloads while the browser builds the initial HTML from scratch."
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "explanation": "Slides 4 and 5 illustrate that traditional websites repeatedly request and send full HTML files, whereas SPAs download assets once and subsequent interactions only exchange JSON data. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q113",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "In the SPA execution process described on slide 6, what takes place immediately after the browser receives the minimal HTML file and linked JavaScript bundle?",
    "options": [
      {
        "id": "A",
        "text": "The browser automatically terminates all network connections to preserve memory."
      },
      {
        "id": "B",
        "text": "ReactJS executes client-side to render the initial UI and starts listening for user interactions."
      },
      {
        "id": "C",
        "text": "The server converts all JavaScript functions into backend Java servlets."
      },
      {
        "id": "D",
        "text": "The browser triggers an automatic download of a desktop operating system installer."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 specifies the process: the browser loads the minimal HTML and JavaScript bundle, then \"ReactJS renders the initial UI and listens for user interactions\" before subsequent user actions trigger API calls. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 6)"
  },
  {
    "id": "sba301-q114",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "multiple",
    "question": "Which of the following are cited in slide 7 as prominent real-world examples of Single Page Applications? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Gmail"
      },
      {
        "id": "B",
        "text": "Trello"
      },
      {
        "id": "C",
        "text": "Spotify Web Player"
      },
      {
        "id": "D",
        "text": "Wikipedia static archive dumps"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 7 lists three primary real-world examples: Gmail (updates dynamically without reloads), Trello (boards and cards managed client-side with API calls), and Spotify Web Player (music playback and navigation in a single page). (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 7)"
  },
  {
    "id": "sba301-q115",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "multiple",
    "question": "According to slide 8, what are the recognized advantages of Single Page Applications? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Fast user experience because subsequent navigation is instantaneous since only data is fetched"
      },
      {
        "id": "B",
        "text": "Rich interactivity supporting complex, desktop-like interfaces (e.g., drag-and-drop, real-time updates)"
      },
      {
        "id": "C",
        "text": "Reduced server load because servers focus on handling API data requests rather than rendering HTML"
      },
      {
        "id": "D",
        "text": "Complete immunity to client-side memory leaks on low-end hardware devices"
      },
      {
        "id": "E",
        "text": "Offline capabilities enabled by caching data (e.g., using Service Workers)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slide 8 explicitly highlights Fast User Experience, Rich Interactivity, Reduced Server Load, Developer Productivity, and Offline Capabilities. Slide 9 notes memory strain on low-end devices as a disadvantage. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slides 8, 9)"
  },
  {
    "id": "sba301-q116",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "multiple",
    "question": "Which items are explicitly identified as disadvantages or challenges of SPAs in slide 9, along with their suggested mitigations? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Initial Load Time: Large JavaScript bundles can slow down the first page load (mitigated by code splitting and lazy loading)."
      },
      {
        "id": "B",
        "text": "SEO Challenges: Search engines may struggle to index dynamic client-rendered content (mitigated by SSR, SSG, or prerendering)."
      },
      {
        "id": "C",
        "text": "Memory Usage: Keeping state and DOM in memory can strain low-end devices."
      },
      {
        "id": "D",
        "text": "JavaScript Dependency: SPAs fail if JavaScript is disabled in the client browser (mitigated by progressive enhancement)."
      },
      {
        "id": "E",
        "text": "Excessive Network Bandwidth: SPAs consume significantly more server bandwidth on repeated page navigation than traditional multi-page apps."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 9 details Initial Load Time (with code splitting/lazy loading), SEO challenges (with SSR/SSG/prerendering), Memory Usage, and JavaScript Dependency. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slides 8, 9)"
  },
  {
    "id": "sba301-q117",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "According to slide 11 (\"When to Use SPAs?\"), which of the following scenarios is NOT an ideal use case for an SPA?",
    "options": [
      {
        "id": "A",
        "text": "Interactive business dashboards and CRM applications"
      },
      {
        "id": "B",
        "text": "Collaborative, real-time communication and chat tools"
      },
      {
        "id": "C",
        "text": "Content-heavy websites requiring strong public search engine optimization (SEO), such as blogs and news portals"
      },
      {
        "id": "D",
        "text": "Internal enterprise web tools where public search engine indexing is not required"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 11 notes that SPAs are best for interactive applications, real-time tools, and internal tools. Conversely, SPAs are \"Not Ideal For: Content-heavy sites needing strong SEO (e.g., blogs, news sites)\". (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 11)"
  },
  {
    "id": "sba301-q118",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "What command is used in slide 13 to scaffold the demo SPA project using Vite?",
    "options": [
      {
        "id": "A",
        "text": "npm create vite@latest spa-demo -- --template react"
      },
      {
        "id": "B",
        "text": "npx create-react-spa spa-demo"
      },
      {
        "id": "C",
        "text": "vite init --framework react spa-demo"
      },
      {
        "id": "D",
        "text": "npm install create-vite-app spa-demo"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 13 explicitly specifies the scaffolding terminal command: npm create vite@latest spa-demo -- --template react. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 13)"
  },
  {
    "id": "sba301-q119",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "Which set of dependencies is installed via npm in slide 13 to build the orchid SPA demo?",
    "options": [
      {
        "id": "A",
        "text": "npm install react-router axios react-bootstrap bootstrap"
      },
      {
        "id": "B",
        "text": "npm install redux thunk jquery express"
      },
      {
        "id": "C",
        "text": "npm install angular-router lodash material-ui"
      },
      {
        "id": "D",
        "text": "npm install vue-router socket.io mongoose"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 13 specifies: npm install react-router axios react-bootstrap bootstrap. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 13)"
  },
  {
    "id": "sba301-q120",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "What naming convention and access pattern must be followed for custom environment variables defined in the .env file of a Vite application?",
    "options": [
      {
        "id": "A",
        "text": "Variables must start with REACT_APP_ and are accessed via process.env.REACT_APP_VARIABL"
      },
      {
        "id": "E",
        "text": ""
      },
      {
        "id": "B",
        "text": "Variables must start with VITE_ and are accessed in code using import.meta.env.VITE_VARIABL"
      },
      {
        "id": "E",
        "text": ""
      },
      {
        "id": "C",
        "text": "Variables must start with NEXT_PUBLIC_ and are accessed via global.env.VARIABL"
      },
      {
        "id": "E",
        "text": ""
      },
      {
        "id": "D",
        "text": "Variables must start with CONFIG_ and are accessed via window.localStorage.getItem()."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 15 specifies: \"Use VITE_ prefix for environment variables in Vite\" and \"Access variables with import.meta.env.VITE_API_URL\". (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 15)"
  },
  {
    "id": "sba301-q121",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "What critical development step must be performed after adding or modifying variables in the .env file of a Vite project?",
    "options": [
      {
        "id": "A",
        "text": "The operating system must be rebooted."
      },
      {
        "id": "B",
        "text": "The local development server must be restarted (npm run dev)."
      },
      {
        "id": "C",
        "text": "The package.json file must be deleted and regenerated."
      },
      {
        "id": "D",
        "text": "The .env file must be pushed immediately to a public GitHub repository."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 15 notes under \"Restart Server\": \"After adding .env, restart with npm run dev\". (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 15)"
  },
  {
    "id": "sba301-q122",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "Consider the App.jsx router configuration: <NavBar /><Routes><Route path=\"/\" element={<ListOfOrchids />} /><Route path=\"detail/:id\" element={<DetailOrchid />} /></Routes> What will be displayed on screen at http://localhost:5173/detail/5?",
    "options": [
      {
        "id": "A",
        "text": "Only the <NavBar /> component, because <Routes> throws an unmatched route error."
      },
      {
        "id": "B",
        "text": "The <NavBar /> component at the top, with the <DetailOrchid /> component rendered below it."
      },
      {
        "id": "C",
        "text": "A blank white screen until the user manually refreshes the page."
      },
      {
        "id": "D",
        "text": "Both <ListOfOrchids /> and <DetailOrchid /> stacked vertically together."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Because <NavBar /> is placed outside <Routes>, it remains persistent across all views. When the URL matches \"detail/:id\", <Routes> matches that path and renders <DetailOrchid /> underneath. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 16)"
  },
  {
    "id": "sba301-q123",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "single",
    "question": "In ListOfOrchids.jsx (slide 17), how is the fetched list of orchids sorted before updating component state?",
    "options": [
      {
        "id": "A",
        "text": "In alphabetical ascending order by orchidName using localeCompare()."
      },
      {
        "id": "B",
        "text": "In descending numerical order by id using response.data.sort((a, b) => parseInt(b.id) - parseInt(a.id))."
      },
      {
        "id": "C",
        "text": "By category type using a custom filter function."
      },
      {
        "id": "D",
        "text": "Randomly shuffled using Math.random()."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 17 and slide 145 show: const sortedData = response.data.sort((a, b) => parseInt(b.id) - parseInt(a.id)); setAPI(sortedData);, sorting by ID in descending order. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 17)"
  },
  {
    "id": "sba301-q124",
    "subjectId": "sba301",
    "topic": "PART 9: Chapter 09. React Router and Single Page Application (SPA).pptx",
    "type": "multiple",
    "question": "In OrchidDetails.jsx (slide 18), which hooks and components are utilized to extract the route parameter and conditionally render orchid information? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "useParams() from react-router to extract the id from the URL"
      },
      {
        "id": "B",
        "text": "useEffect() with [id] as a dependency to fetch the specific orchid record when the parameter changes"
      },
      {
        "id": "C",
        "text": "React-Bootstrap components like <Card>, <Badge>, and <Image> to structure the visual details"
      },
      {
        "id": "D",
        "text": "A conditional ternary operator checking orchid.isNatural to render either a \"Natural\" or \"Industrial\" badge"
      },
      {
        "id": "E",
        "text": "useReducer to write SQL statements directly to the remote server"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 18 uses useParams() to retrieve id, triggers fetchData() in useEffect when id changes, imports React-Bootstrap UI elements, and conditionally renders badges. (Source: Chapter 09. React Router and Single Page Application (SPA).pptx, slide 18)"
  },
  {
    "id": "sba301-q125",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "According to slide 3, how are RESTful Web Services fundamentally defined, and what is the key abstraction of information in this architectural style?",
    "options": [
      {
        "id": "A",
        "text": "A stateful RPC protocol centered around remote class methods."
      },
      {
        "id": "B",
        "text": "An architectural style for distributed systems leveraging HTTP, where the key abstraction is a resource identified by URIs."
      },
      {
        "id": "C",
        "text": "A compiled binary serialization format designed exclusively for desktop operating systems."
      },
      {
        "id": "D",
        "text": "An automated database clustering mechanism built directly into relational databases."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 3 and 4 define REST as an architectural style for distributed systems that leverages HTTP, emphasizing resources identified by URIs and standard HTTP verbs. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q126",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Which of the following represent core architectural principles/constraints of REST as detailed in slides 3, 7, and 9? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Client-Server separation of concerns"
      },
      {
        "id": "B",
        "text": "Statelessness (no session state stored on the server during request processing)"
      },
      {
        "id": "C",
        "text": "Cacheability of responses"
      },
      {
        "id": "D",
        "text": "Uniform Interface"
      },
      {
        "id": "E",
        "text": "Server-side session replication across every HTTP verb"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 3, 7, and 9 list Client-Server, Statelessness, Cacheability, Uniform Interface, and Layered System as core REST constraints. REST is strictly stateless. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slides 3, 7, 9)"
  },
  {
    "id": "sba301-q127",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "What does the \"Statelessness\" constraint require of client requests sent to a RESTful service according to slides 3 and 7?",
    "options": [
      {
        "id": "A",
        "text": "The client must not store any state in its local frontend memory."
      },
      {
        "id": "B",
        "text": "Each request from the client must contain all the information necessary for the server to understand and process it, and no session state is stored on the server."
      },
      {
        "id": "C",
        "text": "The backend server must persist every temporary user click directly to the SQL database."
      },
      {
        "id": "D",
        "text": "All network payloads must be transmitted without HTTP headers."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 3 and 7 explain that under the stateless constraint, each request from client to server must contain all necessary information; no session data is saved on the server between requests. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slides 3, 7)"
  },
  {
    "id": "sba301-q128",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "According to slide 6, which of the following are recommended best practices for RESTful API design? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Use nouns for resource names (e.g., /users, /products) rather than verbs (e.g., /getUser, /addProduct)."
      },
      {
        "id": "B",
        "text": "Use hyphens (-) to separate words in URLs, not underscores (_)."
      },
      {
        "id": "C",
        "text": "Version your API (e.g., /v1/users) to allow future changes without breaking existing clients."
      },
      {
        "id": "D",
        "text": "Embed SQL statements directly into query parameters to simplify CRUD routing."
      },
      {
        "id": "E",
        "text": "Handle errors gracefully by returning appropriate HTTP status codes and informative error messages."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slide 6 explicitly outlines using nouns, hyphens for word separation, API versioning, proper HTTP verb matching, and graceful error handling. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 6)"
  },
  {
    "id": "sba301-q129",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "According to slide 11, what is the recommended URI naming pattern for modeling relationships using \"sub-resources\" in a RESTful API?",
    "options": [
      {
        "id": "A",
        "text": "POST /{resource}?action=linkSubResource"
      },
      {
        "id": "B",
        "text": "GET /{resource}/{resource-id}/{sub-resource}"
      },
      {
        "id": "C",
        "text": "PUT /{resource}/sub-resource-query/{sub-resource-id}"
      },
      {
        "id": "D",
        "text": "DELETE /{resource-id}/{resource}"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 explicitly gives the sub-resource pattern: GET /{resource}/{resource-id}/{sub-resource} or GET /{resource}/{resource-id}/{sub-resource}/{sub-resource-id}. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 11)"
  },
  {
    "id": "sba301-q130",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Which HTTP status codes are correctly matched with their standard meaning based on slides 12 and 13? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "200 OK: Request succeeded and response content is returned."
      },
      {
        "id": "B",
        "text": "201 Created: Request succeeded and a new resource was created."
      },
      {
        "id": "C",
        "text": "400 Bad Request: Server failed to process request due to malformed syntax."
      },
      {
        "id": "D",
        "text": "401 Unauthorized: Authentication is required for the resource."
      },
      {
        "id": "E",
        "text": "403 Forbidden: Server refuses to respond even though the request is valid."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slides 12 and 13 list 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, and 500 Internal Server Error with these exact definitions. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slides 12, 13)"
  },
  {
    "id": "sba301-q131",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "Which HTTP status code indicates that an unexpected error occurred on the server and the request could not be fulfilled according to slide 13?",
    "options": [
      {
        "id": "A",
        "text": "401 Unauthorized"
      },
      {
        "id": "B",
        "text": "404 Not Found"
      },
      {
        "id": "C",
        "text": "500 Internal Server Error"
      },
      {
        "id": "D",
        "text": "403 Forbidden"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 13 defines 500 Internal Server Error as a generic error indicating an unexpected error occurred on the server and the request cannot be fulfilled. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 13)"
  },
  {
    "id": "sba301-q132",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "According to slide 14, what key features make Spring Boot particularly well-suited for building stand-alone production-grade applications? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Ability to create stand-alone Spring applications."
      },
      {
        "id": "B",
        "text": "Directly embeds Tomcat, Jetty, or Undertow without requiring WAR deployments."
      },
      {
        "id": "C",
        "text": "Provides opinionated 'starter' dependencies to simplify build configurations."
      },
      {
        "id": "D",
        "text": "Automatically configures Spring and third-party libraries whenever possible."
      },
      {
        "id": "E",
        "text": "Requires mandatory XML configuration files for bean wiring."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 14 lists stand-alone apps, embedded Tomcat/Jetty/Undertow, starter dependencies, auto-configuration, and production-ready metrics, explicitly noting no requirement for XML. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 14)"
  },
  {
    "id": "sba301-q133",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "What two Spring annotations are combined within the @RestController annotation according to slide 18?",
    "options": [
      {
        "id": "A",
        "text": "@Component and @Repository"
      },
      {
        "id": "B",
        "text": "@Controller and @ResponseBody"
      },
      {
        "id": "C",
        "text": "@Service and @Autowired"
      },
      {
        "id": "D",
        "text": "@Configuration and @Bean"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 18 explicitly states: \"@RestController - This annotation marks a class as a REST controller... It combines @Controller and @ResponseBody\". (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 18)"
  },
  {
    "id": "sba301-q134",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "Which shorthand annotations for @RequestMapping are introduced in slide 18 to map specific HTTP methods directly to controller endpoints?",
    "options": [
      {
        "id": "A",
        "text": "@GetEndpoint, @PostEndpoint, @PutEndpoint, @DeleteEndpoint"
      },
      {
        "id": "B",
        "text": "@GetMapping, @PostMapping, @PutMapping, @DeleteMapping"
      },
      {
        "id": "C",
        "text": "@ReadMapping, @CreateMapping, @UpdateMapping, @RemoveMapping"
      },
      {
        "id": "D",
        "text": "@FetchAction, @SaveAction, @ModifyAction, @DropAction"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 18 lists @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping as shorthand annotations for @RequestMapping specifying HTTP methods directly. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 18)"
  },
  {
    "id": "sba301-q135",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "In Spring Boot REST controllers, what is the role of the @PathVariable annotation according to slide 19?",
    "options": [
      {
        "id": "A",
        "text": "It binds HTTP request headers to service layer interfaces."
      },
      {
        "id": "B",
        "text": "It extracts values from dynamic URI segments (parts of the URL) and binds them to method parameters."
      },
      {
        "id": "C",
        "text": "It serializes Java return objects into JSON strings."
      },
      {
        "id": "D",
        "text": "It validates database transaction isolation levels."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 states: \"@PathVariable - Extracts values from URI segments (parts of the URL) and binds them to method parameters. It allows to access dynamic parts of the URL\". (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 19)"
  },
  {
    "id": "sba301-q136",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "How does the @RequestBody annotation process incoming HTTP requests according to slide 19?",
    "options": [
      {
        "id": "A",
        "text": "It extracts query parameters from the URL string."
      },
      {
        "id": "B",
        "text": "It binds the body of the HTTP request to a Java object by automatically deserializing the body (usually JSON) into an instance of the specified class."
      },
      {
        "id": "C",
        "text": "It generates a CSRF security token for form submissions."
      },
      {
        "id": "D",
        "text": "It clears the server-side cache before method execution."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 explains: \"@RequestBody - Binds the body of the HTTP request to a Java object. It automatically deserializes the request body (usually JSON) into an instance of the specified class\". (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 19)"
  },
  {
    "id": "sba301-q137",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "According to slide 20, what is the purpose of the @ResponseStatus annotation when applied to a REST controller method?",
    "options": [
      {
        "id": "A",
        "text": "It restricts the endpoint so only authorized administrators can invoke it."
      },
      {
        "id": "B",
        "text": "It sets the HTTP status code (e.g., HttpStatus.OK, HttpStatus.CREATED) and optional reason phrase returned to the client."
      },
      {
        "id": "C",
        "text": "It enables automated database schema updates on application launch."
      },
      {
        "id": "D",
        "text": "It specifies the maximum duration a client can cache the response."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 20 notes: \"@ResponseStatus - Sets the HTTP status code for a response. Can use it to indicate success (200 OK), creation (201 Created), or error conditions\". (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 20)"
  },
  {
    "id": "sba301-q138",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Which attributes can be configured on the @RequestParam annotation based on slide 21? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "value (specifies the name of the query parameter)"
      },
      {
        "id": "B",
        "text": "required (indicates whether the parameter is required)"
      },
      {
        "id": "C",
        "text": "defaultValue (specifies a fallback default value if the parameter is absent)"
      },
      {
        "id": "D",
        "text": "targetDatabase (specifies which database table to query)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 21 explicitly details three attributes of @RequestParam: value (parameter name), required (boolean), and defaultValue (string fallback). (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 21)"
  },
  {
    "id": "sba301-q139",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "How do @ExceptionHandler and @ControllerAdvice work together to handle errors in Spring REST applications according to slide 21?",
    "options": [
      {
        "id": "A",
        "text": "@ExceptionHandler writes errors to disk, while @ControllerAdvice restarts the embedded server."
      },
      {
        "id": "B",
        "text": "@ExceptionHandler handles exceptions thrown by controller methods, while @ControllerAdvice defines a global exception handler spanning multiple controllers."
      },
      {
        "id": "C",
        "text": "@ExceptionHandler validates JSON schemas, while @ControllerAdvice compiles JPA queries."
      },
      {
        "id": "D",
        "text": "@ControllerAdvice redirects all HTTP 500 errors to an external Swagger documentation portal."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 21 specifies: \"@ExceptionHandler - Handles exceptions thrown by controller methods\" and \"@ControllerAdvice - Defines a global exception handler that can handle exceptions from multiple controllers\". (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 21)"
  },
  {
    "id": "sba301-q140",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "According to slide 22, which mapping criteria can be specified inside the @RequestMapping annotation? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "value / path: specifies the request path"
      },
      {
        "id": "B",
        "text": "method: specifies the HTTP method (e.g., RequestMethod.GET, RequestMethod.POST)"
      },
      {
        "id": "C",
        "text": "params: specifies request parameters that must be present"
      },
      {
        "id": "D",
        "text": "headers: specifies request headers that must be present"
      },
      {
        "id": "E",
        "text": "consumes / produces: specifies content types for request body and response body"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slide 22 lists all of these attributes: value, method, params, headers, consumes, and produces. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 22)"
  },
  {
    "id": "sba301-q141",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "In the 3-Layer Architecture demonstrated in Demo 2 (slides 27–33), what are the distinct roles of the Controller, Service, and Repository components?",
    "options": [
      {
        "id": "A",
        "text": "Controller accesses SQL tables directly; Service serializes JSON; Repository renders HTM"
      },
      {
        "id": "L",
        "text": ""
      },
      {
        "id": "B",
        "text": "Controller handles API requests/endpoints; Service manages business logic; Repository/DAO handles data storage and access."
      },
      {
        "id": "C",
        "text": "Controller executes background cron jobs; Service generates JWT tokens; Repository handles browser cookies."
      },
      {
        "id": "D",
        "text": "Controller handles database connection pools; Service validates HTML syntax; Repository manages embedded Tomcat."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The demo structure divides concerns: controllers handle endpoints and HTTP requests, services handle business logic, and repositories handle data access and persistence. (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slides 27, 28, 29, 32, 33)"
  },
  {
    "id": "sba301-q142",
    "subjectId": "sba301",
    "topic": "PART 10: Chapter 10. RESTful Web Services with Spring Boot.pptx",
    "type": "single",
    "question": "Consider the ProductController code from slide 33: @RestController @RequestMapping(\"/api/v1/products\") public class ProductController { @Autowired private IProductService service; @PostMapping public Product addProduct(@RequestBody Product product) { return service.saveProduct(product); } } What action occurs when a client issues an HTTP POST request to /api/v1/products with a JSON payload?",
    "options": [
      {
        "id": "A",
        "text": "Spring deselects the controller and passes the request to the embedded database console."
      },
      {
        "id": "B",
        "text": "Spring deserializes the incoming JSON body into a Product object and passes it to service.saveProduct()."
      },
      {
        "id": "C",
        "text": "Spring returns a 405 Method Not Allowed status code."
      },
      {
        "id": "D",
        "text": "Spring writes the raw JSON string to application.properties."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 33 shows @PostMapping with @RequestBody Product product, which tells Spring to deserialize the JSON request body into a Product instance and delegate saving to service.saveProduct(product). (Source: Chapter 10. RESTful Web Services with Spring Boot.pptx, slide 33)"
  },
  {
    "id": "sba301-q143",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "According to slide 3, what is the primary purpose and importance of documenting REST services?",
    "options": [
      {
        "id": "A",
        "text": "To automate database table partitioning and indexing on the server."
      },
      {
        "id": "B",
        "text": "To provide clear guides on functionality, endpoints, and data formats so developers can easily understand and integrate services without needing to read underlying source code."
      },
      {
        "id": "C",
        "text": "To replace client-side JavaScript execution with server-rendered XML templates."
      },
      {
        "id": "D",
        "text": "To prevent the browser from saving HTTP cookies during client requests."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly emphasizes that REST documentation serves as a comprehensive guide explaining functionality, endpoints, parameters, and formats, enabling developers to understand and integrate services easily without inspecting the source code. (Source: Chapter 11. Documenting REST Services.pptx, slide 3)"
  },
  {
    "id": "sba301-q144",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "multiple",
    "question": "According to slide 4, which of the following are essential elements of effective REST API documentation? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Overview and Base URL"
      },
      {
        "id": "B",
        "text": "Authentication details (e.g., API keys, OAuth, JWT)"
      },
      {
        "id": "C",
        "text": "Endpoints and HTTP methods"
      },
      {
        "id": "D",
        "text": "Request parameters and request body schemas"
      },
      {
        "id": "E",
        "text": "Operating system kernel revision logs"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 4 outlines the core elements of API documentation: Overview, Base URL, Authentication, Endpoints, HTTP Methods, Request Parameters, Request Body, Response, Status Codes, Error Handling, and Examples. Operating system kernel logs are irrelevant to API documentation. (Source: Chapter 11. Documenting REST Services.pptx, slide 4)"
  },
  {
    "id": "sba301-q145",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "What is the relationship between Swagger and OpenAPI as described in slides 5 and 6?",
    "options": [
      {
        "id": "A",
        "text": "Swagger is a proprietary relational database engine, while OpenAPI is a frontend React component."
      },
      {
        "id": "B",
        "text": "OpenAPI is an open specification for machine-readable interface files, and Swagger refers to the suite of open-source tools (like Swagger UI and Swagger Editor) built around the OpenAPI Specification."
      },
      {
        "id": "C",
        "text": "Swagger and OpenAPI are completely incompatible, competing standards for microservice logging."
      },
      {
        "id": "D",
        "text": "OpenAPI was deprecated in 2015 and replaced by Swagger 3."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 5 and 6 clarify that the OpenAPI Specification (OAS) is the formal industry standard/specification, whereas Swagger consists of the tooling created by SmartBear (Swagger UI, Swagger Editor, Swagger Codegen) implementing the OpenAPI specification. (Source: Chapter 11. Documenting REST Services.pptx, slides 5, 6)"
  },
  {
    "id": "sba301-q146",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "multiple",
    "question": "Slide 8 compares Swagger 2 with Swagger 3 (OpenAPI 3). Which of the following enhancements were introduced in Swagger 3 / OpenAPI 3? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Simplified and more expressive structure (e.g., consolidating paths and parameters)"
      },
      {
        "id": "B",
        "text": "Enhanced support for complex data models using oneOf, anyOf, and allOf"
      },
      {
        "id": "C",
        "text": "Improved and more flexible security definition schemes"
      },
      {
        "id": "D",
        "text": "Better support for multiple servers and environment definitions"
      },
      {
        "id": "E",
        "text": "Mandatory requirement to write documentation in binary bytecode"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 8 highlights several key differences in OpenAPI 3: simplified structure, enhanced reusable components, improved security definitions, support for oneOf/anyOf/allOf, and flexible server configurations. Bytecode is not part of OpenAPI. (Source: Chapter 11. Documenting REST Services.pptx, slide 8)"
  },
  {
    "id": "sba301-q147",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "Which starter dependency is specified in slide 10 to integrate OpenAPI 3 and Swagger UI into a Spring Boot 3 web application?",
    "options": [
      {
        "id": "A",
        "text": "springfox-swagger2"
      },
      {
        "id": "B",
        "text": "org.springdoc:springdoc-openapi-starter-webmvc-ui"
      },
      {
        "id": "C",
        "text": "spring-boot-starter-swagger-legacy"
      },
      {
        "id": "D",
        "text": "io.swagger:swagger-annotations-java-ee"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 explicitly instructs developers to add the springdoc-openapi-starter-webmvc-ui dependency for Spring Boot 3 in Maven (pom.xml). springfox is an older library for Spring Boot 2. (Source: Chapter 11. Documenting REST Services.pptx, slide 10)"
  },
  {
    "id": "sba301-q148",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "By default, at which URL path is Swagger UI accessed when running the application locally on port 8080 according to slide 11?",
    "options": [
      {
        "id": "A",
        "text": "http://localhost:8080/docs/index.html"
      },
      {
        "id": "B",
        "text": "http://localhost:8080/swagger-ui/index.html"
      },
      {
        "id": "C",
        "text": "http://localhost:8080/api/v1/documentation"
      },
      {
        "id": "D",
        "text": "http://localhost:8080/swagger-console"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 states that the interactive Swagger UI interface is available by default at http://localhost:8080/swagger-ui/index.html (or redirectable from /swagger-ui.html). (Source: Chapter 11. Documenting REST Services.pptx, slide 11)"
  },
  {
    "id": "sba301-q149",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "Where can clients and development tools retrieve the raw OpenAPI specification in JSON format by default based on slide 11?",
    "options": [
      {
        "id": "A",
        "text": "http://localhost:8080/api-docs"
      },
      {
        "id": "B",
        "text": "http://localhost:8080/v3/api-docs"
      },
      {
        "id": "C",
        "text": "http://localhost:8080/swagger.json"
      },
      {
        "id": "D",
        "text": "http://localhost:8080/openapi/raw.json"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 specifies that the OpenAPI description in JSON format is generated at http://localhost:8080/v3/api-docs. (Source: Chapter 11. Documenting REST Services.pptx, slide 11)"
  },
  {
    "id": "sba301-q150",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "What is the purpose of the @Tag annotation when applied to a REST controller class in Spring Boot according to slide 13?",
    "options": [
      {
        "id": "A",
        "text": "It tags the class for automated Java garbage collection."
      },
      {
        "id": "B",
        "text": "It groups related operations and endpoints together under a descriptive category name in Swagger U"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "C",
        "text": "It assigns an encryption key to the HTTP payload."
      },
      {
        "id": "D",
        "text": "It specifies the database table name mapped to the controller."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 13 explains that @Tag(name = \"...\", description = \"...\") is used on the controller level to group operations and provide a description for that group of endpoints. (Source: Chapter 11. Documenting REST Services.pptx, slide 13)"
  },
  {
    "id": "sba301-q151",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "Which annotation is used on a controller handler method to define a summary, description, and operation ID for an endpoint in Swagger UI according to slide 14?",
    "options": [
      {
        "id": "A",
        "text": "@Operation"
      },
      {
        "id": "B",
        "text": "@ApiMethod"
      },
      {
        "id": "C",
        "text": "@EndpointSummary"
      },
      {
        "id": "D",
        "text": "@SwaggerAction"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 14 shows that @Operation(summary = \"...\", description = \"...\") is placed on methods to provide a human-readable summary and description of the specific REST operation. (Source: Chapter 11. Documenting REST Services.pptx, slide 14)"
  },
  {
    "id": "sba301-q152",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "multiple",
    "question": "According to slides 15 and 16, which annotations and attributes are used to document expected HTTP responses and return schemas in OpenAPI 3? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@ApiResponses (container for multiple responses)"
      },
      {
        "id": "B",
        "text": "@ApiResponse (specifying responseCode such as \"200\", \"404\")"
      },
      {
        "id": "C",
        "text": "@Content (specifying media type, e.g., mediaType = \"application/json\")"
      },
      {
        "id": "D",
        "text": "@Schema (referencing model classes via implementation = Product.class)"
      },
      {
        "id": "E",
        "text": "@DatabaseRollback"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 15 and 16 show the use of @ApiResponses, @ApiResponse(responseCode = \"...\"), @Content(mediaType = \"...\"), and @Schema(implementation = ...). @DatabaseRollback is not an OpenAPI annotation. (Source: Chapter 11. Documenting REST Services.pptx, slides 15, 16)"
  },
  {
    "id": "sba301-q153",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "How are entity or DTO model fields documented with descriptive labels and sample values in OpenAPI 3 based on slide 17?",
    "options": [
      {
        "id": "A",
        "text": "By placing @Column on entity fields with SQL length attributes."
      },
      {
        "id": "B",
        "text": "By placing @Schema(description = \"...\", example = \"...\") on the fields or getter methods of the class."
      },
      {
        "id": "C",
        "text": "By writing comments in application.properties."
      },
      {
        "id": "D",
        "text": "By creating a custom XML DTD validator file."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 17 demonstrates documenting domain models (e.g., Product) using @Schema(description = \"Product Name\", example = \"Laptop\") directly on class fields. (Source: Chapter 11. Documenting REST Services.pptx, slide 17)"
  },
  {
    "id": "sba301-q154",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "In the custom OpenAPI configuration class (OpenAPIConfig.java) shown on slide 19, which annotation or bean definition is implemented to supply top-level API metadata (Title, Version, Description, Contact, and License)?",
    "options": [
      {
        "id": "A",
        "text": "An @OpenAPIDefinition annotation or a @Bean returning an OpenAPI instance configured with an Info object."
      },
      {
        "id": "B",
        "text": "A @WebServlet annotation containing JSON strings."
      },
      {
        "id": "C",
        "text": "A web.xml deployment descriptor tag."
      },
      {
        "id": "D",
        "text": "An environment variable named SWAGGER_METADATA_HEADER."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 19 shows creating an OpenAPIConfig class annotated with @Configuration exposing a @Bean public OpenAPI customOpenAPI() containing Info, Contact, and License objects (or using @OpenAPIDefinition). (Source: Chapter 11. Documenting REST Services.pptx, slide 19)"
  },
  {
    "id": "sba301-q155",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "multiple",
    "question": "Slide 20 demonstrates configuring multiple server environments in OpenAPIConfig. Which server environments are commonly defined using the Server object in OpenAPI? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Local Development Server (e.g., http://localhost:8080)"
      },
      {
        "id": "B",
        "text": "Production Server (e.g., [suspicious link removed])"
      },
      {
        "id": "C",
        "text": "Staging / QA Testing Server"
      },
      {
        "id": "D",
        "text": "Client Web Browser RAM memory address"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 20 shows adding new Server().url(\"...\").description(\"...\") for development, staging, and production servers, enabling users to test endpoints against different environments from within Swagger UI. (Source: Chapter 11. Documenting REST Services.pptx, slide 20)"
  },
  {
    "id": "sba301-q156",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "What capability does the \"Try it out\" button provide to developers inside Swagger UI according to slide 22?",
    "options": [
      {
        "id": "A",
        "text": "It downloads the entire Java source code to the local hard drive."
      },
      {
        "id": "B",
        "text": "It allows developers to execute live HTTP requests directly against running endpoints, supplying custom parameters or request bodies and viewing actual responses in real time."
      },
      {
        "id": "C",
        "text": "It rolls back the database to its initial empty state."
      },
      {
        "id": "D",
        "text": "It recompiles the Spring Boot JAR into a React component."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 22 and 23 highlight that Swagger UI is interactive: clicking \"Try it out\" allows users to fill in parameters/payloads, execute live API calls, and view actual response headers, status codes, and bodies directly in the browser. (Source: Chapter 11. Documenting REST Services.pptx, slides 22, 23)"
  },
  {
    "id": "sba301-q157",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "multiple",
    "question": "Which configuration properties can be placed in application.properties to customize OpenAPI and Swagger UI paths according to slide 25? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "springdoc.api-docs.path=/custom-api-docs"
      },
      {
        "id": "B",
        "text": "springdoc.swagger-ui.path=/custom-swagger-ui.html"
      },
      {
        "id": "C",
        "text": "springdoc.swagger-ui.enabled=true (or false to disable in production)"
      },
      {
        "id": "D",
        "text": "server.port=8080"
      },
      {
        "id": "E",
        "text": "spring.datasource.url=jdbc:sqlserver://..."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 25 highlights springdoc.api-docs.path, springdoc.swagger-ui.path, and springdoc.swagger-ui.enabled as properties specifically configuring SpringDoc OpenAPI and Swagger UI behavior. (Source: Chapter 11. Documenting REST Services.pptx, slide 25)"
  },
  {
    "id": "sba301-q158",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "single",
    "question": "How does OpenAPI 3 represent path parameters in endpoint documentation compared to request body payloads?",
    "options": [
      {
        "id": "A",
        "text": "Path parameters are documented using @Parameter(description = \"...\") alongside @PathVariable, whereas the request body is documented using @RequestBody or @io.swagger.v3.oas.annotations.parameters.RequestBody."
      },
      {
        "id": "B",
        "text": "Path parameters are strictly passed as HTTP cookies, while request bodies are passed in URL strings."
      },
      {
        "id": "C",
        "text": "OpenAPI 3 does not support path parameters."
      },
      {
        "id": "D",
        "text": "Path parameters must always be formatted in XML syntax."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slides 14, 15, and 17 illustrate using @Parameter to describe individual dynamic path variables (such as ID) while utilizing @io.swagger.v3.oas.annotations.parameters.RequestBody to detail the payload schema. (Source: Chapter 11. Documenting REST Services.pptx, slides 14, 15, 17)"
  },
  {
    "id": "sba301-q159",
    "subjectId": "sba301",
    "topic": "PART 11: Chapter 11. Documenting REST Services.pptx",
    "type": "multiple",
    "question": "According to the summary and best practices in slides 28–30, what are the primary benefits of keeping REST documentation synchronized with code via SpringDoc annotations? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Eliminates manual upkeep of out-of-date static Word or PDF documents"
      },
      {
        "id": "B",
        "text": "Automatically updates the API schema whenever entity models or controller methods change"
      },
      {
        "id": "C",
        "text": "Facilitates cross-functional collaboration between frontend, mobile, backend, and QA teams"
      },
      {
        "id": "D",
        "text": "Automatically replaces the need for backend unit testing"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 28–30 emphasize that code-driven OpenAPI generation ensures documentation stays up-to-date automatically as code evolves, facilitating smooth collaboration across frontend, backend, and QA teams. (Source: Chapter 11. Documenting REST Services.pptx, slides 28, 29, 30)"
  },
  {
    "id": "sba301-q160",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "According to slide 3, what is the primary goal of implementing REST API versioning in software development?",
    "options": [
      {
        "id": "A",
        "text": "To automate database schema migrations without using SQL scripts."
      },
      {
        "id": "B",
        "text": "To manage changes to the API over time while maintaining backward compatibility for existing clients."
      },
      {
        "id": "C",
        "text": "To compress HTTP response bodies using GZIP before network transit."
      },
      {
        "id": "D",
        "text": "To encrypt all JSON payloads using public key cryptography."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly notes that API versioning is essential to handle evolving client requirements and feature additions while maintaining backward compatibility so existing client applications do not break. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 3)"
  },
  {
    "id": "sba301-q161",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "multiple",
    "question": "Slide 4 identifies four major strategies for implementing REST API versioning. Which of the following are included? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "URI / Path Versioning (e.g., /api/v1/products)"
      },
      {
        "id": "B",
        "text": "Request Parameter Versioning (e.g., /api/products?version=1)"
      },
      {
        "id": "C",
        "text": "Custom Header Versioning (e.g., X-API-VERSION: 1)"
      },
      {
        "id": "D",
        "text": "Media Type / Accept Header Versioning (Content Negotiation, e.g., Accept: application/vnd.company.app-v1+json)"
      },
      {
        "id": "E",
        "text": "Local Storage Versioning inside the client web browser"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 4 explicitly lists and compares URI versioning, Query Parameter versioning, Custom Header versioning, and Media Type (Content Negotiation) versioning. Client local storage is not an API versioning strategy. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 4)"
  },
  {
    "id": "sba301-q162",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "Which API versioning approach is most transparent, easily shareable, and browser-cacheable, though it violates strict URI immutability principles?",
    "options": [
      {
        "id": "A",
        "text": "Custom Header Versioning"
      },
      {
        "id": "B",
        "text": "URI / Path Versioning"
      },
      {
        "id": "C",
        "text": "Accept Header (Content Negotiation) Versioning"
      },
      {
        "id": "D",
        "text": "Cookie Session Versioning"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 4 and 5 indicate that URI Path versioning (e.g., /v1/products) is the most straightforward, explicit, and easy to test/cache in browsers, making it the most widely adopted industry standard. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q163",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "Why are pagination and sorting critical in enterprise RESTful web services according to slide 6?",
    "options": [
      {
        "id": "A",
        "text": "They convert relational database tables into NoSQL collections automatically."
      },
      {
        "id": "B",
        "text": "They prevent performance degradation, excessive memory consumption, and network saturation when handling large volumes of data."
      },
      {
        "id": "C",
        "text": "They eliminate the need for HTTP status codes on server responses."
      },
      {
        "id": "D",
        "text": "They force all client requests to run synchronously on a single thread."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 explains that returning thousands or millions of records in a single payload causes severe performance bottlenecks, high server memory usage, and UI freezing; pagination divides data into manageable chunks, while sorting organizes records predictably. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 6)"
  },
  {
    "id": "sba301-q164",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "multiple",
    "question": "In Spring Data JPA, what is the core architectural difference between returning a Page<T> and returning a Slice<T> from a repository method as detailed in slide 8? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Page<T> executes an extra COUNT query to know the total number of elements and pages available."
      },
      {
        "id": "B",
        "text": "Slice<T> only knows whether a next slice is available without knowing the total element count, avoiding the expensive COUNT query."
      },
      {
        "id": "C",
        "text": "Slice<T> is more performance-efficient for massive datasets where infinite scrolling is used instead of numbered page buttons."
      },
      {
        "id": "D",
        "text": "Page<T> does not support sorting, whereas Slice<T> supports sorting."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 8 explains that Page<T> triggers a SELECT COUNT(*) query to calculate total elements and total pages, which can be expensive on large tables. Slice<T> simply fetches pageSize + 1 records to determine hasNext(), saving database overhead. Both support sorting. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 8)"
  },
  {
    "id": "sba301-q165",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "How is a Pageable instance instantiated in Spring Data JPA with a page index, page size, and sorting criteria based on slide 9?",
    "options": [
      {
        "id": "A",
        "text": "Pageable pageable = new Pageable(0, 10);"
      },
      {
        "id": "B",
        "text": "Pageable pageable = PageRequest.of(page, size, Sort.by(\"price\").descending());"
      },
      {
        "id": "C",
        "text": "Pageable pageable = SpringData.createPagination(page, size, \"price_desc\");"
      },
      {
        "id": "D",
        "text": "Pageable pageable = new PageRequest(page, size);"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 9 explicitly shows using the static factory method PageRequest.of(pageNumber, pageSize, Sort.by(\"field\").descending()) to build a Pageable object. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 9)"
  },
  {
    "id": "sba301-q166",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "In Spring Data, what is the default zero-based index convention for the page parameter in PageRequest.of(page, size)?",
    "options": [
      {
        "id": "A",
        "text": "The first page is represented by index 0."
      },
      {
        "id": "B",
        "text": "The first page is represented by index 1."
      },
      {
        "id": "C",
        "text": "The first page is represented by index -1."
      },
      {
        "id": "D",
        "text": "The index depends entirely on the client's operating system."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 9 emphasizes that Spring Data pagination is zero-based: page 0 represents the first page of results. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 9)"
  },
  {
    "id": "sba301-q167",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "multiple",
    "question": "Consider the sorting class org.springframework.data.domain.Sort. Which of the following expressions represent valid sorting declarations shown in slides 10 and 11? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Sort.by(\"name\").ascending()"
      },
      {
        "id": "B",
        "text": "Sort.by(\"price\").descending()"
      },
      {
        "id": "C",
        "text": "Sort.by(\"category\").ascending().and(Sort.by(\"price\").descending())"
      },
      {
        "id": "D",
        "text": "Sort.by(Sort.Direction.DESC, \"createDate\")"
      },
      {
        "id": "E",
        "text": "Sort.fromSql(\"ORDER BY price DESC\")"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 10 and 11 illustrate building sorting criteria with Sort.by(), chaining using .and(), and passing direction enumerations like Sort.Direction.DESC. Raw SQL order clauses (option E) are not used with the Sort domain object. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slides 10, 11)"
  },
  {
    "id": "sba301-q168",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "In the testing pyramid presented on slide 14, what are the three standard levels of automated testing arranged from base (fastest, most numerous) to apex (slowest, fewest)?",
    "options": [
      {
        "id": "A",
        "text": "System Testing, User Acceptance Testing, Security Testing"
      },
      {
        "id": "B",
        "text": "Unit Testing, Integration Testing, End-to-End (E2E) Testing"
      },
      {
        "id": "C",
        "text": "Alpha Testing, Beta Testing, Gamma Testing"
      },
      {
        "id": "D",
        "text": "Smoke Testing, Stress Testing, Load Testing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 illustrates the classical Testing Pyramid: Unit Tests form the broad foundation (fast, isolated), Integration Tests occupy the middle layer (component interaction), and End-to-End (E2E) / UI Tests form the apex. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 14)"
  },
  {
    "id": "sba301-q169",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "What is the primary characteristic of a \"Unit Test\" according to slide 15?",
    "options": [
      {
        "id": "A",
        "text": "Testing the deployed application inside a real browser by simulating user clicks."
      },
      {
        "id": "B",
        "text": "Testing an individual class or method in complete isolation, replacing all external dependencies with mocks or stubs."
      },
      {
        "id": "C",
        "text": "Testing the physical throughput of the database network adapter."
      },
      {
        "id": "D",
        "text": "Testing whether third-party payment gateways process credit card charges."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 15 defines Unit Tests as isolated tests verifying a single unit of logic (such as a service method) independently of databases, networks, or web containers, using test doubles (mocks). (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 15)"
  },
  {
    "id": "sba301-q170",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "multiple",
    "question": "According to slides 16–18, which testing frameworks and libraries are part of the standard spring-boot-starter-test dependency bundle? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "JUnit 5 (Jupiter engine for test execution and assertions)"
      },
      {
        "id": "B",
        "text": "Mockito (mocking framework for creating and configuring test doubles)"
      },
      {
        "id": "C",
        "text": "AssertJ (fluent assertion library)"
      },
      {
        "id": "D",
        "text": "MockMvc (library for testing Spring MVC controllers without starting a full HTTP server)"
      },
      {
        "id": "E",
        "text": "Selenium Grid standalone server"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 16–18 outline that spring-boot-starter-test automatically imports JUnit 5, Mockito, AssertJ, Hamcrest, JSONassert, and Spring Test / MockMvc. Selenium is not part of the standard starter. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slides 16, 17, 18)"
  },
  {
    "id": "sba301-q171",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "What is the effect of placing @SpringBootTest on an integration test class according to slide 19?",
    "options": [
      {
        "id": "A",
        "text": "It compiles the ReactJS bundle before executing tests."
      },
      {
        "id": "B",
        "text": "It bootstraps the complete Spring ApplicationContext, wiring all beans and configurations just like in production."
      },
      {
        "id": "C",
        "text": "It mocks all database tables into in-memory CSV files."
      },
      {
        "id": "D",
        "text": "It disables all Spring security filters permanently."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 notes that @SpringBootTest loads the entire Spring application context, providing full integration testing capabilities across all layers. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 19)"
  },
  {
    "id": "sba301-q172",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "Which focused test slice annotation is used to test ONLY the web/controller layer in isolation without loading the rest of the application context?",
    "options": [
      {
        "id": "A",
        "text": "@DataJpaTest"
      },
      {
        "id": "B",
        "text": "@WebMvcTest"
      },
      {
        "id": "C",
        "text": "@JsonTest"
      },
      {
        "id": "D",
        "text": "@RestClientTest"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 20 highlights @WebMvcTest, which limits context scanning to Spring MVC components (Controllers, ControllerAdvice, Converter), mocking service dependencies to test REST endpoints rapidly. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 20)"
  },
  {
    "id": "sba301-q173",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "What does the @MockBean annotation do when used in a Spring Boot test class according to slide 21?",
    "options": [
      {
        "id": "A",
        "text": "It creates an in-memory embedded MS SQL Server instance."
      },
      {
        "id": "B",
        "text": "It adds a Mockito mock to the Spring ApplicationContext, replacing any existing bean of the same type."
      },
      {
        "id": "C",
        "text": "It generates synthetic test data records inside the production database."
      },
      {
        "id": "D",
        "text": "It disables HTTP logging on the server console."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 21 explains that @MockBean configures a mock using Mockito and registers it directly inside the Spring ApplicationContext, allowing mocked responses to be injected into controllers under test. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 21)"
  },
  {
    "id": "sba301-q174",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "multiple",
    "question": "Consider testing a controller endpoint using MockMvc as shown in slide 23:\nmockMvc.perform(get(\"/api/v1/products/1\").accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andExpect(jsonPath(\"$.name\").value(\"Laptop\"));\nWhich statements correctly explain this snippet? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "mockMvc.perform(...) executes a simulated HTTP GET request to /api/v1/products/1."
      },
      {
        "id": "B",
        "text": "andExpect(status().isOk()) verifies that the response HTTP status code is 200."
      },
      {
        "id": "C",
        "text": "jsonPath(\"$.name\").value(\"Laptop\") inspects the JSON response body and asserts that the name field equals \"Laptop\"."
      },
      {
        "id": "D",
        "text": "This test launches a physical Tomcat server listening on port 8080 and makes a real socket call over the network adapter."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 23 illustrates using MockMvc to perform mock HTTP calls and verify status codes and JSONPath payloads without launching a real network server. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 23)"
  },
  {
    "id": "sba301-q175",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "What is the primary purpose of the @DataJpaTest slice annotation according to slide 26?",
    "options": [
      {
        "id": "A",
        "text": "To test the graphical user interface built with ReactJ"
      },
      {
        "id": "S",
        "text": ""
      },
      {
        "id": "B",
        "text": "To test JPA repositories in isolation, by default configuring an embedded in-memory database and enabling @Transactional rollback after each test."
      },
      {
        "id": "C",
        "text": "To benchmark network bandwidth between microservices."
      },
      {
        "id": "D",
        "text": "To test API versioning in controller classes."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 26 explains that @DataJpaTest is dedicated to testing the persistence layer (JPA repositories and entities). It configures an in-memory database, scans for @Entity classes, and rolls back transactions at the end of each test method. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 26)"
  },
  {
    "id": "sba301-q176",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "multiple",
    "question": "In Mockito, what is the difference between @Mock and @InjectMocks as demonstrated in slides 28 and 29? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@Mock creates a mock implementation of a dependency (e.g., ProductRepository)."
      },
      {
        "id": "B",
        "text": "@InjectMocks creates an instance of the class under test (e.g., ProductServiceImpl) and injects the created @Mock fields into it."
      },
      {
        "id": "C",
        "text": "Both @Mock and @InjectMocks launch embedded Tomcat web servers automatically."
      },
      {
        "id": "D",
        "text": "when(...).thenReturn(...) is used to define stubbed behavior on objects annotated with @Mock."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Slides 28 and 29 detail pure unit testing with Mockito: @Mock creates simulated dependencies, @InjectMocks instantiates the target service injecting those mocks, and when().thenReturn() sets up predefined return values. Neither interacts with a web server. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slides 28, 29)"
  },
  {
    "id": "sba301-q177",
    "subjectId": "sba301",
    "topic": "PART 12: Chapter 12. Versioning, Paging, Sorting and Testing.pptx",
    "type": "single",
    "question": "According to slide 32, what is the role of Testcontainers in modern Spring Boot integration testing?",
    "options": [
      {
        "id": "A",
        "text": "It compiles React JSX files inside lightweight Node containers."
      },
      {
        "id": "B",
        "text": "It provides lightweight, throwaway instances of common databases (e.g., PostgreSQL, MS SQL, MongoDB) running inside real Docker containers during test execution."
      },
      {
        "id": "C",
        "text": "It acts as an operating system kernel patch for JVM memory optimization."
      },
      {
        "id": "D",
        "text": "It replaces JUnit 5 assertions with manual console print statements."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 32 introduces Testcontainers as a powerful solution for running integration tests against real Dockerized instances of databases or message brokers, ensuring tests reflect production environments accurately without manual database setup. (Source: Chapter 12. Versioning, Paging, Sorting and Testing.pptx, slide 32)"
  },
  {
    "id": "sba301-q178",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "According to slide 3, what are the primary advantages of connecting RESTful web services to JPA in modern data-driven applications?",
    "options": [
      {
        "id": "A",
        "text": "It compiles Java bytecode directly into React components to bypass client-side rendering."
      },
      {
        "id": "B",
        "text": "It provides simplified data access by abstracting SQL/JDBC complexities, enhances performance via query/caching optimization, and maintains a clear separation of concerns between communication and persistence layers."
      },
      {
        "id": "C",
        "text": "It replaces relational databases with flat CSV files stored in the browser's local cache."
      },
      {
        "id": "D",
        "text": "It forces all HTTP requests to execute synchronously on a single physical operating system thread."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly outlines three key advantages: \"Simplified data access\" (object-oriented interaction abstracting SQL/JDBC), \"Enhanced performance\" (optimizing database queries and caching), and \"Clear separation of concerns\" (REST handles presentation/communication, while JPA manages persistence). (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 3)"
  },
  {
    "id": "sba301-q179",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "multiple",
    "question": "According to slides 4 and 5, which statements correctly describe the Java Persistence API (JPA) and Spring Data JPA? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "JPA is the standard specification for Object-Relational Mapping (ORM) in Java, offering an object-centric view of data."
      },
      {
        "id": "B",
        "text": "Spring Data JPA automatically derives corresponding JPQL queries based on repository method names."
      },
      {
        "id": "C",
        "text": "Spring Data JPA eliminates boilerplate data access code and provides seamless integration with Spring's dependency injection and transaction management."
      },
      {
        "id": "D",
        "text": "JPA requires developers to write manual JDBC connection pooling and raw SQL prepared statements for every basic CRUD operation."
      },
      {
        "id": "E",
        "text": "Spring Data JPA supports integration across various relational database engines."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slides 4 and 5 define JPA as the ORM standard and highlight Spring Data JPA's ability to derive queries from method names, eliminate boilerplate code, integrate with Spring transactions, and support various RDBMS engines. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q180",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "In the project setup outlined on slide 7, which dependencies and environment components are specified for building the Spring REST with JPA application?",
    "options": [
      {
        "id": "A",
        "text": "Spring Boot 3+, Spring Boot Web Starter, Spring Data JPA, MS SQL Server Driver, JDK 21+, and Maven 3.2+."
      },
      {
        "id": "B",
        "text": "Spring Boot 1.5, Apache Struts 2, MySQL Connector, JDK 8, and Ant."
      },
      {
        "id": "C",
        "text": "Node.js runtime, Express.js framework, MongoDB Driver, and npm."
      },
      {
        "id": "D",
        "text": "Python Flask, SQLAlchemy ORM, SQLite3 driver, and pip."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 7 specifies the exact project stack: Spring Boot 3+, Spring Boot Web Starter, Spring Data JPA, Database Driver (MS SQLServer), JDK 21+, Maven 3.2+, IntelliJ IDEA, and Microsoft SQL Server. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 7)"
  },
  {
    "id": "sba301-q181",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "Consider the application.properties configuration shown on slide 9:\nspring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver\nspring.datasource.url=jdbc:sqlserver://localhost:1433;encrypt=true;trustServerCertificate=true;databaseName=Orchid\nspring.jpa.hibernate.ddl-auto=update\nWhat does the setting spring.jpa.hibernate.ddl-auto=update do when the application launches?",
    "options": [
      {
        "id": "A",
        "text": "It drops all tables and deletes all existing records on every application restart."
      },
      {
        "id": "B",
        "text": "It updates the database schema automatically to match the entity domain model definitions without deleting existing data."
      },
      {
        "id": "C",
        "text": "It locks the database against any structural changes or record insertions."
      },
      {
        "id": "D",
        "text": "It rolls back all previous Git commits in the repository."
      }
    ],
    "correctAnswer": "B",
    "explanation": "In Hibernate/JPA, ddl-auto=update inspects the mapped entities and automatically updates or alters the database table structure to reflect entity changes without dropping tables or deleting existing data. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 9)"
  },
  {
    "id": "sba301-q182",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "multiple",
    "question": "Which JPA entity annotations are used in Orchid.java (slides 10 and 11) to map the domain class to the database table? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@Entity (marks the class as a persistent JPA entity)"
      },
      {
        "id": "B",
        "text": "@Table(name = \"orchid\") (specifies the target database table name)"
      },
      {
        "id": "C",
        "text": "@Id (identifies the primary key property)"
      },
      {
        "id": "D",
        "text": "@GeneratedValue(strategy = GenerationType.IDENTITY) (specifies database identity column generation)"
      },
      {
        "id": "E",
        "text": "@Column (maps Java fields to specific database columns such as orchid_id, orchid_name)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slides 10 and 11 demonstrate all of these annotations: @Entity, @Table(name = \"orchid\"), @Id, @GeneratedValue(strategy = GenerationType.IDENTITY), and @Column(name = \"...\") mapping fields like orchidID, orchidName, isNatural, etc. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slides 10, 11)"
  },
  {
    "id": "sba301-q183",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "How is the Data Access Layer interface IOrchidRepository declared in slide 12 to provide automated CRUD operations?",
    "options": [
      {
        "id": "A",
        "text": "public class IOrchidRepository implements JdbcTemplate"
      },
      {
        "id": "B",
        "text": "public interface IOrchidRepository extends JpaRepository<Orchid, Integer>"
      },
      {
        "id": "C",
        "text": "public abstract class IOrchidRepository extends HibernateDaoSupport"
      },
      {
        "id": "D",
        "text": "public interface IOrchidRepository extends Serializable"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 12 shows the complete interface declaration: public interface IOrchidRepository extends JpaRepository<Orchid, Integer> {}. Because it extends JpaRepository, Spring Data JPA automatically provides ready-to-use CRUD implementations. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 12)"
  },
  {
    "id": "sba301-q184",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "multiple",
    "question": "According to slides 13 and 14, why is an intermediate Service Layer (IOrchidService and OrchidService) introduced between the REST Controller and the Repository? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "To encapsulate core business logic, validation, and transaction handling."
      },
      {
        "id": "B",
        "text": "To keep the REST Controller clean and strictly focused on HTTP communication and presentation."
      },
      {
        "id": "C",
        "text": "To prevent direct exposure of data persistence mechanics to the web tier."
      },
      {
        "id": "D",
        "text": "To eliminate the need for an underlying database."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 13 and 14 explain that the Service layer defines business logic interfaces and implementations, shielding persistence details and keeping controllers lightweight and decoupled. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slides 13, 14)"
  },
  {
    "id": "sba301-q185",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "What method from JpaRepository is called inside OrchidService.java (slide 14) to retrieve all orchid records from the database?",
    "options": [
      {
        "id": "A",
        "text": "iOrchidRepository.selectQueryAll()"
      },
      {
        "id": "B",
        "text": "iOrchidRepository.findAll()"
      },
      {
        "id": "C",
        "text": "iOrchidRepository.getAllRecords()"
      },
      {
        "id": "D",
        "text": "iOrchidRepository.executeFetch()"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 shows the implementation: public List<Orchid> getAllOrchids() { return iOrchidRepository.findAll(); }. findAll() is the standard Spring Data JPA method for fetching all entity instances. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 14)"
  },
  {
    "id": "sba301-q186",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "What method from JpaRepository is utilized in OrchidService.java to insert a new orchid record into the database?",
    "options": [
      {
        "id": "A",
        "text": "iOrchidRepository.save(orchid)"
      },
      {
        "id": "B",
        "text": "iOrchidRepository.persistNew(orchid)"
      },
      {
        "id": "C",
        "text": "iOrchidRepository.insertRow(orchid)"
      },
      {
        "id": "D",
        "text": "iOrchidRepository.putItem(orchid)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 14 shows public Orchid insertOrchid(Orchid orchid) { return iOrchidRepository.save(orchid); }. In Spring Data JPA, save() handles both inserting new entities and persisting updates. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 14)"
  },
  {
    "id": "sba301-q187",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "multiple",
    "question": "Which Spring annotations are placed at the class level of OrchidController.java as shown in slide 24? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@RestController (marks class as a REST controller returning serialized responses)"
      },
      {
        "id": "B",
        "text": "@CrossOrigin (enables Cross-Origin Resource Sharing for frontend clients)"
      },
      {
        "id": "C",
        "text": "@RequestMapping(\"/orchids\") (defines base URL path for all endpoints in the controller)"
      },
      {
        "id": "D",
        "text": "@Service (registers the class as a business service bean)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 24 shows OrchidController decorated with @RestController, @CrossOrigin, and @RequestMapping(\"/orchids\"). @Service is placed on OrchidService, not on controllers. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 24)"
  },
  {
    "id": "sba301-q188",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "Consider the saveOrchid method from slides 21 and 24:\n@PostMapping(\"/\")\n@ResponseStatus(HttpStatus.CREATED)\npublic Orchid saveOrchid(@RequestBody Orchid orchid) { return iOrchidService.insertOrchid(orchid); }\nWhat HTTP response status code does the client receive upon a successful POST request?",
    "options": [
      {
        "id": "A",
        "text": "200 OK"
      },
      {
        "id": "B",
        "text": "201 Created"
      },
      {
        "id": "C",
        "text": "204 No Content"
      },
      {
        "id": "D",
        "text": "202 Accepted"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 21 and 24 specify @ResponseStatus(HttpStatus.CREATED), which explicitly sets the returned HTTP status code to 201 Created. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slides 21, 24)"
  },
  {
    "id": "sba301-q189",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "How does the updateOrchid endpoint in slide 22 extract both the target orchid ID from the URI and the updated entity data from the request payload?",
    "options": [
      {
        "id": "A",
        "text": "By combining @PathVariable int id with @RequestBody Orchid o."
      },
      {
        "id": "B",
        "text": "By extracting both values exclusively through @RequestParam."
      },
      {
        "id": "C",
        "text": "By reading raw cookies sent in the HTTP header."
      },
      {
        "id": "D",
        "text": "By querying the browser's sessionStorage."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 22 shows the endpoint mapping: @PutMapping(\"/{id}\") public ResponseEntity<Orchid> updateOrchid(@PathVariable int id, @RequestBody Orchid o), which extracts id from the path and the updated JSON body into Orchid o. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 22)"
  },
  {
    "id": "sba301-q190",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "In slide 23, what does the deleteOrchid method return in its ResponseEntity upon successfully deleting an orchid with ID id?",
    "options": [
      {
        "id": "A",
        "text": "An integer representing the remaining number of records in the database."
      },
      {
        "id": "B",
        "text": "A ResponseEntity.ok(\"Deleted!!\") response body containing the confirmation string \"Deleted!!\"."
      },
      {
        "id": "C",
        "text": "A redirected URL to the home page."
      },
      {
        "id": "D",
        "text": "A null pointer exception."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 23 shows the deletion implementation: iOrchidService.deleteOrchid(id); return ResponseEntity.ok(\"Deleted!!\");. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 23)"
  },
  {
    "id": "sba301-q191",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "multiple",
    "question": "According to slide 25, which tools and extensions are listed for accessing, testing, and interacting with RESTful web service endpoints? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Postman (standalone GUI and browser extension)"
      },
      {
        "id": "B",
        "text": "Swagger UI"
      },
      {
        "id": "C",
        "text": "Insomnia"
      },
      {
        "id": "D",
        "text": "RESTClient (Firefox extension)"
      },
      {
        "id": "E",
        "text": "Adobe Photoshop"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 25 lists browser extensions (Postman, RESTClient) and graphical user interfaces (Postman, Swagger UI, Insomnia) for testing REST APIs. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 25)"
  },
  {
    "id": "sba301-q192",
    "subjectId": "sba301",
    "topic": "PART 13: Chapter 13. Connecting RESTful Web Service to JPA.pptx",
    "type": "single",
    "question": "According to slide 27 (\"Additional considerations\"), what four key architectural aspects should be addressed to ensure a production-ready RESTful web service connected to JPA?",
    "options": [
      {
        "id": "A",
        "text": "CSS animations, HTML canvas rendering, GPU acceleration, WebGL shaders."
      },
      {
        "id": "B",
        "text": "Error Handling (informative error responses), Security (Spring Security), Documentation (Swagger), and Testing (Unit and Integration tests)."
      },
      {
        "id": "C",
        "text": "DNS domain registration, SSL certificate purchasing, email marketing, SEO ranking."
      },
      {
        "id": "D",
        "text": "Local storage partitioning, cookie encryption, browser history clearing, manual thread pausing."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 27 explicitly lists four essential considerations for completing the API: Error Handling, Security, Documentation, and Testing. (Source: Chapter 13. Connecting RESTful Web Service to JPA.pptx, slide 27)"
  },
  {
    "id": "sba301-q193",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "According to slide 3, what is the fundamental definition of a Single Page Application (SPA)?",
    "options": [
      {
        "id": "A",
        "text": "A web application consisting of separate static HTML documents for every page that are fully reloaded on each link click."
      },
      {
        "id": "B",
        "text": "A web application that loads a single HTML page and dynamically updates content as the user interacts with the app, without requiring full page reloads."
      },
      {
        "id": "C",
        "text": "A desktop-only application compiled to native x86 machine code that executes outside web browsers."
      },
      {
        "id": "D",
        "text": "A server-side Java Servlet application rendering JSP templates on every user request."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines an SPA as a web application that loads a single HTML page and dynamically updates content without requiring full page reloads. (Source: Chapter 14. Create Single Page Application.pptx, slide 3)"
  },
  {
    "id": "sba301-q194",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "multiple",
    "question": "Based on the architectural comparison in slide 4, what key differences distinguish a Traditional Web Application from a Single Page Application? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "In traditional apps, navigating to a new view sends an HTTP request to the server that returns an entire new HTML page (index.html, contact.html)."
      },
      {
        "id": "B",
        "text": "In an SPA, the initial request returns a minimal HTML file, CSS, and a JavaScript bundle; subsequent interactions only exchange data (JSON) via AJAX/Fetch."
      },
      {
        "id": "C",
        "text": "In traditional apps, the browser re-renders the complete document on every interaction, causing noticeable page reloads."
      },
      {
        "id": "D",
        "text": "In an SPA, the server renders and sends full HTML templates for every button click."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 4 contrasts the lifecycle: traditional apps request and reload full HTML documents on each navigation, whereas SPAs retrieve assets once and dynamically fetch raw data (JSON) via AJAX to update specific UI sections. (Source: Chapter 14. Create Single Page Application.pptx, slide 4)"
  },
  {
    "id": "sba301-q195",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "What client-side technology stack is used in the frontend tier of the SPA architecture demonstrated in slides 5 and 6?",
    "options": [
      {
        "id": "A",
        "text": "Angular, RxJS, and Material-UI"
      },
      {
        "id": "B",
        "text": "ReactJS, Vite, Axios, React Router, and React-Bootstrap"
      },
      {
        "id": "C",
        "text": "Vue.js, Vuex, and Vuetify"
      },
      {
        "id": "D",
        "text": "jQuery, Vanilla JS, and pure CSS3 floats"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 5, 6, and 10 outline the integrated technology stack: ReactJS as the UI library, Vite as the build tool, Axios for HTTP requests, React Router for client-side navigation, and React-Bootstrap for responsive UI components. (Source: Chapter 14. Create Single Page Application.pptx, slides 5, 6, 10)"
  },
  {
    "id": "sba301-q196",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "What role does the backend service play in the full-stack SPA architecture shown in slide 6?",
    "options": [
      {
        "id": "A",
        "text": "It pre-renders the entire DOM tree and transmits it as static HTML files on every interaction."
      },
      {
        "id": "B",
        "text": "It provides a RESTful API built with Spring Boot and Spring Data JPA to manage persistence with MS SQL Server and exchange JSON data."
      },
      {
        "id": "C",
        "text": "It executes client-side routing within the user's browser."
      },
      {
        "id": "D",
        "text": "It directly handles user mouse clicks and form animations."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 illustrates the architecture: the client (ReactJS) communicates over HTTP via RESTful endpoints with a Spring Boot backend, which utilizes Spring Data JPA to query and persist records in MS SQL Server. (Source: Chapter 14. Create Single Page Application.pptx, slide 6)"
  },
  {
    "id": "sba301-q197",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "multiple",
    "question": "According to slide 7, what are the primary advantages of building a Single Page Application? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Fast and responsive user experience due to eliminating full-page reloads."
      },
      {
        "id": "B",
        "text": "Reduced bandwidth usage because only raw data (JSON) is transmitted over the network rather than full HTML documents."
      },
      {
        "id": "C",
        "text": "Rich, fluid, desktop-like user interactions (smooth transitions, real-time feedback)."
      },
      {
        "id": "D",
        "text": "Clear separation of concerns between client (presentation) and server (data & business logic)."
      },
      {
        "id": "E",
        "text": "Immediate, flawless search engine optimization (SEO) without any server-side rendering setup."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 7 lists fast and responsive UX, reduced bandwidth, rich interactions, and clear separation of concerns as key benefits. Option E is false because SEO challenges are a primary disadvantage of client-rendered SPAs. (Source: Chapter 14. Create Single Page Application.pptx, slide 7)"
  },
  {
    "id": "sba301-q198",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "multiple",
    "question": "Which of the following are recognized challenges or trade-offs of Single Page Applications as highlighted in slide 8? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Slower initial page load time because the browser must download the JavaScript bundle before rendering."
      },
      {
        "id": "B",
        "text": "Search Engine Optimization (SEO) challenges due to search crawlers struggling with client-side JavaScript execution."
      },
      {
        "id": "C",
        "text": "Higher client-side memory usage over extended user sessions."
      },
      {
        "id": "D",
        "text": "Complete inability to communicate with relational databases via REST APIs."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 8 identifies initial load latency (large JS bundles), SEO complexities, and browser memory consumption as common SPA hurdles. Option D is incorrect because SPAs routinely communicate with backend databases via RESTful services. (Source: Chapter 14. Create Single Page Application.pptx, slide 8)"
  },
  {
    "id": "sba301-q199",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "In slide 9, how does Client-Side Routing enable navigation within an SPA without causing browser reloads?",
    "options": [
      {
        "id": "A",
        "text": "It sends an HTTP GET request to the web server for each route to receive a new index.html."
      },
      {
        "id": "B",
        "text": "It intercepts browser navigation events and dynamically mounts or unmounts React components based on the URL path using the browser's History AP"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "C",
        "text": "It forces the operating system to open a new browser tab for every route change."
      },
      {
        "id": "D",
        "text": "It recompiles the Java backend application on the server."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 9 explains that client-side routing (via React Router) intercepts navigation, updates the browser URL through the HTML5 History API, and mounts/unmounts corresponding components in the Virtual DOM without triggering a browser reload. (Source: Chapter 14. Create Single Page Application.pptx, slide 9)"
  },
  {
    "id": "sba301-q200",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "What is the primary purpose of the NavBar component placed above <Routes> in the App.jsx layout demonstrated in slide 11?",
    "options": [
      {
        "id": "A",
        "text": "To block unauthenticated users from clicking on hyperlinks."
      },
      {
        "id": "B",
        "text": "To remain permanently visible and persistent across all page views while child components switch below it."
      },
      {
        "id": "C",
        "text": "To force a hard browser refresh whenever a user clicks a menu link."
      },
      {
        "id": "D",
        "text": "To establish direct TCP socket connections with MS SQL Server."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 shows <NavBar /> placed outside <Routes>, ensuring the header/navigation bar stays mounted and persistent while the route container below swaps components dynamically. (Source: Chapter 14. Create Single Page Application.pptx, slide 11)"
  },
  {
    "id": "sba301-q201",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "In the demo application on slide 12, what hook does the ListOfOrchids component use to trigger data fetching from the Spring Boot REST API when the component first mounts?",
    "options": [
      {
        "id": "A",
        "text": "useReducer"
      },
      {
        "id": "B",
        "text": "useParams"
      },
      {
        "id": "C",
        "text": "useEffect with an empty dependency array []"
      },
      {
        "id": "D",
        "text": "useNavigate"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 12 shows fetching data using Axios inside a useEffect(() => { fetchData(); }, []) hook with an empty dependency array, ensuring it executes once when the component mounts. (Source: Chapter 14. Create Single Page Application.pptx, slide 12)"
  },
  {
    "id": "sba301-q202",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "How does the DetailOrchid component retrieve the specific orchid ID from the URL path (/detail/:id) based on slide 13?",
    "options": [
      {
        "id": "A",
        "text": "const { id } = useParams(); from react-router-dom"
      },
      {
        "id": "B",
        "text": "const id = window.localStorage.getItem('orchidId');"
      },
      {
        "id": "C",
        "text": "const id = document.getElementById('orchidId').value;"
      },
      {
        "id": "D",
        "text": "const id = Axios.getRouteParam();"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 13 demonstrates using the useParams() hook from React Router to extract the dynamic route parameter id from the URL to fetch the specific orchid's details. (Source: Chapter 14. Create Single Page Application.pptx, slide 13)"
  },
  {
    "id": "sba301-q203",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "multiple",
    "question": "Which HTTP methods are implemented in the Spring Boot backend controller (OrchidController.java) to support the full CRUD operations of the demo SPA as shown in slides 14 and 15? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "GET (for fetching all orchids or a single orchid by ID)"
      },
      {
        "id": "B",
        "text": "POST (for creating a new orchid record)"
      },
      {
        "id": "C",
        "text": "PUT (for updating an existing orchid record)"
      },
      {
        "id": "D",
        "text": "DELETE (for removing an orchid record by ID)"
      },
      {
        "id": "E",
        "text": "PATCH_BULK (for reformatting database disk clusters)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 14 and 15 show the controller exposing endpoints mapped to @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping to support complete CRUD functionality. (Source: Chapter 14. Create Single Page Application.pptx, slides 14, 15)"
  },
  {
    "id": "sba301-q204",
    "subjectId": "sba301",
    "topic": "PART 14: Chapter 14. Create Single Page Application.pptx",
    "type": "single",
    "question": "Why is the @CrossOrigin annotation required on the Spring Boot OrchidController in this full-stack setup?",
    "options": [
      {
        "id": "A",
        "text": "To convert Java entity objects into binary files."
      },
      {
        "id": "B",
        "text": "To permit the ReactJS frontend (running on a different origin, e.g., http://localhost:5173) to make API requests to the Spring Boot backend (http://localhost:8080) without being blocked by browser CORS policy."
      },
      {
        "id": "C",
        "text": "To encrypt all SQL queries transmitted between Spring Boot and MS SQL Server."
      },
      {
        "id": "D",
        "text": "To disable all Spring Security filters permanently."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Because the React client (Vite on port 5173) and Spring Boot server (port 8080) run on different ports/origins, browsers enforce CORS restrictions. Adding @CrossOrigin instructs the server to send the appropriate headers allowing requests from the frontend origin. (Source: Chapter 14. Create Single Page Application.pptx, slide 14)"
  },
  {
    "id": "sba301-q205",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "What is the overarching architecture of the integrated full-stack CRUD application presented in Chapter 15?",
    "options": [
      {
        "id": "A",
        "text": "A monolithic PHP and Apache server rendering server-side templates with MySQ"
      },
      {
        "id": "L",
        "text": ""
      },
      {
        "id": "B",
        "text": "A decoupled two-tier architecture comprising a Spring Boot REST API backend with MS SQL Server and a ReactJS frontend built with Vite."
      },
      {
        "id": "C",
        "text": "A client-only application storing data exclusively in browser LocalStorage without a backend server."
      },
      {
        "id": "D",
        "text": "An Android mobile application communicating via Bluetooth with an embedded micro-controller."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The slides detail a full-stack system consisting of a Spring Boot REST API backend connecting to MS SQL Server via Spring Data JPA, and a separate ReactJS single-page frontend scaffolded with Vite and styled with React-Bootstrap. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q206",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "multiple",
    "question": "Which libraries and technologies are explicitly listed in the slides for building the ReactJS client-side application? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Vite (build tool and development server)"
      },
      {
        "id": "B",
        "text": "React Router DOM (client-side routing and navigation)"
      },
      {
        "id": "C",
        "text": "Axios (HTTP client for asynchronous REST API communication)"
      },
      {
        "id": "D",
        "text": "React-Bootstrap and Bootstrap CSS (responsive UI component library)"
      },
      {
        "id": "E",
        "text": "jQuery Mobile"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 4, 11, and 12 highlight Vite, React Router DOM, Axios, and React-Bootstrap (along with Bootstrap CSS) as the core frontend stack. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slides 4, 11, 12)"
  },
  {
    "id": "sba301-q207",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "In the backend application.properties configuration, which property ensures that Hibernate automatically updates the MS SQL Server database schema based on JPA entity annotations?",
    "options": [
      {
        "id": "A",
        "text": "spring.jpa.hibernate.ddl-auto=update"
      },
      {
        "id": "B",
        "text": "spring.datasource.auto-commit=true"
      },
      {
        "id": "C",
        "text": "spring.jpa.generate-ddl=false"
      },
      {
        "id": "D",
        "text": "hibernate.dialect.storage_engine=innodb"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 7 specifies spring.jpa.hibernate.ddl-auto=update, which tells Hibernate to compare entity models with existing database tables and apply incremental schema updates on application launch. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 7)"
  },
  {
    "id": "sba301-q208",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "Consider the Orchid JPA entity class on slide 8. Which annotation marks the orchidID field as the primary key with auto-increment behavior in MS SQL Server?",
    "options": [
      {
        "id": "A",
        "text": "@Id together with @GeneratedValue(strategy = GenerationType.IDENTITY)"
      },
      {
        "id": "B",
        "text": "@PrimaryKey(autoIncrement = true)"
      },
      {
        "id": "C",
        "text": "@Column(unique = true, nullable = false)"
      },
      {
        "id": "D",
        "text": "@SequenceGenerator(name = \"orchid_seq\")"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 8 demonstrates mapping orchidID with @Id to designate it as the primary key and @GeneratedValue(strategy = GenerationType.IDENTITY) to map to SQL Server's IDENTITY auto-incrementing column. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 8)"
  },
  {
    "id": "sba301-q209",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "How is the data repository interface defined in the Spring Boot backend to provide standard CRUD operations for Orchid entities?",
    "options": [
      {
        "id": "A",
        "text": "public interface OrchidRepository extends JpaRepository<Orchid, Integer>"
      },
      {
        "id": "B",
        "text": "public class OrchidRepository implements CrudRepository<Orchid>"
      },
      {
        "id": "C",
        "text": "public interface OrchidRepository extends MongoRepository<Orchid, String>"
      },
      {
        "id": "D",
        "text": "public abstract class OrchidRepository extends JdbcDaoSupport"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 9 shows public interface OrchidRepository extends JpaRepository<Orchid, Integer>, which leverages Spring Data JPA to provide out-of-the-box methods such as findAll(), findById(), save(), and deleteById(). (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 9)"
  },
  {
    "id": "sba301-q210",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "multiple",
    "question": "Which annotations are applied to the backend OrchidController class to enable cross-origin requests and define the base endpoint URL? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@RestController"
      },
      {
        "id": "B",
        "text": "@CrossOrigin"
      },
      {
        "id": "C",
        "text": "@RequestMapping(\"/api/v1/orchids\") (or @RequestMapping(\"/orchids\"))"
      },
      {
        "id": "D",
        "text": "@EnableWebSecurity"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 10 demonstrates configuring the REST controller using @RestController (combining @Controller and @ResponseBody), @CrossOrigin, and @RequestMapping. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 10)"
  },
  {
    "id": "sba301-q211",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "In the backend OrchidController, which method annotation and response entity pattern are used to handle updating an existing orchid?",
    "options": [
      {
        "id": "A",
        "text": "@GetMapping(\"/{id}\") returning HttpStatus.OK"
      },
      {
        "id": "B",
        "text": "@PutMapping(\"/{id}\") accepting @PathVariable int id and @RequestBody Orchid orchid"
      },
      {
        "id": "C",
        "text": "@PostMapping(\"/update\") accepting @RequestParam int id"
      },
      {
        "id": "D",
        "text": "@DeleteMapping(\"/{id}\") returning HttpStatus.NO_CONTENT"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 shows the update endpoint mapped to @PutMapping(\"/{id}\"), binding the ID from the URL path via @PathVariable and deserializing the updated JSON data via @RequestBody. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 10)"
  },
  {
    "id": "sba301-q212",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "What command is used in the frontend setup to initialize a React project using Vite in the terminal?",
    "options": [
      {
        "id": "A",
        "text": "npm create vite@latest client -- --template react"
      },
      {
        "id": "B",
        "text": "npx create-react-app client"
      },
      {
        "id": "C",
        "text": "vite init react client"
      },
      {
        "id": "D",
        "text": "npm install react-cli -g"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 11 instructs developers to scaffold the frontend by executing npm create vite@latest client -- --template react. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 11)"
  },
  {
    "id": "sba301-q213",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "Where should the backend base URL (e.g., http://localhost:8080/api/v1/orchids) be stored in a Vite project to maintain clean environment configuration?",
    "options": [
      {
        "id": "A",
        "text": "In a .env file prefixed with VITE_ (e.g., VITE_API_URL=...) and accessed via import.meta.env.VITE_API_UR"
      },
      {
        "id": "L",
        "text": ""
      },
      {
        "id": "B",
        "text": "Hardcoded directly inside every component's render() method."
      },
      {
        "id": "C",
        "text": "In package.json under the \"scripts\" object."
      },
      {
        "id": "D",
        "text": "In an external XML configuration file in the public/ directory."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 13 demonstrates creating a .env file with VITE_API_URL and accessing it in Axios service modules via import.meta.env.VITE_API_URL. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 13)"
  },
  {
    "id": "sba301-q214",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "multiple",
    "question": "In the React frontend component ListOfOrchids.jsx, what operations occur when a user clicks the \"Delete\" button for a specific orchid? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "A confirmation dialog (or modal) verifies user intent before executing deletion."
      },
      {
        "id": "B",
        "text": "An asynchronous axios.delete(`${API_URL}/${id}`) request is dispatched to the Spring Boot REST AP"
      },
      {
        "id": "I",
        "text": ""
      },
      {
        "id": "C",
        "text": "On successful deletion, the local state array of orchids is filtered or re-fetched to update the UI without reloading the browser."
      },
      {
        "id": "D",
        "text": "The entire browser window automatically reloads the index.html file from scratch."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 16 and 17 illustrate handling deletion: confirming action, issuing an HTTP DELETE via Axios, and updating the local React state so the table dynamically reflects changes without a full page reload. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slides 16, 17)"
  },
  {
    "id": "sba301-q215",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "When submitting a new orchid via the CreateOrchid modal or form component, which HTTP method is called via Axios, and what payload format is sent?",
    "options": [
      {
        "id": "A",
        "text": "axios.get with binary multipart attachments."
      },
      {
        "id": "B",
        "text": "axios.post(API_URL, formData) sending a JSON object in the request body."
      },
      {
        "id": "C",
        "text": "axios.delete with URL parameters."
      },
      {
        "id": "D",
        "text": "axios.head with custom cookies."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 18 shows the creation handler calling axios.post(baseUrl, newOrchid) to deliver the form data as a JSON payload in the request body, which the backend deserializes and saves. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 18)"
  },
  {
    "id": "sba301-q216",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "How does the EditOrchid component populate its input fields with existing orchid details when mounted?",
    "options": [
      {
        "id": "A",
        "text": "It scans the browser's DOM using document.querySelectorAll('input')."
      },
      {
        "id": "B",
        "text": "It extracts the orchid ID using useParams(), fetches the current entity via axios.get(`${API_URL}/${id}`), and initializes form state with the response data."
      },
      {
        "id": "C",
        "text": "It generates random values using JavaScript's Math.random()."
      },
      {
        "id": "D",
        "text": "It waits for the user to type in all fields from memory."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 demonstrates that the update/edit view retrieves the :id parameter from the route via useParams(), executes a GET request inside useEffect() to load existing attributes, and stores them in component state to populate the form fields. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 19)"
  },
  {
    "id": "sba301-q217",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "multiple",
    "question": "Which React-Bootstrap components are used across the CRUD views to build a clean, responsive layout? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "<Table striped bordered hover> for displaying the orchid inventory list"
      },
      {
        "id": "B",
        "text": "<Modal> and <Modal.Body> for popup creation/edit dialogs or confirmation alerts"
      },
      {
        "id": "C",
        "text": "<Button variant=\"...\"> for triggering Add, Edit, and Delete actions"
      },
      {
        "id": "D",
        "text": "<Form.Group>, <Form.Label>, and <Form.Control> for input forms"
      },
      {
        "id": "E",
        "text": "<canvas_webgl> for rendering 3D graphics"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 15–20 showcase tables (<Table>), modal dialogs (<Modal>), action buttons (<Button>), and form controls (<Form>) from React-Bootstrap. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slides 15, 16, 17, 20)"
  },
  {
    "id": "sba301-q218",
    "subjectId": "sba301",
    "topic": "PART 15: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx",
    "type": "single",
    "question": "In the root routing configuration (App.jsx), what component wraps the routes to ensure client-side navigation operates smoothly?",
    "options": [
      {
        "id": "A",
        "text": "<BrowserRouter>"
      },
      {
        "id": "B",
        "text": "<StaticRouter>"
      },
      {
        "id": "C",
        "text": "<FormRouter>"
      },
      {
        "id": "D",
        "text": "<ServerRouter>"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 14 shows wrapping the navigation bar and <Routes> container with <BrowserRouter> from react-router-dom to enable history tracking and client-side routing. (Source: Chapter 15. Implement CRUD Application with RESTful Web Service and ReactJS.pptx, slide 14)"
  },
  {
    "id": "sba301-q219",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "According to slide 3, what is the fundamental difference between Authentication and Authorization in REST service security?",
    "options": [
      {
        "id": "A",
        "text": "Authentication defines database transaction isolation, whereas Authorization encrypts network packets."
      },
      {
        "id": "B",
        "text": "Authentication verifies who the user is (identity verification), whereas Authorization determines what the user is allowed to do (permissions and access rights)."
      },
      {
        "id": "C",
        "text": "Authentication generates HTML views, whereas Authorization handles CSS styling."
      },
      {
        "id": "D",
        "text": "Authentication runs on the client browser, whereas Authorization runs on external DNS servers."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines: Authentication is the process of verifying who a user is (e.g., via credentials), while Authorization is the process of verifying what resources or operations that authenticated user has permission to access. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 3)"
  },
  {
    "id": "sba301-q220",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Slide 4 discusses session-based security versus token-based security for RESTful web services. Why is token-based security strongly preferred for REST architectures? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "It adheres to the REST constraint of statelessness by not storing session state on the server."
      },
      {
        "id": "B",
        "text": "It scales horizontally across distributed server clusters without requiring sticky sessions or distributed session replication."
      },
      {
        "id": "C",
        "text": "It allows mobile apps, SPAs, and third-party clients to authenticate cleanly across different domains."
      },
      {
        "id": "D",
        "text": "It stores all user passwords in plain text inside browser cookies."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 4 contrasts session cookies with tokens: token-based authentication is stateless, scalable across server instances, and decoupled from browser-only cookie constraints. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 4)"
  },
  {
    "id": "sba301-q221",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "According to slides 5 and 6, which authentication mechanisms and protocols are commonly employed in web applications and REST APIs? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "HTTP Basic Authentication"
      },
      {
        "id": "B",
        "text": "Digest Authentication"
      },
      {
        "id": "C",
        "text": "Client Certificate Authentication (Mutual TLS)"
      },
      {
        "id": "D",
        "text": "OAuth 2.0 and OpenID Connect"
      },
      {
        "id": "E",
        "text": "Plain Text Telnet Handshake"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 5 and 6 overview various authentication schemes: Basic Auth, Digest Auth, Certificate-based authentication, and modern token/delegation standards like OAuth 2.0. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slides 5, 6)"
  },
  {
    "id": "sba301-q222",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "What does the acronym JWT stand for, and how is it defined in slide 7?",
    "options": [
      {
        "id": "A",
        "text": "Java Web Toolkit; a frontend component compiler."
      },
      {
        "id": "B",
        "text": "JSON Web Token; an open standard (RFC 7519) that defines a compact, self-contained way for securely transmitting information between parties as a JSON object."
      },
      {
        "id": "C",
        "text": "JavaScript Wire Transfer; a banking integration protocol."
      },
      {
        "id": "D",
        "text": "Joint Web Transaction; a distributed SQL lock manager."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 7 explicitly defines JWT as \"JSON Web Token\", an open standard (RFC 7519) for securely transmitting information between parties as a compact, URL-safe JSON object. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 7)"
  },
  {
    "id": "sba301-q223",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "What are the three distinct parts that make up a JSON Web Token (JWT), separated by dots (.)?",
    "options": [
      {
        "id": "A",
        "text": "Protocol, Domain, Port"
      },
      {
        "id": "B",
        "text": "Header, Payload, Signature"
      },
      {
        "id": "C",
        "text": "Username, Password, Salt"
      },
      {
        "id": "D",
        "text": "Request, Response, Status"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 explains that a JWT consists of three parts separated by dots (xxxxx.yyyyy.zzzzz): Header, Payload, and Signature. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 8)"
  },
  {
    "id": "sba301-q224",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Which of the following statements regarding the JWT Header and Payload are true based on slides 8 and 9? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The Header typically specifies the token type (\"typ\": \"JWT\") and the signing algorithm (e.g., \"alg\": \"HS256\")."
      },
      {
        "id": "B",
        "text": "The Payload contains \"claims\", which are statements about an entity (typically the user) and additional metadata (e.g., sub, exp, iat)."
      },
      {
        "id": "C",
        "text": "Both the Header and Payload are Base64Url-encoded, not encrypted, meaning sensitive secrets like plain passwords must never be stored in the payload."
      },
      {
        "id": "D",
        "text": "The Payload is signed with a private key or secret so that any tampering invalidates the signature."
      },
      {
        "id": "E",
        "text": "The Header can only be decoded by compiling Java source code."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 8 and 9 explain the anatomy: Header specifies type/alg, Payload contains claims, both are Base64Url-encoded, and the Signature verifies tampering. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slides 8, 9)"
  },
  {
    "id": "sba301-q225",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "How is the Signature of a JWT calculated when using HMAC SHA-256 as outlined in slide 9?",
    "options": [
      {
        "id": "A",
        "text": "HMACSHA256(base64UrlEncode(header) + \".\" + base64UrlEncode(payload), secret)"
      },
      {
        "id": "B",
        "text": "MD5(header + payload)"
      },
      {
        "id": "C",
        "text": "SHA1(username + password)"
      },
      {
        "id": "D",
        "text": "RSA_ENCRYPT(database_connection_string)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 9 explicitly provides the signature algorithm: you take the encoded header, the encoded payload, a secret key, and the algorithm specified in the header, and sign them. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 9)"
  },
  {
    "id": "sba301-q226",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "In the standard JWT authentication workflow (slide 10), how does the client present the JWT to protected backend endpoints on subsequent requests?",
    "options": [
      {
        "id": "A",
        "text": "As a URL query parameter named ?password=..."
      },
      {
        "id": "B",
        "text": "In the HTTP Authorization request header formatted as: Authorization: Bearer <token>"
      },
      {
        "id": "C",
        "text": "In the HTTP Host header"
      },
      {
        "id": "D",
        "text": "As an XML attribute inside the <form> tag"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 demonstrates that once the client receives the JWT upon login, it includes the token in the Authorization header using the Bearer schema on all subsequent requests to protected routes. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 10)"
  },
  {
    "id": "sba301-q227",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Which dependencies are added to Maven's pom.xml to support Spring Security and JWT operations as demonstrated in slide 12? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "spring-boot-starter-security"
      },
      {
        "id": "B",
        "text": "io.jsonwebtoken:jjwt-api"
      },
      {
        "id": "C",
        "text": "io.jsonwebtoken:jjwt-impl"
      },
      {
        "id": "D",
        "text": "io.jsonwebtoken:jjwt-jackson"
      },
      {
        "id": "E",
        "text": "spring-boot-starter-struts"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 12 specifies importing spring-boot-starter-security along with the standard Java JWT (JJWT) trio: jjwt-api, jjwt-impl, and jjwt-jackson. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 12)"
  },
  {
    "id": "sba301-q228",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "In slide 14, which interface from Spring Security must the User entity implement so that Spring Security can handle authentication and authorization details?",
    "options": [
      {
        "id": "A",
        "text": "java.io.Serializable"
      },
      {
        "id": "B",
        "text": "org.springframework.security.core.userdetails.UserDetails"
      },
      {
        "id": "C",
        "text": "org.springframework.security.core.AuthenticationManager"
      },
      {
        "id": "D",
        "text": "jakarta.servlet.Filter"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 shows public class User implements UserDetails, implementing methods such as getAuthorities(), getPassword(), getUsername(), and account status flags. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 14)"
  },
  {
    "id": "sba301-q229",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "What is the primary responsibility of JwtService.java as shown in slides 16–18?",
    "options": [
      {
        "id": "A",
        "text": "To create database tables and indexes on MS SQL Server."
      },
      {
        "id": "B",
        "text": "To handle token creation (generating tokens with claims, expiration, and signing key), token extraction (username, expiration), and token validity verification."
      },
      {
        "id": "C",
        "text": "To render HTML login forms on the server."
      },
      {
        "id": "D",
        "text": "To encrypt hard drive partitions where database logs are stored."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 16–18 detail JwtService: extracting the username (extractUsername), generating tokens (generateToken), and validating tokens against user details (isTokenValid). (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slides 16, 17, 18)"
  },
  {
    "id": "sba301-q230",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "Which Spring Security class does the custom JwtAuthenticationFilter extend to ensure it is executed exactly once per incoming HTTP request according to slide 19?",
    "options": [
      {
        "id": "A",
        "text": "GenericFilterBean"
      },
      {
        "id": "B",
        "text": "OncePerRequestFilter"
      },
      {
        "id": "C",
        "text": "AuthenticationFilter"
      },
      {
        "id": "D",
        "text": "DelegatingFilterProxy"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 shows public class JwtAuthenticationFilter extends OncePerRequestFilter, which guarantees a single execution per request dispatch. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 19)"
  },
  {
    "id": "sba301-q231",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "In JwtAuthenticationFilter.doFilterInternal (slides 19–21), what sequence of checks and actions occurs when an HTTP request arrives? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Check the Authorization header for presence and verify that it starts with \"Bearer \"."
      },
      {
        "id": "B",
        "text": "Extract the JWT token from the header (after removing \"Bearer \") and extract the username."
      },
      {
        "id": "C",
        "text": "If the username is present and the user is not yet authenticated in SecurityContextHolder, load the user details via UserDetailsService."
      },
      {
        "id": "D",
        "text": "If the token is valid, create a UsernamePasswordAuthenticationToken and set it in the SecurityContextHolder."
      },
      {
        "id": "E",
        "text": "Immediately drop all incoming requests that do not contain an admin password."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 19, 20, and 21 walk through this exact flow: reading the Bearer header, extracting token/user, verifying token validity, and establishing the security context. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slides 19, 20, 21)"
  },
  {
    "id": "sba301-q232",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "Consider the SecurityConfiguration.java class from slide 24. How is session management configured to ensure the application remains strictly stateless?",
    "options": [
      {
        "id": "A",
        "text": ".sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))"
      },
      {
        "id": "B",
        "text": ".sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))"
      },
      {
        "id": "C",
        "text": ".sessionManagement(session -> session.maximumSessions(1))"
      },
      {
        "id": "D",
        "text": ".sessionManagement(session -> session.invalidSessionUrl(\"/login\"))"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 24 shows setting SessionCreationPolicy.STATELESS, instructing Spring Security never to create or use an HttpSession to obtain the SecurityContext. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 24)"
  },
  {
    "id": "sba301-q233",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "In SecurityConfiguration.java (slide 24), which method is used on the HttpSecurity filter chain to place the JwtAuthenticationFilter BEFORE the standard username/password filter?",
    "options": [
      {
        "id": "A",
        "text": ".addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)"
      },
      {
        "id": "B",
        "text": ".addFilterAfter(jwtAuthFilter, BasicAuthenticationFilter.class)"
      },
      {
        "id": "C",
        "text": ".setFilter(jwtAuthFilter)"
      },
      {
        "id": "D",
        "text": ".replaceFilter(UsernamePasswordAuthenticationFilter.class, jwtAuthFilter)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 24 shows .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class), ensuring the JWT token is intercepted and validated prior to Spring's default username/password check. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 24)"
  },
  {
    "id": "sba301-q234",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "Which endpoints are explicitly configured with .permitAll() in SecurityConfiguration.java (slide 24) so that unauthenticated users can access them? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "/api/v1/auth/** (Registration and Login endpoints)"
      },
      {
        "id": "B",
        "text": "/api/v1/admin/delete-all-data"
      },
      {
        "id": "C",
        "text": "Swagger / OpenAPI documentation endpoints (e.g., /v3/api-docs/**, /swagger-ui/**)"
      },
      {
        "id": "D",
        "text": "Internal database configuration files"
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "explanation": "Slide 24 shows permitting requests matching /api/v1/auth/** and Swagger documentation paths without requiring authentication, while protecting all other endpoints via .anyRequest().authenticated(). (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 24)"
  },
  {
    "id": "sba301-q235",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "Which password encoding bean is configured in ApplicationConfig.java (slide 23) to securely hash passwords before storing them in the database?",
    "options": [
      {
        "id": "A",
        "text": "new PlainTextPasswordEncoder()"
      },
      {
        "id": "B",
        "text": "new BCryptPasswordEncoder()"
      },
      {
        "id": "C",
        "text": "new MD5PasswordEncoder()"
      },
      {
        "id": "D",
        "text": "new DesPasswordEncoder()"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 23 shows the bean definition: @Bean public PasswordEncoder passwordEncoder() { return new BCryptPasswordEncoder(); }. BCrypt uses strong, salted hashing. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 23)"
  },
  {
    "id": "sba301-q236",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "single",
    "question": "In AuthenticationService.java (slide 26), how is an existing user authenticated during the login (authenticate) flow?",
    "options": [
      {
        "id": "A",
        "text": "By reading user cookies directly from the browser cache."
      },
      {
        "id": "B",
        "text": "By calling authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()))."
      },
      {
        "id": "C",
        "text": "By sending an unencrypted SQL query to MS SQL Server."
      },
      {
        "id": "D",
        "text": "By comparing raw password strings with ==."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 26 demonstrates delegating authentication to Spring Security's AuthenticationManager: authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())). (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slide 26)"
  },
  {
    "id": "sba301-q237",
    "subjectId": "sba301",
    "topic": "PART 16: Chapter 16. Securing REST Services with Spring Boot.pptx",
    "type": "multiple",
    "question": "What does AuthenticationController.java return in the response body when registration or login succeeds (slides 27–29)? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "An AuthenticationResponse DTO containing the newly generated JWT token string."
      },
      {
        "id": "B",
        "text": "An HTTP 200 OK status code."
      },
      {
        "id": "C",
        "text": "The user's plain-text database password."
      },
      {
        "id": "D",
        "text": "The complete database transaction log."
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "explanation": "Slides 27 and 29 show returning an AuthenticationResponse containing token: \"eyJhbGciOi...\". It never exposes plain passwords or database logs. (Source: Chapter 16. Securing REST Services with Spring Boot.pptx, slides 27, 28, 29)"
  },
  {
    "id": "sba301-q238",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What is the primary definition and role of Hibernate in Java enterprise application development?",
    "options": [
      {
        "id": "A",
        "text": "A frontend JavaScript framework for manipulating the browser Virtual DO"
      },
      {
        "id": "M",
        "text": ""
      },
      {
        "id": "B",
        "text": "An open-source Object-Relational Mapping (ORM) framework that bridges object-oriented Java code with relational databases."
      },
      {
        "id": "C",
        "text": "A hardware virtualization layer for running multiple Linux operating systems."
      },
      {
        "id": "D",
        "text": "An automated CSS stylesheet preprocessor."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 and slide 4 define Hibernate as an open-source Object-Relational Mapping (ORM) framework that bridges the gap between object-oriented domain models in Java and relational database management systems (RDBMS). (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slides 3, 4)"
  },
  {
    "id": "sba301-q239",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "multiple",
    "question": "According to slide 4, what are the primary advantages of using an Object-Relational Mapping (ORM) framework like Hibernate over traditional JDBC? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Eliminates repetitive boilerplate JDBC code (e.g., establishing connections, managing statements, handling result sets)."
      },
      {
        "id": "B",
        "text": "Provides database independence by utilizing dialects to generate database-specific SQ"
      },
      {
        "id": "L",
        "text": ""
      },
      {
        "id": "C",
        "text": "Improves performance through transparent caching mechanisms (First-level and Second-level cache)."
      },
      {
        "id": "D",
        "text": "Completely eliminates the need to declare data types in Java classes."
      },
      {
        "id": "E",
        "text": "Simplifies complex relational operations (like inheritance, associations, and cascading)."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "explanation": "Slide 4 explicitly highlights productivity, database portability/independence (via SQL Dialects), built-in caching architectures, and object-oriented handling of relationships. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 4)"
  },
  {
    "id": "sba301-q240",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "In the Hibernate Core Architecture (slide 6), which interface is responsible for reading configuration settings, building mapping metadata, and instantiating the heavy SessionFactory?",
    "options": [
      {
        "id": "A",
        "text": "org.hibernate.cfg.Configuration"
      },
      {
        "id": "B",
        "text": "org.hibernate.Transaction"
      },
      {
        "id": "C",
        "text": "org.hibernate.Query"
      },
      {
        "id": "D",
        "text": "org.hibernate.Criteria"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 6 describes Configuration as the bootstrap object that reads configuration properties and mapping files (hibernate.cfg.xml) and builds the immutable SessionFactory. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 6)"
  },
  {
    "id": "sba301-q241",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What are the key characteristics of the SessionFactory object in Hibernate as described in slide 7?",
    "options": [
      {
        "id": "A",
        "text": "It is a lightweight, short-lived object created and destroyed for every HTTP request."
      },
      {
        "id": "B",
        "text": "It is a thread-safe, immutable, application-wide singleton that is expensive to create and acts as a factory for Session instances."
      },
      {
        "id": "C",
        "text": "It executes raw client-side JavaScript inside browser web workers."
      },
      {
        "id": "D",
        "text": "It represents a single physical database row."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 7 emphasizes that SessionFactory is heavyweight, thread-safe, and usually created once during application startup to serve the entire application by dispensing short-lived Session instances. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 7)"
  },
  {
    "id": "sba301-q242",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "Which core Hibernate interface represents a single-threaded unit of work, wraps a JDBC physical connection, and acts as the First-level (L1) Cache?",
    "options": [
      {
        "id": "A",
        "text": "SessionFactory"
      },
      {
        "id": "B",
        "text": "Session"
      },
      {
        "id": "C",
        "text": "Dialect"
      },
      {
        "id": "D",
        "text": "StandardServiceRegistry"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 defines the Session interface as a lightweight, non-thread-safe object representing a single conversation/unit of work with the database. It maintains the First-level cache and binds to a single JDBC connection. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 8)"
  },
  {
    "id": "sba301-q243",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "multiple",
    "question": "Which Hibernate interfaces are correctly matched with their responsibilities based on slides 8 and 9? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Transaction: Manages atomic units of database work (commit, rollback) abstracting underlying JDBC/JTA transactions."
      },
      {
        "id": "B",
        "text": "Query: Represents an HQL or native SQL query instance to bind parameters and execute results."
      },
      {
        "id": "C",
        "text": "Criteria: Provides a programmatic, type-safe API for building dynamic queries without writing string-based queries."
      },
      {
        "id": "D",
        "text": "Session: A globally shared, multi-threaded cache that lives for the entire application lifetime."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 8 and 9 detail Transaction, Query, and Criteria. Option D describes SessionFactory or Second-level cache, not Session. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slides 8, 9)"
  },
  {
    "id": "sba301-q244",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What are the four distinct entity lifecycle states in Hibernate as explained in slide 11?",
    "options": [
      {
        "id": "A",
        "text": "Created, Validated, Executed, Closed"
      },
      {
        "id": "B",
        "text": "Transient, Persistent (Managed), Detached, Removed"
      },
      {
        "id": "C",
        "text": "Pending, Fulfilled, Rejected, Settled"
      },
      {
        "id": "D",
        "text": "Mounting, Updating, Unmounting, Rendering"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 outlines the Hibernate entity lifecycle states: Transient, Persistent/Managed, Detached, and Removed. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 11)"
  },
  {
    "id": "sba301-q245",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What characterizes an entity in the Transient state in Hibernate?",
    "options": [
      {
        "id": "A",
        "text": "It is actively attached to an open session and automatically synchronizes dirty fields to the database."
      },
      {
        "id": "B",
        "text": "It is instantiated using new Product(), has no database identifier (primary key), and is not yet associated with any Hibernate Session."
      },
      {
        "id": "C",
        "text": "It has been marked for deletion and its table row has been dropped."
      },
      {
        "id": "D",
        "text": "It represents a compiled stored procedure."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 defines the Transient state: an object newly instantiated in Java using new that has never been associated with a Hibernate Session and has no corresponding primary key in the database. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 11)"
  },
  {
    "id": "sba301-q246",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "When does a Detached entity transition back into the Persistent (Managed) state according to slide 12?",
    "options": [
      {
        "id": "A",
        "text": "When the Java Virtual Machine restarts."
      },
      {
        "id": "B",
        "text": "When it is reassociated with an active Session using methods like session.update(), session.merge(), or session.saveOrUpdate()."
      },
      {
        "id": "C",
        "text": "When session.delete() is called on it."
      },
      {
        "id": "D",
        "text": "Automatically after 30 seconds of inactivity."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 12 shows that a Detached object can be brought back into the Managed state by calling update(), merge(), or saveOrUpdate() on a new active Session. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 12)"
  },
  {
    "id": "sba301-q247",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "multiple",
    "question": "Which configuration properties are typically specified inside hibernate.cfg.xml to establish connectivity with Microsoft SQL Server (slides 14 and 15)? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "hibernate.connection.driver_class (e.g., com.microsoft.sqlserver.jdbc.SQLServerDriver)"
      },
      {
        "id": "B",
        "text": "hibernate.connection.url (e.g., jdbc:sqlserver://localhost:1433;databaseName=...)"
      },
      {
        "id": "C",
        "text": "hibernate.dialect (e.g., org.hibernate.dialect.SQLServerDialect)"
      },
      {
        "id": "D",
        "text": "hibernate.show_sql and hibernate.format_sql (to log formatted SQL queries in the console)"
      },
      {
        "id": "E",
        "text": "hibernate.browser.render_engine"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 14 and 15 demonstrate setting driver class, connection URL, username/password, dialect, and SQL logging properties. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slides 14, 15)"
  },
  {
    "id": "sba301-q248",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What is the specific purpose of the hibernate.dialect configuration property according to slide 16?",
    "options": [
      {
        "id": "A",
        "text": "To translate Java comments into multi-lingual documentation."
      },
      {
        "id": "B",
        "text": "To tell Hibernate which specific database SQL syntax, functions, and data types to generate (e.g., SQL Server vs. Oracle vs. MySQL)."
      },
      {
        "id": "C",
        "text": "To configure the character encoding of the browser console."
      },
      {
        "id": "D",
        "text": "To encrypt network passwords using SSL certificates."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 16 explains that the SQL Dialect instructs Hibernate on how to generate vendor-specific SQL clauses, pagination constructs, and data type mappings tailored to the underlying RDBMS. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 16)"
  },
  {
    "id": "sba301-q249",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What does setting hibernate.hbm2ddl.auto = create-drop do when running a Hibernate application?",
    "options": [
      {
        "id": "A",
        "text": "It never alters existing database tables."
      },
      {
        "id": "B",
        "text": "It automatically updates existing tables without deleting data."
      },
      {
        "id": "C",
        "text": "It creates the database schema when the SessionFactory is created and drops the entire schema when the SessionFactory is closed."
      },
      {
        "id": "D",
        "text": "It drops foreign key constraints but retains all primary data."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Slide 16 details hbm2ddl.auto values: create-drop creates tables upon initialization and drops them automatically upon application shutdown (ideal for unit testing). (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 16)"
  },
  {
    "id": "sba301-q250",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "multiple",
    "question": "Which JPA/Hibernate annotations are used in slide 18 to define entity mapping and table associations? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@Entity (declares the class as a persistent database entity)"
      },
      {
        "id": "B",
        "text": "@Table(name = \"...\") (specifies the mapped database table)"
      },
      {
        "id": "C",
        "text": "@Id and @GeneratedValue (marks primary key and generation strategy)"
      },
      {
        "id": "D",
        "text": "@Column(name = \"...\", nullable = false, length = 100) (maps field to column attributes)"
      },
      {
        "id": "E",
        "text": "@Transient (indicates that a field should NOT be persisted to the database)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slide 18 details all fundamental mapping annotations: @Entity, @Table, @Id, @GeneratedValue, @Column, and @Transient. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 18)"
  },
  {
    "id": "sba301-q251",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "How does Hibernate Query Language (HQL) fundamentally differ from native SQL according to slide 21?",
    "options": [
      {
        "id": "A",
        "text": "HQL operates on class names and entity property names rather than physical database table and column names."
      },
      {
        "id": "B",
        "text": "HQL can only perform SELECT queries and cannot perform updates or deletes."
      },
      {
        "id": "C",
        "text": "HQL queries run directly inside browser storage."
      },
      {
        "id": "D",
        "text": "HQL requires developers to manually map ResultSet cursors using raw byte arrays."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 21 explains that HQL is fully object-oriented: you write queries against Java entities and their properties rather than physical tables and columns. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 21)"
  },
  {
    "id": "sba301-q252",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "multiple",
    "question": "According to slide 23, what are the differences between Hibernate's First-Level Cache and Second-Level Cache? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "First-Level Cache: Enabled by default, scoped to the individual Session, and cannot be turned off."
      },
      {
        "id": "B",
        "text": "Second-Level Cache: Optional, scoped to the SessionFactory (shared across all sessions/application-wide)."
      },
      {
        "id": "C",
        "text": "First-Level Cache: Stored on an external Redis cluster by default."
      },
      {
        "id": "D",
        "text": "Second-Level Cache: Requires an external caching provider integration (such as Ehcache, Infinispan, or Hazelcast)."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Slide 23 explicitly contrasts the two caches: L1 cache is mandatory and session-scoped; L2 cache is optional, factory-scoped, and requires third-party cache providers. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slide 23)"
  },
  {
    "id": "sba301-q253",
    "subjectId": "sba301",
    "topic": "PART 17: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx",
    "type": "single",
    "question": "What is the purpose of the HibernateUtil.java helper class demonstrated in slides 25–27?",
    "options": [
      {
        "id": "A",
        "text": "To compile Maven dependencies into native JAR files."
      },
      {
        "id": "B",
        "text": "To configure and build a thread-safe, reusable singleton SessionFactory instance during startup and expose a getSessionFactory() method."
      },
      {
        "id": "C",
        "text": "To render HTML components inside an embedded Tomcat server."
      },
      {
        "id": "D",
        "text": "To clear the browser cookie storage on user logout."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 25–27 demonstrate creating a standard HibernateUtil utility class containing a static block that initializes the StandardServiceRegistry and builds the singleton SessionFactory. (Source: Chapter 17. Hibernate Architecture, Configuration, Mapping.pptx, slides 25, 26, 27)"
  },
  {
    "id": "sba301-q254",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "What are the two core objectives of Chapter 18 regarding application development?",
    "options": [
      {
        "id": "A",
        "text": "Migrating SQL databases to cloud NoSQL databases and styling web pages with CSS Flexbox."
      },
      {
        "id": "B",
        "text": "Implementing Data Management (CRUD operations with Hibernate mapping objects to database tables) and User Interface Development (designing a desktop UI using JavaFX)."
      },
      {
        "id": "C",
        "text": "Containerizing microservices using Docker and configuring Kubernetes clusters."
      },
      {
        "id": "D",
        "text": "Developing native Android mobile apps using Kotlin and Jetpack Compose."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 2 outlines the primary objectives: Data Management using Hibernate to map Java objects to database tables and User Interface Development using JavaFX. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 2)"
  },
  {
    "id": "sba301-q255",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "multiple",
    "question": "In the Maven pom.xml configuration for the desktop CRUD application (slide 6), which dependencies are included? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "jakarta.persistence:jakarta.persistence-api"
      },
      {
        "id": "B",
        "text": "com.microsoft.sqlserver:mssql-jdbc"
      },
      {
        "id": "C",
        "text": "org.hibernate.orm:hibernate-core"
      },
      {
        "id": "D",
        "text": "org.springframework.boot:spring-boot-starter-web"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 6 shows the core persistence dependencies for the JavaFX/Hibernate desktop application: jakarta.persistence-api, mssql-jdbc, and hibernate-core. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 6)"
  },
  {
    "id": "sba301-q256",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "Consider the Student.java entity class from slides 7 and 8. How is the relationship between Student and Book mapped on the Student side?",
    "options": [
      {
        "id": "A",
        "text": "@OneToOne(cascade = CascadeType.ALL)"
      },
      {
        "id": "B",
        "text": "@OneToMany(cascade = CascadeType.ALL) @JoinColumn(name = \"student_id\") private Set<Book> books = new HashSet<>();"
      },
      {
        "id": "C",
        "text": "@ManyToMany(mappedBy = \"students\")"
      },
      {
        "id": "D",
        "text": "@Embedded private Book book;"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 7 shows: @OneToMany(cascade = CascadeType.ALL) @JoinColumn(name = \"student_id\") private Set<Book> books = new HashSet<>();. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slides 7, 8)"
  },
  {
    "id": "sba301-q257",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "In Book.java (slide 8), how is the inverse side of the relationship mapped back to Student?",
    "options": [
      {
        "id": "A",
        "text": "@ManyToOne(cascade = CascadeType.ALL) @JoinColumn(name = \"student_id\") private Student student;"
      },
      {
        "id": "B",
        "text": "@ManyToMany private Student student;"
      },
      {
        "id": "C",
        "text": "@OneToOne private Student student;"
      },
      {
        "id": "D",
        "text": "private int studentId;"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 8 shows the Book entity mapping back to Student using @ManyToOne(cascade = CascadeType.ALL) @JoinColumn(name = \"student_id\") private Student student;. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 8)"
  },
  {
    "id": "sba301-q258",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "multiple",
    "question": "Which properties are configured in hibernate.cfg.xml (slide 20) for this MS SQL Server desktop application? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "hbm2ddl.auto = update"
      },
      {
        "id": "B",
        "text": "dialect = org.hibernate.dialect.SQLServerDialect"
      },
      {
        "id": "C",
        "text": "connection.driver_class = com.microsoft.sqlserver.jdbc.SQLServerDriver"
      },
      {
        "id": "D",
        "text": "Mapping entity classes: <mapping class=\"sba301.fu.pojo.Student\" /> and <mapping class=\"sba301.fu.pojo.Book\" />"
      },
      {
        "id": "E",
        "text": "connection.protocol = mongodb+srv"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 20 shows the complete hibernate.cfg.xml including hbm2ddl.auto, dialect, connection properties, and mapping classes. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 20)"
  },
  {
    "id": "sba301-q259",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "How does the StudentDAO class initialize Hibernate connectivity in its constructor as shown in slide 10?",
    "options": [
      {
        "id": "A",
        "text": "By querying an external JNDI registry over HTT"
      },
      {
        "id": "P",
        "text": ""
      },
      {
        "id": "B",
        "text": "By creating a Configuration instance, configuring it via cf.configure(\"hibernate.cfg.xml\"), and building the sessionFactory = cf.buildSessionFactory()."
      },
      {
        "id": "C",
        "text": "By injecting a MongoTemplate bean."
      },
      {
        "id": "D",
        "text": "By calling DriverManager.getConnection()."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 10 shows the StudentDAO() constructor: cf = new Configuration(); cf = cf.configure(\"hibernate.cfg.xml\"); sessionFactory = cf.buildSessionFactory();. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 10)"
  },
  {
    "id": "sba301-q260",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "In StudentDAO.java (slide 10), how is the save(Student student) operation executed safely within a transaction?",
    "options": [
      {
        "id": "A",
        "text": "By calling session.save(student) inside a try block, calling tx.commit(), and calling tx.rollback() inside the catch block if an exception occurs."
      },
      {
        "id": "B",
        "text": "By executing a raw SQL INSERT INTO query string via java.sql.Statement."
      },
      {
        "id": "C",
        "text": "By letting Hibernate commit automatically without opening a transaction."
      },
      {
        "id": "D",
        "text": "By saving the object directly to a local JSON file."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 10 demonstrates standard Hibernate transaction handling: opening session, beginTransaction, session.save, commit, and rollback in catch block. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 10)"
  },
  {
    "id": "sba301-q261",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "How does getStudents() retrieve all student records in StudentDAO.java (slide 11)?",
    "options": [
      {
        "id": "A",
        "text": "session.get(Student.class)"
      },
      {
        "id": "B",
        "text": "Query query = session.createQuery(\"from Student\"); return query.list();"
      },
      {
        "id": "C",
        "text": "session.createNativeQuery(\"SELECT * FROM tbl_students\").getResultList()"
      },
      {
        "id": "D",
        "text": "session.loadAll(Student.class)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 11 shows using HQL: Query query = session.createQuery(\"from Student\"); return query.list(); executed inside an open session. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 11)"
  },
  {
    "id": "sba301-q262",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "In StudentDAO.java (slide 12), how is an existing student record deleted by ID?",
    "options": [
      {
        "id": "A",
        "text": "By issuing a DROP TABLE statement."
      },
      {
        "id": "B",
        "text": "By loading the student entity via Student student = (Student) session.get(Student.class, studentID) and invoking session.delete(student) within an active transaction."
      },
      {
        "id": "C",
        "text": "By executing session.evict(studentID)."
      },
      {
        "id": "D",
        "text": "By setting all student fields to null and saving."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 12 shows: session.beginTransaction(); Student student = (Student) session.get(Student.class, studentID); session.delete(student); tx.commit();. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 12)"
  },
  {
    "id": "sba301-q263",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "In StudentDAO.java (slide 14), what method on the Session object is called inside update(Student student)?",
    "options": [
      {
        "id": "A",
        "text": "session.persist(student)"
      },
      {
        "id": "B",
        "text": "session.update(student)"
      },
      {
        "id": "C",
        "text": "session.refresh(student)"
      },
      {
        "id": "D",
        "text": "session.replicate(student)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 shows updating the entity: session.update(student); tx.commit(); within the transaction try-catch block. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 14)"
  },
  {
    "id": "sba301-q264",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "multiple",
    "question": "In the 3-Layer Architecture implemented in this project (slides 15–18), what are the relationships between StudentDAO, StudentRepository, and StudentService? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "StudentRepository implements IStudentRepository and delegates CRUD calls directly to an instance of StudentDA"
      },
      {
        "id": "O",
        "text": ""
      },
      {
        "id": "B",
        "text": "StudentService implements IStudentService and encapsulates business calls by delegating to IStudentRepository."
      },
      {
        "id": "C",
        "text": "The presentation/controller layer interacts directly with IStudentService rather than accessing StudentDAO directly."
      },
      {
        "id": "D",
        "text": "StudentDAO calls methods on StudentController to update UI elements."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 15–18 demonstrate the Repository and Service patterns: UI Controller -> Service -> Repository -> DAO -> Hibernate. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slides 15, 16, 17, 18)"
  },
  {
    "id": "sba301-q265",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "In module-info.java (slide 19), which module directives are required to allow Hibernate and JavaFX to access the entity and service packages?",
    "options": [
      {
        "id": "A",
        "text": "requires jakarta.persistence;, requires org.hibernate.orm.core;, opens sba301.fu.pojo;, and exports sba301.fu.service;."
      },
      {
        "id": "B",
        "text": "requires spring.boot; and exports all;"
      },
      {
        "id": "C",
        "text": "requires react.js;"
      },
      {
        "id": "D",
        "text": "requires java.sql.unrestricted;"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 19 shows the Java module descriptor declaring requirements for jakarta.persistence, org.hibernate.orm.core, opening pojo for reflection, and exporting services. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 19)"
  },
  {
    "id": "sba301-q266",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "What tool and file format are used to design the visual user interface in the JavaFX portion of the project (slides 23–27)?",
    "options": [
      {
        "id": "A",
        "text": "Visual Studio Code designing HTML5 canvas."
      },
      {
        "id": "B",
        "text": "Scene Builder generating an FXML layout file (student-view.fxml)."
      },
      {
        "id": "C",
        "text": "Android Studio layout editor generating APK binaries."
      },
      {
        "id": "D",
        "text": "Adobe Photoshop generating PNG sprites."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 23–27 illustrate opening Scene Builder to lay out UI controls and saving them into student-view.fxml. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slides 23, 24, 25, 27)"
  },
  {
    "id": "sba301-q267",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "multiple",
    "question": "In StudentController.java (slide 33), which JavaFX annotations and interface implementations connect UI elements to backend logic? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The class implements javafx.fxml.Initializable."
      },
      {
        "id": "B",
        "text": "UI controls (TableView, TableColumn, TextField, Button) are annotated with @FXML matching fx:id attributes in the FXML file."
      },
      {
        "id": "C",
        "text": "Table columns are bound to model properties using PropertyValueFactory (e.g., new PropertyValueFactory<>(\"email\")) inside initialize()."
      },
      {
        "id": "D",
        "text": "Direct raw SQL statements are embedded in the button click handler."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 33 and 34 show StudentController implements Initializable, fields annotated with @FXML, and column bindings with PropertyValueFactory. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slides 33, 34)"
  },
  {
    "id": "sba301-q268",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "single",
    "question": "In StudentController.java (slide 35), how does the controller respond when a user selects a row in the TableView?",
    "options": [
      {
        "id": "A",
        "text": "It deletes the record immediately from the database."
      },
      {
        "id": "B",
        "text": "A ChangeListener listens to tbData.getSelectionModel().selectedItemProperty(), extracts the student ID from the selected row, fetches the complete student details via iStudentService.findById(), and populates the text fields (showStudent(student))."
      },
      {
        "id": "C",
        "text": "It clears all text fields and locks the form."
      },
      {
        "id": "D",
        "text": "It opens a new browser window."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 35 shows attaching a listener, fetching the selected student by ID, and calling showStudent(student) to display attributes in form inputs. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slide 35)"
  },
  {
    "id": "sba301-q269",
    "subjectId": "sba301",
    "topic": "PART 18: Chapter 18. Hibernate Application Development & CRUD Operations.pptx",
    "type": "multiple",
    "question": "Which user actions are mapped to @FXML methods in StudentController.java (slides 36–37) to perform live CRUD operations from the UI? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "addStudent(): Reads input text fields, constructs a new Student, calls iStudentService.save(student), and invokes refreshDataTable()."
      },
      {
        "id": "B",
        "text": "updateStudent(): Reads updated input values, calls iStudentService.update(student), and updates the table."
      },
      {
        "id": "C",
        "text": "deleteStudent(): Deletes the selected student via iStudentService.delete(this.getIdStudent()) and refreshes the table."
      },
      {
        "id": "D",
        "text": "reformatDatabase(): Drops and recreates the SQL Server database schema."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 36 and 37 demonstrate @FXML public void addStudent(), deleteStudent(), and updateStudent(), all refreshing the UI table upon completion. (Source: Chapter 18. Hibernate Application Development & CRUD Operations.pptx, slides 36, 37)"
  },
  {
    "id": "sba301-q270",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "According to slide 3, what is MongoDB and what category of database management systems does it belong to?",
    "options": [
      {
        "id": "A",
        "text": "An in-memory relational database management system using standard SQL tables."
      },
      {
        "id": "B",
        "text": "An open-source, document-oriented NoSQL database that stores data in flexible, JSON-like documents."
      },
      {
        "id": "C",
        "text": "A graph database engine optimized strictly for social network relationship mapping."
      },
      {
        "id": "D",
        "text": "A client-side browser cache for storing offline HTML files."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines MongoDB as an open-source, document-oriented NoSQL database designed for storing and managing large volumes of flexible, JSON-like documents. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 3)"
  },
  {
    "id": "sba301-q271",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "multiple",
    "question": "Which of the following are recognized key features and advantages of MongoDB as detailed in slides 4 and 5? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Document-Oriented Storage: Data is stored in flexible documents (BSON) rather than rigid rows and columns."
      },
      {
        "id": "B",
        "text": "Schema-less / Flexible Schema: Documents in the same collection do not need to possess identical sets of fields."
      },
      {
        "id": "C",
        "text": "High Scalability & Sharding: Horizontal scaling across clusters of commodity hardware via automatic data sharding."
      },
      {
        "id": "D",
        "text": "High Availability: Redundancy and automatic failover supported through Replica Sets."
      },
      {
        "id": "E",
        "text": "Mandatory Foreign Key Constraints: Enforces ACID referential integrity using SQL foreign key cascading."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 4 and 5 highlight MongoDB's core features: document-oriented BSON storage, flexible schema, horizontal scalability via sharding, and high availability via replica sets. (Source: Chapter 19. Data Management with MongoDB.pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q272",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "In MongoDB terminology, what is the equivalent concept to a Row (or Tuple) in a traditional Relational Database Management System (RDBMS) according to slide 6?",
    "options": [
      {
        "id": "A",
        "text": "Collection"
      },
      {
        "id": "B",
        "text": "Document"
      },
      {
        "id": "C",
        "text": "Field"
      },
      {
        "id": "D",
        "text": "Database"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 provides the mapping between RDBMS and MongoDB: Database -> Database, Table -> Collection, Row/Tuple -> Document, Column -> Field, and Primary Key -> _id. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 6)"
  },
  {
    "id": "sba301-q273",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "What binary format does MongoDB use internally to store documents and perform remote procedure calls, extending JSON with additional data types (such as Date and BinData)?",
    "options": [
      {
        "id": "A",
        "text": "YAML"
      },
      {
        "id": "B",
        "text": "BSON (Binary JSON)"
      },
      {
        "id": "C",
        "text": "XML"
      },
      {
        "id": "D",
        "text": "Protocol Buffers"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 7 explains that MongoDB stores data records as BSON documents. BSON is a binary representation of JSON-like documents containing more data types than standard text JSON. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 7)"
  },
  {
    "id": "sba301-q274",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "What is the primary role of the _id field in every MongoDB document as described in slide 8?",
    "options": [
      {
        "id": "A",
        "text": "A temporary index that expires after 24 hours."
      },
      {
        "id": "B",
        "text": "A mandatory unique primary key for the document, by default assigned an 12-byte ObjectId if not explicitly provided."
      },
      {
        "id": "C",
        "text": "An encryption key used to decode BSON payloads."
      },
      {
        "id": "D",
        "text": "A foreign key referencing the parent collection name."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 explains that in MongoDB, every document stored in a collection requires a unique _id field that acts as a primary key, defaulting to a 12-byte ObjectId. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 8)"
  },
  {
    "id": "sba301-q275",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "multiple",
    "question": "Which shell commands are used in MongoDB Shell (mongosh) to inspect and select databases according to slide 10? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "show dbs (lists all available databases on the server)"
      },
      {
        "id": "B",
        "text": "use myDatabase (switches current database context, creating it when data is first inserted)"
      },
      {
        "id": "C",
        "text": "db (displays the name of the currently selected database)"
      },
      {
        "id": "D",
        "text": "show collections (displays the collections within the current database)"
      },
      {
        "id": "E",
        "text": "SELECT * FROM databases"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 10 demonstrates standard Mongo shell commands: show dbs, use <dbname>, db, and show collections. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 10)"
  },
  {
    "id": "sba301-q276",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "Which command is used in MongoDB Shell to insert a single document into a collection named students?",
    "options": [
      {
        "id": "A",
        "text": "db.students.addOne({ name: \"Alice\", age: 20 })"
      },
      {
        "id": "B",
        "text": "db.students.insertOne({ name: \"Alice\", age: 20 })"
      },
      {
        "id": "C",
        "text": "db.students.insertRow({ name: \"Alice\", age: 20 })"
      },
      {
        "id": "D",
        "text": "INSERT INTO students VALUES (\"Alice\", 20)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 12 explicitly illustrates creating/inserting records using db.collection.insertOne(<document>). (Source: Chapter 19. Data Management with MongoDB.pptx, slide 12)"
  },
  {
    "id": "sba301-q277",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "In MongoDB query syntax (slide 14), what does db.students.find({ age: { $gte: 18 } }) do?",
    "options": [
      {
        "id": "A",
        "text": "Finds all students whose age is strictly less than 18."
      },
      {
        "id": "B",
        "text": "Finds all students whose age is greater than or equal to 18."
      },
      {
        "id": "C",
        "text": "Updates the age of all students to 18."
      },
      {
        "id": "D",
        "text": "Deletes all students aged 18."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 explains comparison query operators: $gte stands for \"greater than or equal to\". (Source: Chapter 19. Data Management with MongoDB.pptx, slide 14)"
  },
  {
    "id": "sba301-q278",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "multiple",
    "question": "Which comparison and logical query operators are natively supported in MongoDB find queries as listed in slide 14 and 15? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$eq (equal to) and $ne (not equal to)"
      },
      {
        "id": "B",
        "text": "$gt (greater than) and $lt (less than)"
      },
      {
        "id": "C",
        "text": "$in (matches any value in a specified array)"
      },
      {
        "id": "D",
        "text": "$and, $or, and $not (logical conjunctions)"
      },
      {
        "id": "E",
        "text": "LIKE '%pattern%'"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 14 and 15 list MongoDB operators: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, along with logical operators $and, $or, $nor, and $not. (Source: Chapter 19. Data Management with MongoDB.pptx, slides 14, 15)"
  },
  {
    "id": "sba301-q279",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "Consider the update command on slide 16:\ndb.students.updateOne({ name: \"Alice\" }, { $set: { major: \"Computer Science\" } });\nWhat is the function of the $set update operator in this command?",
    "options": [
      {
        "id": "A",
        "text": "It replaces the entire document with a new document containing only the major field."
      },
      {
        "id": "B",
        "text": "It updates the value of the major field without modifying other existing fields in Alice's document."
      },
      {
        "id": "C",
        "text": "It increments the value of the major field by 1."
      },
      {
        "id": "D",
        "text": "It deletes the major field from Alice's document."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 16 explains that the $set operator replaces the value of a specified field with the given value while leaving all other fields intact. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 16)"
  },
  {
    "id": "sba301-q280",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "Which command is used to remove all documents from the students collection that match the condition { status: \"inactive\" } as shown in slide 17?",
    "options": [
      {
        "id": "A",
        "text": "db.students.drop({ status: \"inactive\" })"
      },
      {
        "id": "B",
        "text": "db.students.deleteMany({ status: \"inactive\" })"
      },
      {
        "id": "C",
        "text": "db.students.removeCollection({ status: \"inactive\" })"
      },
      {
        "id": "D",
        "text": "TRUNCATE TABLE students WHERE status = 'inactive'"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 17 demonstrates deletion operations: db.collection.deleteOne(<filter>) removes a single matching document, while db.collection.deleteMany(<filter>) removes all matching documents. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 17)"
  },
  {
    "id": "sba301-q281",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "In MongoDB, what is the Aggregation Framework and how does its pipeline concept operate according to slide 19?",
    "options": [
      {
        "id": "A",
        "text": "A tool for creating HTML forms automatically from database collections."
      },
      {
        "id": "B",
        "text": "A multi-stage processing pipeline where documents pass through a sequence of transformation stages (such as $match, $group, $sort, $project) to compute aggregate results."
      },
      {
        "id": "C",
        "text": "A backup utility for streaming database archives to external tapes."
      },
      {
        "id": "D",
        "text": "A client-side JavaScript loop executing inside browser memory."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 describes the Aggregation Pipeline: documents enter a multi-stage pipeline transforming them into aggregated results ($match, $group, $sort, $project). (Source: Chapter 19. Data Management with MongoDB.pptx, slide 19)"
  },
  {
    "id": "sba301-q282",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "multiple",
    "question": "Which stages are commonly used inside an aggregation pipeline (db.collection.aggregate([ ... ])) as demonstrated in slides 19 and 20? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$match: Filters documents so only matching records proceed to the next stage."
      },
      {
        "id": "B",
        "text": "$group: Groups input documents by a specified identifier expression and applies accumulators."
      },
      {
        "id": "C",
        "text": "$sort: Reorders the documents in the stream."
      },
      {
        "id": "D",
        "text": "$project: Selects, adds, or renames fields in the passing documents."
      },
      {
        "id": "E",
        "text": "$tableJoin: Executes a native SQL inner join on relational tables."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slides 19 and 20 detail pipeline stages: $match, $group, $sort, $project, and $limit. (Source: Chapter 19. Data Management with MongoDB.pptx, slides 19, 20)"
  },
  {
    "id": "sba301-q283",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "In Java application development, which official library is used to connect directly to MongoDB instances and execute CRUD operations without an ORM layer (slide 22)?",
    "options": [
      {
        "id": "A",
        "text": "Hibernate-Core"
      },
      {
        "id": "B",
        "text": "MongoDB Java Driver (org.mongodb:mongodb-driver-sync)"
      },
      {
        "id": "C",
        "text": "MS SQL JDBC Driver"
      },
      {
        "id": "D",
        "text": "Apache Commons DBUtils"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 22 introduces the MongoDB Java Driver (mongodb-driver-sync), providing synchronous connectivity, MongoClient, MongoDatabase, and MongoCollection<Document> APIs. (Source: Chapter 19. Data Management with MongoDB.pptx, slide 22)"
  },
  {
    "id": "sba301-q284",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "single",
    "question": "Consider the Java code snippet for establishing a connection to MongoDB from slide 23:\nString connectionString = \"mongodb://localhost:27017\";\ntry (MongoClient mongoClient = MongoClients.create(connectionString)) {\n    MongoDatabase database = mongoClient.getDatabase(\"fpt_university\");\n    MongoCollection<Document> collection = database.getCollection(\"students\");\n}\nWhat does this code accomplish?",
    "options": [
      {
        "id": "A",
        "text": "It launches an embedded HTTP web server on port 27017."
      },
      {
        "id": "B",
        "text": "It opens a client connection to a local MongoDB instance, selects the fpt_university database, and retrieves a reference to the students collection."
      },
      {
        "id": "C",
        "text": "It drops the students collection and creates an MS SQL Server table."
      },
      {
        "id": "D",
        "text": "It starts a multi-threaded JavaFX user interface."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 23 illustrates using MongoClients.create() to connect to the MongoDB server, access a target database using getDatabase(), and obtain a collection handle via getCollection(). (Source: Chapter 19. Data Management with MongoDB.pptx, slide 23)"
  },
  {
    "id": "sba301-q285",
    "subjectId": "sba301",
    "topic": "PART 19: Chapter 19. Data Management with MongoDB.pptx",
    "type": "multiple",
    "question": "In Java with the MongoDB Sync Driver (slide 24), how are documents constructed and inserted into a collection? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "By creating an instance of org.bson.Document and appending key-value pairs using .append(\"key\", value)."
      },
      {
        "id": "B",
        "text": "By calling collection.insertOne(doc) to persist a single document."
      },
      {
        "id": "C",
        "text": "By passing a list of documents to collection.insertMany(list)."
      },
      {
        "id": "D",
        "text": "By writing raw SQL statements inside Statement.execute()."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 24 shows instantiating new Document(\"name\", \"John\").append(\"age\", 22) and invoking collection.insertOne() or insertMany(). (Source: Chapter 19. Data Management with MongoDB.pptx, slide 24)"
  },
  {
    "id": "sba301-q286",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "According to slide 3, what is the primary role and mission of the Spring Data umbrella project?",
    "options": [
      {
        "id": "A",
        "text": "To provide a desktop GUI framework for rendering charts in Java."
      },
      {
        "id": "B",
        "text": "To provide a consistent, unified abstraction layer for data access across both relational and NoSQL databases, offering automated repositories and query generation."
      },
      {
        "id": "C",
        "text": "To convert Java source code directly into browser-executable JavaScript."
      },
      {
        "id": "D",
        "text": "To replace operating system file systems with embedded cloud caches."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explains that Spring Data provides a consistent abstraction layer for various data stores, offering automated repository generation, derived query methods, and custom data access implementations. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 3)"
  },
  {
    "id": "sba301-q287",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "multiple",
    "question": "Which of the following are recognized key features of Spring Data MongoDB as detailed in slide 4? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Seamless integration with Spring core concepts (dependency injection, transaction management)."
      },
      {
        "id": "B",
        "text": "Automated repository implementation generation based on custom interface declarations."
      },
      {
        "id": "C",
        "text": "Derived query methods translated automatically from Java method names into MongoDB queries."
      },
      {
        "id": "D",
        "text": "MongoTemplate: A flexible, lower-level template API for executing complex queries, updates, and aggregations."
      },
      {
        "id": "E",
        "text": "Mandatory requirement to write native SQL queries using JDBC statements."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 4 explicitly highlights Spring core integration, automated Repositories, Query Methods via naming conventions, and MongoTemplate. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 4)"
  },
  {
    "id": "sba301-q288",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "multiple",
    "question": "According to slide 5, what business and architectural benefits does Spring Data MongoDB provide to enterprise development? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Increased developer productivity by eliminating boilerplate persistence code."
      },
      {
        "id": "B",
        "text": "Improved code maintainability and testability."
      },
      {
        "id": "C",
        "text": "Enhanced performance with optimized data access abstractions."
      },
      {
        "id": "D",
        "text": "Seamless integration with the broader Spring ecosystem."
      },
      {
        "id": "E",
        "text": "Automatic client-side rendering of React Virtual DOM components."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 5 lists developer productivity, maintainability, testability, performance optimization, and seamless Spring ecosystem integration. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 5)"
  },
  {
    "id": "sba301-q289",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "What core architectural philosophy regarding Repositories is highlighted on slide 6?",
    "options": [
      {
        "id": "A",
        "text": "\"Implement Every Method Manually\""
      },
      {
        "id": "B",
        "text": "\"Define – Don’t Implement\" (developers define interface signatures, while Spring automatically generates runtime proxy implementations)"
      },
      {
        "id": "C",
        "text": "\"Bypass Repositories Using Direct Socket Connections\""
      },
      {
        "id": "D",
        "text": "\"Compile Repositories Into External DLL Files\""
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 explicitly headlines \"Define – Don’t Implement\": developers declare custom repository interfaces extending MongoRepository, and Spring automatically provides runtime implementations for standard CRUD methods. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 6)"
  },
  {
    "id": "sba301-q290",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "How is a standard Spring Data MongoDB repository interface declared for a domain entity User whose primary identifier is of type String (slide 6)?",
    "options": [
      {
        "id": "A",
        "text": "public class UserRepository extends MongoDatabase<User>"
      },
      {
        "id": "B",
        "text": "public interface UserRepository extends MongoRepository<User, String>"
      },
      {
        "id": "C",
        "text": "public interface UserRepository extends JpaRepository<User, Long>"
      },
      {
        "id": "D",
        "text": "public abstract class UserRepository implements CrudOperations<User>"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 6 provides the exact syntax example: interface UserRepository extends MongoRepository<User, String> {}. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 6)"
  },
  {
    "id": "sba301-q291",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "multiple",
    "question": "In Spring Data MongoDB (slide 7), how does the query method naming mechanism work? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Spring parses method names according to specific naming conventions and automatically translates them into MongoDB JSON/BSON query filters."
      },
      {
        "id": "B",
        "text": "findByFirstNameAndLastName(String fn, String ln) matches documents where both firstName and lastName equal the supplied arguments."
      },
      {
        "id": "C",
        "text": "findAllByAgeGreaterThan(int age) generates a query using the MongoDB $gt comparison operator."
      },
      {
        "id": "D",
        "text": "Query method names must be written in raw SQL statements wrapped in quotation marks inside method signatures."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 7 demonstrates \"Powerful Querying with Method Names\": Spring parses the method tokens and derives the appropriate MongoDB query criteria automatically. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 7)"
  },
  {
    "id": "sba301-q292",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "What is the primary role of MongoTemplate in Spring Data MongoDB according to slide 8?",
    "options": [
      {
        "id": "A",
        "text": "To compile FXML views for JavaFX applications."
      },
      {
        "id": "B",
        "text": "To provide a flexible, lower-level programmatic API for executing complex queries, updates, aggregations, and map-reduce tasks when repositories are insufficient."
      },
      {
        "id": "C",
        "text": "To format log messages printed in the IntelliJ IDEA terminal."
      },
      {
        "id": "D",
        "text": "To manage browser cookie expiration times."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 explains that MongoTemplate provides a flexible, lower-level programmatic API that supports the MongoDB aggregation framework, advanced updates, and complex operations. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 8)"
  },
  {
    "id": "sba301-q293",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "In the demo application setup (slides 10–13), what cloud database platform is used to host the remote MongoDB cluster?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS for PostgreSQL"
      },
      {
        "id": "B",
        "text": "MongoDB Atlas"
      },
      {
        "id": "C",
        "text": "Microsoft Azure SQL Database"
      },
      {
        "id": "D",
        "text": "Google Cloud Spanner"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 10–13 show connecting to a cloud-hosted MongoDB cluster on MongoDB Atlas (cloud.mongodb.com) configuring cluster sba301. (Source: Chapter 20. Spring Data with MongoDB.pptx, slides 10, 11, 12, 13)"
  },
  {
    "id": "sba301-q294",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "multiple",
    "question": "Which Maven dependencies are declared in pom.xml (slide 16) to implement the standalone Spring Data MongoDB demo? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "org.mongodb:mongodb-driver-sync (version 5.2.1)"
      },
      {
        "id": "B",
        "text": "org.springframework.data:spring-data-mongodb (version 4.4.1)"
      },
      {
        "id": "C",
        "text": "org.slf4j:slf4j-jdk14 (for logging output from the MongoDB Java Driver)"
      },
      {
        "id": "D",
        "text": "org.apache.struts:struts2-core"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slide 16 shows pom.xml configured with mongodb-driver-sync, spring-data-mongodb, and slf4j-jdk14. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 16)"
  },
  {
    "id": "sba301-q295",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "Consider the Student.java entity model from slide 17:\n@Document(collection = \"students\")\npublic class Student {\n    @Id\n    private int id;\n    private String email;\n    private String password;\n    private String firstName;\n    private String lastName;\n    private int marks;\n}\nWhat is the function of the @Document(collection = \"students\") annotation?",
    "options": [
      {
        "id": "A",
        "text": "It generates an external PDF document containing student transcripts."
      },
      {
        "id": "B",
        "text": "It marks the Java class as a domain object to be persisted in MongoDB and specifies students as the target collection name."
      },
      {
        "id": "C",
        "text": "It defines a foreign key table in MS SQL Server."
      },
      {
        "id": "D",
        "text": "It specifies that student objects cannot be converted to JSON."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 17 demonstrates mapping the entity: @Document(collection = \"students\") identifies the class as a MongoDB document entity and maps it directly to the students collection in the database. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 17)"
  },
  {
    "id": "sba301-q296",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "In Spring Data MongoDB entities, which annotation is placed on a field to designate it as the document's primary key mapped to _id in MongoDB?",
    "options": [
      {
        "id": "A",
        "text": "@Key"
      },
      {
        "id": "B",
        "text": "@org.springframework.data.annotation.Id"
      },
      {
        "id": "C",
        "text": "@PrimaryKeyColumn"
      },
      {
        "id": "D",
        "text": "@Index(unique = true)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 17 shows @Id from org.springframework.data.annotation.Id placed above private int id; to denote the unique primary identifier of the document. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 17)"
  },
  {
    "id": "sba301-q297",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "multiple",
    "question": "In MongoConfig.java (slide 18), which two Spring @Bean definitions are configured inside the @Configuration class? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "public MongoClient mongoClient(): Creates and returns the connection to the MongoDB instance using MongoClients.create(\"mongodb+srv://...\")."
      },
      {
        "id": "B",
        "text": "public MongoTemplate mongoTemplate(): Creates and returns a MongoTemplate instance initialized with mongoClient() and target database \"SBA301DB\"."
      },
      {
        "id": "C",
        "text": "public JpaTransactionManager transactionManager(): Configures local SQL Server transactions."
      },
      {
        "id": "D",
        "text": "public ViewResolver internalResourceViewResolver(): Maps JSP views."
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "explanation": "Slide 18 shows the configuration class with beans for MongoClient and MongoTemplate. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 18)"
  },
  {
    "id": "sba301-q298",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "How is the custom query method declared in IStudentRepository.java (slide 19) to find a student document by their email address?",
    "options": [
      {
        "id": "A",
        "text": "public Student searchEmailQuery(String email);"
      },
      {
        "id": "B",
        "text": "public Student findByEmail(String email);"
      },
      {
        "id": "C",
        "text": "public Student selectWhereEmailEquals(String email);"
      },
      {
        "id": "D",
        "text": "public Student getStudentFromDbByEmail(String email);"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 shows the interface: public interface IStudentRepository extends MongoRepository<Student, String> { public Student findByEmail(String email); }. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 19)"
  },
  {
    "id": "sba301-q299",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "single",
    "question": "Consider the execution logic in Main.java (slide 20):\nApplicationContext context = new AnnotationConfigApplicationContext(MongoConfig.class);\nMongoTemplate mongoTemplate = context.getBean(MongoTemplate.class);\nmongoTemplate.dropCollection(Student.class);\nStudent student = new Student(7, \"anh@gmail.com\", \"1234\", \"An\", \"Lam\", 6);\nmongoTemplate.insert(student);\nList<Student> users = mongoTemplate.findAll(Student.class);\nusers.forEach(System.out::println);\nWhat is the effect of calling mongoTemplate.dropCollection(Student.class) prior to insertion?",
    "options": [
      {
        "id": "A",
        "text": "It deletes the Student.java compiled bytecode file from the hard drive."
      },
      {
        "id": "B",
        "text": "It drops the existing students collection in the MongoDB database, ensuring clean state before inserting sample data."
      },
      {
        "id": "C",
        "text": "It rolls back the database to an older snapshot from yesterday."
      },
      {
        "id": "D",
        "text": "It disconnects the network cable from the server."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 20 illustrates calling mongoTemplate.dropCollection(Student.class) to drop the collection associated with Student in MongoDB before inserting a new student. (Source: Chapter 20. Spring Data with MongoDB.pptx, slide 20)"
  },
  {
    "id": "sba301-q300",
    "subjectId": "sba301",
    "topic": "PART 20: Chapter 20. Spring Data with MongoDB.pptx",
    "type": "multiple",
    "question": "What are the key architectural differences between using MongoRepository and using MongoTemplate in Spring Data MongoDB applications? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "MongoRepository provides high-level CRUD and derived query methods with zero boilerplate implementation code."
      },
      {
        "id": "B",
        "text": "MongoTemplate offers fine-grained programmatic control over advanced operations (such as multi-stage aggregation pipelines and atomic updates)."
      },
      {
        "id": "C",
        "text": "MongoRepository can only be used with Microsoft SQL Server, whereas MongoTemplate is used with MongoD"
      },
      {
        "id": "B",
        "text": ""
      },
      {
        "id": "D",
        "text": "Both MongoRepository and MongoTemplate can be utilized harmoniously within the same Spring Boot application."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Slides 4, 6, and 8 explain that MongoRepository provides declarative high-level data access, while MongoTemplate provides lower-level imperative flexibility; both are core components of Spring Data MongoDB and can be combined. (Source: Chapter 20. Spring Data with MongoDB.pptx, slides 4, 6, 8)"
  },
  {
    "id": "sba301-q301",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "What are the two primary objectives outlined for Chapter 21 in building full-stack web applications with Spring Boot and NoSQL?",
    "options": [
      {
        "id": "A",
        "text": "Migrating legacy PHP applications to Node.js and designing mobile views with Flutter."
      },
      {
        "id": "B",
        "text": "Data Management (implementing CRUD operations mapping Java objects to MongoDB via Spring Boot) and User Interface Development (designing a user-friendly interface using Spring MVC with form validation and error handling)."
      },
      {
        "id": "C",
        "text": "Setting up Kubernetes ingress controllers and automating DNS resolution."
      },
      {
        "id": "D",
        "text": "Developing cross-platform desktop GUIs using JavaFX and Hibernate."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 2 explicitly sets two objectives: Data Management using Spring Boot to map Java objects to MongoDB and User Interface Development using Spring MVC. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 2)"
  },
  {
    "id": "sba301-q302",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "multiple",
    "question": "When creating the Spring Boot project in Spring Initializr (or IntelliJ IDEA) as shown in slide 6, which starter dependencies are selected? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Spring Web (for building web applications using Spring MVC)"
      },
      {
        "id": "B",
        "text": "Spring Data MongoDB (for storing and managing data in MongoDB documents)"
      },
      {
        "id": "C",
        "text": "Spring Reactive Web"
      },
      {
        "id": "D",
        "text": "Spring for GraphQL"
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "explanation": "Slide 6 shows adding dependencies: under Web selecting Spring Web, and under NoSQL selecting Spring Data MongoDB. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 6)"
  },
  {
    "id": "sba301-q303",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "In pom.xml (slide 8), which additional dependencies are configured to support rendering JSP views on the embedded Tomcat server?",
    "options": [
      {
        "id": "A",
        "text": "thymeleaf-spring6"
      },
      {
        "id": "B",
        "text": "tomcat-embed-jasper, jakarta.servlet.jsp.jstl, and jakarta.servlet.jsp.jstl-api"
      },
      {
        "id": "C",
        "text": "freemarker"
      },
      {
        "id": "D",
        "text": "vue-router"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 8 shows the Maven configuration adding tomcat-embed-jasper and the Jakarta JSTL dependencies so Spring Boot can compile and render .jsp templates. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 8)"
  },
  {
    "id": "sba301-q304",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "Consider the application.properties configuration shown in slide 15:\nspring.application.name=SpringBootWithMongoDemo\nspring.mvc.view.prefix=/WEB-INF/views/\nspring.mvc.view.suffix=.jsp\nspring.data.mongodb.uri=mongodb+srv://.../SBA301DB?...\nWhat is the purpose of configuring spring.mvc.view.prefix and spring.mvc.view.suffix?",
    "options": [
      {
        "id": "A",
        "text": "To define the database collection name in MongoD"
      },
      {
        "id": "B",
        "text": ""
      },
      {
        "id": "B",
        "text": "To configure the internal InternalResourceViewResolver so that logical view names returned by controllers (e.g., \"home\") resolve to physical files located at /WEB-INF/views/home.jsp."
      },
      {
        "id": "C",
        "text": "To prevent unauthenticated users from seeing the URL bar."
      },
      {
        "id": "D",
        "text": "To set the browser cookie expiration timeout."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 15 and 16 show that setting prefix /WEB-INF/views/ and suffix .jsp allows controller methods returning view name \"home\" to resolve directly to /WEB-INF/views/home.jsp. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 15)"
  },
  {
    "id": "sba301-q305",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "In application.properties (slide 15), how is the application connected to the cloud-hosted MongoDB database?",
    "options": [
      {
        "id": "A",
        "text": "By specifying spring.datasource.url=jdbc:sqlserver://..."
      },
      {
        "id": "B",
        "text": "By providing the cloud connection string using spring.data.mongodb.uri=mongodb+srv://<username>:<password>@sba301.../SBA301DB?..."
      },
      {
        "id": "C",
        "text": "By defining mongodb.socket.host=localhost"
      },
      {
        "id": "D",
        "text": "By creating an XML JNDI resource context tag"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 15 specifies the MongoDB Atlas cluster URI directly in the property spring.data.mongodb.uri using the mongodb+srv:// protocol targeting the database SBA301DB. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 15)"
  },
  {
    "id": "sba301-q306",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "multiple",
    "question": "Which annotations are applied to the main entry class SpringBootWithMongoDemoApplication.java (slide 7) to configure package scanning? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "@SpringBootApplication"
      },
      {
        "id": "B",
        "text": "@ComponentScan({\"sba301.fe.controller\", \"sba301.fe.service\"})"
      },
      {
        "id": "C",
        "text": "@EnableMongoRepositories(basePackages = \"sba301.fe.repository\")"
      },
      {
        "id": "D",
        "text": "@EntityScan(basePackages = \"sba301.fe.pojo\")"
      },
      {
        "id": "E",
        "text": "@EnableWebSecurity"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 7 explicitly shows the main class decorated with @SpringBootApplication, @ComponentScan for controllers and services, @EnableMongoRepositories for repositories, and @EntityScan for domain POJOs. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 7)"
  },
  {
    "id": "sba301-q307",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "In Student.java (slides 10 and 11), how is the domain entity mapped to MongoDB?",
    "options": [
      {
        "id": "A",
        "text": "Annotated with @Table(name = \"students\") and @Column"
      },
      {
        "id": "B",
        "text": "Annotated with @Document(collection = \"students\") at the class level and @Id on the identifier field (private int id;)"
      },
      {
        "id": "C",
        "text": "Annotated with @XmlRootElement"
      },
      {
        "id": "D",
        "text": "Annotated with @CollectionMapping"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 10 and 11 show @Document(collection = \"students\") mapping the class to the MongoDB students collection, with @Id designating private int id as the primary key. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slides 10, 11)"
  },
  {
    "id": "sba301-q308",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "How is the repository interface IStudentRepository.java declared in slide 12?",
    "options": [
      {
        "id": "A",
        "text": "public interface IStudentRepository extends JpaRepository<Student, Integer>"
      },
      {
        "id": "B",
        "text": "public interface IStudentRepository extends MongoRepository<Student, String>"
      },
      {
        "id": "C",
        "text": "public class IStudentRepository implements CrudRepository"
      },
      {
        "id": "D",
        "text": "public abstract class IStudentRepository extends MongoDaoSupport"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 12 shows public interface IStudentRepository extends MongoRepository<Student, String> along with the derived query method public Student findByEmail(String email);. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 12)"
  },
  {
    "id": "sba301-q309",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "multiple",
    "question": "Which methods are declared in IStudentService.java (slide 13) and implemented in StudentService.java (slide 14) to manage student records? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "public List<Student> findAll();"
      },
      {
        "id": "B",
        "text": "public void save(Student student);"
      },
      {
        "id": "C",
        "text": "public void delete(Student student);"
      },
      {
        "id": "D",
        "text": "public Student findByEmail(String email);"
      },
      {
        "id": "E",
        "text": "public Student update(String email, Student updatedStudent);"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slides 13 and 14 show all five service methods handling retrieval (findAll, findByEmail), insertion (save), deletion (delete), and modification (update). (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slides 13, 14)"
  },
  {
    "id": "sba301-q310",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "In HomeController.java (slide 16), which annotation is used on the controller class, and why is @Controller used instead of @RestController?",
    "options": [
      {
        "id": "A",
        "text": "@Controller is used because this controller returns logical view names (e.g., \"home\") that render HTML/JSP templates via Spring MVC ViewResolver, rather than serialized JSON bodies."
      },
      {
        "id": "B",
        "text": "@RestController was deprecated in Spring Boot 3."
      },
      {
        "id": "C",
        "text": "@Controller automatically compiles React JSX files."
      },
      {
        "id": "D",
        "text": "@Controller is mandatory when connecting to MongoDB databases."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 16 shows @Controller public class HomeController. Traditional @Controller returns a ModelAndView or view string to render server-side JSP/HTML templates. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 16)"
  },
  {
    "id": "sba301-q311",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "Consider the showStudent method in HomeController.java (slide 16):\n@GetMapping(\"/\")\npublic ModelAndView showStudent(HttpServletResponse response) {\n    List<Student> studentList = iStudentService.findAll();\n    ModelAndView model = new ModelAndView(\"home\");\n    model.addObject(\"studentList\", studentList);\n    return model;\n}\nWhat does this method do when a user visits http://localhost:8080/?",
    "options": [
      {
        "id": "A",
        "text": "It deletes all students from the MongoDB collection."
      },
      {
        "id": "B",
        "text": "It fetches all students from MongoDB, adds the list to the model under the attribute name \"studentList\", and forwards rendering to /WEB-INF/views/home.jsp."
      },
      {
        "id": "C",
        "text": "It redirects the browser to the MongoDB Atlas dashboard."
      },
      {
        "id": "D",
        "text": "It downloads a CSV spreadsheet of students to the user's computer."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 16 shows that showStudent() calls iStudentService.findAll(), attaches the results as \"studentList\" to a ModelAndView(\"home\"), which renders home.jsp populated with data. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 16)"
  },
  {
    "id": "sba301-q312",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "multiple",
    "question": "In HomeController.java (slide 16), how are form submissions to @RequestMapping(value = \"/manageStudent\") handled? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The action parameter btnManageStudent is retrieved to determine the requested operation (\"add\", \"update\", or \"delete\")."
      },
      {
        "id": "B",
        "text": "Input parameters (txtID, txtEmail, txtPassword, txtFirstName, txtLastName, txtMark) are read from the HttpServletRequest to construct or target a Student instance."
      },
      {
        "id": "C",
        "text": "A switch(type) block delegates execution to save(student), update(email, student), or delete(student)."
      },
      {
        "id": "D",
        "text": "After the action executes, the method returns \"redirect:/\" to reload the refreshed student list."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "Slide 16 displays the complete implementation of manageStudent(): reading parameters, switching on button value, calling service, and redirecting. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 16)"
  },
  {
    "id": "sba301-q313",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "In home.jsp (slide 18), which JSTL tag is used to iterate over the studentList model attribute and display each student in an HTML table row?",
    "options": [
      {
        "id": "A",
        "text": "<c:iterate collection=\"${studentList}\">"
      },
      {
        "id": "B",
        "text": "<c:forEach var=\"student\" items=\"${studentList}\" varStatus=\"STT\">"
      },
      {
        "id": "C",
        "text": "<jsp:repeat items=\"studentList\">"
      },
      {
        "id": "D",
        "text": "<table:loop data=\"${studentList}\">"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 18 shows the JSTL core tag library usage: <c:forEach var=\"student\" items=\"${studentList}\" varStatus=\"STT\"> iterating over the collection to output table cells. (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 18)"
  },
  {
    "id": "sba301-q314",
    "subjectId": "sba301",
    "topic": "PART 21: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx",
    "type": "single",
    "question": "How does the user interface in home.jsp (slide 20) allow users to choose which action to execute when submitting the student form?",
    "options": [
      {
        "id": "A",
        "text": "By selecting options from a native browser alert dialog."
      },
      {
        "id": "B",
        "text": "By providing separate submit buttons sharing the same name btnManageStudent with distinct values (value=\"add\", value=\"update\", value=\"delete\")."
      },
      {
        "id": "C",
        "text": "By sending three simultaneous WebSocket packets."
      },
      {
        "id": "D",
        "text": "By modifying the URL hash fragment in the address bar."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 20 shows three buttons inside the form: <button type=\"submit\" name=\"btnManageStudent\" value=\"add\">Add</button>, value=\"update\", and value=\"delete\". The controller inspects request.getParameter(\"btnManageStudent\"). (Source: Chapter 21. Build Application with Spring Boot and Spring Data (NoSQL).pptx, slide 20)"
  },
  {
    "id": "sba301-q315",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "According to slide 3, how is DevOps fundamentally defined?",
    "options": [
      {
        "id": "A",
        "text": "A proprietary relational database query language created by Oracle."
      },
      {
        "id": "B",
        "text": "A software practice that encourages communication, collaboration, integration, and automation between software development (Dev) and operations (Ops) teams."
      },
      {
        "id": "C",
        "text": "A client-side JavaScript bundling tool used exclusively in frontend frameworks."
      },
      {
        "id": "D",
        "text": "A physical hardware device used to route fiber-optic network packets."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 3 explicitly defines DevOps as \"the practice that encourages communication, collaboration, integration, and automation between software development and operations teams\". (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 3)"
  },
  {
    "id": "sba301-q316",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "multiple",
    "question": "Based on slides 4 and 5, why is Spring Boot considered an ideal framework for DevOps practices and microservices? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Microservice friendly: Easy to create and deploy small, independent services."
      },
      {
        "id": "B",
        "text": "Fast startup: Embedded servers and optimized dependencies reduce startup latency."
      },
      {
        "id": "C",
        "text": "Efficient deployment: Builds self-contained executable JARs or WARs for straightforward deployment."
      },
      {
        "id": "D",
        "text": "Monitoring & management: Built-in support for health checks, metrics, and actuator endpoints."
      },
      {
        "id": "E",
        "text": "Cloud-Native: Seamless integration with modern container and cloud platforms like Kubernetes."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slides 4 and 5 list all five aspects: microservice friendliness, fast startup, self-contained deployment packages, monitoring/health checks, and cloud-native capabilities. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slides 4, 5)"
  },
  {
    "id": "sba301-q317",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "multiple",
    "question": "Which DevOps tools and categories are mapped to Spring Boot workflows in slide 7? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Version Control: Git (GitHub, GitLab, Bitbucket)"
      },
      {
        "id": "B",
        "text": "Continuous Integration (CI): Jenkins, GitLab CI/CD, CircleCI"
      },
      {
        "id": "C",
        "text": "Continuous Delivery (CD): Spinnaker, Argo CD"
      },
      {
        "id": "D",
        "text": "Configuration Management: Ansible, Puppet, Chef"
      },
      {
        "id": "E",
        "text": "Containerization & Orchestration: Docker, Kubernetes"
      },
      {
        "id": "F",
        "text": "Monitoring: Prometheus, Grafana, ELK Stack"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "explanation": "Slide 7 lists each of these tools mapped to their respective operational phases (Version control, CI, CD, Configuration management, Containerization, and Monitoring). (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 7)"
  },
  {
    "id": "sba301-q318",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "In the Continuous Integration (CI) pipeline with Spring Boot (slide 8), what are the core automated stages that occur upon a code commit?",
    "options": [
      {
        "id": "A",
        "text": "Triggering automated builds, executing unit & integration tests, running code quality analysis (e.g., SonarQube), and generating deployable artifacts (JARs/WARs)."
      },
      {
        "id": "B",
        "text": "Printing invoices and mailing physical copies to system users."
      },
      {
        "id": "C",
        "text": "Disabling database transactions and rolling back all git branches."
      },
      {
        "id": "D",
        "text": "Manually installing operating system security patches on developer laptops."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 8 highlights four key elements of CI: Automated Builds (triggered on commit), Unit & Integration Tests (automated test runs), Code Analysis (SonarQube quality checks), and Artifact Generation (deployable JAR/WAR). (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 8)"
  },
  {
    "id": "sba301-q319",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "What is the primary purpose of the spring-boot-devtools module introduced in slide 9?",
    "options": [
      {
        "id": "A",
        "text": "To compile Java code directly into native iOS mobile packages."
      },
      {
        "id": "B",
        "text": "To provide an additional set of development-time tools (like property defaults, automatic restart, and LiveReload) that enhance developer experience and accelerate feedback loops."
      },
      {
        "id": "C",
        "text": "To manage production database cluster backups."
      },
      {
        "id": "D",
        "text": "To encrypt hard drives on developer machines."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 9 states: \"Spring Boot includes an additional set of tools that can make the application development experience a little more pleasant. The spring-boot-devtools module can be included in any project to provide additional development-time features.\" (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 9)"
  },
  {
    "id": "sba301-q320",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "How is spring-boot-devtools declared in Maven's pom.xml as demonstrated in slide 9 and slide 22?",
    "options": [
      {
        "id": "A",
        "text": "<scope>test</scope> with <systemPath>"
      },
      {
        "id": "B",
        "text": "<groupId>org.springframework.boot</groupId> <artifactId>spring-boot-devtools</artifactId> <optional>true</optional>"
      },
      {
        "id": "C",
        "text": "<scope>provided</scope> without groupId"
      },
      {
        "id": "D",
        "text": "<artifactId>spring-boot-starter-cloud</artifactId>"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 9 and 22 explicitly show declaring spring-boot-devtools with <optional>true</optional> so that it is excluded from downstream production repackages. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slides 9, 22)"
  },
  {
    "id": "sba301-q321",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "multiple",
    "question": "Which five core features are provided by Spring Boot DevTools according to slide 10? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Property Defaults"
      },
      {
        "id": "B",
        "text": "Automatic Restart"
      },
      {
        "id": "C",
        "text": "LiveReload"
      },
      {
        "id": "D",
        "text": "Remote Debug Tunneling"
      },
      {
        "id": "E",
        "text": "Remote Update and Restart"
      },
      {
        "id": "F",
        "text": "Automatic SQL Database Table Truncation"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slide 10 lists exactly five features: Property Defaults, Automatic Restart, LiveReload, Remote Debug Tunneling, and Remote Update and Restart. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 10)"
  },
  {
    "id": "sba301-q322",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "What is the primary goal of the Property Defaults feature in DevTools as described in slides 12 and 13?",
    "options": [
      {
        "id": "A",
        "text": "To automatically disable caching mechanisms (such as template engine caching and static resource caching) during local development so changes reflect immediately without manual cache clearing."
      },
      {
        "id": "B",
        "text": "To enforce strict HTTPS encryption on localhost."
      },
      {
        "id": "C",
        "text": "To lock database tables during developer editing."
      },
      {
        "id": "D",
        "text": "To disable all Spring Security filter beans permanently."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slides 12 and 13 explain that Property Defaults primarily focus on disabling caching mechanisms (e.g., Thymeleaf, Freemarker, static CSS/JS) that are beneficial in production but hinder fast iterations during local development. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slides 12, 13)"
  },
  {
    "id": "sba301-q323",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "multiple",
    "question": "According to the table of Property Defaults on slide 14, which properties are automatically set by DevTools during development? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "spring.thymeleaf.cache = false"
      },
      {
        "id": "B",
        "text": "spring.freemarker.cache = false"
      },
      {
        "id": "C",
        "text": "spring.web.resources.chain.cache = false"
      },
      {
        "id": "D",
        "text": "server.error.include-stacktrace = always"
      },
      {
        "id": "E",
        "text": "spring.h2.console.enabled = true"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "explanation": "Slide 14 lists all of these properties as default overrides applied by DevTools to aid debugging and instant asset refreshing. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 14)"
  },
  {
    "id": "sba301-q324",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "If a developer does NOT want DevTools to apply these automatic property defaults, which property can be set in application.properties (slide 14)?",
    "options": [
      {
        "id": "A",
        "text": "spring.devtools.disable-all=true"
      },
      {
        "id": "B",
        "text": "spring.devtools.add-properties = false"
      },
      {
        "id": "C",
        "text": "devtools.cache.override=none"
      },
      {
        "id": "D",
        "text": "spring.boot.production-mode=strict"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 14 explicitly notes: \"If you do not want property defaults to be applied you can set spring.devtools.add-properties = false in your application.properties\". (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 14)"
  },
  {
    "id": "sba301-q325",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "How does the Automatic Restart feature in spring-boot-devtools operate according to slide 19?",
    "options": [
      {
        "id": "A",
        "text": "It monitors directories on the classpath and restarts the application context automatically whenever files on the classpath change."
      },
      {
        "id": "B",
        "text": "It reboots the physical operating system whenever a .java file is saved."
      },
      {
        "id": "C",
        "text": "It drops the database schema and rebuilds tables from scratch on every keystroke."
      },
      {
        "id": "D",
        "text": "It triggers a browser history wipe every 60 seconds."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 19 states: \"Applications that use spring-boot-devtools automatically restart whenever files on the classpath change... By default, any entry on the classpath that points to a directory is monitored for changes.\" (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 19)"
  },
  {
    "id": "sba301-q326",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "In IntelliJ IDEA, why doesn't saving a file (Ctrl+S) immediately trigger DevTools automatic restart by default, and how is it triggered (slides 20 and 21)?",
    "options": [
      {
        "id": "A",
        "text": "IntelliJ does not support DevTools under any circumstances."
      },
      {
        "id": "B",
        "text": "IntelliJ does not automatically compile on save; developers must either trigger Build -> Build Project (Ctrl+F9) or configure IntelliJ's compiler settings to \"Build project automatically\"."
      },
      {
        "id": "C",
        "text": "Developers must restart the computer to update the classpath."
      },
      {
        "id": "D",
        "text": "IntelliJ requires using Gradle instead of Maven."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slides 20 and 21 explain that unlike Eclipse (which compiles on save), IntelliJ requires building the project (Build -> Build Project) or enabling \"Build project automatically\" in Settings along with compiler auto-make options. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slides 20, 21, 23, 24)"
  },
  {
    "id": "sba301-q327",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "multiple",
    "question": "In IntelliJ IDEA, which configuration steps are required to enable hands-free automatic restart with DevTools (slides 23 and 24)? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Check \"Build project automatically\" under Settings -> Build, Execution, Deployment -> Compiler."
      },
      {
        "id": "B",
        "text": "Enable \"Allow auto-make to start even if developed application is currently running\" under Settings -> Advanced Settings."
      },
      {
        "id": "C",
        "text": "Add the spring-boot-devtools dependency to pom.xml."
      },
      {
        "id": "D",
        "text": "Delete the target/ directory manually on every code change."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Slides 21–24 outline the three setup steps: adding spring-boot-devtools, enabling \"Build project automatically\" in Compiler settings, and enabling \"Allow auto-make to start even if developed application is currently running\" in Advanced Settings. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slides 21, 22, 23, 24)"
  },
  {
    "id": "sba301-q328",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "What capability does the LiveReload feature provide when paired with DevTools according to slides 19 and 26?",
    "options": [
      {
        "id": "A",
        "text": "It compiles React components into Java bytecodes."
      },
      {
        "id": "B",
        "text": "It includes an embedded LiveReload server that automatically triggers a browser refresh whenever a static or template resource changes (when paired with a browser extension)."
      },
      {
        "id": "C",
        "text": "It automatically commits and pushes Git branches to GitHub."
      },
      {
        "id": "D",
        "text": "It restarts the remote cloud database cluster."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Slide 19 and 26 explain that DevTools bundles an embedded LiveReload server; when a file changes, it sends a trigger to a LiveReload browser extension to refresh the web page automatically without manual F5 reloading. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slides 19, 26)"
  },
  {
    "id": "sba301-q329",
    "subjectId": "sba301",
    "topic": "PART 22: Chapter 22. Spring Boot - DevOps Tools.pptx",
    "type": "single",
    "question": "Which property can be explicitly set in application.properties to ensure LiveReload is enabled (slide 26)?",
    "options": [
      {
        "id": "A",
        "text": "spring.devtools.livereload.enabled=true"
      },
      {
        "id": "B",
        "text": "server.browser.autorefresh=always"
      },
      {
        "id": "C",
        "text": "spring.livereload.active=1"
      },
      {
        "id": "D",
        "text": "devtools.browser.push=true"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Slide 26 shows setting spring.devtools.livereload.enabled=true (and spring.devtools.restart.enabled=true) in application.properties. (Source: Chapter 22. Spring Boot - DevOps Tools.pptx, slide 26)"
  }
];

export default subject02Questions;
