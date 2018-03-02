const wizardAsyncValidator = values => {
  
  return  fetch(`http://localhost:8081/api/wizard/checkDB`)
      .then(response => response.json())
      .then(data => {
          //window.alert(data)
        if (data.includes(values.dbName)) {
            throw  { dbName: 'That database name is taken', _error: 'username-exists' }
            // window.alert('en error')
            // return Promise.reject(error);  
           // return error
           //Promise.reject()
          }
          else{
            //window.alert('en success')
            throw  { dbName: '', _error: '' }
            // Promise.resolve('no error')
            //Promise.reject()
          }
      })
      .catch((error) => error)

};

export default wizardAsyncValidator;