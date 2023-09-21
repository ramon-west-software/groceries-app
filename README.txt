simple web app to manage kitchen inventory

Initial Setup

    create server directory
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

        
    create client
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
        configure server proxy
            Add proxy property to package.json to allow the client application to make requests to the server API.
                "proxy": "http://localhost:8080",

    create run script
        navigate back to root project directory
            cd /kitchen-stock
        create or drop-in the run.sh file
        add execution permission
            chmod +x ./run.sh

        
To run the project (both server and client) navigate to the root project directory and run the run script
    ./run.sh