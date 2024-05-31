/*
Coding Steps:

Create a menu app as seen in this week’s video. What you create is up to you as long 
as it meets the following requirements:
    - Use at least one array.
    - Use at least two classes.
    - Your menu should have the options to create, view, and delete elements.
*/

/* 
I will be creating a menu app using prompts to allow me to manage anime 
recommendations. This has some connection to my Week 1 HTML and Week 2 CSS
assignments.
*/

//Created a class called Recommendation that will show the recommended anime title.

class Recommendation {
    constructor(animeTitle) {
        this.animeTitle = animeTitle
    }

    describe() {
        return `${this.animeTitle}`
    }
}

//Created the Menu class, animeRecommendations is an array.

class Menu {
    constructor() {
        this.animeRecommendations = []
        this.selectedAnimeRecommendation = null
    }

    //Adding a method to start my application and show the selections.

    start() {
        let selection = this.showMainMenuOptions()
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createAnimeRecommendation()
                    break
                case '2':
                    this.viewAnimeRecommendations()
                    break
                case '3':
                    this.deleteAnimeRecommendation()
                    break
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }

        alert('Goodbye!')
    }

    //Programmed the methods.
    //Main Menu options to show selections.

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Anime Recommendation
        2) View All Anime Recommendations
        3) Delete Anime Recommendation
        `)
    }

    //Created an anime recommendation that adds to the array animeRecommendations.

    createAnimeRecommendation() {
        let animeTitle = prompt('Enter anime title:')
        this.animeRecommendations.push(new Recommendation(animeTitle))
    }

    //View the list of anime recommendations as a blank string starting at index 0.

    viewAnimeRecommendations() {
        let animeRecommendationsString = ' '
        for (let i = 0; i < this.animeRecommendations.length; i++) {
            animeRecommendationsString += i + ') ' + this.animeRecommendations[i].animeTitle + '\n'
        }
        alert(animeRecommendationsString)
    }

    //Delete an anime recommendation using .splice(index, 1), removing only the indexed element.
    
    deleteAnimeRecommendation() {
        let index = prompt('Enter the index of the anime recommendation you wish to delete:')
        if (index > -1 && index < this.animeRecommendations.length) {
            this.animeRecommendations.splice(index, 1)
        }
    }
}

let menu = new Menu()
menu.start()