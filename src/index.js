const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) =>{
    event.preventDefault()

    //one way to fetch data based off of a user input
    //getting it from the event object
    // console.log(event.target.children[1].value)


    //getting it from the input element directly. Both do the same thing in this case
    const input = document.querySelector('input#searchByID')

    console.log(input.value)


    // fetching data from the server
    fetch(`http://localhost:3000/movies/${input.value}`)
    //converting that data from json format into a readable object
    .then(resp => resp.json())
    //doing anything you need to do with that data that was converted from json
    .then(data => {
        console.log(data)
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')

        title.innerText = data.title
        summary.innerText = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);