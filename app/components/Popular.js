import React from 'react'

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'Python']
    return (
      <ul className = 'flex-center'>
      {languages.map((language) => (
        <li key = {language}>
        <button
        className = 'btn-clear nav-link'

        style = {language === this.state.selectedLanguage ? { color : 'rgb(187, 46, 31)' } : null}
        onClick = {() => this.updateLanguage(language)}
        >
        {language}
        </button>
        </li>

        ))}

      </ul>
      )
  }
}