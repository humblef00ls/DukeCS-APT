# APT submission front end
Written in Svelte (using sveltekit), this light and performant frontend can be used to setup APT submissions in a CS course. This app provides a framework similar to coding challenges online such as leetcode, hackerrank, etc. Key features include inbuilt IDE, tags for questions, customizability, dark mode, etc.

## Customization and Configuration
In the file `preconfig.yaml`, change the value of the variables. This should allow a decent amount of theme and color scheme customization. Further, info for each APT can be added here.

## To Run
```
add stuff about preconfig script 

npm i

npm run dev 
```

## Deployment

Sveltekit's output can either be a server or a static build folder (Link to sveltekit documentation) (this project by default is set to the latter). To build:
```
npm run build
```
This static folder can be hosted easily as a JAM-stack application. 

### Further Documentation
Each file has top level comments detailing its use, the files to focus on are `src/index.svelte` and `src/routes/APT/[slug].svelte`. The first is the home page as well as the past submissions page, and the latter is the page for submitting and coding. 

