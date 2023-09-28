# Shiny-Octo-Barnacle

# Steps

## run npm init -y to get my terminal ready to bring in the external libraries.

## run npm inquirer@8.2.4 to get the inquirer library version 8.2.4.

## Start by setting consts for both of the libraries (inquirer and fs) which makes them accessible.

## set of an array of objects that allow me to choose which license i would like and what badge is connected with it.

## with inquirer start setting up the prompts and setting up each question and what type of input it will be whether input or list.

## on the list i set my choices as the array.map((option) => option.name) which is checking to see which of the options in the array i chose and placing it hear for later use in the generation of the readme.

## set up the then method with the response as the paramater.

## set up a const with an object of the names i assigned to each question that is going to be asked.

## Then set up a const that is where the read me will have all the items plugged in to the readme.

## I did the title and the license that was chosen at the top of the page.

## Then i set up the description, table of contents, installation, usage, contibution, test instructions, licenses (once again), and questions.

## Then using fs.writeFile i generate the file with the same title as what is entered and console logging if it was generated or if there was an error letting the user know after they are done answering all of the prompts that it has worked or failed.

# Walk Through Video:

##  ![Video Walk Through](./Challenge%209%20Video.webm)