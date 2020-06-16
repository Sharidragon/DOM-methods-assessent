const bodyElement = document.querySelector('body')

const mainElement = document.createElement('main')
bodyElement.append(mainElement)

const removeButton = document.createElement('Button');
let buttonText = document.createTextNode('Away with you')
removeButton.append(buttonText)
bodyElement.append(removeButton)

const picture = document.createElement('img')
picture.src = './flowers.jpg'
mainElement.append(picture)

const website = document.createElement('a')
let atext = document.createTextNode('watch this')
website.href = 'https://www.youtube.com/watch?v=LjCzPp-MK48'
website.append(atext)
mainElement.append(website)

removeButton.addEventListener('click', function(){
    mainElement.remove()
    }
)

