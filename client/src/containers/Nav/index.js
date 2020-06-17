import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  componentWillMount() {
    window.removeEventListener('resize', this.handleWidthChange);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWidthChange);
  }

  handleWidthChange = () => {
    const updateWidth = { width: window.innerWidth };
    if (this.state.open && updateWidth.width > 999) {
      updateWidth.open = false;
    }
    this.setState(updateWidth);
  };

  touchTheNav = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    console.log(this.state);
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-2'>
        <Link className='navbar-brand' to='/' content='Google Books' />
        <button
          onClick={this.touchTheNav}
          className='navbar-toggler navbar-toggler-icon'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-label='Toggle navigation'
        />
        <div className={`${this.state.open ? '' : 'collapse '}navbar-collapse`} id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                onClick={this.touchTheNav}
                className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                to='/'
                content='Search'
              />
            </li>
            <li className='nav-item'>
              <Link
                onClick={this.touchTheNav}
                className={window.location.pathname === '/saved' ? 'nav-link active' : 'nav-link'}
                to='/saved'
                content='Saved'
              />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
