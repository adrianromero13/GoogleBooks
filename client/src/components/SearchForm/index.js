import React from 'react';

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='Query'>
          <strong>Book</strong>
        </label>
        <input
          className='form-control'
          id='Title'
          type='text'
          value={q}
          placeholder='Enter Book Title'
          name='q'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='pull-right'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='bnt btn-lg btn-success float-right'
          content='Search'
        />
      </div>
    </form>
  );
}

export default SearchForm;
