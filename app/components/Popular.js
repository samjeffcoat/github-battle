import React from 'react'


function LanguagesNav ({selected, onUpdateLanguage}){

  //creating functional component for languages
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Python']

  return (
      <ul className = 'flex-center'>
      {languages.map((language) => (
        <li key = {language}>
        <button
        className = 'btn-clear nav-link'
        // dont have access to this so just destructured and using selected
        style = {language === selected ? { color : 'rgb(187, 46, 31)' } : null}
        onClick = {() => onUpdateLanguage(language)}
        >
        {language}
        </button>
        </li>

        ))}

      </ul>
      )

}

export default class Popular extends React.Component {
  //adding state to our class component with our constructor
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage : 'All'
    }
    // putting this here now when we pass it down to another component.
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }

  render() {
    //destructuring the selected language
    const {selectedLanguage} = this.state

    return (
      <React.Fragment>
      <LanguagesNav
        selected = {selectedLanguage}
        onUpdateLanguage = {this.updateLanguage}

      />
      </React.Fragment>
      )
  }
}