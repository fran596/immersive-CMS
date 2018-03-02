/* Validation regex for the port input */
const numberRegexPattern = new RegExp('^[0-9]+$');

const wizardValidator = values => {
  const errors = {};

  /*DB Name validator */
  if (!values.dbName) {
    errors.dbName = 'A database name is required';
  } else if (values.dbName.indexOf(' ') > 0) {
    errors.dbName = "The database name shouldn't contain spaces";
  }


  // /*DB Port validator */
  // if (!numberRegexPattern.test(values.dbPort)) {
  //   errors.dbPort = "The port must be a number";
  // }

  /*Site name validator */
  if (!values.siteName) {
    errors.siteName = 'A site name is required';
  }

  /*Username validator */
  if (!values.username) {
    errors.username = 'A username is required';
  }

  /*Password validator */
  if (!values.password) {
    errors.password = 'A password is required';
  }

  return errors;
};

export default wizardValidator;