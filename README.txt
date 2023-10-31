-- ADD STEPS AS NEEDED --

DESCRIPTION:
    Web application to manage grocery inventory.
    This project is intended to help developers learn and implement a tech stack of their choice
        (also to help me stop buying duplicate bags of frozen veggies).

PROJECT STRUCTURE:
    Front-end
        React
            groceries-app/react-client
        Angular 
            groceries-app/react-angular
    Mock Back-end
         Node.js            - Mock data (no DB connection)
            groceries-app/mock-backend
    Back-end         
        Node.js             - MySQL connection
            in another repository, will merge here when API is more flushed out.
        Java Spring Boot    - MySQL Connection
            in another repository, will merge here when API is more flushed out.
    Run scripts
        React + Mock Node.js backend
            groceries-app/run-mock-react.sh
        -- ADD MORE AS NEW TECH STACKS ARE ADDED --
    
RUN:
    I created a script to run both client/server programs in one terminal command.
    To run the script, navigate to the root project directory (.../groceries-app) and run the appropriate shell script.
    './run-react.sh'
    -- ADD NEW SCRIPTS AS NEEDED --
    './run-angular.sh'
    './run-[client].sh'

REQUIREMENTS:
    Node v18.17.1
        "cors": "^2.8.5",
        "express": "^4.18.2"
    React:
        "axios": "^1.5.1",
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    -- ADD NEW DEPENDENCIES AS NEEDED --
    Angular:
        v???



Initial setup - from repository pull

    * Make the run script executable:
        In terminal, navigate to .../groceries-app directory and enter command:
            'chmod +x ./run-react.sh'
            -- (May be different for windows) --

Initial Setup - from scratch (all these steps are unnecessary if you pull from git-repo)
    
    * create server directory
        navigate to the root directory
            cd /kitchen-stock
        create forlder named 'server'
            mkdir server
        navigate to the server directory
            cd server
        initialize node project
            npm init -y 
        install express for http requests
            npm install express
        install nodemon for hot refresh (lets us save and refresh project)
            npm install nodemon -D 
        install cors to allow the client application to make requests to the server API.
            npm install cors

        
    * create client
        navigate back to the root directory  
            cd /kitchen-stock (cd ..)
        initialize vite project 
            npm create vite@latest
                project name: 'client'
                framework: React
                variant: Typescript
            navigate to client directory
                cd client
            install dependencies
                npm install
            install axios for HTTP requests
                npm install axios
        configure server proxy
            Add proxy property to package.json to allow the client application to make requests to the server API.
                "proxy": "http://localhost:8080",

    * create run script
        navigate back to root project directory
            cd /kitchen-stock
        create or drop-in the run.sh file
        add execution permission
            chmod +x ./run.sh